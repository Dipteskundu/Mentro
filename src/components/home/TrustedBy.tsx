const companies = [
  "Northstar Studio",
  "Harbor Labs",
  "Meridian Research",
  "Aster Cloud",
  "Formline",
  "Lumen Works",
  "Civic Thread",
  "Atlas Ridge",
];

export default function TrustedBy() {
  const duplicated = [...companies, ...companies];

  return (
    <section className="py-14 bg-white dark:bg-[#101828] border-y border-slate-100 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-8">
          Practitioners from thoughtful engineering & product teams
        </p>
      </div>

      <div className="group relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicated.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex-shrink-0 px-10 sm:px-14 flex items-center"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-400 dark:text-slate-600 opacity-60 hover:opacity-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
