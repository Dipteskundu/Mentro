const companies = [
  "Google",
  "Meta",
  "OpenAI",
  "AWS",
  "Figma",
  "Microsoft",
  "Apple",
  "Netflix",
  "Stripe",
  "Shopify",
  "Spotify",
  "Airbnb",
];

export default function TrustedBy() {
  const duplicated = [...companies, ...companies];

  return (
    <section className="py-14 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
          Our mentors come from
        </p>
      </div>

      <div className="group relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicated.map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="flex-shrink-0 px-10 sm:px-14 flex items-center"
            >
              <span className="text-2xl sm:text-3xl font-bold text-gray-400 opacity-60 hover:opacity-100 hover:text-gray-700 transition-all duration-200 whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
