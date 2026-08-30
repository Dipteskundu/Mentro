"use client";

const stats = [
  {
    id: "stat-1",
    label: "Active Learners",
    value: "1,000+",
    change: "+40% this quarter",
    icon: (
      <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 7.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    gradient: "from-indigo-500/10 to-indigo-500/0",
    borderColor: "border-indigo-500/20",
  },
  {
    id: "stat-2",
    label: "Industry Leaders",
    value: "5+",
    change: "Top Tech Mentors",
    icon: (
      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.18.12l-.4.2a2 2 0 00-1.02 1.83V20a1 1 0 001 1h16a1 1 0 001-1v-2.342a2 2 0 00-.572-1.23zM12 11a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
    gradient: "from-purple-500/10 to-purple-500/0",
    borderColor: "border-purple-500/20",
  },
  {
    id: "stat-3",
    label: "Workshops Available",
    value: "12+",
    change: "Hands-on curricula",
    icon: (
      <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-pink-500/10 to-pink-500/0",
    borderColor: "border-pink-500/20",
  },
  {
    id: "stat-4",
    label: "Success Rate",
    value: "95%",
    change: "Career growth rate",
    icon: (
      <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    gradient: "from-emerald-500/10 to-emerald-500/0",
    borderColor: "border-emerald-500/20",
  },
];

export default function AboutStats() {
  return (
    <section className="relative py-12 bg-white dark:bg-[#101828] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`group relative p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border ${stat.borderColor} border-slate-200/80 dark:border-slate-800 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              {/* Subtle background hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-200/60 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400">
                  {stat.change}
                </span>
              </div>

              <div className="relative">
                <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
