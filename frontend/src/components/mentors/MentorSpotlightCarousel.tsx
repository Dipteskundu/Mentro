"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mentor } from "@/types";

interface MentorSpotlightCarouselProps {
  mentors: Mentor[];
  onOpenProfile?: (mentor: Mentor) => void;
  onBookSession: (mentor: Mentor) => void;
}

export default function MentorSpotlightCarousel({
  mentors,
  onBookSession,
}: MentorSpotlightCarouselProps) {
  const featuredMentors = mentors.filter((m) => m.featured);
  const [activeIndex, setActiveIndex] = useState(0);

  if (featuredMentors.length === 0) return null;

  const currentMentor = featuredMentors[activeIndex] || featuredMentors[0];

  return (
    <section className="py-10 bg-gradient-to-b from-brand-light/20 via-white to-gray-50/80 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 text-gray-900 dark:text-white relative overflow-hidden border-b border-gray-100 dark:border-slate-800 transition-colors">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand/10 dark:bg-brand/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-light dark:bg-brand/20 border border-brand/20 rounded-full text-xs font-semibold text-brand dark:text-brand-light mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Mentor Spotlight
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Learn From <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600 dark:from-blue-400 dark:to-purple-400">Featured Industry Leaders</span>
            </h2>
          </div>

          {/* Selector Tabs */}
          <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-slate-800/80 p-1 rounded-2xl border border-gray-200/80 dark:border-slate-700/60">
            {featuredMentors.map((m, idx) => (
              <button
                key={m.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeIndex === idx
                    ? "bg-brand text-white shadow-md shadow-brand/20"
                    : "text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/60 dark:hover:bg-slate-700/60"
                }`}
              >
                {m.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight Showcase Card */}
        <div className="bg-white dark:bg-slate-900/90 border border-gray-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Image & Stats Column */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <Link href={`/mentors/${currentMentor.id}`} className="relative block">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand to-purple-600 rounded-3xl blur-xl opacity-30 dark:opacity-50" />
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden ring-4 ring-gray-100 dark:ring-slate-800 shadow-xl">
                  <Image
                    src={currentMentor.avatar || "/images/mentor-sarah-chen.jpg"}
                    alt={currentMentor.name}
                    fill
                    sizes="(max-width: 768px) 144px, 176px"
                    className="object-cover"
                  />
                </div>
              </Link>

              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <div className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 rounded-xl text-xs font-bold text-amber-700 dark:text-amber-400">
                  ★ {currentMentor.rating ?? 4.9} ({currentMentor.reviewCount ?? 150})
                </div>
                <div className="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 border border-gray-200/60 dark:border-slate-700/60 rounded-xl text-xs font-medium text-gray-700 dark:text-slate-300">
                  {currentMentor.studentsMentored ? `${currentMentor.studentsMentored.toLocaleString()}+ learners` : "1,000+ learners"}
                </div>
              </div>
            </div>

            {/* Right Info Column */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <Link href={`/mentors/${currentMentor.id}`}>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white hover:text-brand transition-colors">{currentMentor.name}</h3>
                  </Link>
                  {currentMentor.company && (
                    <span className="px-2.5 py-0.5 bg-brand-light dark:bg-brand/20 border border-brand/20 text-brand dark:text-brand-light text-xs font-semibold rounded-full">
                      {currentMentor.company}
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold text-brand dark:text-brand-light uppercase tracking-wider">
                  {currentMentor.role}
                </p>
              </div>

              {currentMentor.quote && (
                <blockquote className="p-3.5 bg-brand-light/40 dark:bg-slate-800/60 border-l-3 border-brand rounded-r-xl text-gray-700 dark:text-slate-300 text-xs sm:text-sm italic leading-relaxed">
                  &ldquo;{currentMentor.quote}&rdquo;
                </blockquote>
              )}

              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-3">
                {currentMentor.bio}
              </p>

              {/* Achievements */}
              {currentMentor.achievements && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentMentor.achievements.map((item, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-100 dark:bg-slate-800 border border-gray-200/60 dark:border-slate-700/60 rounded-lg text-[11px] font-medium text-gray-700 dark:text-slate-300">
                      ⚡ {item}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={`/mentors/${currentMentor.id}`}
                  className="px-4 py-2.5 bg-brand hover:bg-brand-hover text-white text-xs font-bold rounded-xl shadow-md shadow-brand/20 transition-all hover:scale-105"
                >
                  View Profile & Workshops
                </Link>
                <button
                  onClick={() => onBookSession(currentMentor)}
                  className="px-4 py-2.5 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-slate-200 text-xs font-semibold rounded-xl transition-all"
                >
                  Request 1-on-1 Mentorship
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
