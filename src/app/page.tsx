import Link from "next/link";
import { TOPICS } from "@/utils/constants";
import FeaturedWorkshops from "@/components/home/FeaturedWorkshops";
import HowItWorks from "@/components/home/HowItWorks";
import MentorSpotlights from "@/components/home/MentorSpotlights";
import TrustedBy from "@/components/home/TrustedBy";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f8f9fc] min-h-[calc(100vh-64px)] flex flex-col items-center justify-center py-16 px-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-gradient-to-br from-blue-400/20 via-purple-400/15 to-pink-400/20 rounded-full blur-3xl" />

        <div className="relative text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            What do you want to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-hover to-brand">
              learn?
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto">
            Pick a topic to explore workshops & mentors
          </p>
        </div>

        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full mb-12">
          {TOPICS.map((topic) => (
            <Link
              key={topic.label}
              href={`/explore?search=${encodeURIComponent(topic.label)}`}
              className={`group relative bg-gradient-to-br ${topic.gradient} p-5 sm:p-6 rounded-2xl text-white font-semibold text-center hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer`}
            >
              <svg className="w-7 h-7 sm:w-8 sm:h-8 mx-auto mb-2.5 opacity-90 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={topic.icon} />
              </svg>
              <span className="text-xs sm:text-sm leading-tight">{topic.label}</span>
            </Link>
          ))}
        </div>

        <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500 mb-8">
          <span><strong className="text-gray-900">12+</strong> Workshops</span>
          <span className="hidden sm:inline">·</span>
          <span><strong className="text-gray-900">5+</strong> Mentors</span>
          <span className="hidden sm:inline">·</span>
          <span><strong className="text-gray-900">1000+</strong> Students</span>
          <span className="hidden sm:inline">·</span>
          <span><strong className="text-gray-900">4.8★</strong> Rating</span>
        </div>

        <Link
          href="/explore"
          className="relative inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Browse All Workshops
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: "Workshops", value: "12+", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { label: "Expert Mentors", value: "5+", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { label: "Students", value: "1000+", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Rating", value: "4.8", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
              Mentro
            </span>
            ?
          </h2>
          <p className="text-gray-500 text-center mt-3 max-w-xl mx-auto text-lg">
            Everything you need to accelerate your learning journey
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert-Led Workshops",
                description: "Learn from industry professionals with real-world experience at top companies.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                gradient: "from-blue-500 to-blue-600",
              },
              {
                title: "1-on-1 Mentorship",
                description: "Get personalized guidance from mentors in your field of interest.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                title: "Hands-On Projects",
                description: "Build real projects and gain practical, portfolio-worthy experience.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                gradient: "from-green-500 to-green-600",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedBy />

      {/* New Sections */}
      <FeaturedWorkshops />
      <HowItWorks />
      <MentorSpotlights />
      <Testimonials />
      <FAQ />

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-brand via-brand-hover to-brand relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
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
    </div>
  );
}
