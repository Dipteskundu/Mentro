import Link from "next/link";

const values = [
  {
    title: "Learn by Doing",
    description: "Hands-on workshops and real projects, not just theory.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Expert Mentorship",
    description: "Learn directly from industry leaders at top tech companies.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "Career Growth",
    description: "Build skills that employers actually look for.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    gradient: "from-green-500 to-green-600",
  },
  {
    title: "Community",
    description: "Join a network of 1000+ learners and professionals.",
    icon: "M12 4.354a4 4 0 110 7.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    gradient: "from-orange-500 to-orange-600",
  },
];

const stats = [
  { label: "Students Enrolled", value: "1,000+" },
  { label: "Expert Mentors", value: "5+" },
  { label: "Workshops Available", value: "12+" },
  { label: "Success Rate", value: "95%" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#f8f9fc] py-20">
        <div className="absolute top-10 left-[10%] w-12 h-12 bg-pink-300/50 rounded-full blur-[2px]" />
        <div className="absolute top-20 right-[15%] w-8 h-8 bg-yellow-300/50 rounded-full blur-[2px]" />
        <div className="absolute bottom-10 left-[20%] w-16 h-16 bg-cyan-300/40 rounded-full blur-[2px]" />
        <div className="absolute bottom-20 right-[10%] w-20 h-20 bg-blue-300/30 rounded-full blur-[2px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
              Mentro
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We&apos;re on a mission to make quality tech education accessible to everyone.
            Learn from industry experts, build real projects, and advance your career.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-2xl">
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Mentro was founded with a simple belief: everyone deserves access to world-class tech education.
              We connect aspiring developers with industry experts from companies like Google, Meta, OpenAI,
              and AWS to provide hands-on learning experiences that actually matter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Browse Workshops",
                  description: "Explore our curated collection of workshops, mentorship sessions, and bootcamps across various tech topics.",
                },
                {
                  step: "02",
                  title: "Register & Learn",
                  description: "Sign up for sessions that fit your schedule. Learn from industry experts through hands-on projects and real-world examples.",
                },
                {
                  step: "03",
                  title: "Grow Your Career",
                  description: "Apply your new skills, build your portfolio, and advance your career with confidence.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand text-white font-bold rounded-xl flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand via-brand-hover to-brand relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start Learning?
          </h2>
          <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
            Join thousands of students building their skills with expert-led workshops and mentorship.
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center mt-8 px-8 py-4 bg-white text-brand font-bold rounded-full hover:bg-brand-light transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Get Started Free
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
