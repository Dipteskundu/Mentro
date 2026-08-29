"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Mentor } from "@/types";

interface BookMentorshipModalProps {
  mentor: Mentor | null;
  onClose: () => void;
}

const topics = [
  "Code Review & Architecture",
  "Career Growth & Promotions",
  "System Design Mock Interview",
  "Portfolio & Resume Review",
  "1-on-1 Technical Mentorship",
];

const timeSlots = ["10:00 AM - 11:00 AM", "02:00 PM - 03:00 PM", "05:00 PM - 06:00 PM", "08:00 PM - 09:00 PM"];

export default function BookMentorshipModal({ mentor, onClose }: BookMentorshipModalProps) {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [selectedDate, setSelectedDate] = useState("2026-09-08");
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (mentor) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mentor, onClose]);

  if (!mentor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in-up">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-md" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-800 z-10 my-8">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-brand p-6 text-white overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/70 text-white/80 hover:text-white rounded-full backdrop-blur-md transition-all"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-white/30 flex-shrink-0">
              <Image
                src={mentor.avatar || "/images/mentor-sarah-chen.jpg"}
                alt={mentor.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="px-2.5 py-0.5 bg-brand-light/20 text-brand-light text-xs font-semibold rounded-full border border-white/10">
                1-on-1 Mentorship Session
              </span>
              <h3 className="text-xl font-bold mt-1">Book Session with {mentor.name}</h3>
              <p className="text-xs text-white/70">{mentor.role} • {mentor.company}</p>
            </div>
          </div>
        </div>

        {/* Form or Confirmation */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto text-2xl animate-bounce">
                ✓
              </div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Session Requested!</h4>
              <p className="text-sm text-gray-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-brand">{name}</span>. Your request for{" "}
                <span className="font-semibold">{selectedTopic}</span> with {mentor.name} on{" "}
                <span className="font-semibold">{selectedDate} ({selectedTime})</span> has been submitted.
              </p>
              <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-800 text-xs text-gray-500 dark:text-slate-400 text-left">
                📩 We sent a confirmation to <span className="font-medium text-gray-800 dark:text-slate-200">{email}</span>. {mentor.name.split(" ")[0]} will review your notes and confirm availability within 24 hours.
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-brand text-white font-semibold text-sm rounded-xl hover:bg-brand-hover transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Select Topic */}
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  1. Topic of Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {topics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTopic(t)}
                      className={`p-3 text-left text-xs font-semibold rounded-xl border transition-all ${
                        selectedTopic === t
                          ? "border-brand bg-brand-light/50 dark:bg-brand/20 text-brand dark:text-brand-light shadow-sm"
                          : "border-gray-200 dark:border-slate-800 text-gray-600 dark:text-slate-400 hover:border-gray-300 dark:hover:border-slate-700"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    2. Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    3. Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* User Info */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-gray-700 dark:text-slate-300 uppercase tracking-wider">
                  4. Your Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                </div>
                <textarea
                  rows={3}
                  placeholder="Tell the mentor what specific problem or code you'd like to work on..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-brand text-white text-sm font-bold rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-lg shadow-brand/25 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting Request..." : `Confirm Mentorship Request ($${selectedTopic.includes("Mock") ? "99" : "79"})`}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
