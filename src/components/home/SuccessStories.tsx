import Link from "next/link";
import Image from "next/image";
import { successStories } from "@/data/successStories";

function ArrowIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export default function SuccessStories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Success{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
              Stories
            </span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-lg">
            Real transformations from learners who took the leap
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.slice(0, 3).map((story) => (
            <div
              key={story.name}
              className="group relative bg-[#f8f9fc] p-8 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: story.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed text-sm italic">
                &ldquo;{story.quote}&rdquo;
              </p>

              {/* Transformation */}
              <div className="mt-6 p-4 bg-white rounded-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex-1 text-center">
                    <p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium mb-1">Before</p>
                    <p className="text-xs font-semibold text-gray-600 leading-tight">{story.previousRole}</p>
                  </div>
                  <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-[11px] text-brand uppercase tracking-wider font-medium mb-1">After</p>
                    <p className="text-xs font-bold text-gray-900 leading-tight">{story.currentRole}</p>
                  </div>
                </div>
              </div>

              {/* Author + Workshop */}
              <div className="mt-5 pt-5 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-sm shrink-0">
                    <Image src={story.avatar} alt={story.name} fill sizes="40px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-gray-900">{story.name}</p>
                    <p className="text-xs text-gray-500 truncate">{story.company} · {story.timeframe}</p>
                  </div>
                </div>
                <Link
                  href={`/workshop/${story.workshopId}`}
                  className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-hover transition-colors group/link"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="truncate">{story.workshopTitle}</span>
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining stories as smaller cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {successStories.slice(3, 5).map((story) => (
            <div
              key={story.name}
              className="group flex gap-5 bg-[#f8f9fc] p-6 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              <div className="relative w-16 h-16 rounded-xl overflow-hidden ring-2 ring-white shadow-md shrink-0">
                <Image src={story.avatar} alt={story.name} fill sizes="64px" className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-bold text-gray-900">{story.name}</p>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-gray-500">{story.company}</span>
                </div>
                <div className="flex items-center gap-2 text-xs mb-2">
                  <span className="text-gray-400">{story.previousRole}</span>
                  <svg className="w-3 h-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <span className="font-semibold text-brand">{story.currentRole}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <Link
                  href={`/workshop/${story.workshopId}`}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-hover transition-colors"
                >
                  {story.workshopTitle}
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Start Your Journey
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
