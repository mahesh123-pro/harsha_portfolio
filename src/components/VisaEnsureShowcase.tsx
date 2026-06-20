"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Award, Milestone, GraduationCap, CheckCircle2 } from "lucide-react";

interface TechFeature {
  title: string;
  icon: React.ComponentType<any>;
  desc: string;
}

const TECH_FEATURES: TechFeature[] = [
  {
    title: "AI Compliance Pre-Audits",
    icon: Cpu,
    desc: "Custom pre-screening systems analyze application datasets against current country-specific criteria prior to embassy submission.",
  },
  {
    title: "Secure Document Vault",
    icon: ShieldCheck,
    desc: "Enables secure upload, encryption, and verification of confidential financial statements and academic records.",
  },
  {
    title: "Real-Time Case Tracking",
    icon: Milestone,
    desc: "Provides clients with complete step-by-step transparency over university applications, visa logging, and biometric scheduling.",
  },
];

interface AwardItem {
  title: string;
  year: string;
  issuer: string;
  desc: string;
}

const AWARDS: AwardItem[] = [
  {
    title: "Consultancy Excellence Award",
    year: "2025",
    issuer: "Global Mobility Consortium",
    desc: "Recognized for pioneering transparent advisory practices and sustaining a 95%+ visa success rate.",
  },
  {
    title: "Client Choice Award",
    year: "2024",
    issuer: "Immigration Excellence Forum",
    desc: "Awarded based on public satisfaction ratings, reviews, and complex case resolution histories.",
  },
  {
    title: "Education Partnership Award",
    year: "2023",
    issuer: "International Student Network",
    desc: "Honored for outstanding facilitation of global university relationships and candidate preparedness.",
  },
];

export default function VisaEnsureShowcase() {
  return (
    <section id="visaensure" className="py-24 bg-darkgray relative overflow-hidden">
      {/* Background glowing rings */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full border border-primary/5 -translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main VisaEnsure Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Flagship Enterprise
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              VisaEnsure: Redefining Mobility
            </h2>
            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed mb-6">
              VisaEnsure was built to dismantle traditional consulting opacity. Today, VisaEnsure operates as a tech-enabled, highly compliant global visa engine, connecting thousands of applicants directly to university networks and career pathways.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex gap-4 items-start">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-white block text-sm">500+ Partner Institutions</span>
                  <span className="text-xs text-gray-400 font-light">Direct admissions pipelines into premier global universities.</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-white block text-sm">Transparent Fixed Pricing</span>
                  <span className="text-xs text-gray-400 font-light">No hidden retainers, commissions, or back-channel transaction fees.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Platform Highlights */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-8 rounded-3xl glass-panel border border-white/10 relative">
              <span className="text-xs uppercase font-bold text-accent tracking-widest mb-6 block">
                Proprietary Compliance Infrastructure
              </span>
              
              <div className="flex flex-col gap-6">
                {TECH_FEATURES.map((feat, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-primary flex items-center justify-center shrink-0">
                      <feat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">{feat.title}</h4>
                      <p className="text-xs text-gray-400 font-light leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Awards & Recognition Sub-block */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              Accreditation
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white">
              Awards & Executive Recognition
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AWARDS.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-3xl glass-panel border border-white/5 flex flex-col justify-between items-center text-center relative group overflow-hidden"
              >
                {/* Glowing ornament */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 border border-accent/20 group-hover:scale-105 transition-transform duration-300">
                    <Award className="w-6 h-6 text-accent" />
                  </div>

                  <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">
                    {award.year}
                  </span>
                  
                  <h4 className="text-lg font-serif font-bold text-white mb-2">
                    {award.title}
                  </h4>
                  
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold block mb-4">
                    Issued by: {award.issuer}
                  </span>

                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                    {award.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
