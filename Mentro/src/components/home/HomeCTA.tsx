"use client";

import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-20 bg-white dark:bg-[#101828] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-950 px-6 py-16 sm:px-12 sm:py-20 text-center shadow-2xl border border-indigo-700/50">
          
          {/* Ambient lighting blobs */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl pointer-events-none animate-float-slow" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl pointer-events-none animate-float-medium" />
          
          <div className="relative max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/10 mb-2">
              <span>🚀 Take the Next Step in Your Career</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Master Real-World Tech Skills?
            </h2>

            <p className="text-base sm:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
              Join 1,000+ ambitious developers mastering production skills with live workshops and 1-on-1 industry mentorship.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/explore"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-indigo-900 font-bold text-base shadow-xl hover:bg-indigo-50 hover:scale-105 transition-all duration-200"
              >
                <span>Browse All Workshops</span>
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/mentors"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 hover:bg-white/20 backdrop-blur-md transition-all duration-200"
              >
                <span>Meet Our Mentors</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
