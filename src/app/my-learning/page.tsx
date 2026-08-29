"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RegisteredSessions from "@/components/dashboard/RegisteredSessions";
import SavedSessions from "@/components/dashboard/SavedSessions";
import UpcomingSchedule from "@/components/dashboard/UpcomingSchedule";
import LiveRoomModal from "@/components/dashboard/LiveRoomModal";
import { useApp } from "@/context/AppContext";
import { workshops, mentors } from "@/data";
import { Workshop } from "@/types";

type Tab = "upcoming" | "registered" | "saved";

const tabs = [
  {
    id: "upcoming" as Tab,
    label: "Upcoming Schedule",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    id: "registered" as Tab,
    label: "Registered",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    id: "saved" as Tab,
    label: "Saved Sessions",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
];

export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState<Tab>("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLiveRoomWorkshop, setActiveLiveRoomWorkshop] = useState<Workshop | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const { state } = useApp();

  // Find next upcoming workshop registered by user
  const registeredWorkshops = state.registrations
    .map((reg) => workshops.find((w) => w.id === reg.workshopId))
    .filter((w): w is Workshop => Boolean(w))
    .filter((w) => new Date(w.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const nextWorkshop = registeredWorkshops[0] || workshops[0]; // Fallback to first workshop if none registered yet
  const nextMentor = mentors.find((m) => m.id === nextWorkshop?.mentorId) || mentors[0];

  const handleExportCalendar = (workshop: Workshop) => {
    setToastMessage(`📅 Event "${workshop.title}" exported to calendar!`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <main className="min-h-screen bg-gray-50/70 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 px-4 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold rounded-2xl shadow-2xl border border-slate-700 animate-fade-in-up">
          {toastMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header with Streak & Goal Bar - Premium Glassmorphism Design */}
        <header className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/30 dark:border-slate-700/50 shadow-xl shadow-brand/5 space-y-6">
          {/* Greeting & Streak */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold text-brand uppercase tracking-wider">{getGreeting()} 👋</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 border border-amber-200/60 dark:border-amber-800/60 text-amber-700 dark:text-amber-400 text-xs font-extrabold rounded-full shadow-sm shadow-amber-500/10">
              🔥 4-Day Learning Streak
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-indigo-600 to-purple-600">
                Learning Hub
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-slate-400 max-w-2xl">
              Track your weekly momentum, attend live studio workshops, and review saved sessions.
            </p>
          </div>

          {/* Weekly Goal Widget - Full Width */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800/80 dark:to-slate-800/50 p-5 rounded-2xl border border-gray-200/60 dark:border-slate-700/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-700 dark:text-slate-300">Weekly Target</span>
              <span className="text-sm font-extrabold text-brand">3.5 / 5.0 hrs</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-brand to-purple-600 h-full rounded-full w-[70%] transition-all duration-700 ease-out" />
            </div>
            <p className="text-xs text-gray-400 dark:text-slate-500">1.5 hours remaining to hit your weekly goal 🎉</p>
          </div>
        </header>

        {/* "Up Next" Spotlight Banner - Premium Redesign */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-brand text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-brand/20 border border-white/10">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05]" />
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-brand/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              {/* Status Badge & Date */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-400/20 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  UP NEXT ON YOUR SCHEDULE
                </span>
                <span className="text-sm text-white/60 font-medium">
                  {nextWorkshop ? new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(nextWorkshop.date)) : "No registered session"}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
                {nextWorkshop ? nextWorkshop.title : "Ready to start your next learning sprint?"}
              </h2>

              {/* Mentor Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 shadow-lg">
                  <Image src={nextMentor.avatar || "/images/mentor-sarah-chen.jpg"} alt={nextMentor.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{nextMentor.name}</p>
                  <p className="text-xs text-white/60">{nextMentor.role} • {nextMentor.company}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveLiveRoomWorkshop(nextWorkshop)}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Join Live Studio Room
                </button>
                <button
                  onClick={() => handleExportCalendar(nextWorkshop)}
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-sm font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
                >
                  📅 Add to Calendar (.ics)
                </button>
                <Link
                  href={`/workshop/${nextWorkshop.id}`}
                  className="px-5 py-3 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-sm font-semibold rounded-xl transition-all duration-200"
                >
                  View Agenda →
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative w-full h-52 rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl">
                <Image src={nextWorkshop.imageUrl} alt={nextWorkshop.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                  <span className="text-sm font-bold text-white flex items-center gap-2">
                    ⏱️ {nextWorkshop.duration} Live Session
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Card Metric Strip */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4" aria-label="Learning Metrics">
          <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm space-y-1">
            <p className="text-xs font-bold text-gray-400 dark:text-slate-400 uppercase tracking-wider">Registered</p>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{state.registrations.length}</p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Active enrollments</p>
          </div>
          <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm space-y-1">
            <p className="text-xs font-bold text-gray-400 dark:text-slate-400 uppercase tracking-wider">Saved Sessions</p>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{state.savedSessions.length}</p>
            <p className="text-[11px] text-brand font-semibold">Bookmarked for later</p>
          </div>
          <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm space-y-1">
            <p className="text-xs font-bold text-gray-400 dark:text-slate-400 uppercase tracking-wider">Hours Learned</p>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">18.5</p>
            <p className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold">Total time spent</p>
          </div>
          <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm space-y-1">
            <p className="text-xs font-bold text-gray-400 dark:text-slate-400 uppercase tracking-wider">Skill Badges</p>
            <p className="text-2xl font-extrabold text-gray-900 dark:text-white">3</p>
            <p className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold">Verified credentials</p>
          </div>
        </section>

        {/* Tabs & Search Navigation Toolbar */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Tabs */}
            <nav className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-gray-200/60 dark:border-slate-700/60 w-full sm:w-auto overflow-x-auto" aria-label="Dashboard Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-slate-900 text-brand dark:text-brand-light shadow-sm"
                      : "text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                  </svg>
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* In-Page Search */}
            <div className="relative w-full sm:w-72">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search my sessions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
          </div>

          {/* Tab Panes */}
          <div className="p-6 sm:p-8">
            {activeTab === "upcoming" && (
              <UpcomingSchedule
                searchQuery={searchQuery}
                onJoinRoom={(ws) => setActiveLiveRoomWorkshop(ws)}
                onExportCalendar={handleExportCalendar}
              />
            )}
            {activeTab === "registered" && (
              <RegisteredSessions
                searchQuery={searchQuery}
                onJoinRoom={(ws) => setActiveLiveRoomWorkshop(ws)}
                onExportCalendar={handleExportCalendar}
              />
            )}
            {activeTab === "saved" && (
              <SavedSessions
                searchQuery={searchQuery}
                onExportCalendar={handleExportCalendar}
              />
            )}
          </div>
        </div>
      </div>

      {/* Interactive Live Room Modal */}
      <LiveRoomModal
        workshop={activeLiveRoomWorkshop}
        onClose={() => setActiveLiveRoomWorkshop(null)}
      />
    </main>
  );
}
