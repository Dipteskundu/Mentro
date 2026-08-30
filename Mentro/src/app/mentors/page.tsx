"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { mentors, workshops } from "@/data";
import { Mentor } from "@/types";

import MentorCard from "@/components/mentors/MentorCard";
import MentorProfileModal from "@/components/mentors/MentorProfileModal";
import BookMentorshipModal from "@/components/mentors/BookMentorshipModal";
import BecomeMentorModal from "@/components/mentors/BecomeMentorModal";
import MentorSpotlightCarousel from "@/components/mentors/MentorSpotlightCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const expertiseFilters = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Cloud Computing",
  "UI/UX Design",
] as const;

const companyColors: Record<string, string> = {
  "Northstar Studio": "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800/60",
  "Harbor Labs": "bg-sky-50 text-sky-700 border-sky-100 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800/60",
  "Meridian Research": "bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/60",
  "Aster Cloud": "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/60",
  Formline: "bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800/60",
};

const companyFilters = ["All", "Northstar Studio", "Harbor Labs", "Meridian Research", "Aster Cloud", "Formline"] as const;

const faqItems = [
  {
    category: "General",
    question: "How are mentors selected for the platform?",
    answer:
      "Our mentors go through a thoughtful selection process that looks at real product experience, teaching ability, and the quality of their feedback. Every mentor is an active practitioner in their field.",
  },
  {
    category: "1-on-1 Sessions",
    question: "Can I request a specific mentor for 1-on-1 sessions?",
    answer:
      "Yes! You can browse our mentor profiles and request sessions with specific mentors based on their expertise and availability. Simply click 'Request 1-on-1 Mentorship' on any mentor card to choose a date and topic.",
  },
  {
    category: "Workshops",
    question: "What topics do mentors cover?",
    answer:
      "Our mentors cover a wide range of topics including Web Development, Mobile Development, AI/ML, Cloud Computing, DevOps, UI/UX Design, and more. Each mentor specializes in their area of expertise.",
  },
  {
    category: "Application",
    question: "How do I become a mentor on Mentro?",
    answer:
      "We're always looking for experienced professionals to join our mentor network. Click the 'Apply as Mentor' button in the 'Become a Mentor' section to apply. We review applications based on industry experience and teaching potential.",
  },
  {
    category: "1-on-1 Sessions",
    question: "Are mentor sessions free or paid?",
    answer:
      "Mentor sessions vary in pricing. Some introductory webinars are free, while specialized 1-on-1 mentorship sessions and bootcamps have associated costs. Check each session for pricing details.",
  },
];

const values = [
  {
    title: "Share Your Expertise",
    description:
      "Pass on your knowledge and experience to the next generation of tech professionals. Make a real impact on their careers.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Build Your Network",
    description:
      "Connect with a vibrant community of learners, fellow mentors, and industry professionals across the globe.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "Shape Future Talent",
    description:
      "Help mold the future of tech by guiding aspiring developers, designers, and engineers on their learning journey.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    gradient: "from-emerald-500 to-emerald-600",
  },
];

