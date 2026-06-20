"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Globe from "./Globe";
import { GraduationCap, Briefcase, Landmark, ShieldCheck, HelpCircle } from "lucide-react";

interface CountryDetail {
  id: string;
  name: string;
  code: string;
  visas: string[];
  universities: string[];
  workOpportunities: string;
  pathways: string[];
}

const COUNTRY_DATA: Record<string, CountryDetail> = {
  australia: {
    id: "australia",
    name: "Australia",
    code: "AU",
    visas: ["Subclass 500 (Student)", "Subclass 485 (Graduate)", "Subclass 189/190 (PR)"],
    universities: ["Univ. of Melbourne", "Univ. of Sydney", "Australian National Univ.", "UNSW Sydney"],
    workOpportunities: "Up to 2-4 years Post-Study Work rights (depending on degree and location) plus regional bonus extensions.",
    pathways: ["General Skilled Migration (GSM)", "State Nominated (190)", "Regional Nominated (491)"],
  },
  canada: {
    id: "canada",
    name: "Canada",
    code: "CA",
    visas: ["Study Permit", "LMIA Work Permit", "Express Entry FSWP"],
    universities: ["Univ. of Toronto", "Univ. of British Columbia", "McGill Univ.", "Univ. of Waterloo"],
    workOpportunities: "Post-Graduation Work Permit (PGWP) ranging from 1 to 3 years based on course duration.",
    pathways: ["Express Entry (FSW / CEC)", "Provincial Nominee Program (PNP)", "Quebec Skilled Worker"],
  },
  usa: {
    id: "usa",
    name: "United States",
    code: "US",
    visas: ["F-1 (Student)", "H-1B (Skilled Work)", "L-1 (Transfer)", "EB-5 (Investor)"],
    universities: ["Harvard Univ.", "Stanford Univ.", "MIT", "Columbia Univ.", "NYU"],
    workOpportunities: "12-month OPT plus additional 24-month STEM extension for qualified science and tech graduates.",
    pathways: ["Employer-Sponsored Green Card", "EB-2 National Interest Waiver (NIW)", "EB-5 Investor Residency"],
  },
  uk: {
    id: "uk",
    name: "United Kingdom",
    code: "GB",
    visas: ["Student Visa", "Skilled Worker Visa", "High Potential Individual (HPI)"],
    universities: ["Univ. of Oxford", "Univ. of Cambridge", "Imperial College London", "LSE"],
    workOpportunities: "Graduate Route visa offering 2 years of unrestricted work rights (3 years for PhD holders).",
    pathways: ["Skilled Worker sponsorship leading to ILR", "Global Talent Visa", "Innovator Founder Route"],
  },
  germany: {
    id: "germany",
    name: "Germany",
    code: "DE",
    visas: ["Student Visa", "EU Blue Card", "Chancenkarte (Opportunity Card)"],
    universities: ["Technical Univ. of Munich", "LMU Munich", "Heidelberg Univ.", "RWTH Aachen"],
    workOpportunities: "18-month post-graduation job seeker visa. Freedom of movement across Schengen area.",
    pathways: ["EU Blue Card PR pathway (21-27 months)", "Fast-track Naturalization", "Self-Employment Visa"],
  },
  nz: {
    id: "nz",
    name: "New Zealand",
    code: "NZ",
    visas: ["Student Visa", "Accredited Employer Work Visa", "Post-Study Work Visa"],
    universities: ["Univ. of Auckland", "Univ. of Otago", "Univ. of Canterbury"],
    workOpportunities: "1 to 3 years open Post-Study Work rights matching the qualification level completed.",
    pathways: ["Skilled Migrant Category (SMC)", "Green List straight-to-residence", "Work-to-Residence"],
  },
  ireland: {
    id: "ireland",
    name: "Ireland",
    code: "IE",
    visas: ["Stamp 2 (Student)", "Critical Skills Employment Permit", "General Employment Permit"],
    universities: ["Trinity College Dublin", "University College Dublin", "NUI Galway", "UCC"],
    workOpportunities: "Third Level Graduate Scheme providing 12 to 24 months of open job-seeking permissions.",
    pathways: ["Critical Skills Employment Permit to Stamp 4 PR", "Naturalization through residency"],
  },
  singapore: {
    id: "singapore",
    name: "Singapore",
    code: "SG",
    visas: ["Student Pass", "Employment Pass (EP)", "S Pass", "ONE Pass"],
    universities: ["National Univ. of Singapore (NUS)", "Nanyang Technological Univ. (NTU)", "SMU"],
    workOpportunities: "Structured employment criteria matching salary thresholds, with high multinational integration.",
    pathways: ["PR Application via PTS Scheme", "GIP (Global Investor Program)", "Tech.Pass residency"],
  },
  europe: {
    id: "europe",
    name: "Europe (Schengen)",
    code: "EU",
    visas: ["Schengen Business Visa", "National D Visa", "Schengen Job Seeker"],
    universities: ["Sorbonne Univ.", "ETH Zurich", "TU Delft", "KTH Royal Institute"],
    workOpportunities: "Schengen-wide business pathways and state-specific post-study visas across 27+ countries.",
    pathways: ["Golden Visa Investment programs", "Startup Founder permits", "Long-term EU residence status"],
  },
};

