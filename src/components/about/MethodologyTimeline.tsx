"use client";

import { useState } from "react";

const steps = [
  {
    step: "01",
    title: "Browse Curated Workshops",
    subtitle: "Targeted skill tracks",
    description: "Explore our hand-picked catalog of technical workshops across Web Engineering, Mobile Development, AI/ML, DevOps, and Product Design.",
    outcomes: ["Beginner to Advanced difficulty filters", "Clear syllabus & expected prerequisites", "Flexible live scheduling"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Interactive Live Learning",
    subtitle: "Direct mentor engagement",
    description: "Participate in real-time sessions with industry leaders. Ask live questions, participate in pair coding, and get instant guidance.",
    outcomes: ["Small group sizes for high engagement", "Live Q&A and architecture teardowns", "Access to session recordings"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Build Real-World Projects",
    subtitle: "Production-ready portfolio",
    description: "Apply your knowledge immediately by creating real-world software, design systems, or ML models under expert mentorship.",
    outcomes: ["Personalized code reviews from mentors", "Industry best-practice standards", "GitHub-ready portfolio projects"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Accelerate Your Career",
    subtitle: "Network & Growth",
    description: "Leverage your newfound skills and mentor network to secure new roles, gain promotions, or transition into high-growth tech domains.",
    outcomes: ["Mentor referral & recommendation letters", "Interview preparation & mock feedback", "Lifetime access to alumni community"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function MethodologyTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex];

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-[#101828] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-3">
            How Mentro Works
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your Roadmap to Technical Mastery
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            A structured, 4-step framework designed to take you from foundational concepts to production confidence.
          </p>
        </div>

        {/* Desktop/Tablet Step Navigation Header */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {steps.map((item, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-600/25 scale-[1.02]"
                    : "bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xl font-extrabold ${isActive ? "text-indigo-200" : "text-slate-400 dark:text-slate-500"}`}>
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base line-clamp-1">{item.title}</h3>
                    <p className={`text-xs ${isActive ? "text-indigo-100" : "text-slate-500 dark:text-slate-400"}`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className={`p-2 rounded-xl ${isActive ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                  {item.icon}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Expanded View Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xl backdrop-blur-xl transition-all duration-300 animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                <span>STEP {activeStep.step} OF 04</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {activeStep.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {activeStep.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/60 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                Key Key Takeaways & Deliverables:
              </p>
              {activeStep.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
