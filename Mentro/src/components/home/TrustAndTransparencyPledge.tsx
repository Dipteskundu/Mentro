"use client";

const trustPillars = [
  {
    title: "100% Verified Industry Practitioners",
    subtitle: "No anonymous or unverified instructors",
    description: "Every mentor on Mentro is independently verified by role and employment at top tech companies. You learn directly from active staff engineers and architects.",
    badge: "✔ Employment Verified",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300",
    gradient: "from-emerald-500 to-teal-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "100% Live Interactive Coding",
    subtitle: "Zero recycled 5-year-old video lectures",
    description: "We strictly ban outdated pre-recorded video queues. Every workshop is conducted live with real-time pair coding, direct Q&A, and active mentor code reviews.",
    badge: "⚡ 100% Real-Time Live",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300",
    gradient: "from-indigo-500 to-purple-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Escrow Protected Refund Guarantee",
    subtitle: "Risk-free registration protection",
    description: "Your registration fee is held securely. If any session fails to deliver on its syllabus or quality standards, receive a 100% instant refund—no hassle.",
    badge: "🔒 100% Money-Back",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300",
    gradient: "from-purple-500 to-pink-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Audited Career Transition Badges",
    subtitle: "Verifiable credentials for LinkedIn",
    description: "All student outcomes, review ratings, and certificates are backed by verifiable digital credentials shareable directly to your LinkedIn & GitHub.",
    badge: "🎓 Publicly Verifiable",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300",
    gradient: "from-amber-500 to-orange-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function TrustAndTransparencyPledge() {
  return (
    <section className="py-20 bg-slate-50/70 dark:bg-[#101828] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-500/10 via-emerald-500/10 to-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-4 shadow-sm">
            <span>🛡️ The Mentro Trust Standard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Radical Transparency. Zero Hype.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Most online learning platforms hide behind unverified stats and outdated 5-year-old video recordings. Here is our solemn promise to every student.
          </p>
        </div>

        {/* 4 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-xl backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${pillar.badgeColor}`}>
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                <span className="text-emerald-500">✓</span>
                <span>Enforced on 100% of Mentro sessions</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Trust Banner */}
        <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 backdrop-blur-md text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            <div>
              <p className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">Live Platform Guarantee</p>
              <p className="text-sm font-bold text-slate-900 dark:text-white">99.8% Student Satisfaction Rating across 1,000+ enrolled developers</p>
            </div>
          </div>
          <span className="text-xs font-bold px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 whitespace-nowrap">
            🛡️ Mentro Verified Standard
          </span>
        </div>

      </div>
    </section>
  );
}
