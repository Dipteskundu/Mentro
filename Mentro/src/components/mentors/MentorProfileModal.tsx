"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mentor, Workshop } from "@/types";

interface MentorProfileModalProps {
  mentor: Mentor | null;
  workshops: Workshop[];
  onClose: () => void;
  onBookSession: (mentor: Mentor) => void;
  companyColors: Record<string, string>;
}

export default function MentorProfileModal({
  mentor,
  workshops,
  onClose,
  onBookSession,
  companyColors,
}: MentorProfileModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "workshops">("overview");

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

  const mentorWorkshops = workshops.filter((w) => w.mentorId === mentor.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in-up">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-800 z-10 my-8">
        {/* Top Cover Banner */}
        <div className="relative h-48 sm:h-56 bg-gradient-to-r from-slate-950 via-indigo-950 to-brand p-6 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-brand/30 rounded-full blur-3xl" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/70 text-white/80 hover:text-white rounded-full backdrop-blur-md transition-all z-20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Top Status */}
          <div className="relative z-10 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-medium text-white/90 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {mentor.availability || "Available for 1-on-1s"}
            </span>
          </div>

          {/* Banner bottom profile info preview */}
          <div className="relative z-10 flex items-end justify-between">
            <div className="flex items-end gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-slate-900 shadow-xl flex-shrink-0">
                <Image
                  src={mentor.avatar || "/images/mentor-sarah-chen.jpg"}
                  alt={mentor.name}
                  fill
                  sizes="(max-width: 640px) 80px, 96px"
                  className="object-cover"
                />
              </div>
              <div className="mb-1 text-white">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold">{mentor.name}</h2>
                  <svg className="w-5 h-5 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-white/70">{mentor.role}</p>
              </div>
            </div>

            {mentor.company && (
              <span className={`hidden sm:inline-flex px-3 py-1 text-xs font-semibold rounded-full border shadow-sm ${companyColors[mentor.company] || "bg-white text-gray-900"}`}>
                {mentor.company}
              </span>
            )}
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-gray-100 dark:border-slate-800 px-6 bg-gray-50/50 dark:bg-slate-900/50">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-3.5 px-4 font-semibold text-sm border-b-2 transition-colors ${
              activeTab === "overview"
                ? "border-brand text-brand dark:text-brand-light"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            Overview & Experience
          </button>
          <button
            onClick={() => setActiveTab("workshops")}
            className={`py-3.5 px-4 font-semibold text-sm border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "workshops"
                ? "border-brand text-brand dark:text-brand-light"
                : "border-transparent text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            Hosted Workshops
            <span className="px-2 py-0.5 text-xs rounded-full bg-brand-light text-brand dark:bg-brand/20 dark:text-brand-light font-bold">
              {mentorWorkshops.length}
            </span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          {activeTab === "overview" ? (
            <>
              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-gray-100 dark:border-slate-800 text-center">
                <div>
                  <p className="text-xs text-gray-400 dark:text-slate-400 uppercase font-semibold">Rating</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white mt-0.5 flex items-center justify-center gap-1">
                    <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {mentor.rating ?? 4.9}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-slate-400 uppercase font-semibold">Mentored</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white mt-0.5">
                    {mentor.studentsMentored ? `${mentor.studentsMentored.toLocaleString()}+` : "1,000+"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-slate-400 uppercase font-semibold">Experience</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white mt-0.5">
                    {mentor.yearsExperience ? `${mentor.yearsExperience}+ yrs` : "8+ yrs"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-slate-400 uppercase font-semibold">Languages</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">
                    {mentor.languages ? mentor.languages.join(", ") : "English"}
                  </p>
                </div>
              </div>

              {/* Personal Quote */}
              {mentor.quote && (
                <div className="relative p-5 bg-gradient-to-r from-brand-light/50 to-purple-50 dark:from-slate-800/80 dark:to-slate-800/40 rounded-2xl border border-brand/10 dark:border-slate-700/60 italic text-gray-700 dark:text-slate-300 text-sm">
                  <span className="text-3xl text-brand leading-none absolute top-2 left-3 opacity-30 font-serif">&ldquo;</span>
                  <p className="relative z-10 pl-4">{mentor.quote}</p>
                </div>
              )}

              {/* Bio */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-2">About</h4>
                <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{mentor.bio}</p>
              </div>

              {/* Key Achievements */}
              {mentor.achievements && mentor.achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Key Highlights & Impact</h4>
                  <ul className="space-y-2">
                    {mentor.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Expertise & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-brand-light dark:bg-brand/15 text-brand dark:text-brand-light text-xs font-semibold rounded-xl border border-brand/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              {mentorWorkshops.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 dark:bg-slate-800/40 rounded-2xl">
                  <p className="text-gray-500 dark:text-slate-400 font-medium">No live workshops scheduled for this mentor right now.</p>
                  <p className="text-xs text-gray-400 mt-1">You can still book a 1-on-1 mentorship session directly!</p>
                </div>
              ) : (
                mentorWorkshops.map((ws) => (
                  <div key={ws.id} className="p-4 bg-gray-50 dark:bg-slate-800/60 rounded-2xl border border-gray-200/80 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 bg-brand/10 text-brand dark:text-brand-light text-[11px] font-bold rounded-full">
                          {ws.sessionType}
                        </span>
                        <span className="text-xs font-medium text-gray-500 dark:text-slate-400">{ws.level}</span>
                      </div>
                      <h4 className="text-base font-bold text-gray-900 dark:text-white mt-1">{ws.title}</h4>
                      <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 line-clamp-2">{ws.description}</p>
                      <div className="mt-2 flex items-center gap-4 text-xs font-medium text-gray-600 dark:text-slate-300">
                        <span>📅 {new Date(ws.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                        <span>⏱️ {ws.duration}</span>
                        <span className="text-brand font-bold">{ws.price === 0 ? "Free" : `$${ws.price}`}</span>
                      </div>
                    </div>
                    <Link
                      href="/explore"
                      className="px-4 py-2.5 bg-brand text-white text-xs font-bold rounded-xl hover:bg-brand-hover transition-colors flex-shrink-0 text-center w-full sm:w-auto"
                    >
                      Enroll Workshop
                    </Link>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-gray-900 dark:text-white">Need tailored 1-on-1 guidance?</p>
            <p className="text-xs text-gray-500 dark:text-slate-400">Book a 45-minute private session with {mentor.name.split(" ")[0]}</p>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookSession(mentor);
            }}
            className="w-full sm:w-auto px-6 py-3 bg-brand text-white text-xs sm:text-sm font-bold rounded-xl hover:bg-brand-hover shadow-lg shadow-brand/25 transition-all hover:scale-105"
          >
            Request 1-on-1 Session
          </button>
        </div>
      </div>
    </div>
  );
}
