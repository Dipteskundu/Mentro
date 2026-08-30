const steps = [
  {
    number: "01",
    title: "Pick a Topic",
    description: "Browse through 8 in-demand tech topics and find what excites you.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    number: "02",
    title: "Choose a Workshop",
    description: "Select from live workshops, mentorship sessions, bootcamps, or webinars.",
    icon: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z",
  },
  {
    number: "03",
    title: "Learn Live",
    description: "Join interactive sessions led by experienced product, design, and engineering practitioners.",
    icon: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z",
  },
  {
    number: "04",
    title: "Grow Your Skills",
    description: "Build your portfolio, earn certificates, and advance your career.",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          How{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
            Mentro
          </span>{" "}
          Works
        </h2>
        <p className="text-gray-500 text-center mt-3 max-w-xl mx-auto text-lg">
          Start learning in four simple steps
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand/20 via-brand-medium to-brand/20" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-brand to-brand-hover rounded-2xl flex items-center justify-center shadow-lg shadow-brand/20 mb-6">
                <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                </svg>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center text-xs font-bold text-gray-900">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-[220px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
