"use client";

import Link from "next/link";
import Image from "next/image";
import { mentors } from "@/data/mentors";

export default function MentorSpotlightGrid() {
  return (
    <section className="py-20 bg-white dark:bg-[#101828] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-xs sm:text-sm font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-3">
              Learn From Industry Leaders
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Expert Mentors
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-400 text-base max-w-2xl">
              Our mentors are staff engineers, mobile architects, and ML leads shaping products at scale.
            </p>
          </div>

          <Link
            href="/mentors"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold text-sm transition-all duration-200 self-start md:self-auto"
          >
            <span>View All Mentors</span>
            <span>→</span>
          </Link>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.slice(0, 3).map((mentor) => (
            <div
              key={mentor.id}
              className="group relative bg-slate-50 dark:bg-slate-900/60 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Avatar + Company Badge */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-500/20 shadow-md group-hover:scale-105 transition-transform">
                    <Image
                      src={mentor.avatar || "/images/mentor-sarah-chen.jpg"}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {mentor.role}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {mentor.company}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {mentor.bio}
                </p>
              </div>

              {/* Expertise Pills */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-1.5">
                {mentor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
