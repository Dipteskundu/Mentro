"use client";

import { useState } from "react";
import Image from "next/image";

export default function MissionVisionToggle() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-[#101828] transition-colors duration-300 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-xs sm:text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-3">
            Why Mentro Exists
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Driven by Purpose. Shaped by Industry.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="p-1.5 rounded-full bg-slate-200/80 dark:bg-slate-800/80 border border-slate-300/60 dark:border-slate-700 backdrop-blur-md inline-flex">
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Vision for 2030
            </button>
          </div>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: High-Res Community Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 group">
              <div className="aspect-[4/3] relative w-full">
                <Image
                  src="/images/about-community.jpg"
                  alt="Mentro Community Learning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Image Floating Glass Badges */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-slate-900 dark:text-white shadow-lg">
                  💡 Hands-on Code & Architecture
                </div>
                <div className="px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-slate-900 dark:text-white shadow-lg">
                  🤝 1-on-1 Mentor Guidance
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Tabbed Description */}
          <div className="lg:col-span-6 space-y-6">
            {activeTab === "mission" ? (
              <div className="space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                  <span>TARGETING REAL SKILL GAPS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Democratizing World-Class Tech Engineering Knowledge
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  Mentro was founded on a simple truth: textbook tutorials don&apos;t prepare developers for production systems. 
                  Our mission is to empower learners everywhere with direct access to active practitioners from leading tech companies.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Live, interactive code reviews & design feedback",
                    "Curated workshops built around actual company workflows",
                    "Direct 1-on-1 mentorship to solve career bottlenecks",
                    "Inclusive, supportive global community of tech builders"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mt-0.5">
                        ✓
                      </div>
                      <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
                  <p className="text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 font-medium italic">
                    &ldquo;Education isn&apos;t just about consuming content; it&apos;s about building confidence alongside those who have walked the path before you.&rdquo;
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold">
                  <span>LOOKING AHEAD</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Building the World&apos;s Most Trusted Tech Career Accelerator
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  By 2030, we aim to bridge the tech talent gap for over 100,000 engineers globally—fostering 
                  an ecosystem where any dedicated learner can master complex tech stacks regardless of background or geographic location.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Expanding to 50+ specialized engineering & design tracks",
                    "Deploying AI-assisted personalized mentorship matching",
                    "Direct hiring partner networks with 500+ top tech firms",
                    "End-to-end continuous learning & executive growth paths"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center mt-0.5">
                        ★
                      </div>
                      <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/50">
                  <p className="text-xs sm:text-sm text-purple-900 dark:text-purple-200 font-medium italic">
                    &ldquo;Our vision is a future where quality engineering mentorship is accessible to anyone with the curiosity to learn.&rdquo;
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
