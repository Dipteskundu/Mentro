"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { mentors, workshops } from "@/data";
import BookMentorshipModal from "@/components/mentors/BookMentorshipModal";

const companyColors: Record<string, string> = {
  "Northstar Studio": "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800/60",
  "Harbor Labs": "bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800/60",
  "Meridian Research": "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60",
  "Aster Cloud": "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60",
  Formline: "bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800/60",
};

export default function MentorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const mentor = mentors.find((m) => m.id === resolvedParams.id);
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  useEffect(() => {
    if (!shareToast) return;
    const timer = setTimeout(() => setShareToast(false), 3000);
    return () => clearTimeout(timer);
  }, [shareToast]);

  if (!mentor) {
    return (
      <main className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-200 dark:border-slate-800 shadow-xl">
          <div className="w-16 h-16 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold">Mentor Profile Not Found</h1>
          <p className="text-xs text-gray-500 dark:text-slate-400 mt-2 mb-6">The requested mentor profile does not exist or has been moved.</p>
          <Link href="/mentors" className="px-5 py-2.5 bg-brand text-white font-bold text-xs rounded-xl hover:bg-brand-hover transition-colors shadow-md">
            Back to Mentors Directory
          </Link>
        </div>
      </main>
    );
  }

  const mentorWorkshops = workshops.filter((w) => w.mentorId === mentor.id);
  const otherMentors = mentors.filter((m) => m.id !== mentor.id).slice(0, 3);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setShareToast(true);
  };

  return (
    <main className="min-h-screen bg-gray-50/70 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors pb-20">
      {/* Share Notification Toast */}
      {shareToast && (
        <div className="fixed top-20 right-5 z-50 px-4 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-xl shadow-2xl animate-fade-in-up border border-slate-700">
          🔗 Profile link copied to clipboard!
        </div>
      )}

      {/* Hero Cover Banner */}
      <div className="relative h-64 sm:h-80 bg-gradient-to-r from-slate-950 via-indigo-950 to-brand overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between py-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-medium text-white/70">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>›</span>
            <Link href="/mentors" className="hover:text-white transition-colors">Mentors</Link>
            <span>›</span>
            <span className="text-white font-semibold">{mentor.name}</span>
          </nav>

          {/* Availability Pill */}
          <div className="self-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-semibold text-white/90 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {mentor.availability || "Available this week"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 space-y-8">
        {/* Profile Card Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-gray-200/80 dark:border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* Avatar */}
            <div className="relative cursor-pointer">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden ring-4 ring-white dark:ring-slate-900 shadow-2xl flex-shrink-0">
                <Image
                  src={mentor.avatar || "/images/mentor-sarah-chen.jpg"}
                  alt={mentor.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-brand text-white p-1.5 rounded-full ring-2 ring-white dark:ring-slate-900 shadow-sm" title="Verified Mentor">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Title & Info */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">{mentor.name}</h1>
                {mentor.company && (
                  <span className={`px-3 py-0.5 text-xs font-semibold rounded-full border ${companyColors[mentor.company] || "bg-gray-100 text-gray-800"}`}>
                    {mentor.company}
                  </span>
                )}
              </div>
              <p className="text-sm font-bold text-brand dark:text-brand-light uppercase tracking-wider">{mentor.role}</p>
              <p className="text-xs text-gray-500 dark:text-slate-400">Practitioner Mentor at Mentro</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 dark:border-slate-800">
            <button
              onClick={() => setIsBookModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-brand/25 transition-all hover:scale-105"
            >
              Request 1-on-1 Mentorship
            </button>
            <button
              onClick={handleShare}
              className="w-full sm:w-auto px-4 py-3.5 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-200 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share Profile
            </button>
          </div>
        </div>

        {/* 4-Column Metric Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-gray-200/80 dark:border-slate-800 text-center shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 dark:text-slate-400 uppercase tracking-wider">Overall Rating</p>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white mt-1 flex items-center justify-center gap-1">
              <svg className="w-5 h-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {mentor.rating ?? 4.9}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-slate-500 mt-0.5">({mentor.reviewCount ?? 120} reviews)</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-gray-200/80 dark:border-slate-800 text-center shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 dark:text-slate-400 uppercase tracking-wider">Learners Mentored</p>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white mt-1">
              {mentor.studentsMentored ? `${mentor.studentsMentored.toLocaleString()}+` : "1,000+"}
            </p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">Verified Students</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-gray-200/80 dark:border-slate-800 text-center shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 dark:text-slate-400 uppercase tracking-wider">Industry Experience</p>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white mt-1">
              {mentor.yearsExperience ? `${mentor.yearsExperience}+ Yrs` : "8+ Yrs"}
            </p>
            <p className="text-[11px] text-brand font-semibold mt-0.5">Staff Practitioner</p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-gray-200/80 dark:border-slate-800 text-center shadow-sm">
            <p className="text-[11px] font-bold text-gray-400 dark:text-slate-400 uppercase tracking-wider">Languages</p>
            <p className="text-sm font-extrabold text-gray-900 dark:text-white mt-2">
              {mentor.languages ? mentor.languages.join(", ") : "English"}
            </p>
            <p className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold mt-0.5">Fluent Instruction</p>
          </div>
        </div>

        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (8 Cols): Bio, Achievements, Hosted Workshops */}
          <div className="lg:col-span-8 space-y-8">
            {/* Personal Quote */}
            {mentor.quote && (
              <div className="p-6 bg-gradient-to-r from-brand-light/60 via-white to-purple-50/50 dark:from-slate-900 dark:via-slate-900 dark:to-purple-950/30 rounded-3xl border border-brand/20 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <span className="text-4xl text-brand leading-none absolute top-2 left-3 opacity-20 font-serif">&ldquo;</span>
                <p className="relative z-10 pl-4 italic text-sm sm:text-base text-gray-800 dark:text-slate-200 leading-relaxed font-medium">
                  &ldquo;{mentor.quote}&rdquo;
                </p>
              </div>
            )}

            {/* Full Biography */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3">About {mentor.name}</h3>
              <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed sm:text-base">{mentor.bio}</p>
            </div>

            {/* Key Achievements */}
            {mentor.achievements && mentor.achievements.length > 0 && (
              <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3">Key Highlights & Practitioner Impact</h3>
                <ul className="space-y-3">
                  {mentor.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Expertise & Skills */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-slate-800 pb-3">Expertise & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill) => (
                  <span key={skill} className="px-3.5 py-1.5 bg-brand-light dark:bg-brand/20 text-brand dark:text-brand-light text-xs font-bold rounded-xl border border-brand/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Hosted Live Workshops List */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 dark:border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Upcoming Hosted Workshops</h3>
                <span className="px-3 py-1 rounded-full bg-brand-light text-brand dark:bg-brand/20 dark:text-brand-light text-xs font-bold">
                  {mentorWorkshops.length} Available
                </span>
              </div>

              {mentorWorkshops.length === 0 ? (
                <p className="text-xs text-gray-500 dark:text-slate-400 py-4">No live workshops scheduled at this moment. You can still book a 1-on-1 session!</p>
              ) : (
                <div className="space-y-4 pt-2">
                  {mentorWorkshops.map((ws) => (
                    <div key={ws.id} className="p-5 bg-gray-50 dark:bg-slate-800/60 rounded-2xl border border-gray-200/80 dark:border-slate-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 bg-brand/10 text-brand dark:text-brand-light text-[11px] font-bold rounded-full">
                            {ws.sessionType}
                          </span>
                          <span className="text-xs font-semibold text-gray-500 dark:text-slate-400">{ws.level}</span>
                        </div>
                        <h4 className="text-base font-bold text-gray-900 dark:text-white">{ws.title}</h4>
                        <p className="text-xs text-gray-500 dark:text-slate-400 line-clamp-2">{ws.description}</p>
                        <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-gray-600 dark:text-slate-300">
                          <span>📅 {new Date(ws.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                          <span>⏱️ {ws.duration}</span>
                          <span className="text-brand font-bold">{ws.price === 0 ? "Free" : `$${ws.price}`}</span>
                        </div>
                      </div>
                      <Link
                        href={`/workshop/${ws.id}`}
                        className="px-5 py-2.5 bg-brand text-white text-xs font-bold rounded-xl hover:bg-brand-hover transition-colors shadow-md shadow-brand/20 whitespace-nowrap"
                      >
                        Enroll Workshop
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column (4 Cols): Sidebar Booking Widget & Recommendations */}
          <div className="lg:col-span-4 space-y-6 sticky top-24 self-start">
            {/* 1-on-1 Mentorship Booking Sidebar Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-xl space-y-5">
              <div>
                <span className="px-3 py-1 bg-brand-light dark:bg-brand/20 text-brand dark:text-brand-light text-xs font-bold rounded-full">
                  1-on-1 Direct Access
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">Book Private Session</h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">Get 45 minutes of tailored code review, career guidance, or system design prep.</p>
              </div>

              <div className="space-y-3 pt-2 text-xs border-t border-gray-100 dark:border-slate-800">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Average Response:</span>
                  <span className="font-bold text-gray-800 dark:text-slate-200">&lt; 2 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Session Duration:</span>
                  <span className="font-bold text-gray-800 dark:text-slate-200">45 Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-slate-400">Format:</span>
                  <span className="font-bold text-gray-800 dark:text-slate-200">Live Video + Code Share</span>
                </div>
              </div>

              <button
                onClick={() => setIsBookModalOpen(true)}
                className="w-full py-3.5 bg-brand hover:bg-brand-hover text-white text-xs font-bold rounded-xl shadow-lg shadow-brand/25 transition-all hover:scale-105"
              >
                Request 1-on-1 Mentorship ($79)
              </button>
            </div>

            {/* Other Recommended Mentors */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Other Industry Mentors</h4>
              <div className="space-y-3">
                {otherMentors.map((om) => (
                  <Link
                    key={om.id}
                    href={`/mentors/${om.id}`}
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors group"
                  >
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={om.avatar || "/images/mentor-sarah-chen.jpg"} alt={om.name} fill sizes="48px" className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-brand transition-colors truncate">{om.name}</p>
                      <p className="text-[11px] text-gray-500 dark:text-slate-400 truncate">{om.role}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookMentorshipModal
        mentor={isBookModalOpen ? mentor : null}
        onClose={() => setIsBookModalOpen(false)}
      />
    </main>
  );
}
