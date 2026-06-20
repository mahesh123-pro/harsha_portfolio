"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Compass, Eye, TrendingUp, Handshake, Award, UsersRound, Target, BookOpen, ShieldCheck, Globe } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2012",
    title: "The Beginning",
    description: "Started as a career counselor helping students make better education decisions and navigating complex university admissions.",
    icon: Compass,
  },
  {
    year: "2015",
    title: "Expanding Horizons",
    description: "Expanded expertise into international education and visa consulting, identifying massive gaps in transparency and honest guidance.",
    icon: Eye,
  },
  {
    year: "2018",
    title: "Founding VisaEnsure",
    description: "Built VisaEnsure to simplify complex visa processes and provide transparent guidance for aspiring global citizens.",
    icon: TrendingUp,
  },
  {
    year: "2021",
    title: "Standardizing Success",
    description: "Created standardized visa processes and built partnerships with global universities and institutions, navigating complex pandemic-era mobility.",
    icon: Handshake,
  },
  {
    year: "2024",
    title: "Global Platform",
    description: "Grew VisaEnsure from a consulting service into a global visa platform, helping thousands of applicants worldwide.",
    icon: Globe,
  },
  {
    year: "Present",
    title: "Global Mobility Authority",
    description: "Recognized as a premier Global Mobility Strategist, continuing to architect international opportunities for professionals, entrepreneurs, and families.",
    icon: Award,
  },
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const beliefs = [
    { title: "Honest Guidance", desc: "Every applicant deserves honest guidance. We never fabricate hope.", icon: ShieldCheck },
    { title: "Transparency", desc: "Transparency builds trust. Our processes are completely open to our clients.", icon: Eye },
    { title: "Proper Planning", desc: "Success begins with proper planning. Strategic foresight is our core advantage.", icon: Target },
    { title: "Accessibility", desc: "International opportunities should be accessible to everyone with the ambition to try.", icon: Globe },
  ];

  return (
    <section id="about" className="py-24 bg-darkgray relative overflow-hidden">
      {/* Background glow ornaments */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Personal Brand Statement Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent mb-6 uppercase tracking-widest"
            >
              Personal Brand Statement
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight mb-6"
            >
              "For more than a decade, I have helped individuals turn international ambitions into reality through strategic visa consulting, education guidance, and immigration planning."
            </motion.h2>
            <p className="text-gray-400 font-light text-base leading-relaxed">
              VisaEnsure, under Harish Reddy's vision, has modernized migration strategy. By integrating compliance protocols with candidate profiles, we architect reliable pathways for professionals, students, and families.
            </p>
          </div>

          {/* Interactive Brand Image Container */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-white/15 p-2 shadow-2xl"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-charcoal">
                <Image
                  src="/images/harsha.png"
                  alt="Harish Reddy Jonnalagadda"
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Subtle gradient overlay to make text/UI around it pop and give a premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Founder Story */}
        <div className="mb-24 max-w-4xl mx-auto">
          {/* The Story */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">The Beginning</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                I started my journey as a career counselor, dedicating myself to helping students make better, more informed education decisions. I quickly realized that university admissions were only half the battle.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-accent mb-3">The Growth</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Witnessing the anxiety candidates faced with global mobility, I expanded my expertise into international education, comprehensive visa consulting, and long-term immigration planning.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">The Vision</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                I built VisaEnsure to simplify these complex visa processes. My ultimate vision is to provide completely transparent, strategic guidance for aspiring global citizens—eliminating guesswork and securing futures.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Philosophy & Leadership Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Philosophy */}
          <div className="p-10 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold text-white mb-8">What I Believe</h3>
            <div className="flex flex-col gap-6">
              {beliefs.map((b, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">{b.title}</h4>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="p-10 rounded-3xl glass-panel border border-white/10 relative overflow-hidden bg-gradient-to-br from-charcoal to-darkgray">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-tr-full pointer-events-none" />
            <h3 className="text-3xl font-serif font-bold text-white mb-8">Building VisaEnsure</h3>
            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
              <p>
                As the Founder & CEO, my focus has been entirely on growing VisaEnsure from an advisory service into a robust, global visa platform.
              </p>
              <p>
                We achieved this by creating highly standardized visa processes and stringent file-auditing systems that eliminate the common errors leading to visa rejections.
              </p>
              <p>
                Today, through building exclusive partnerships with top-tier universities and global institutions, my team and I have successfully helped thousands of applicants worldwide realize their international dreams.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-white tracking-wider uppercase">Standardized Excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <UsersRound className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-white tracking-wider uppercase">Global Partnerships</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founder's Journey Timeline */}
        <div ref={containerRef} className="pt-16 pb-8 border-t border-white/5">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">2012 → Present</span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Founder's Journey</h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
              <motion.div
                style={{ scaleY, originY: 0 }}
                className="w-full h-full bg-gradient-to-b from-primary via-accent to-primary"
              />
            </div>

            <div className="flex flex-col gap-12 relative z-10">
              {TIMELINE_DATA.map((item, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="hidden md:block w-1/2" />

                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-charcoal border-2 border-primary/40 flex items-center justify-center shadow-lg text-primary z-20 group">
                      <item.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                    >
                      <div className="p-6 rounded-2xl glass-panel glass-panel-hover text-left relative">
                        <div
                          className={`hidden md:block absolute top-6 w-3 h-3 bg-charcoal/80 border-t border-r border-white/10 rotate-45 ${
                            isEven ? "-right-1.5 border-t-white/10 border-r-white/10" : "-left-1.5 rotate-[225deg]"
                          }`}
                        />
                        
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-3">
                          {item.year}
                        </span>
                        
                        <h4 className="text-lg font-bold text-white mb-2 font-serif">
                          {item.title}
                        </h4>
                        
                        <p className="text-sm text-gray-300 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
