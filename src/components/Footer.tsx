"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, Linkedin, Instagram, MapPin, ArrowUp, Globe } from "lucide-react";

interface OfficeLocation {
  city: string;
  role: string;
  address: string;
  phone: string;
  coords: { x: number; y: number }; // Relative percentage coordinates for the world map overlay
}

const OFFICES: OfficeLocation[] = [
  {
    city: "Hyderabad (HQ)",
    role: "VisaEnsure Global Headquarters",
    address: "Level 4, Executive Towers, Madhapur, Hyderabad, India",
    phone: "+91 40 4567 8900",
    coords: { x: 67, y: 55 },
  },
  {
    city: "London",
    role: "UK & European Affiliate Desk",
    address: "88 Kingsway, Holborn, London, WC2B 6AA, United Kingdom",
    phone: "+44 20 7946 0958",
    coords: { x: 47, y: 35 },
  },
  {
    city: "Sydney",
    role: "Oceania Consulting Desk",
    address: "Suite 12, George St, Sydney, NSW 2000, Australia",
    phone: "+61 2 9876 5432",
    coords: { x: 88, y: 80 },
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Contact Coordinates & Map Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Contact coordinates column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                Contact Coordinates
              </span>
              <h3 className="text-3xl font-serif font-bold text-white mb-6">
                Establish Your Global Legacy
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                Ready to review complex immigration cases or corporate employee mobility transfers? Get in touch via direct email or schedule a file audit at our offices.
              </p>

              {/* Action link coordinates */}
              <div className="flex flex-col gap-5 mb-8">
                <a
                  href="mailto:harish@visaensure.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-1">Direct Email</span>
                    <span className="text-sm font-semibold">harish@visaensure.com</span>
                  </div>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-1">Consulting Phone</span>
                    <span className="text-sm font-semibold">+91 98765 43210</span>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary flex items-center justify-center text-gray-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-primary hover:text-primary flex items-center justify-center text-gray-400 transition-colors"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive World Map & Hub markers */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[2/1] rounded-3xl bg-darkgray/30 border border-white/5 p-4 overflow-hidden shadow-inner flex items-center justify-center">
              
              {/* Clean abstract SVG world map outline */}
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full opacity-20 filter grayscale"
                fill="currentColor"
                stroke="none"
              >
                <path d="M150,150 Q180,120 220,130 T280,180 T350,160 T390,220 T420,180 T480,240 T520,200 T600,280 T680,220 T720,260 T800,200 T850,250 T900,180 L950,220 L980,170 L950,300 L900,320 L850,390 L800,420 L760,380 L700,410 L650,350 L600,380 L550,320 L500,360 L450,280 L400,320 L350,300 L300,380 L250,320 L200,300 L120,280 L80,250 Z" />
                <circle cx="250" cy="180" r="40" />
                <circle cx="500" cy="220" r="50" />
                <circle cx="750" cy="300" r="60" />
                <circle cx="820" cy="400" r="30" />
              </svg>

              {/* Glowing office markers */}
              {OFFICES.map((loc, idx) => (
                <div
                  key={idx}
                  className="absolute group/marker"
                  style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                >
                  {/* Ping effect */}
                  <span className="absolute -left-2 -top-2 w-4.5 h-4.5 rounded-full bg-primary/40 animate-ping pointer-events-none" />
                  
                  {/* Pin Dot */}
                  <div className="w-2.5 h-2.5 rounded-full bg-primary border border-white cursor-pointer relative z-10" />

                  {/* Marker Popup Tooltip */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-44 p-3 rounded-xl bg-charcoal border border-white/10 text-center opacity-0 pointer-events-none group-hover/marker:opacity-100 transition-all duration-300 shadow-xl z-20">
                    <span className="text-[9px] text-accent uppercase font-bold tracking-wider block mb-0.5">
                      {loc.role}
                    </span>
                    <span className="text-xs font-bold text-white block mb-1">
                      {loc.city}
                    </span>
                    <span className="text-[10px] text-gray-400 font-light block leading-none">
                      {loc.phone}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Directory details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {OFFICES.map((loc, idx) => (
                <div key={idx} className="flex gap-3 text-left">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{loc.city}</h4>
                    <p className="text-[11px] text-gray-400 font-light leading-snug mb-1">
                      {loc.address}
                    </p>
                    <span className="text-[10px] font-semibold text-accent block">{loc.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Brand Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 bg-white/95 px-4 py-2 rounded-xl border border-white/10 shadow-sm">
            <Image 
              src="/images/globe_image_cropped.png" 
              alt="VisaEnsure Globe Logo" 
              width={28} 
              height={28} 
              className="w-7 h-7 object-contain" 
            />
            <div className="h-5 w-[1px] bg-charcoal/15" />
            <div className="flex flex-col text-left">
              <Image 
                src="/images/visaensure_cropped.png" 
                alt="VisaEnsure Logo Text" 
                width={95} 
                height={14} 
                className="h-3.5 w-auto object-contain" 
              />
              <span className="text-[8px] tracking-widest text-charcoal/60 uppercase font-bold mt-0.5 leading-none">
                Your Trusted Visa Companion
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} VisaEnsure. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:text-primary flex items-center justify-center text-gray-400 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
