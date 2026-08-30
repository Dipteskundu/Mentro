"use client";

import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { workshops } from "@/data";
import { Workshop, Registration } from "@/types";
import SessionCard from "./SessionCard";

interface RegisteredWorkshop {
  workshop: Workshop;
  registration: Registration;
}

interface RegisteredSessionsProps {
  searchQuery?: string;
  onJoinRoom?: (workshop: Workshop) => void;
  onExportCalendar?: (workshop: Workshop) => void;
}

export default function RegisteredSessions({
  searchQuery = "",
  onJoinRoom,
  onExportCalendar,
}: RegisteredSessionsProps) {
  const { state, dispatch } = useApp();

  const registeredWorkshops: RegisteredWorkshop[] = state.registrations
    .map((reg) => {
      const workshop = workshops.find((w) => w.id === reg.workshopId);
      return workshop ? { workshop, registration: reg } : null;
    })
    .filter((item): item is RegisteredWorkshop => item !== null)
    .filter((item) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.workshop.title.toLowerCase().includes(q) ||
        item.workshop.topic.toLowerCase().includes(q) ||
        item.workshop.level.toLowerCase().includes(q)
      );
    })
    .sort(
      (a, b) =>
        new Date(a.workshop.date).getTime() -
        new Date(b.workshop.date).getTime()
    );

  function handleCancel(workshopId: string) {
    dispatch({ type: "UNREGISTER_WORKSHOP", payload: { workshopId } });
  }

  if (registeredWorkshops.length === 0) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-gray-50/50 dark:bg-slate-900/50 rounded-3xl border border-gray-200/80 dark:border-slate-800">
          <div className="w-16 h-16 bg-brand-light dark:bg-brand/20 text-brand rounded-full flex items-center justify-center mb-4 shadow-sm">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {searchQuery ? "No matching registered sessions" : "No registered sessions yet"}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 max-w-sm mb-5">
            {searchQuery ? "Try searching for a different keyword or topic." : "Browse upcoming live workshops and reserve a seat to start learning."}
          </p>
          <Link
            href="/explore"
            className="px-5 py-2.5 bg-brand text-white text-xs font-bold rounded-xl hover:bg-brand-hover transition-all shadow-md shadow-brand/20"
          >
            Browse Live Workshops
          </Link>
        </div>

        {/* Suggested Workshops */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
            Popular Workshops You Might Like
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workshops.slice(0, 2).map((ws) => (
              <div key={ws.id} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200/80 dark:border-slate-800 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={ws.imageUrl} alt={ws.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-gray-900 dark:text-white truncate">{ws.title}</h5>
                  <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5">{ws.topic} • {ws.duration}</p>
                  <Link href={`/workshop/${ws.id}`} className="text-[11px] text-brand font-bold hover:underline mt-1 inline-block">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {registeredWorkshops.map(({ workshop, registration }) => (
        <SessionCard
          key={registration.id}
          workshop={workshop}
          onJoinRoom={onJoinRoom}
          onExportCalendar={onExportCalendar}
          meta={`Enrolled on ${new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
          }).format(new Date(registration.registeredAt))}`}
        />
      ))}
    </div>
  );
}
