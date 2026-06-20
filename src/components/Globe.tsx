"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface CountryMarker {
  name: string;
  lat: number;
  lng: number;
}

const COUNTRIES: CountryMarker[] = [
  { name: "India", lat: 20.5937, lng: 78.9629 },
  { name: "Australia", lat: -25.2744, lng: 133.7751 },
  { name: "Canada", lat: 56.1304, lng: -106.3468 },
  { name: "United States", lat: 37.0902, lng: -95.7129 },
  { name: "United Kingdom", lat: 55.3781, lng: -3.436 },
  { name: "Germany", lat: 51.1657, lng: 10.4515 },
  { name: "New Zealand", lat: -40.9006, lng: 174.886 },
  { name: "Ireland", lat: 53.4129, lng: -8.2439 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
];

// Helper to convert lat/lng to 3D Cartesian coordinates on sphere of radius R
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  
  const x = -(radius * Math.sin(phi) * Math.sin(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.cos(theta);
  
  return new THREE.Vector3(x, y, z);
}

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    setLoading(false);

    const width = containerRef.current.clientWidth || 500;
    const height = containerRef.current.clientHeight || 500;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x111111, 0.002);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 320;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    containerRef.current.appendChild(renderer.domElement);

    // Globe Radius
    const R = 90;

    // 4. Globe Sphere (Point cloud)
    const particleCount = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#FF6B00"); // Deep Orange
    const color2 = new THREE.Color("#2A2A2A"); // Gray for dark grid points

    for (let i = 0; i < particleCount; i++) {
      // Golden ratio spacing on sphere for beautiful distribution
      const theta = Math.acos(-1 + (2 * i) / particleCount);
      const phi = Math.sqrt(particleCount * Math.PI) * theta;

      const x = R * Math.sin(theta) * Math.cos(phi);
      const y = R * Math.sin(theta) * Math.sin(phi);
      const z = R * Math.cos(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color nodes based on position - orange clusters, mostly subtle gray nodes
      const mixedColor = Math.random() > 0.85 ? color1 : color2;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const globeParticles = new THREE.Points(geometry, material);
    scene.add(globeParticles);

    // Inner wireframe sphere for visual depth
    const sphereGeo = new THREE.SphereGeometry(R - 0.5, 30, 30);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x1a1a1a,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const innerWireframe = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(innerWireframe);

    // 5. Country Pins & Flight Routes
    const pinsGroup = new THREE.Group();
    const linesGroup = new THREE.Group();
    scene.add(pinsGroup);
    scene.add(linesGroup);

    const pinGeometry = new THREE.SphereGeometry(1.8, 12, 12);
    const indiaPos = latLngToVector3(COUNTRIES[0].lat, COUNTRIES[0].lng, R);

    COUNTRIES.forEach((c) => {
      const pos = latLngToVector3(c.lat, c.lng, R);
      
      // Is India
      const isIndia = c.name === "India";
      
      const pinMaterial = new THREE.MeshBasicMaterial({
        color: isIndia ? 0xF5B942 : 0xFF6B00, // Gold for base country, deep orange for rest
      });
      
      const pin = new THREE.Mesh(pinGeometry, pinMaterial);
      pin.position.copy(pos);
      pinsGroup.add(pin);

      // Create flight route from India to target countries
      if (!isIndia) {
        // Calculate curve path
        const start = indiaPos.clone();
        const end = pos.clone();

        // Control point for curve (elevated above sphere)
        const midPoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        const distance = start.distanceTo(end);
        const elevation = distance * 0.25; // height of route arch
        const normal = midPoint.clone().normalize();
        const control = midPoint.add(normal.multiplyScalar(elevation));

        const curve = new THREE.QuadraticBezierCurve3(start, control, end);
        const points = curve.getPoints(50);
        
        const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        
        // Custom animation parameter for paths
        const lineColors = [];
        const routeColor = new THREE.Color(0xFF6B00);
        const fadeColor = new THREE.Color(0x333333);

        for (let j = 0; j < points.length; j++) {
          const ratio = j / points.length;
          const col = new THREE.Color().lerpColors(fadeColor, routeColor, ratio);
          lineColors.push(col.r, col.g, col.b);
        }

        lineGeo.setAttribute("color", new THREE.Float32BufferAttribute(lineColors, 3));
        
        const lineMat = new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.6,
          linewidth: 1.5,
        });

        const line = new THREE.Line(lineGeo, lineMat);
        linesGroup.add(line);
      }
    });

    // 6. Interactive Drag & Rotate
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const rotationSpeed = 0.003;

    // Inertia variables
    let targetRotationX = 0;
    let targetRotationY = 0.15; // Initial tilt

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      targetRotationY += deltaX * rotationSpeed;
      targetRotationX += deltaY * rotationSpeed;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    // Attach mouse/touch events to the renderer's DOM element directly
    const dom = renderer.domElement;
    dom.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Style DOM canvas
    dom.style.cursor = "grab";
    dom.addEventListener("mousedown", () => { dom.style.cursor = "grabbing"; });
    dom.addEventListener("mouseup", () => { dom.style.cursor = "grab"; });

    // 7. Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 8. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth inertia rotation
      globeParticles.rotation.y += (targetRotationY - globeParticles.rotation.y) * 0.05;
      globeParticles.rotation.x += (targetRotationX - globeParticles.rotation.x) * 0.05;
      
      pinsGroup.rotation.y = globeParticles.rotation.y;
      pinsGroup.rotation.x = globeParticles.rotation.x;

      linesGroup.rotation.y = globeParticles.rotation.y;
      linesGroup.rotation.x = globeParticles.rotation.x;
      innerWireframe.rotation.y = globeParticles.rotation.y;
      innerWireframe.rotation.x = globeParticles.rotation.x;

      // Slow auto rotation when user is not interacting
      if (!isDragging) {
        targetRotationY += 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      dom.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      
      if (containerRef.current && renderer.domElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }
      
      scene.clear();
      geometry.dispose();
      material.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {loading && (
        <div className="absolute flex flex-col items-center justify-center text-primary gap-3">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-light text-gray-400">Loading Global Infrastructure...</span>
        </div>
      )}
      <div ref={containerRef} className="w-full h-full min-h-[350px] md:min-h-[500px]" />
    </div>
  );
}
