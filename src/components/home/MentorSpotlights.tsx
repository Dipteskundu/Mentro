import Link from "next/link";
import Image from "next/image";
import { mentors } from "@/data/mentors";

const companyColors: Record<string, string> = {
  Google: "bg-blue-50 text-blue-700",
  Meta: "bg-blue-50 text-blue-600",
  OpenAI: "bg-green-50 text-green-700",
  AWS: "bg-orange-50 text-orange-700",
  Figma: "bg-purple-50 text-purple-700",
};

export default function MentorSpotlights() {
  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Learn from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
              Industry Experts
            </span>
        </h2>
        <p className="text-gray-500 text-center mt-3 max-w-xl mx-auto text-lg">
          Our mentors work at the world&apos;s leading tech companies
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="group bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="relative w-16 h-16 mx-auto overflow-hidden rounded-full shadow-lg ring-4 ring-brand-light">
                <Image src={mentor.avatar || "/images/mentor-sarah-chen.jpg"} alt="" fill sizes="64px" className="object-cover" />
              </div>
              <h3 className="mt-4 text-base font-bold text-gray-900">
                {mentor.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {mentor.role}
              </p>
              <span className={`inline-block mt-2 px-2.5 py-1 text-xs font-semibold rounded-full ${(mentor.company && companyColors[mentor.company]) || "bg-gray-100 text-gray-700"}`}>
                {mentor.company}
              </span>
              <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                {mentor.expertise.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/mentors"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Meet All Mentors
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
