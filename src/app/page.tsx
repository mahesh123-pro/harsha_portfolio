import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTimeline from "@/components/AboutTimeline";
import Expertise from "@/components/Expertise";
import Countries from "@/components/Countries";
import Achievements from "@/components/Achievements";
import SuccessStories from "@/components/SuccessStories";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import VisaEnsureShowcase from "@/components/VisaEnsureShowcase";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Achievements />
        <AboutTimeline />
        <Expertise />
        <Countries />
        <SuccessStories />
        <VisaEnsureShowcase />
        <ThoughtLeadership />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}

