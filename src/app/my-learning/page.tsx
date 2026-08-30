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
import { motion, AnimatePresence } from "framer-motion";

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

  const registeredWorkshops = state.registrations
    .map((reg) => workshops.find((w) => w.id === reg.workshopId))
    .filter((w): w is Workshop => Boolean(w))
    .filter((w) => new Date(w.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const nextWorkshop = registeredWorkshops[0] || workshops[0]; 
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
    <main className="min-h-screen bg-gray-50 dark:bg-[#030712] text-gray-900 dark:text-white selection:bg-brand/30 pb-20 overflow-hidden font-sans transition-colors duration-300">
      
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-6 z-50 px-5 py-3.5 bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/20 text-gray-900 dark:text-white text-sm font-semibold rounded-2xl shadow-2xl shadow-brand/20 flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] -right-[10%] w-[40%] h-[60%] bg-brand/5 dark:bg-brand/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 rounded-[2rem] bg-white/60 dark:bg-gradient-to-b dark:from-white/[0.08] dark:to-white/[0.02] border border-gray-200 dark:border-white/10 shadow-sm p-8 flex flex-col justify-between relative overflow-hidden group backdrop-blur-sm"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-purple-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-500/20 w-fit">
                🔥 4-Day Learning Streak
              </div>
              <div>
                <p className="text-gray-500 dark:text-white/60 text-sm font-medium uppercase tracking-wider mb-1">{getGreeting()}</p>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
                  Your Learning <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-500 dark:to-purple-400">
                    Dashboard
                  </span>
                </h1>
              </div>
            </div>

            <div className="mt-10 bg-gray-100/50 dark:bg-white/5 rounded-2xl p-5 border border-gray-200/50 dark:border-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-600 dark:text-white/60">Weekly Target</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">3.5 / 5.0 hrs</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden mb-3">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-brand to-purple-500 h-full rounded-full" 
                />
              </div>
              <p className="text-xs text-gray-500 dark:text-white/40 font-medium">1.5 hours remaining to hit your goal 🎉</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 rounded-[2rem] bg-slate-900 border border-gray-200 dark:border-white/10 overflow-hidden relative shadow-sm dark:shadow-none"
          >
            <Image 
              src={nextWorkshop?.imageUrl || "/images/mentorship-hero.jpg"} 
              alt="Up Next" 
              fill 
              className="object-cover opacity-60 dark:opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent dark:from-slate-950 dark:via-slate-950/80" />
            
            <div className="relative h-full p-8 lg:p-10 flex flex-col justify-center max-w-2xl text-white">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  UP NEXT
                </span>
                <span className="text-sm text-white/80 dark:text-white/70 font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                  {nextWorkshop ? new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(nextWorkshop.date)) : "No registered session"}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 line-clamp-2">
                {nextWorkshop ? nextWorkshop.title : "Ready to start your next learning sprint?"}
              </h2>

              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <button
                  onClick={() => setActiveLiveRoomWorkshop(nextWorkshop)}
                  className="px-6 py-3.5 bg-brand hover:bg-brand-hover text-white font-semibold text-sm rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all flex items-center gap-2"
                >
                  Join Live Room
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                
                <Link
                  href={`/workshop/${nextWorkshop.id}`}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold rounded-xl transition-all backdrop-blur-md"
                >
                  View Agenda
                </Link>

                <div className="ml-auto hidden sm:flex items-center gap-3 bg-black/30 p-2 pr-4 rounded-full backdrop-blur-md border border-white/10">
                   <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-brand/50">
                     <Image src={nextMentor.avatar || "/images/mentor-sarah-chen.jpg"} alt={nextMentor.name} fill className="object-cover" />
                   </div>
                   <div className="text-xs">
                     <p className="font-bold text-white leading-tight">{nextMentor.name}</p>
                     <p className="text-white/60">{nextMentor.company}</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { label: "Active Enrollments", value: state.registrations.length, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-100 dark:bg-emerald-500/10" },
            { label: "Saved Sessions", value: state.savedSessions.length, color: "text-brand", bg: "bg-brand/10 dark:bg-brand/10" },
            { label: "Hours Learned", value: "18.5", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-500/10" },
            { label: "Skill Badges", value: "3", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-500/10" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/60 dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] p-5 rounded-2xl flex items-center justify-between group hover:bg-white/80 dark:hover:bg-white/[0.05] transition-colors shadow-sm dark:shadow-none backdrop-blur-sm">
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-white/50 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
              <div className={`w-10 h-10 rounded-full ${stat.bg} flex items-center justify-center`}>
                 <span className={`text-lg font-bold ${stat.color}`}>+</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="bg-white/60 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-sm dark:shadow-none"
        >
          <div className="p-6 lg:px-8 border-b border-gray-200 dark:border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex p-1 bg-gray-100 dark:bg-black/40 rounded-2xl w-full md:w-auto border border-gray-200/50 dark:border-white/5 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all whitespace-nowrap min-w-[140px]
                      ${isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/80"}
                    `}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTab" 
                        className="absolute inset-0 bg-white dark:bg-white/10 rounded-xl border border-gray-200/50 dark:border-white/10 shadow-sm dark:shadow-lg" 
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                    </svg>
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400 dark:text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search sessions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-2xl text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all shadow-sm dark:shadow-none"
              />
            </div>
          </div>

          <div className="p-6 lg:p-10 min-h-[400px]">
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
        </motion.div>
      </div>

      <LiveRoomModal
        workshop={activeLiveRoomWorkshop}
        onClose={() => setActiveLiveRoomWorkshop(null)}
      />
    </main>
  );
}
