import Link from "next/link";
import Image from "next/image";
import { mentors } from "@/data";

const companyColors: Record<string, string> = {
  Google: "bg-blue-100 text-blue-700",
  Meta: "bg-blue-100 text-blue-600",
  OpenAI: "bg-green-100 text-green-700",
  AWS: "bg-orange-100 text-orange-700",
  Figma: "bg-purple-100 text-purple-700",
};

export default function MentorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-[#f8f9fc] py-20">
        <div className="absolute top-10 left-[10%] w-12 h-12 bg-pink-300/50 rounded-full blur-[2px]" />
        <div className="absolute top-20 right-[15%] w-8 h-8 bg-yellow-300/50 rounded-full blur-[2px]" />
        <div className="absolute bottom-10 left-[20%] w-16 h-16 bg-cyan-300/40 rounded-full blur-[2px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
              Mentors
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Learn from industry experts at the world&apos;s leading tech companies.
            Our mentors bring real-world experience to help you grow.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-full blur-xl" />
                      <Image
                        src={`https://picsum.photos/seed/${mentor.name.toLowerCase().replace(/\s+/g, "-")}/200/200`}
                        alt={mentor.name}
                        width={120}
                        height={120}
                        className="relative w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{mentor.role}</p>
                  {mentor.company && (
                    <span className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${companyColors[mentor.company] || "bg-gray-100 text-gray-700"}`}>
                      {mentor.company}
                    </span>
                  )}

                  <p className="mt-4 text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {mentor.bio}
                  </p>

                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {mentor.expertise.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                    {mentor.expertise.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-lg">
                        +{mentor.expertise.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    href="/explore"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-brand hover:text-brand-hover transition-colors"
                  >
                    View Workshops
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Want to Become a Mentor?
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Share your expertise with the next generation of tech professionals.
            Join our network of industry-leading mentors.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center mt-8 px-8 py-4 bg-brand text-white font-semibold rounded-full hover:bg-brand-hover transition-all duration-200 shadow-lg shadow-brand/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            Learn More
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-brand via-brand-hover to-brand relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Learn from the Best?
          </h2>
          <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
            Explore our workshops and start learning from industry experts today.
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center mt-8 px-8 py-4 bg-white text-brand font-bold rounded-full hover:bg-brand-light transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Explore Workshops
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
