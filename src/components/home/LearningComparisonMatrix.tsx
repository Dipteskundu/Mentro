"use client";

import { useState } from "react";
import Link from "next/link";

interface FeatureRow {
  feature: string;
  category: "roi" | "quality" | "support";
  mentro: string;
  mentroAvailable: boolean;
  videoCourses: string;
  videoAvailable: boolean;
  bootcamps: string;
  bootcampAvailable: boolean;
}

const comparisonData: FeatureRow[] = [
  {
    feature: "Direct Staff Engineer Mentorship",
    category: "quality",
    mentro: "Live 1-on-1 & small group sessions",
    mentroAvailable: true,
    videoCourses: "None (Pre-recorded videos only)",
    videoAvailable: false,
    bootcamps: "Inconsistent TA support",
    bootcampAvailable: false,
  },
  {
    feature: "Real Production Code Review",
    category: "quality",
    mentro: "Personalized line-by-line feedback",
    mentroAvailable: true,
    videoCourses: "Automated test grading",
    videoAvailable: false,
    bootcamps: "Generic group project check-ins",
    bootcampAvailable: false,
  },
  {
    feature: "Pricing & Financial Risk",
    category: "roi",
    mentro: "Affordable per-workshop ($0 - $49)",
    mentroAvailable: true,
    videoCourses: "$15 - $40/mo recurring subscriptions",
    videoAvailable: true,
    bootcamps: "$10,000 - $18,000 upfront debt",
    bootcampAvailable: false,
  },
  {
    feature: "Time Commitment & Flexibility",
    category: "roi",
    mentro: "Focused 2-4 hour live clinics",
    mentroAvailable: true,
    videoCourses: "Endless 100+ hour unguided video queues",
    videoAvailable: false,
    bootcamps: "Rigid 40 hr/week full-time schedule",
    bootcampAvailable: false,
  },
  {
    feature: "Career Network & Referrals",
    category: "support",
    mentro: "Direct mentor letters & hiring intro",
    mentroAvailable: true,
    videoCourses: "None",
    videoAvailable: false,
    bootcamps: "Basic career board access",
    bootcampAvailable: false,
  },
];

export default function LearningComparisonMatrix() {
  const [selectedTab, setSelectedTab] = useState<"all" | "roi" | "quality" | "support">("all");

  const filteredRows = selectedTab === "all"
    ? comparisonData
    : comparisonData.filter((r) => r.category === selectedTab);

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-[#101828] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-light dark:bg-brand-light/80 text-brand dark:text-brand-light text-xs font-bold mb-4">
            <span>⚡ Why Mentro Stands Apart</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Mentro Compares to Alternatives
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            See why ambitious engineers choose live mentor workshops over unguided video courses and expensive bootcamps.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700 backdrop-blur-md inline-flex flex-wrap justify-center gap-1">
            <button
              onClick={() => setSelectedTab("all")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedTab === "all"
                  ? "bg-brand text-white shadow-md shadow-brand/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All Features
            </button>
            <button
              onClick={() => setSelectedTab("quality")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedTab === "quality"
                  ? "bg-brand text-white shadow-md shadow-brand/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Curriculum Quality
            </button>
            <button
              onClick={() => setSelectedTab("roi")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedTab === "roi"
                  ? "bg-brand text-white shadow-md shadow-brand/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Price & ROI
            </button>
            <button
              onClick={() => setSelectedTab("support")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedTab === "support"
                  ? "bg-brand text-white shadow-md shadow-brand/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Career Support
            </button>
          </div>
        </div>

        {/* Comparison Table Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[700px] bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden backdrop-blur-xl">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 p-6 bg-slate-100/70 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <div className="col-span-4 text-slate-500 dark:text-slate-400">Features</div>
              <div className="col-span-3 text-brand dark:text-brand-light font-extrabold flex items-center gap-1">
                <span>Mentro Live</span>
                <span className="px-2 py-0.5 rounded-md bg-brand text-white text-[10px] lowercase">best</span>
              </div>
              <div className="col-span-3 text-slate-500 dark:text-slate-400">Video Tutorials</div>
              <div className="col-span-2 text-slate-500 dark:text-slate-400">Bootcamps</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {filteredRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 p-6 items-center hover:bg-brand-light/30 dark:hover:bg-brand-light/20 transition-colors"
                >
                  <div className="col-span-4 font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    {row.feature}
                  </div>

                  {/* Mentro Column */}
                  <div className="col-span-3 pr-2">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {row.mentro}
                      </span>
                    </div>
                  </div>

                  {/* Video Tutorials */}
                  <div className="col-span-3 pr-2">
                    <div className="flex items-start gap-2">
                      <div className={`w-5 h-5 rounded-full ${row.videoAvailable ? "bg-amber-500 text-white" : "bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400"} flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`}>
                        {row.videoAvailable ? "✓" : "✕"}
                      </div>
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        {row.videoCourses}
                      </span>
                    </div>
                  </div>

                  {/* Bootcamps */}
                  <div className="col-span-2">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        ✕
                      </div>
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        {row.bootcamps}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 text-center">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand to-purple-600 hover:from-brand-hover hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-brand/25 hover:shadow-brand/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Experience the Mentro Difference</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
