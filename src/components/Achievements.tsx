"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Clock, CheckCircle, Earth, Landmark, HeartHandshake, GraduationCap, ShieldCheck } from "lucide-react";

interface AchievementItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ComponentType<any>;
  color: string;
}

const ACHIEVEMENTS: AchievementItem[] = [
  { label: "Consulting Practice", value: 14, suffix: "+ Years", icon: Clock, color: "text-primary" },
  { label: "Successful Clients Placed", value: 10000, suffix: "+ Cases", icon: Trophy, color: "text-accent" },
  { label: "Audit Visa Success", value: 95, suffix: "% Rate", icon: CheckCircle, color: "text-white" },
  { label: "Global Destination Network", value: 25, suffix: "+ Countries", icon: Earth, color: "text-accent" },
  { label: "Academic Partner Institutions", value: 500, suffix: "+ Universities", icon: Landmark, color: "text-primary" },
  { label: "Highly Satisfied Reviews", value: 4500, suffix: "+ Reviews", icon: HeartHandshake, color: "text-white" },
];

const SIGNATURE_ACHIEVEMENTS = [
  {
    title: "Visa Excellence",
    description: "Successfully guided thousands of visa applications with precision and a near-perfect success rate.",
    icon: Trophy,
  },
  {
    title: "Education Impact",
    description: "Supported thousands of ambitious students in accessing prestigious global education opportunities.",
    icon: GraduationCap,
  },
  {
    title: "Immigration Expertise",
    description: "Architected solutions for complex immigration, corporate relocation, and family migration cases.",
    icon: Landmark,
  },
  {
    title: "Industry Leadership",
    description: "Recognized as a trusted, authoritative Global Mobility Strategist in visa consulting.",
    icon: ShieldCheck,
  },
];

function Counter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    
    const timer = setInterval(() => {
      start += 1;
      const progress = start / totalSteps;
      const currentCount = Math.floor(end * (progress * (2 - progress)));
      
      setCount(currentCount);

      if (start >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span ref={elementRef} className="tabular-nums">
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  return (
    <section className="py-24 bg-charcoal border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Grid of counter statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-3xl glass-panel flex flex-col items-center text-center justify-center min-h-[160px] border border-white/5 hover:border-primary/20 transition-all duration-300 relative group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>

              <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-white mb-2 tracking-tight">
                <Counter value={item.value} suffix={item.suffix} />
              </span>

              <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest text-gray-400">
                {item.label}
              </span>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-[40%] rounded-t-full" />
            </motion.div>
          ))}
        </div>

        {/* Signature Achievements */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">Premium Milestones</span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Signature Achievements</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SIGNATURE_ACHIEVEMENTS.map((achieve, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-primary/30 transition-all duration-300 flex items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                <achieve.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col text-left">
                <h4 className="text-xl font-bold font-serif text-white mb-2">{achieve.title}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{achieve.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