export default function MentorsPage() {
  const [search, setSearch] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState("All");
  const [companyFilter, setCompanyFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"rating" | "learners" | "experience" | "name">("rating");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [selectedProfileMentor, setSelectedProfileMentor] = useState<Mentor | null>(null);
  const [selectedBookingMentor, setSelectedBookingMentor] = useState<Mentor | null>(null);
  const [isBecomeMentorOpen, setIsBecomeMentorOpen] = useState(false);

  const [faqCategory, setFaqCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Filtered & Sorted Mentors
  const filteredMentors = useMemo(() => {
    let result = mentors.filter((mentor) => {
      const matchesSearch =
        search === "" ||
        mentor.name.toLowerCase().includes(search.toLowerCase()) ||
        mentor.role?.toLowerCase().includes(search.toLowerCase()) ||
        mentor.bio.toLowerCase().includes(search.toLowerCase()) ||
        mentor.expertise.some((e) => e.toLowerCase().includes(search.toLowerCase()));

      const matchesExpertise =
        expertiseFilter === "All" ||
        mentor.expertise.some(
          (e) =>
            e.toLowerCase().includes(expertiseFilter.toLowerCase()) ||
            expertiseFilter.toLowerCase().includes(e.toLowerCase())
        );

      const matchesCompany =
        companyFilter === "All" || mentor.company === companyFilter;

      return matchesSearch && matchesExpertise && matchesCompany;
    });

    return result.sort((a, b) => {
      if (sortBy === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
      if (sortBy === "learners") return (b.studentsMentored ?? 0) - (a.studentsMentored ?? 0);
      if (sortBy === "experience") return (b.yearsExperience ?? 0) - (a.yearsExperience ?? 0);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });
  }, [search, expertiseFilter, companyFilter, sortBy]);

  const filteredFaqs = useMemo(() => {
    if (faqCategory === "All") return faqItems;
    return faqItems.filter((item) => item.category === faqCategory);
  }, [faqCategory]);

  return (
    <main className="min-h-screen">
      
          {/* HERO SECTION */}
     
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/40 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-gray-100 dark:border-slate-800 min-h-[560px] lg:min-h-[640px] flex items-center justify-center py-16 sm:py-20 px-4 transition-colors">
        {/* Aurora gradient blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-brand/15 via-purple-500/10 to-transparent dark:from-brand/30 dark:via-purple-500/20 rounded-full blur-[120px] animate-aurora pointer-events-none" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-tl from-indigo-500/15 via-blue-500/10 to-transparent dark:from-indigo-500/25 dark:via-blue-500/15 rounded-full blur-[100px] animate-aurora pointer-events-none" style={{ animationDelay: "5s" }} />
        <div className="absolute top-[30%] left-[50%] w-[400px] h-[400px] bg-gradient-to-r from-purple-500/10 to-pink-500/5 dark:from-purple-500/15 dark:to-pink-500/10 rounded-full blur-[80px] animate-aurora pointer-events-none" style={{ animationDelay: "10s" }} />

        {/* Radial glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-radial-[at_center] from-brand/5 dark:from-brand/10 to-transparent rounded-full pointer-events-none" />

        {/* Decorative glass circles */}
        <div className="absolute top-[10%] left-[15%] w-24 h-24 border border-gray-200/60 dark:border-white/[0.06] rounded-full animate-glow-pulse" />
        <div className="absolute bottom-[15%] right-[12%] w-32 h-32 border border-gray-200/40 dark:border-white/[0.04] rounded-full animate-glow-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[60%] left-[75%] w-16 h-16 border border-gray-200/50 dark:border-white/[0.05] rounded-full animate-glow-pulse" style={{ animationDelay: "3s" }} />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-brand/30 dark:bg-white/30 rounded-full"
            style={{
              left: `${15 + i * 14}%`,
              bottom: "0%",
              animation: `particleDrift ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}

        {/* Main Hero Content */}
        <ScrollReveal className="relative z-20 max-w-3xl mx-auto px-4 text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span className="text-gray-900 dark:text-white">Meet Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              Mentors
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-white/60 max-w-xl mx-auto leading-relaxed">
            Learn from industry experts at the world&apos;s leading tech companies.
            Real experience, real growth.
          </p>

          {/* Glass Search Bar */}
          <div className="mt-8 max-w-lg mx-auto relative">
            <div className="absolute inset-0 backdrop-blur-xl bg-white/80 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-black/20" />
            <div className="relative flex items-center">
              <svg className="absolute left-4 w-5 h-5 text-gray-400 dark:text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search mentors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-28 py-3.5 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/30 text-sm font-medium focus:outline-none"
              />
              <Link
                href="#mentors-grid"
                className="absolute right-2 px-5 py-2 bg-brand text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-md shadow-brand/20"
              >
                Search
              </Link>
            </div>
          </div>

          {/* Glass Stat Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {[
              { label: "Expert Mentors", value: "5+", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { label: "Students", value: "1000+", icon: "M12 4.354a4 4 0 110 7.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
              { label: "Rating", value: "4.8★", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2.5 px-4 py-2 bg-white dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.1] rounded-xl shadow-sm"
              >
                <svg className="w-4 h-4 text-brand dark:text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
                <span className="text-gray-900 dark:text-white font-bold text-xs sm:text-sm">{stat.value}</span>
                <span className="text-gray-500 dark:text-white/40 text-xs">{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FEATURED MENTOR SPOTLIGHT CAROUSEL
          ═══════════════════════════════════════════════════════════ */}
      <MentorSpotlightCarousel
        mentors={mentors}
        onOpenProfile={(m) => setSelectedProfileMentor(m)}
        onBookSession={(m) => setSelectedBookingMentor(m)}
      />

      {/* ═══════════════════════════════════════════════════════════
          SEARCH, CONTROLS & STICKY FILTER BAR
          ═══════════════════════════════════════════════════════════ */}
      <section id="mentors-grid" className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 sticky top-16 z-30 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 space-y-2.5">
          {/* Top Row: Search input + Sort + View switcher */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name, role, company, or skills..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-9 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 transition-all"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Controls: Sort Dropdown & Layout Switcher */}
            <div className="flex items-center gap-3 self-end lg:self-auto">
              <div className="flex items-center gap-2">
                <label className="text-xs font-semibold text-gray-500 dark:text-slate-400">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-1.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand"
                >
                  <option value="rating">Highest Rated ★</option>
                  <option value="learners">Most Learners Mentored</option>
                  <option value="experience">Years of Experience</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>

              {/* View Switcher Buttons */}
              <div className="flex items-center bg-gray-100 dark:bg-slate-800 p-1 rounded-xl border border-gray-200/50 dark:border-slate-700/50">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === "grid" ? "bg-white dark:bg-slate-900 text-brand shadow-sm" : "text-gray-400 hover:text-gray-600 dark:hover:text-slate-200"
                  }`}
                  title="Grid View"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-lg transition-colors ${
                    viewMode === "list" ? "bg-white dark:bg-slate-900 text-brand shadow-sm" : "text-gray-400 hover:text-gray-600 dark:hover:text-slate-200"
                  }`}
                  title="List View"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: Expertise & Company filters */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1 border-t border-gray-100 dark:border-slate-800/60">
            {/* Expertise Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-gray-400 dark:text-slate-500 mr-1">Domain:</span>
              {expertiseFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setExpertiseFilter(filter)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                    expertiseFilter === filter
                      ? "bg-brand text-white shadow-md shadow-brand/25"
                      : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Company Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-gray-400 dark:text-slate-500 mr-1">Company:</span>
              {companyFilters.map((company) => (
                <button
                  key={company}
                  onClick={() => setCompanyFilter(company)}
                  className={`px-2.5 py-0.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    companyFilter === company
                      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-md"
                      : company === "All"
                      ? "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200"
                      : `${companyColors[company]?.split(" ")[0] || "bg-gray-100"} ${companyColors[company]?.split(" ")[1] || "text-gray-600"} hover:opacity-80`
                  }`}
                >
                  {company}
                </button>
              ))}

              {(search || expertiseFilter !== "All" || companyFilter !== "All") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setExpertiseFilter("All");
                    setCompanyFilter("All");
                  }}
                  className="ml-2 text-xs text-brand hover:underline font-bold"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MENTOR CARDS GRID & LIST SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-10 sm:py-12 bg-gray-50/60 dark:bg-slate-950 transition-colors min-h-[450px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header count info */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-slate-400">
              Showing <span className="text-gray-900 dark:text-white font-bold">{filteredMentors.length}</span> {filteredMentors.length === 1 ? "mentor" : "mentors"}
            </p>
          </div>

          {filteredMentors.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm max-w-lg mx-auto">
              <div className="w-14 h-14 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-gray-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">No mentors found matching criteria</h3>
              <p className="mt-1 text-xs text-gray-500 dark:text-slate-400">Try loosening your search keywords or switching filters.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setExpertiseFilter("All");
                  setCompanyFilter("All");
                }}
                className="mt-4 px-4 py-2 bg-brand text-white text-xs font-bold rounded-xl hover:bg-brand-hover transition-colors shadow-md shadow-brand/20"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredMentors.map((mentor, index) => (
                <MentorCard
                  key={mentor.id}
                  mentor={mentor}
                  workshops={workshops}
                  index={index}
                  viewMode={viewMode}
                  companyColors={companyColors}
                  onSelectExpertise={(exp) => setExpertiseFilter(exp)}
                  onOpenProfile={(m) => setSelectedProfileMentor(m)}
                  onBookSession={(m) => setSelectedBookingMentor(m)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY MENTOR WITH US / IMPACT & TIMELINE SECTION (THEME-ADAPTIVE)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white relative overflow-hidden border-t border-gray-200/80 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <span className="px-3 py-1 bg-brand-light dark:bg-brand/20 border border-brand/20 rounded-full text-xs font-semibold text-brand dark:text-brand-light">
              Mentorship Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-3">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover dark:from-blue-400 dark:to-indigo-400">Mentor & Learn</span> With Us?
            </h2>
            <p className="text-gray-500 dark:text-slate-400 mt-2 max-w-xl mx-auto text-xs sm:text-sm">
              Join a community of senior engineers and leaders driving career transformation worldwide
            </p>
          </ScrollReveal>

          {/* Key Value Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {values.map((value, i) => (
              <ScrollReveal
                key={value.title}
                delay={i * 0.15}
                className="group bg-white dark:bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-gray-200/80 dark:border-slate-800 hover:border-brand/40 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 text-base sm:text-lg font-bold text-gray-900 dark:text-white">{value.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-slate-300 leading-relaxed">{value.description}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* How Mentorship Works Timeline */}
          <div className="bg-white dark:bg-slate-900/90 border border-gray-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-center text-gray-900 dark:text-white mb-8">How Mentorship Works on Mentro</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Browse & Match", desc: "Select practitioners based on company experience, tech stack, and verified student feedback." },
                { step: "02", title: "Join Workshop or 1-on-1", desc: "Participate in interactive studio workshops or request custom 45-min code review sessions." },
                { step: "03", title: "Get Direct Feedback & Grow", desc: "Receive production-grade feedback on architecture, portfolio code, and career advancement." },
              ].map((st, i) => (
                <div key={i} className="text-center sm:text-left space-y-1.5">
                  <div className="w-10 h-10 rounded-xl bg-brand text-white font-bold text-sm flex items-center justify-center mx-auto sm:mx-0 shadow-md shadow-brand/20">
                    {st.step}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white pt-2">{st.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CATEGORIZED FAQ SECTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-white dark:bg-slate-900 transition-colors border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">Questions</span>
            </h2>
            <p className="text-gray-500 dark:text-slate-400 mt-1.5 text-xs sm:text-sm">Everything you need to know about our mentors and 1-on-1 sessions</p>
          </ScrollReveal>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-6">
            {["All", "General", "1-on-1 Sessions", "Workshops", "Application"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFaqCategory(cat);
                  setOpenFaq(null);
                }}
                className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all ${
                  faqCategory === cat
                    ? "bg-brand text-white shadow-md shadow-brand/20"
                    : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-2.5">
            {filteredFaqs.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200/80 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-brand/30 transition-colors bg-white dark:bg-slate-900"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white pr-3">{item.question}</span>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === index ? "bg-brand text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400"}`}>
                    <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${openFaq === index ? "rotate-45" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-5 pb-4 text-gray-600 dark:text-slate-300 leading-relaxed text-xs border-t border-gray-100 dark:border-slate-800/60 pt-2.5">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          BECOME A MENTOR CTA BANNER (THEME-ADAPTIVE)
          ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-gray-50/60 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.2} className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 dark:border-slate-800 text-gray-900 dark:text-white transition-colors">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-light dark:bg-brand/20 border border-brand/20 rounded-full text-xs font-semibold text-brand dark:text-brand-light w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Practitioner Network
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                  Want to Become a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover dark:from-blue-400 dark:to-purple-400">Mentor</span>?
                </h2>
                <p className="text-gray-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Share your expertise with the next generation of tech professionals. Join our network of staff engineers and design leaders making an impact.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setIsBecomeMentorOpen(true)}
                    className="inline-flex items-center px-5 py-3 bg-brand text-white font-bold text-xs sm:text-sm rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-md shadow-brand/20 hover:scale-105"
                  >
                    Apply as Practitioner Mentor
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <Link href="/about" className="inline-flex items-center px-5 py-3 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 font-semibold text-xs sm:text-sm rounded-xl hover:bg-gray-200 dark:hover:bg-slate-700 transition-all border border-gray-200/60 dark:border-slate-700">
                    Learn More About Mentro
                  </Link>
                </div>
              </div>

              {/* Right Side Visual Panel */}
              <div className="relative h-64 lg:h-auto bg-gradient-to-br from-brand-light/60 via-indigo-50/50 to-purple-50/40 dark:from-brand/20 dark:via-slate-800 dark:to-purple-950/40 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-200/60 dark:border-slate-800">
                <div className="relative z-10 space-y-3">
                  <p className="text-xs font-bold text-brand dark:text-brand-light uppercase tracking-wider">Top Mentor Network Benefits</p>
                  <ul className="space-y-1.5 text-xs text-gray-700 dark:text-slate-200 font-medium">
                    <li className="flex items-center gap-2">✓ Earn revenue through paid workshops and 1-on-1s</li>
                    <li className="flex items-center gap-2">✓ Expand your personal brand and speaking opportunities</li>
                    <li className="flex items-center gap-2">✓ Help shape future talent across 50+ tech domains</li>
                  </ul>
                </div>

                {/* Avatar Stack */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-gray-200/60 dark:border-slate-800">
                  <div className="flex -space-x-2.5 overflow-hidden">
                    {mentors.slice(0, 5).map((m) => (
                      <div key={m.id} className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 overflow-hidden relative">
                        <Image src={m.avatar || "/images/mentor-sarah-chen.jpg"} alt={m.name} fill sizes="32px" className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 dark:text-slate-300 font-semibold">{mentors.length}+ Active Mentors</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INTERACTIVE MODALS
          ═══════════════════════════════════════════════════════════ */}
      <MentorProfileModal
        mentor={selectedProfileMentor}
        workshops={workshops}
        onClose={() => setSelectedProfileMentor(null)}
        onBookSession={(m) => setSelectedBookingMentor(m)}
        companyColors={companyColors}
      />

      <BookMentorshipModal
        mentor={selectedBookingMentor}
        onClose={() => setSelectedBookingMentor(null)}
      />

      <BecomeMentorModal
        isOpen={isBecomeMentorOpen}
        onClose={() => setIsBecomeMentorOpen(false)}
      />
    </main>
  );
}
