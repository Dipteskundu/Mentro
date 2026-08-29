"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TOPICS } from "@/utils/constants";
import { workshops, mentors } from "@/data";

export default function HomeHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const featuredWorkshop = workshops[0];
  const featuredMentor = mentors.find((m) => m.id === featuredWorkshop.mentorId) || mentors[0];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/explore?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/explore");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/40 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300 pt-16 pb-16 lg:pt-24 lg:pb-24">
      {/* Aurora Lighting Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-brand/15 via-purple-500/10 to-transparent dark:from-brand/25 dark:via-purple-500/15 rounded-full blur-[120px] animate-aurora pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-tl from-indigo-500/15 via-blue-500/10 to-transparent dark:from-indigo-500/20 dark:via-blue-500/15 rounded-full blur-[100px] animate-aurora pointer-events-none" style={{ animationDelay: "4s" }} />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.12]">
            Master Real-World Tech Skills with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Active Industry Leaders
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Accelerate your engineering career with live studio workshops, 1-on-1 code reviews, and hands-on capstones guided by staff engineers from top tech teams.
          </p>

          {/* Interactive Hero Search Form */}
          <form onSubmit={handleSearchSubmit} className="max-w-lg mx-auto relative">
            <div className="absolute inset-0 backdrop-blur-xl bg-white dark:bg-slate-900/90 border border-gray-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-black/20" />
            <div className="relative flex items-center p-1.5">
              <svg className="w-5 h-5 ml-3 text-gray-400 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search workshops, topics, or mentors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-24 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 text-xs sm:text-sm font-medium focus:outline-none"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-brand hover:bg-brand-hover text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md shadow-brand/20 whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </form>

          {/* Social Proof Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <div className="flex -space-x-2 overflow-hidden p-1">
              {[
                "/images/mentor-sarah-chen.jpg",
                "/images/mentor-marcus-johnson.jpg",
                "/images/mentor-priya-sharma.jpg",
                "/images/learner-elena-ross.jpg",
              ].map((src, i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 overflow-hidden relative shadow-sm">
                  <Image src={src} alt="User avatar" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="text-xs sm:text-sm font-medium text-gray-700 dark:text-slate-300">
              Trusted by <strong className="text-gray-900 dark:text-white">1,000+ learners</strong> & <strong className="text-gray-900 dark:text-white">50+ top mentors</strong> <span className="text-amber-500 font-bold ml-1">⭐ 4.9/5</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/explore"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-xs sm:text-sm shadow-lg shadow-brand/25 transition-all hover:scale-105"
            >
              Explore Workshops
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/mentors"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-slate-700 font-semibold text-xs sm:text-sm border border-gray-200/60 dark:border-slate-700/60 transition-colors"
            >
              Meet Our Mentors
            </Link>
          </div>
        </div>

        {/* Quick Topic Explorer Grid */}
        <div className="mt-14 pt-8 border-t border-gray-200/60 dark:border-slate-800/80">
          <p className="text-xs font-bold tracking-wider text-gray-400 dark:text-slate-400 uppercase mb-4 text-center">
            Explore Workshops by Topic Track
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 max-w-6xl mx-auto">
            {TOPICS.map((topic) => (
              <Link
                key={topic.label}
                href={`/explore?search=${encodeURIComponent(topic.label)}`}
                className={`group relative bg-gradient-to-br ${topic.gradient} p-4 rounded-2xl text-white font-semibold text-center hover:scale-105 hover:shadow-xl shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-2`}
              >
                <svg className="w-6 h-6 opacity-90 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={topic.icon} />
                </svg>
                <span className="text-xs font-bold leading-tight">{topic.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
