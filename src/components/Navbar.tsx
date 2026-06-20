"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Globe, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Destinations", href: "#destinations" },
    { name: "VisaEnsure", href: "#visaensure" },
    { name: "Insights", href: "#insights" },
  ];

  return (
    <div className="w-full flex justify-center absolute top-4 sm:top-6 z-50 px-4 pointer-events-none">
      <nav
        className={`w-full max-w-6xl rounded-full pointer-events-auto transition-all duration-500 ${
          scrolled
            ? "bg-white/80 border border-gray-200/50 py-2 px-6 sm:px-8 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            : "bg-white/95 py-2.5 px-6 sm:px-8 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 backdrop-blur-md"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group px-2 py-1 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
        >
          <div className="flex items-center gap-2">
            <Image 
              src="/images/globe_image_cropped.png" 
              alt="VisaEnsure Globe Logo" 
              width={32} 
              height={32} 
              priority
              className="w-7 h-7 md:w-8 md:h-8 object-contain transition-transform duration-500 group-hover:rotate-12" 
            />
            <div className="h-5 w-[1px] bg-charcoal/15 self-center" />
            <div className="flex flex-col text-left">
              <Image 
                src="/images/visaensure_cropped.png" 
                alt="VisaEnsure Logo Text" 
                width={122} 
                height={18} 
                priority
                className="h-4.5 md:h-5 w-auto object-contain" 
              />
              <span className="text-[7px] tracking-widest text-charcoal/80 uppercase font-bold mt-0.5 leading-none">
                Your Trusted Visa Companion
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="flex items-center bg-gray-50/50 p-1.5 rounded-full border border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-charcoal hover:bg-white px-4 py-1.5 rounded-full hover:shadow-[0_2px_8px_rgb(0,0,0,0.04)] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="w-2"></div>

          {/* Consultation CTA */}
          <a
            href="#booking"
            className="flex items-center gap-2 bg-charcoal text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-charcoal/90 hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <PhoneCall className="w-4 h-4" />
            Book Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-600 hover:text-primary p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white border-l border-gray-200 z-40 transform transition-transform duration-500 ease-out flex flex-col justify-between py-24 px-8 lg:hidden ${
          isOpen ? "translate-x-0 shadow-2xl shadow-black/20" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-primary border-b border-gray-100 pb-2 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-gradient-to-r from-primary to-orange-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(255,107,0,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Book Consultation
          </a>
          <span className="text-center text-[10px] text-gray-500 tracking-widest uppercase mt-4">
            Your Trusted Visa Companion
          </span>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm transition-opacity duration-300 pointer-events-auto"
        />
      )}
      </nav>
    </div>
  );
}
