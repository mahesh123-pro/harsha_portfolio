"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GraduationCap, Briefcase, UserCheck, Globe, LineChart, Check } from "lucide-react";

interface ExpertiseCard {
  title: string;
  icon: React.ComponentType<any>;
  description: string;
  features: string[];
  color: string;
}

const EXPERTISE_DATA: ExpertiseCard[] = [
  {
    title: "Study Abroad",
    icon: GraduationCap,
    description: "End-to-end guidance for high-achieving students securing entry to prestigious universities worldwide.",
    features: [
      "University Admissions",
      "Country Selection",
      "SOP Guidance",
      "Student Visa Processing",
    ],
    color: "from-orange-500/20 to-amber-500/5",
  },
  {
    title: "Work Abroad",
    icon: Briefcase,
    description: "Sponsorship and independent skilled working pathways designed for corporate professionals and specialists.",
    features: [
      "Work Permits",
      "Skilled Migration",
      "Employer Sponsored Visas",
    ],
    color: "from-blue-500/20 to-indigo-500/5",
  },
  {
    title: "Immigration",
    icon: UserCheck,
    description: "Permanent residency pathways designed to establish long-term futures for families and skilled talent.",
    features: [
      "Permanent Residency",
      "Family Migration",
      "Immigration Planning",
    ],
    color: "from-emerald-500/20 to-teal-500/5",
  },
  {
    title: "Career Counselling",
    icon: LineChart,
    description: "Strategic planning to align international education with long-term global career opportunities.",
    features: [
      "Education Planning",
      "International Career Guidance",
      "Global Opportunities Assessment",
    ],
    color: "from-yellow-500/20 to-orange-500/5",
  },
];

export default function Expertise() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="expertise" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
            Advisory Areas
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Elite Consulting Portfolios
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Navigating complex immigration laws requires extreme precision. We engineer bespoke immigration frameworks across student, skilled, and corporate programs.
          </p>
        </div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {EXPERTISE_DATA.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`rounded-3xl glass-panel glass-panel-hover p-8 relative overflow-hidden flex flex-col justify-between border-t-2 border-t-white/10`}
            >
              {/* Highlight background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 font-light mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Service details listing */}
              <div className="border-t border-white/5 pt-6 mt-4">
                <ul className="flex flex-col gap-3">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex gap-3 items-center">
                      <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-xs text-gray-300 font-light">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
