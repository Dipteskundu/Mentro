"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ErrorPageProps {
  errorCode: string;
  title: string;
  description: string;
  showSearch?: boolean;
}

function Illustration() {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-2xl mx-auto"
    >
      {/* Bench/Table */}
      <rect x="100" y="220" width="400" height="12" rx="6" fill="#1a1a1a" />
      <rect x="120" y="232" width="360" height="4" rx="2" fill="#1a1a1a" />
      <rect x="140" y="236" width="320" height="40" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="3" />
      
      {/* Bench Legs */}
      <path d="M160 276 L140 340" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <path d="M440 276 L460 340" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <path d="M140 340 L180 340" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      <path d="M420 340 L460 340" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />
      
      {/* Cross legs */}
      <path d="M200 276 L300 340" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
      <path d="M400 276 L300 340" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />

      {/* Items on shelf */}
      {/* Wine glasses */}
      <circle cx="200" cy="256" r="8" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M192 256 L192 268 L200 268 L208 268 L208 256" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      <circle cx="224" cy="256" r="8" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M216 256 L216 268 L224 268 L232 268 L232 256" stroke="#1a1a1a" strokeWidth="2" fill="none" />

      {/* Plant */}
      <ellipse cx="270" cy="260" rx="12" ry="6" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M270 254 L270 240 M265 248 L270 240 M275 248 L270 240" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />

      {/* Vase */}
      <ellipse cx="310" cy="260" rx="10" ry="8" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M305 252 L308 238 L312 238 L315 252" stroke="#1a1a1a" strokeWidth="2" fill="none" />

      {/* Plant 2 */}
      <ellipse cx="350" cy="260" rx="10" ry="6" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M350 254 L350 236 M345 244 L350 236 M355 244 L350 236" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />

      {/* Books/Binders */}
      <rect x="380" y="240" width="12" height="28" rx="2" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="394" y="244" width="12" height="24" rx="2" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="408" y="242" width="12" height="26" rx="2" fill="none" stroke="#1a1a1a" strokeWidth="2" />

      {/* Person 1 (Female) - Sitting on left */}
      {/* Hair */}
      <path d="M220 100 Q200 90 195 120 Q190 150 200 170 L210 160 Q205 140 210 120 Q215 100 220 100" fill="#1a1a1a" />
      
      {/* Head */}
      <ellipse cx="225" cy="115" rx="18" ry="20" fill="#fef3c7" stroke="#1a1a1a" strokeWidth="2.5" />
      
      {/* Body - Yellow patterned top */}
      <path d="M210 135 L200 220 L250 220 L240 135 Q225 125 210 135" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="2.5" />
      
      {/* Pattern on top */}
      <circle cx="218" cy="160" r="4" fill="#1a1a1a" />
      <circle cx="232" cy="155" r="3" fill="#1a1a1a" />
      <circle cx="225" cy="175" r="5" fill="#1a1a1a" />
      <circle cx="215" cy="190" r="3" fill="#1a1a1a" />
      <circle cx="235" cy="185" r="4" fill="#1a1a1a" />
      
      {/* Arms */}
      <path d="M210 145 L170 180 L165 175" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M240 145 L260 170 L270 165" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Laptop */}
      <rect x="145" y="168" width="40" height="28" rx="3" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="148" y="171" width="34" height="20" rx="2" fill="#374151" />
      
      {/* Legs */}
      <path d="M210 220 L180 220 L150 210" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M240 220 L280 220 L310 210" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Shoes */}
      <ellipse cx="145" cy="208" rx="12" ry="6" fill="#1a1a1a" />
      <ellipse cx="315" cy="208" rx="12" ry="6" fill="#1a1a1a" />

      {/* Person 2 (Male) - Sitting on right */}
      {/* Hair */}
      <path d="M350 80 Q340 70 345 95 Q350 85 360 80 Q370 75 375 90 Q380 70 370 80 L350 80" fill="#1a1a1a" />
      
      {/* Head */}
      <ellipse cx="360" cy="105" rx="18" ry="20" fill="#fef3c7" stroke="#1a1a1a" strokeWidth="2.5" />
      
      {/* Body - Black top */}
      <path d="M345 125 L340 220 L390 220 L385 125 Q365 115 345 125" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2.5" />
      
      {/* Arms */}
      <path d="M345 135 L320 160 L315 155" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M385 135 L400 155 L405 150" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Phone */}
      <rect x="400" y="148" width="18" height="28" rx="4" fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" />
      <rect x="403" y="152" width="12" height="20" rx="2" fill="#374151" />
      
      {/* Yellow pants */}
      <path d="M345 220 L340 300 L360 300 L365 220" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="2.5" />
      <path d="M370 220 L375 300 L395 300 L390 220" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="2.5" />
      
      {/* Shoes */}
      <ellipse cx="350" cy="304" rx="12" ry="6" fill="#1a1a1a" />
      <ellipse cx="385" cy="304" rx="12" ry="6" fill="#1a1a1a" />
    </svg>
  );
}

function GeometricShapes() {
  return (
    <>
      {/* Top-left yellow diamond */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48"
      >
        <div className="absolute top-4 left-4 w-20 h-20 sm:w-28 sm:h-28 bg-yellow-300 rotate-45 rounded-lg opacity-90" />
        <div className="absolute top-8 left-8 w-16 h-16 sm:w-24 sm:h-24 border-2 border-gray-200 rotate-45 rounded-lg" />
      </motion.div>

      {/* Bottom-right yellow shape */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72"
      >
        <div className="absolute bottom-4 right-4 w-32 h-32 sm:w-48 sm:h-48 bg-yellow-300 rounded-3xl rotate-12 opacity-80" />
        <div className="absolute bottom-12 right-12 w-24 h-24 sm:w-36 sm:h-36 border-2 border-gray-200 rounded-3xl rotate-12" />
      </motion.div>

      {/* Center-right small diamond */}
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 45 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-1/3 right-8 sm:right-16 w-8 h-8 sm:w-12 sm:h-12"
      >
        <div className="w-full h-full bg-yellow-300 rotate-45 rounded-md border-4 border-white shadow-lg" />
      </motion.div>

      {/* Left-center small diamond */}
      <motion.div
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 1, rotate: -45 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-1/3 left-8 sm:left-16 w-6 h-6 sm:w-10 sm:h-10"
      >
        <div className="w-full h-full bg-yellow-300 rotate-45 rounded-md border-4 border-white shadow-lg" />
      </motion.div>
    </>
  );
}

export default function ErrorPage({
  errorCode,
  title,
  description,
  showSearch = false,
}: ErrorPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/explore?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/explore");
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#f7f8fc] dark:bg-slate-950">
      <GeometricShapes />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Illustration />
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-bold rounded-full mb-4">
            Error {errorCode}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base sm:text-lg text-gray-600 dark:text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Search Bar (optional) */}
        {showSearch && (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onSubmit={handleSearchSubmit}
            className="max-w-md mx-auto mb-8"
          >
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="What do you want to learn?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent shadow-sm transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 px-5 py-2.5 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 text-sm font-bold rounded-lg transition-colors"
              >
                Search
              </button>
            </div>
          </motion.form>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-brand hover:bg-brand-hover text-white font-bold text-sm rounded-xl shadow-lg shadow-brand/25 transition-all hover:scale-105"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Return to Home
          </Link>

          <Link
            href="/my-learning"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-200 font-semibold text-sm rounded-xl border-2 border-gray-200 dark:border-slate-700 hover:border-brand dark:hover:border-brand hover:text-brand dark:hover:text-brand-light transition-all"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Go to Learning
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
