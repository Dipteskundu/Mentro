import Link from "next/link";
import Image from "next/image";
import { workshops } from "@/data/workshops";
import { mentors } from "@/data/mentors";

export default function FeaturedWorkshops() {
  const featured = [...workshops]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Trending{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
              Workshops
            </span>
        </h2>
        <p className="text-gray-500 text-center mt-3 max-w-xl mx-auto text-lg">
          Popular sessions loved by our community
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((workshop) => {
            const mentor = mentors.find((m) => m.id === workshop.mentorId);
            return (
              <Link
                key={workshop.id}
                href={`/workshop/${workshop.id}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image src={workshop.imageUrl} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                  {workshop.price === 0 && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                      Free
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-brand-light text-brand text-xs font-medium rounded-full">
                      {workshop.level}
                    </span>
                    <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                      {workshop.sessionType}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-brand transition-colors line-clamp-2">
                    {workshop.title}
                  </h3>

                  {mentor && (
                    <p className="text-sm text-gray-500 mt-2">
                      by {mentor.name} · {mentor.company}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-900">{workshop.rating}</span>
                      <span className="text-xs text-gray-400">({workshop.reviewCount})</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">
                      {workshop.price === 0 ? "Free" : `$${workshop.price}`}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View All Workshops
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
