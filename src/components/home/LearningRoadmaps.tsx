"use client";

import Link from "next/link";

const roadmaps = [
  {
    title: "Fullstack Web Engineering Track",
    subtitle: "React · TypeScript · Next.js · Design Systems",
    description: "From component design systems to production Next.js deployment and state management at scale.",
    workshopsCount: "3 Workshops Included",
    level: "Intermediate",
    duration: "12 Hours Live",
    gradient: "from-indigo-500 via-indigo-600 to-purple-600",
    badge: "🔥 Most Popular",
    searchTopic: "Web Development",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Mobile App Architect Track",
    subtitle: "React Native · Flutter · iOS & Android Native",
    description: "Master cross-platform mobile development, native state bridges, and app store deployment.",
    workshopsCount: "3 Workshops Included",
    level: "All Levels",
    duration: "10 Hours Live",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    badge: "📱 Mobile Focus",
    searchTopic: "Mobile Development",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Applied AI & ML Specialist Track",
    subtitle: "Python · Deep Learning · PyTorch · LLM Fine-Tuning",
    description: "Practical machine learning for real products—from data pipeline design to LLM deployment.",
    workshopsCount: "3 Workshops Included",
    level: "Intermediate",
    duration: "14 Hours Live",
    gradient: "from-purple-500 via-purple-600 to-pink-600",
    badge: "🤖 High Demand",
    searchTopic: "AI/ML",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
  },
  {
    title: "DevOps & Cloud Architect Track",
    subtitle: "Docker · Kubernetes · AWS · CI/CD Pipelines",
    description: "Design resilient cloud infrastructure, automated deployment pipelines, and high-uptime systems.",
    workshopsCount: "3 Workshops Included",
    level: "Advanced",
    duration: "15 Hours Live",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    badge: "☁️ Cloud Expert",
    searchTopic: "DevOps",
    icon: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z",
  },
];

export default function LearningRoadmaps() {
  return (
    <section className="py-20 bg-slate-50/70 dark:bg-[#101828] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-4">
            <span>🗺️ Structured Learning Paths</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curated Career Roadmaps
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Follow a clear, step-by-step track designed to take you from core concepts to production mastery.
          </p>
        </div>

        {/* Roadmaps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmaps.map((track) => (
            <div
              key={track.title}
              className="group relative bg-white dark:bg-slate-900/80 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${track.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={track.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {track.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {track.title}
                </h3>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {track.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {track.description}
                </p>
              </div>

              <div>
                {/* Metrics Pill Row */}
                <div className="flex flex-wrap items-center gap-2 mb-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400">
                  <span className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300">
                    {track.workshopsCount}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                    Level: {track.level}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                    {track.duration}
                  </span>
                </div>

                {/* CTA Link */}
                <Link
                  href={`/explore?search=${encodeURIComponent(track.searchTopic)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-900 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md group-hover:shadow-indigo-500/25"
                >
                  <span>Explore Track Workshops</span>
                  <span>→</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
