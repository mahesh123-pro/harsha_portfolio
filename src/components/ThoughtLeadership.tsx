"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Mic, Calendar, ChevronRight, ExternalLink, Sparkles } from "lucide-react";

interface FounderInsight {
  id: string;
  title: string;
  summary: string;
  points: string[];
}

const FOUNDER_INSIGHTS: FounderInsight[] = [
  {
    id: "visa-success",
    title: "Visa Success Framework",
    summary: "Over 40% of visa refusals occur due to easily preventable documentation discrepancies. Our framework prevents critical pitfalls:",
    points: [
      "Generic Statements of Purpose: Copying templated SOPs triggers automatic plagiarism alerts in modern visa scrutiny platforms.",
      "Unexplained Study Gaps: Gaps are acceptable, but they must be explained chronologically with verified certifications.",
      "Improper Proof of Funds: Displaying sudden deposits in accounts without proving the legitimate source of capital.",
      "Mismatching Visa Intention: Failing to satisfy the 'GTE' standard by not linking plans to home country opportunities."
    ]
  },
  {
    id: "immigration-insights",
    title: "Immigration Insights",
    summary: "Global mobility is rapidly transitioning into a tech-driven compliance landscape. The next decade will be characterized by:",
    points: [
      "AI-Based Pre-Screener Systems: Embassies are using automated algorithms to parse applications before human review.",
      "Rise of Digital Nomad Schemes: Traditional work permits are supplemented by remote digital residency permits across 40+ countries.",
      "Niche State-Nomination Demands: Focus is shifting from general immigration to region-specific occupation demands.",
      "Stricter Proof of Language Mastery: Higher English/native fluency requirements to counter low workforce integrations."
    ]
  },
  {
    id: "global-careers",
    title: "Global Careers",
    summary: "Securing international employment and Permanent Residency is a marathon. The most efficient pathway involves:",
    points: [
      "Pre-Arrival Target Assessment: Auditing points matrices before relocating to align skills with region demands.",
      "Strategic Education Selection: Choosing degree programs that grant maximum post-study work rights.",
      "Targeted Industrial Experience: Securing employment specifically mapped to high-demand skills shortages.",
      "Dynamic Score Maintenance: Proactively retaking language exams and filing EOIs across multiple states."
    ]
  },
  {
    id: "study-abroad",
    title: "Study Abroad Strategies",
    summary: "Academic migration is the most reliable launchpad for global careers when executed with a long-term commercial mindset:",
    points: [
      "Strategic Course Alignment: Matching your academic background with high-growth international industry projections.",
      "Admissions Pre-Audit: Ensuring your portfolio meets credit transfers and university requirements.",
      "Scholarship Structuring: Tailoring essays to match university endowment priorities to maximize tuition waivers."
    ]
  }
];

interface ResourceItem {
  category: "articles" | "media" | "events" | "blog";
  title: string;
  sub: string;
  date: string;
  badge: string;
  desc: string;
  linkText: string;
}

const RESOURCES: ResourceItem[] = [
  // Blog (Daily Immigration Insights)
  {
    category: "blog",
    title: "Daily Immigration Insights: UK Work Visa Updates",
    sub: "Daily Blog",
    date: "Today",
    badge: "New Insight",
    desc: "A quick update on the latest changes to the UK Skilled Worker minimum salary thresholds and what it means for new applicants.",
    linkText: "Read Today's Blog"
  },
  {
    category: "blog",
    title: "Canada Express Entry Draw Analysis",
    sub: "Daily Blog",
    date: "Yesterday",
    badge: "Analysis",
    desc: "Breaking down the recent category-based draws targeting STEM and healthcare professionals.",
    linkText: "Read Blog"
  },
  // Articles
  {
    category: "articles",
    title: "Navigating the Post-Graduation Work Visa Shakes",
    sub: "Immigration Trends",
    date: "June 2026",
    badge: "Policy Audit",
    desc: "A breakdown of recent work permit adjustments in the UK, Canada, and Australia, and what they mean for active applicants.",
    linkText: "Read Policy Audit"
  },
  {
    category: "articles",
    title: "The Comprehensive Guide to SOP Writing for STEM Degrees",
    sub: "Study Abroad Guides",
    date: "May 2026",
    badge: "Student Kit",
    desc: "How to draft statements that pass AI filtering systems and secure admissions at top university networks.",
    linkText: "Download Guide"
  },
  // Media
  {
    category: "media",
    title: "Episode 48: The Future of Global Mobility with Harish Reddy",
    sub: "Immigration Podcasts",
    date: "June 2026",
    badge: "Podcast",
    desc: "We discuss remote work permits, the EU Blue Card updates, and the scaling of tech hubs in Ireland and Germany.",
    linkText: "Listen to Podcast"
  },
  {
    category: "media",
    title: "Addressing Misinformation in Visa Consulting",
    sub: "Executive Interviews",
    date: "March 2026",
    badge: "Feature",
    desc: "Harish's media feature on driving ethical transparency standards across global student consulting platforms.",
    linkText: "Read Interview Outline"
  },
  // Events
  {
    category: "events",
    title: "Speaking Keynote: Global Mobility Summit 2026",
    sub: "Industry Conferences",
    date: "July 2026",
    badge: "Keynote",
    desc: "Harish will speak on panel discussions outlining cross-border corporate relocation compliance in Singapore.",
    linkText: "Register for Summit"
  },
  {
    category: "events",
    title: "VisaEnsure Annual Study Abroad Seminar 2026",
    sub: "Consultancy Seminars",
    date: "August 2026",
    badge: "Public Event",
    desc: "Interactive session hosting admissions officers from UK Russell Group and Australian Group of Eight institutions.",
    linkText: "Book Free Ticket"
  }
];

