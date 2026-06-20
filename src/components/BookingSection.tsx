"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Calendar as CalendarIcon, MessageCircle, Send, CheckCircle2, Phone, Mail, Clock } from "lucide-react";

// Mock available timeslots
const TIMESLOTS = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"];

export default function BookingSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Australia",
    visaType: "Student Visa",
    message: "",
  });

  // Calculate available days (current day and next 4 days, skipping weekends)
  const getAvailableDays = () => {
    const days = [];
    const date = new Date();
    let count = 0;
    while (count < 5) {
      const day = date.getDay();
      if (day !== 0 && day !== 6) {
        days.push({
          dayNum: date.getDate(),
          dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
          fullDate: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
        });
        count++;
      }
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const availableDays = getAvailableDays();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#FF6B00", "#F5B942", "#FFFFFF"],
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    // Simulate successful form submission
    setFormSubmitted(true);
    triggerConfetti();
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) {
      alert("Please provide your name and email.");
      return;
    }
    setBookingConfirmed(true);
    triggerConfetti();
  };

  const restartForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "Australia",
      visaType: "Student Visa",
      message: "",
    });
    setFormSubmitted(false);
  };

  const restartBooking = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingConfirmed(false);
    setBookingName("");
    setBookingEmail("");
  };

  return (
    <section id="booking" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background visual effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
            Ask Harish Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Consult with Harish Reddy
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg">
            Speak directly with Harish or his senior strategy team to map out your international pathway. Choose between direct file reviews or secure strategy consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: INTENT INTAKE FORM */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="p-8 rounded-3xl glass-panel border border-white/10 flex-1 flex flex-col justify-between relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">Direct File Assessment</h3>
                      <p className="text-xs text-gray-400 font-light mb-8">
                        Submit your details to request a custom eligibility audit directly from Harish's strategy team.
                      </p>

                      <form onSubmit={handleFormSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <label className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1.5">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Vikram Malhotra"
                              className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-gray-600 text-sm focus:border-primary/50 focus:outline-none transition-colors"
                            />
                          </div>
                          <div className="flex flex-col">
                            <label className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1.5">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="vikram@domain.com"
                              className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-gray-600 text-sm focus:border-primary/50 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1.5">
                            Phone Number (WhatsApp Preferred) *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-gray-600 text-sm focus:border-primary/50 focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <label className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1.5">
                              Target Destination
                            </label>
                            <select
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-sm focus:border-primary/50 focus:outline-none transition-colors"
                            >
                              <option value="Australia" className="bg-charcoal">Australia</option>
                              <option value="Canada" className="bg-charcoal">Canada</option>
                              <option value="United States" className="bg-charcoal">United States</option>
                              <option value="United Kingdom" className="bg-charcoal">United Kingdom</option>
                              <option value="Germany" className="bg-charcoal">Germany</option>
                              <option value="New Zealand" className="bg-charcoal">New Zealand</option>
                              <option value="Ireland" className="bg-charcoal">Ireland</option>
                              <option value="Singapore" className="bg-charcoal">Singapore</option>
                              <option value="Europe" className="bg-charcoal">Europe (Schengen)</option>
                            </select>
                          </div>
                          <div className="flex flex-col">
                            <label className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1.5">
                              Visa Category
                            </label>
                            <select
                              name="visaType"
                              value={formData.visaType}
                              onChange={handleInputChange}
                              className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-sm focus:border-primary/50 focus:outline-none transition-colors"
                            >
                              <option value="Student Visa" className="bg-charcoal">Student Visas</option>
                              <option value="Work Visa" className="bg-charcoal">Work Visas</option>
                              <option value="PR Pathway" className="bg-charcoal">PR & Immigration</option>
                              <option value="Business/Startup" className="bg-charcoal">Business / Startup Visas</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1.5">
                            Additional Case Information
                          </label>
                          <textarea
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Detail any academic history, study gaps, or specific goals..."
                            className="px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder-gray-600 text-sm focus:border-primary/50 focus:outline-none transition-colors resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-orange-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 text-sm cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          Submit Assessment File
                        </button>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-6 border border-primary/30">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">File Submitted Successfully</h3>
                    <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed mb-8">
                      Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our core compliance team will audit your criteria and reach back via <span className="font-semibold text-white">{formData.email}</span> within 24 hours.
                    </p>
                    <button
                      onClick={restartForm}
                      className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Submit Another Case File
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT COLUMN: CALENDLY SCHEDULER WIDGET */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="p-8 rounded-3xl glass-panel border border-white/10 flex-1 flex flex-col justify-between relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!bookingConfirmed ? (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-2">Book Strategy Consultation</h3>
                      <p className="text-xs text-gray-400 font-light mb-8">
                        Reserve a direct 15-minute consultation slot with Harish or a Senior Strategist.
                      </p>

                      {/* Day Picker */}
                      <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-3 block">
                        Select Consulting Date
                      </span>
                      <div className="grid grid-cols-5 gap-2.5 mb-6">
                        {availableDays.map((day, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setSelectedDate(idx);
                              setSelectedTime(null);
                            }}
                            className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all duration-300 ${
                              selectedDate === idx
                                ? "bg-primary/20 border-primary text-white"
                                : "bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/10 hover:text-white"
                            }`}
                          >
                            <span className="text-[10px] uppercase tracking-wider font-semibold block mb-0.5">
                              {day.dayName}
                            </span>
                            <span className="text-base font-bold font-serif block">{day.dayNum}</span>
                          </button>
                        ))}
                      </div>

                      {/* Time slot picker */}
                      {selectedDate !== null && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-8"
                        >
                          <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-3 block">
                            Available Slots on {availableDays[selectedDate].fullDate}
                          </span>
                          <div className="grid grid-cols-2 gap-3">
                            {TIMESLOTS.map((time, idx) => (
                              <button
                                key={idx}
                                onClick={() => setSelectedTime(time)}
                                className={`py-3 px-4 rounded-xl border text-sm font-semibold tracking-wide transition-all duration-300 ${
                                  selectedTime === time
                                    ? "bg-accent/20 border-accent text-white"
                                    : "bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/10 hover:text-white"
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Final step confirmation */}
                    {selectedTime && (
                      <motion.form
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onSubmit={handleBookingSubmit}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mt-4 space-y-4 text-left"
                      >
                        <div className="flex justify-between items-center text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                          <span className="flex items-center gap-1.5">
                            <CalendarIcon className="w-3.5 h-3.5" />
                            {availableDays[selectedDate!].fullDate}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {selectedTime}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            required
                            value={bookingName}
                            onChange={(e) => setBookingName(e.target.value)}
                            placeholder="Your Name"
                            className="px-3.5 py-2 rounded-lg bg-charcoal border border-white/5 text-white placeholder-gray-600 text-xs focus:border-accent/50 focus:outline-none"
                          />
                          <input
                            type="email"
                            required
                            value={bookingEmail}
                            onChange={(e) => setBookingEmail(e.target.value)}
                            placeholder="Your Email"
                            className="px-3.5 py-2 rounded-lg bg-charcoal border border-white/5 text-white placeholder-gray-600 text-xs focus:border-accent/50 focus:outline-none"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-2.5 rounded-lg bg-gradient-to-r from-accent to-amber-500 text-charcoal font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_15px_rgba(245,185,66,0.3)] transition-all cursor-pointer"
                        >
                          Confirm Consultation Slot
                        </button>
                      </motion.form>
                    )}

                    {/* WhatsApp backup */}
                    {!selectedTime && (
                      <div className="border-t border-white/5 pt-6 mt-4 flex flex-col gap-4">
                        <span className="text-center text-[10px] text-gray-500 uppercase tracking-widest leading-none block">
                          Or Connect Immediately
                        </span>
                        
                        <a
                          href="https://wa.me/919876543210?text=Hi%20VisaEnsure%2C%20I%20would%20like%20to%20schedule%20a%20visa%20consultation."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-4 rounded-xl bg-emerald-600 text-white font-semibold flex items-center justify-center gap-2 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-[0.99] transition-all duration-300 text-sm"
                        >
                          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                          Chat via WhatsApp Direct
                        </a>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-6 border border-accent/30">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">Consultation Reserved</h3>
                    <p className="text-sm text-gray-400 font-light max-w-sm leading-relaxed mb-6">
                      A meeting invitation has been dispatched to <span className="font-semibold text-white">{bookingEmail}</span>. Harish's team will connect with you on <span className="font-semibold text-white">{availableDays[selectedDate!].fullDate} at {selectedTime}</span>.
                    </p>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 mb-8 text-xs text-gray-400 flex items-center gap-2 max-w-xs justify-center mx-auto">
                      <span>Google Meet ID and guidelines included in calendar invite.</span>
                    </div>
                    <button
                      onClick={restartBooking}
                      className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Reschedule / Book New Slot
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
