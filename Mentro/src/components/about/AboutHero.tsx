"use client";

import Link from "next/link";
import Image from "next/image";
import { mentors } from "@/data";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-gray-100 dark:border-slate-800 py-16 sm:py-24 px-4 transition-colors">
      {/* Aurora Ambient Gradient Blobs */}
      <div className="absolute top-[-15%] left-[-5%] w-[550px] h-[550px] bg-gradient-to-br from-purple-500/15 via-indigo-500/10 to-transparent dark:from-purple-500/25 dark:via-indigo-500/15 rounded-full blur-[120px] animate-aurora pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-tl from-brand/15 via-blue-500/10 to-transparent dark:from-brand/25 dark:via-blue-500/15 rounded-full blur-[100px] animate-aurora pointer-events-none" style={{ animationDelay: "4s" }} />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-20 max-w-5xl mx-auto text-center space-y-8">


        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.12] max-w-4xl mx-auto">
          Bridging the Gap Between{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-brand dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400">
            Learning & Production Realities
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Mentro connects ambitious learners with active staff engineers, lead architects, and design directors. 
          Master real-world skills, receive 1-on-1 mentorship, and accelerate your career through production-grade feedback.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/explore"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand/25 transition-all hover:scale-105"
          >
            Explore Workshops
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

          <Link
            href="/mentors"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-700 font-semibold text-xs sm:text-sm border border-gray-200/60 dark:border-slate-700/60 transition-colors"
          >
            Meet Our Mentors
          </Link>
        </div>

        {/* Glass Feature Cards Grid (Inspired by Mentor Hero Stat Pills) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 text-left">
          {/* Card 1 */}
          <div className="p-6 bg-white dark:bg-slate-900/90 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-xl space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
              🎯
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">Direct 1-on-1 Mentorship</h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
              Get personalized code reviews, system design guidance, and career advice from staff practitioners.
            </p>
            <div className="flex -space-x-2 pt-2">
              {mentors.slice(0, 3).map((m) => (
                <div key={m.id} className="relative w-7 h-7 rounded-full overflow-hidden ring-2 ring-white dark:ring-slate-900">
                  <Image src={m.avatar || "/images/mentor-sarah-chen.jpg"} alt={m.name} fill sizes="28px" className="object-cover" />
                </div>
              ))}
              <span className="pl-3 text-[11px] font-semibold text-purple-600 dark:text-purple-400 self-center">50+ Staff Engineers</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white dark:bg-slate-900/90 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-xl space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-light dark:bg-brand/20 text-brand dark:text-brand-light flex items-center justify-center font-bold text-lg">
              ⚡
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">Live Interactive Studios</h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
              Participate in live video streaming rooms with Q&A chat, starter code templates, and downloadable assets.
            </p>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold rounded-full border border-emerald-200/50 dark:border-emerald-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              HD 1080p Live Stream
            </span>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white dark:bg-slate-900/90 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-xl space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg">
              🚀
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white">95% Career Transition Rate</h3>
            <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
              Our students land engineering roles at top tech companies through production-grade capstone projects.
            </p>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 text-[11px] font-bold rounded-full">
              ★ 4.9/5 Student Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
