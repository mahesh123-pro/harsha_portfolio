"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Award, Users, ShieldCheck, MapPin } from "lucide-react";

export default function Hero() {
  const stats = [
    { label: "Experience", value: "14+ Years", icon: Award, color: "text-accent" },
    { label: "Consultations", value: "10,000+", icon: Users, color: "text-white" },
    { label: "Visa Success", value: "95%+", icon: ShieldCheck, color: "text-primary" },
    { label: "Destinations", value: "25+", icon: MapPin, color: "text-accent" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-charcoal">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />

      {/* Animated network grids in the background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent mb-6 w-fit uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            Your Trusted Visa Companion
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-tight tracking-tight text-white mb-6"
          >
            Helping Ambitious People Build Their{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 text-glow">
              Future Across Borders
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300 font-light mb-8 max-w-2xl leading-relaxed"
          >
            <span className="font-semibold text-white">Harish Reddy Jonnalagadda</span>, Founder & CEO of VisaEnsure, empowering students, professionals, entrepreneurs, and families with expert visa, education, and immigration solutions for over 14 years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#booking"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-orange-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-base"
            >
              Book Executive Consultation
              <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#success-stories"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-base"
            >
              Explore Success Stories
            </a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
                    {stat.label}
                  </span>
                </div>
                <span className="text-2xl md:text-3xl font-bold font-serif text-white">
                  {stat.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Portrait Column */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Framed Portrait Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/15 p-3 flex items-center justify-center shadow-2xl"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent">
              <Image
                src="/images/harsha.png"
                alt="Harish Reddy Jonnalagadda - Global Mobility Strategist"
                fill
                priority
                className="object-cover object-center scale-[1.05] hover:scale-100 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>

            {/* Glowing borders ornament */}
            <div className="absolute inset-0 border border-primary/20 pointer-events-none rounded-3xl m-[1px]" />
            <div className="absolute inset-0 border border-accent/10 pointer-events-none rounded-3xl m-[3px]" />
            
            {/* Float badge 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 glass-panel border border-white/15 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                🏆
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">Visa rate</span>
                <span className="text-sm font-bold text-white">95%+ Approved</span>
              </div>
            </motion.div>

            {/* Float badge 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 glass-panel border border-white/15 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                ✈️
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none">network</span>
                <span className="text-sm font-bold text-white">25+ Countries</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Background circle geometries */}
          <div className="absolute -z-10 w-[120%] aspect-square rounded-full border border-white/5 animate-orbit-slow" />
          <div className="absolute -z-10 w-[95%] aspect-square rounded-full border border-primary/5 border-dashed" />
        </div>
      </div>
    </section>
  );
}
