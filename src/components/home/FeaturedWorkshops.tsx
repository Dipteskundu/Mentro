import Link from "next/link";
import Image from "next/image";
import { workshops } from "@/data/workshops";
import { mentors } from "@/data/mentors";

export default function FeaturedWorkshops() {
  const featured = [...workshops]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-[#101828] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-xs sm:text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-3">
            Hand-Picked Curricula
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trending Workshops
          </p>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base sm:text-lg">
            Popular hands-on sessions loved by our developer community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((workshop) => {
            const mentor = mentors.find((m) => m.id === workshop.mentorId);
            return (
              <Link
                key={workshop.id}
                href={`/workshop/${workshop.id}`}
                className="group bg-white dark:bg-slate-900/80 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={workshop.imageUrl}
                      alt={workshop.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    {workshop.price === 0 && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-md">
                        Free
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-lg">
                        {workshop.level}
                      </span>
                      <span className="px-2.5 py-1 bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-lg">
                        {workshop.sessionType}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                      {workshop.title}
                    </h3>

                    {mentor && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
                        by {mentor.name} · {mentor.company}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">{workshop.rating}</span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">({workshop.reviewCount})</span>
                    </div>
                    <span className="text-sm font-extrabold text-indigo-600 dark:text-indigo-400">
                      {workshop.price === 0 ? "Free" : `$${workshop.price}`}
                    </span>
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-sm rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>View All Workshops</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
