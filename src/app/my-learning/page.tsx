"use client";

import { useState } from "react";
import RegisteredSessions from "@/components/dashboard/RegisteredSessions";
import SavedSessions from "@/components/dashboard/SavedSessions";
import UpcomingSchedule from "@/components/dashboard/UpcomingSchedule";
import { useApp } from "@/context/AppContext";
import { workshops } from "@/data";

type Tab = "registered" | "saved" | "upcoming";

const tabs = [
  {
    id: "registered" as Tab,
    label: "Registered",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    id: "saved" as Tab,
    label: "Saved",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    id: "upcoming" as Tab,
    label: "Upcoming",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
];

export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState<Tab>("upcoming");
  const { state } = useApp();
  const nextWorkshop = state.registrations
    .map((registration) => workshops.find((workshop) => workshop.id === registration.workshopId))
    .filter((workshop): workshop is (typeof workshops)[number] => Boolean(workshop))
    .filter((workshop) => new Date(workshop.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
              Learning
            </span>
          </h1>
          <p className="mt-2 text-gray-500">
            Your week, your momentum, all in one calm learning space.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-3 mb-8" aria-label="Learning summary">
          <div className="rounded-2xl border border-indigo-100 dark:border-indigo-900 bg-indigo-600 p-5 text-white sm:col-span-2">
            <p className="text-sm font-medium text-indigo-100">Up next</p>
            {nextWorkshop ? <><h2 className="mt-2 text-xl font-bold">{nextWorkshop.title}</h2><p className="mt-1 text-indigo-100">{new Intl.DateTimeFormat("en-US", { weekday: "long", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(nextWorkshop.date))} · {nextWorkshop.duration}</p></> : <><h2 className="mt-2 text-xl font-bold">Your learning week starts here</h2><p className="mt-1 text-indigo-100">Save a session or reserve a seat to build your agenda.</p></>}
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
            <p className="text-sm text-gray-500">Learning library</p>
            <div className="mt-3 flex gap-5"><div><p className="text-2xl font-bold text-gray-900">{state.registrations.length}</p><p className="text-xs text-gray-500">registered</p></div><div><p className="text-2xl font-bold text-gray-900">{state.savedSessions.length}</p><p className="text-xs text-gray-500">saved</p></div></div>
          </div>
        </section>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-100">
            <nav className="flex gap-1 px-4 sm:px-6 overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 py-4 px-4 text-sm font-medium transition-all duration-200 whitespace-nowrap min-h-[52px] ${
                    activeTab === tab.id
                      ? "text-brand"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 ${activeTab === tab.id ? "text-brand" : "text-gray-400"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                  </svg>
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-5 sm:p-6">
            {activeTab === "registered" && <RegisteredSessions />}
            {activeTab === "saved" && <SavedSessions />}
            {activeTab === "upcoming" && <UpcomingSchedule />}
          </div>
        </div>
      </div>
    </main>
  );
}