export default function Countries() {
  const [selectedCountry, setSelectedCountry] = useState<string>("australia");

  const country = COUNTRY_DATA[selectedCountry];

  return (
    <section id="destinations" className="py-24 bg-darkgray relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              Global Reach
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Client Success Map
            </h2>
            <p className="text-gray-400 font-light mt-4">
              A track record of thousands of successful visa clearances, university placements, and PR acquisitions across the world's most desired destinations.
            </p>
          </div>
          
          {/* Quick country selection filters */}
          <div className="flex flex-wrap gap-2 md:max-w-md">
            {Object.values(COUNTRY_DATA).map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedCountry(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-300 border ${
                  selectedCountry === item.id
                    ? "bg-primary border-primary text-charcoal shadow-[0_0_15px_rgba(255,107,0,0.3)]"
                    : "bg-white/5 border-white/5 text-gray-300 hover:border-white/10 hover:bg-white/10"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 3D WebGL Globe Viewport */}
          <div className="lg:col-span-6 relative aspect-square w-full max-w-[500px] mx-auto bg-charcoal/30 rounded-3xl overflow-hidden border border-white/5 p-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-charcoal/80 pointer-events-none z-10" />
            <Globe />
            {/* Map instructions indicator */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Drag to rotate, select country filters to update metrics</span>
            </div>
          </div>

          {/* Details Side Console */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden"
              >
                {/* Visual country flag watermarker */}
                <div className="absolute top-8 right-8 text-7xl font-bold font-serif opacity-5 select-none text-white">
                  {country.code}
                </div>

                <span className="text-xs uppercase font-bold text-accent tracking-widest mb-2 block">
                  Featured Portal
                </span>
                
                <h3 className="text-3xl font-serif font-black text-white mb-8 flex items-center gap-3">
                  {country.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {/* Visas Card */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 mb-3 text-primary">
                      <ShieldCheck className="w-4 h-4" />
                      <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">Visa Streams</h4>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {country.visas.map((v, i) => (
                        <li key={i} className="text-sm font-semibold text-white">
                          • {v}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Universities Card */}
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 mb-3 text-accent">
                      <GraduationCap className="w-4 h-4" />
                      <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">Partner Networks</h4>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {country.universities.map((uni, i) => (
                        <li key={i} className="text-xs text-gray-300 font-light">
                          • {uni}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Work Horizons Section */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 mb-6">
                  <div className="flex items-center gap-2 mb-3 text-white">
                    <Briefcase className="w-4 h-4" />
                    <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">Post-Study Work Horizon</h4>
                  </div>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {country.workOpportunities}
                  </p>
                </div>

                {/* Immigration Pathways */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <Landmark className="w-4 h-4" />
                    <h4 className="text-xs uppercase font-bold tracking-wider text-gray-400">Settlement Pathways</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {country.pathways.map((path, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-xs text-accent font-medium"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
