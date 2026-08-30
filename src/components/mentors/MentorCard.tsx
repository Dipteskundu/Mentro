"use client";

import Link from "next/link";
import Image from "next/image";
import { Mentor, Workshop } from "@/types";
import { motion } from "framer-motion";

interface MentorCardProps {
  mentor: Mentor;
  workshops: Workshop[];
  index: number;
  viewMode?: "grid" | "list";
  companyColors: Record<string, string>;
  onSelectExpertise: (expertise: string) => void;
  onOpenProfile?: (mentor: Mentor) => void;
  onBookSession: (mentor: Mentor) => void;
}

export default function MentorCard({
  mentor,
  workshops,
  index,
  viewMode = "grid",
  companyColors,
  onSelectExpertise,
  onBookSession,
}: MentorCardProps) {
  const mentorWorkshops = workshops.filter((w) => w.mentorId === mentor.id);

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-gray-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-brand/40 transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {/* Avatar Block */}
          <Link href={`/mentors/${mentor.id}`} className="relative flex-shrink-0">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-4 ring-gray-100 dark:ring-slate-800 group-hover:ring-brand/30 transition-all duration-300 shadow-md">
              <Image
                src={mentor.avatar || "/images/mentor-sarah-chen.jpg"}
                alt={mentor.name}
                fill
                sizes="112px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Verified badge */}
            <div className="absolute -bottom-1 -right-1 bg-brand text-white p-1 rounded-full border-2 border-white dark:border-slate-900 shadow-sm" title="Verified Mentor">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </Link>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/mentors/${mentor.id}`}
                    className="text-xl font-bold text-gray-900 dark:text-white hover:text-brand dark:hover:text-brand-light transition-colors"
                  >
                    {mentor.name}
                  </Link>
                  {mentor.company && (
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${companyColors[mentor.company] || "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-gray-300"}`}>
                      {mentor.company}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400 mt-0.5">{mentor.role}</p>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-3 bg-gray-50 dark:bg-slate-800/80 px-3.5 py-1.5 rounded-xl border border-gray-100 dark:border-slate-700/50">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">{mentor.rating ?? 4.9}</span>
                  <span className="text-xs text-gray-400 dark:text-slate-500">({mentor.reviewCount ?? 120})</span>
                </div>
                <span className="text-gray-300 dark:text-slate-700">|</span>
                <span className="text-xs font-semibold text-gray-600 dark:text-slate-300">
                  {mentor.studentsMentored ? `${mentor.studentsMentored.toLocaleString()}+ students` : "1,000+ students"}
                </span>
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-600 dark:text-slate-300 leading-relaxed line-clamp-2">
              {mentor.bio}
            </p>

            {/* Expertise pills */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {mentor.expertise.map((skill) => (
                <button
                  key={skill}
                  onClick={() => onSelectExpertise(skill)}
                  className="px-2.5 py-1 bg-brand-light dark:bg-brand/10 text-brand dark:text-brand-light hover:bg-brand hover:text-white text-xs font-medium rounded-full transition-colors"
                >
                  {skill}
                </button>
              ))}
              {mentorWorkshops.length > 0 && (
                <span className="ml-auto text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200/50 dark:border-emerald-800/40">
                  {mentorWorkshops.length} Active {mentorWorkshops.length === 1 ? "Workshop" : "Workshops"}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full sm:w-auto flex sm:flex-col items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100 dark:border-slate-800">
            <Link
              href={`/mentors/${mentor.id}`}
              className="flex-1 sm:flex-none w-full px-4 py-2.5 bg-brand text-white text-xs font-bold rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-md shadow-brand/20 text-center"
            >
              View Full Profile
            </Link>
            <button
              onClick={() => onBookSession(mentor)}
              className="flex-1 sm:flex-none w-full px-4 py-2.5 bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-700 text-xs font-semibold rounded-xl transition-colors text-center"
            >
              Book 1-on-1
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Grid View (Default)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand/10 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Banner & Header */}
      <div>
        <div className="relative h-44 bg-gradient-to-br from-slate-900 via-indigo-950 to-brand overflow-hidden">
          {/* Decorative mesh glows */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-brand/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl" />

          {/* Top badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[11px] font-medium text-white/90 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{mentor.availability || "Available this week"}</span>
            </div>

            {/* Company Tag */}
            {mentor.company && (
              <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full border shadow-sm ${companyColors[mentor.company] || "bg-white/90 text-gray-800"}`}>
                {mentor.company}
              </span>
            )}
          </div>

          {/* Floating Centered Avatar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href={`/mentors/${mentor.id}`} className="relative block cursor-pointer">
              <div className="absolute inset-0 bg-brand/30 rounded-full blur-md group-hover:blur-lg transition-all" />
              <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/90 dark:ring-slate-900 shadow-xl group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={mentor.avatar || "/images/mentor-sarah-chen.jpg"}
                  alt={mentor.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              {/* Verified icon */}
              <div className="absolute bottom-1 right-1 bg-brand text-white p-1 rounded-full ring-2 ring-white dark:ring-slate-900 shadow-sm" title="Verified Practitioner">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Card Main Body */}
        <div className="p-6 pt-5 text-center">
          <Link href={`/mentors/${mentor.id}`} className="block">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand transition-colors">
              {mentor.name}
            </h3>
            <p className="text-xs font-semibold text-brand dark:text-brand-light mt-0.5 tracking-wide uppercase">
              {mentor.role}
            </p>
          </Link>

          {/* Rating & Mentored Stats */}
          <div className="mt-3 inline-flex items-center justify-center gap-3 px-3 py-1.5 bg-gray-50 dark:bg-slate-800/60 rounded-xl text-xs font-semibold text-gray-700 dark:text-slate-300 border border-gray-100 dark:border-slate-800">
            <div className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-bold text-gray-900 dark:text-white">{mentor.rating ?? 4.9}</span>
              <span className="text-gray-400 dark:text-slate-500">({mentor.reviewCount ?? 120})</span>
            </div>
            <span className="text-gray-300 dark:text-slate-700">•</span>
            <span>{mentor.studentsMentored ? `${mentor.studentsMentored.toLocaleString()}+ learners` : "1,000+ learners"}</span>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-gray-500 dark:text-slate-400 leading-relaxed line-clamp-3">
            {mentor.bio}
          </p>

          {/* Expertise Badges */}
          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {mentor.expertise.slice(0, 3).map((skill) => (
              <button
                key={skill}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectExpertise(skill);
                }}
                className="px-2.5 py-1 bg-brand-light dark:bg-brand/15 text-brand dark:text-brand-light hover:bg-brand hover:text-white dark:hover:bg-brand dark:hover:text-white text-xs font-medium rounded-full transition-colors"
              >
                {skill}
              </button>
            ))}
            {mentor.expertise.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 text-xs font-medium rounded-full">
                +{mentor.expertise.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Action Buttons */}
      <div className="p-6 pt-0 space-y-2">
        <Link
          href={`/mentors/${mentor.id}`}
          className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-brand text-white text-sm font-semibold rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30"
        >
          View Profile & Workshops ({mentorWorkshops.length})
          <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        <button
          onClick={() => onBookSession(mentor)}
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-300 text-xs font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200/60 dark:border-slate-700/60 transition-colors"
        >
          Request 1-on-1 Mentorship
        </button>
      </div>
    </motion.div>
  );
}
