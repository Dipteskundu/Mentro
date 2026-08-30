"use client";

const values = [
  {
    title: "Learn by Doing",
    subtitle: "Practical Hands-on Projects",
    description: "Skip theoretical slides. Write real code, build production architectures, and debug real-world scenarios alongside experienced mentors.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    badge: "100% Practical",
    gradient: "from-blue-500 via-indigo-600 to-indigo-700",
    glowColor: "group-hover:shadow-indigo-500/25",
  },
  {
    title: "Expert Mentorship",
    subtitle: "Direct Access to Tech Leaders",
    description: "Learn straight from staff engineers and leads at top engineering organizations who navigate scale and complex systems daily.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    badge: "Industry Leaders",
    gradient: "from-purple-500 via-purple-600 to-pink-600",
    glowColor: "group-hover:shadow-purple-500/25",
  },
  {
    title: "Career Growth",
    subtitle: "Measurable Impact & Outcomes",
    description: "Equip yourself with high-demand skills that stand out in interviews, accelerate promotions, and open doors to premier engineering teams.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    badge: "Career Focused",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    glowColor: "group-hover:shadow-emerald-500/25",
  },
  {
    title: "Global Community",
    subtitle: "Network & Peer Learning",
    description: "Join an active network of over 1,000+ ambitious developers, designers, and tech professionals collaborating and growing together.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.4M9 20h6a2 2 0 002-2v-1a2 2 0 00-2-2H9a2 2 0 00-2 2v1a2 2 0 002 2z" />
      </svg>
    ),
    badge: "1,000+ Members",
    gradient: "from-amber-500 via-orange-600 to-red-600",
    glowColor: "group-hover:shadow-orange-500/25",
  },
];

export default function CoreValuesGrid() {
  return (
    <section className="py-20 bg-white dark:bg-[#101828] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-3">
            Our Guiding Pillars
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Values That Drive Mentro
          </p>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Everything we build is anchored around creating an authentic, high-impact learning experience for every student.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val) => (
            <div
              key={val.title}
              className={`group relative bg-slate-50/80 dark:bg-slate-900/60 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl hover:shadow-2xl ${val.glowColor} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${val.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {val.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {val.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {val.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  {val.subtitle}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                <span>Learn more</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
