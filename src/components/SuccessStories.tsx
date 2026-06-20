"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Compass, CheckCircle } from "lucide-react";

interface SuccessStory {
  id: number;
  name: string;
  role: string;
  country: string;
  visaType: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 1,
    name: "Sneha Nair",
    role: "MSc Candidate, Data Science",
    country: "United Kingdom",
    visaType: "Student Visa (Russell Group)",
    challenge: "Sneha had a 3-year study gap after high school due to medical reasons, making her highly vulnerable to UK Student Visa refusals under strict academic progression policies.",
    solution: "VisaEnsure compiled a meticulous Statement of Purpose (SOP) with medical backing and certificates of online self-education, proving persistent academic drive.",
    outcome: "Visa approved in 7 business days. Sneha is now studying at the University of Edinburgh with a partial scholarship.",
    image: "/images/1.png",
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    role: "Senior Software Architect",
    country: "Australia",
    visaType: "Subclass 190 (PR Pathway)",
    challenge: "Vikram's skilled migration points were on the boundary line, and state sponsorship allocation quotas were closing rapidly for the season.",
    solution: "Calculated points optimization including partner credential points, drafted an extensive skills assessment mapping, and filed for the state nomination within hours of opening.",
    outcome: "Granted New South Wales state nomination. Australia PR approved in less than 6 months.",
    image: "/images/2.png",
  },
  {
    id: 3,
    name: "Dr. Elias Vance",
    role: "BioTech Entrepreneur",
    country: "Germany",
    visaType: "Startup & Founder Visa",
    challenge: "Faced severe bureaucratic bottlenecks proving local economic interest and local job creation criteria required for Berlin startup licenses.",
    solution: "Refined and structured their German business plan. Partnered with a Berlin bio-incubator to secure a formal support letter and verified financial escrow structures.",
    outcome: "Incubator residency and Startup Visa granted. Successfully established BioSphere Labs in Munich.",
    image: "/images/harsha.png", // Fallback to Harsha image for layout uniformity or initials
  },
  {
    id: 4,
    name: "Amara Adebayo",
    role: "Creative Director",
    country: "Canada",
    visaType: "Express Entry (CEC PR)",
    challenge: "Had an active previous visitor visa refusal on file due to administrative documentation discrepancies submitted by a previous, unregistered agency.",
    solution: "Performed a forensic file audit of the previous application, corrected all inconsistencies through formal declarations and legal affidavits, and re-filed under Express Entry.",
    outcome: "Previous refusal resolved, and Express Entry PR invitation (ITA) successfully finalized.",
    image: "/images/1.png",
  },
];

export default function SuccessStories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="success-stories" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              Case Files
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Triumphs Against Complexity
            </h2>
            <p className="text-gray-400 font-light mt-4">
              Real stories of students, professionals, and entrepreneurs who overcame complex documentation barriers to realize their international ambitions.
            </p>
          </div>

          {/* Slider buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-charcoal hover:border-primary transition-all duration-300"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-charcoal hover:border-primary transition-all duration-300"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Netflix style horizontal container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="min-w-[300px] md:min-w-[480px] lg:min-w-[550px] snap-start bg-darkgray/40 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shrink-0 glass-panel"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
                    {story.visaType}
                  </span>
                  <span className="text-sm font-semibold text-accent flex items-center gap-1">
                    <Compass className="w-4 h-4" />
                    {story.country}
                  </span>
                </div>

                {/* Main Challenge / Solution split */}
                <div className="flex flex-col gap-5 mb-8">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 block mb-1">
                      The Challenge
                    </span>
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary block mb-1">
                      Strategic Advisory
                    </span>
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      {story.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Outcome / Client row */}
              <div className="border-t border-white/5 pt-6 mt-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-charcoal">
                    {story.id === 3 ? (
                      <div className="w-full h-full flex items-center justify-center bg-accent text-charcoal font-bold text-sm">
                        EV
                      </div>
                    ) : (
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-cover object-center"
                      />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">{story.name}</span>
                    <span className="text-xs text-gray-500">{story.role}</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-2 max-w-[200px] shrink-0">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider leading-none">
                    Visa Approved
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}