export default function ThoughtLeadership() {
  const [activeTab, setActiveTab] = useState<"blog" | "articles" | "media" | "events">("blog");
  const [activeInsight, setActiveInsight] = useState<string>("visa-success");

  const filteredResources = RESOURCES.filter((r) => r.category === activeTab);
  const selectedInsight = FOUNDER_INSIGHTS.find((i) => i.id === activeInsight) || FOUNDER_INSIGHTS[0];

  return (
    <section id="insights" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION 1: FOUNDER INSIGHTS INTEL CONSOLE */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              Direct Advisory
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              Founder's Executive Intelligence
            </h2>
            <p className="text-gray-400 font-light mt-4">
              Strategic briefs straight from the CEO's desk, providing actionable direction on complex global mobility regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Insights Selection Column */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {FOUNDER_INSIGHTS.map((insight) => (
                <button
                  key={insight.id}
                  onClick={() => setActiveInsight(insight.id)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-300 flex items-center justify-between group ${
                    activeInsight === insight.id
                      ? "bg-primary/10 border-primary text-white shadow-lg"
                      : "bg-white/[0.02] border-white/5 text-gray-400 hover:bg-white/[0.04] hover:border-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-sm font-semibold tracking-wide font-serif">
                    {insight.title}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeInsight === insight.id ? "text-primary translate-x-1" : "text-gray-600 group-hover:text-gray-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Selected Insight Display Box */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeInsight}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl glass-panel border border-white/10 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-accent mb-4">
                      <Sparkles className="w-4 h-4 text-accent" />
                      Executive Briefing
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white mb-4">
                      {selectedInsight.title}
                    </h3>
                    
                    <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                      {selectedInsight.summary}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-4 mt-2">
                    {selectedInsight.points.map((pt, i) => {
                      const [label, desc] = pt.split(":");
                      return (
                        <li key={i} className="flex gap-4 items-start">
                          <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            {i + 1}
                          </div>
                          <div>
                            <span className="text-sm font-bold text-white mb-0.5 block">{label}</span>
                            <span className="text-xs text-gray-400 font-light leading-relaxed">{desc}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* SECTION 2: THOUGHT LEADERSHIP LIBRARY HUB */}
        <div className="pt-20 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
              Thought Leadership Hub
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white">
              Publications, Media & Events
            </h3>
            
            {/* Library Category Tabs */}
            <div className="flex justify-center gap-4 mt-8 flex-wrap">
              {(["blog", "articles", "media", "events"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border ${
                    activeTab === cat
                      ? "bg-white text-charcoal border-white"
                      : "bg-white/5 border-white/5 text-gray-400 hover:border-white/10 hover:text-white"
                  }`}
                >
                  {cat === "blog" && <BookOpen className="w-3.5 h-3.5" />}
                  {cat === "articles" && <BookOpen className="w-3.5 h-3.5" />}
                  {cat === "media" && <Mic className="w-3.5 h-3.5" />}
                  {cat === "events" && <Calendar className="w-3.5 h-3.5" />}
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((res, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary">
                      {res.sub}
                    </span>
                    <span className="text-[10px] text-gray-500 font-semibold">{res.date}</span>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded bg-white/5 text-[10px] font-bold text-accent uppercase tracking-wider mb-3">
                    {res.badge}
                  </span>

                  <h4 className="text-lg font-serif font-bold text-white mb-3 leading-snug">
                    {res.title}
                  </h4>
                  
                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
                    {res.desc}
                  </p>
                </div>

                <button className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-primary transition-colors group mt-2 w-fit">
                  {res.badge === "Podcast" ? (
                    <>
                      <Mic className="w-3.5 h-3.5 text-white group-hover:text-primary" />
                      <span>{res.linkText}</span>
                    </>
                  ) : (
                    <>
                      <span>{res.linkText}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
