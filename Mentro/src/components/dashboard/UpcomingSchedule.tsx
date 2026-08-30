"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { workshops } from "@/data";
import { Workshop, Registration } from "@/types";
import SessionCard from "./SessionCard";

interface UpcomingWorkshop {
  workshop: Workshop;
  registration: Registration;
  startsIn: string;
}

interface UpcomingScheduleProps {
  searchQuery?: string;
  onJoinRoom?: (workshop: Workshop) => void;
  onExportCalendar?: (workshop: Workshop) => void;
}

function getRelativeTime(dateString: string): string {
  const now = new Date();
  const workshopDate = new Date(dateString);
  const diffMs = workshopDate.getTime() - now.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffDays > 1) {
    return `Starts in ${diffDays} days`;
  }
  if (diffDays === 1) {
    return "Starts tomorrow";
  }
  if (diffHours > 1) {
    return `Starts in ${diffHours} hours`;
  }
  if (diffHours <= 1) {
    return "Starting soon";
  }
  return "Completed";
}

export default function UpcomingSchedule({
  searchQuery = "",
  onJoinRoom,
  onExportCalendar,
}: UpcomingScheduleProps) {
  const { state } = useApp();
  const router = useRouter();

  const now = new Date();

  const upcomingWorkshops: UpcomingWorkshop[] = state.registrations
    .map((reg) => {
      const workshop = workshops.find((w) => w.id === reg.workshopId);
      return workshop ? { workshop, registration: reg } : null;
    })
    .filter((item): item is UpcomingWorkshop => item !== null)
    .filter((item) => new Date(item.workshop.date).getTime() >= now.getTime())
    .filter((item) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.workshop.title.toLowerCase().includes(q) ||
        item.workshop.topic.toLowerCase().includes(q) ||
        item.workshop.level.toLowerCase().includes(q)
      );
    })
    .map((item) => ({
      ...item,
      startsIn: getRelativeTime(item.workshop.date),
    }))
    .sort(
      (a, b) =>
        new Date(a.workshop.date).getTime() -
        new Date(b.workshop.date).getTime()
    );

  if (upcomingWorkshops.length === 0) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-gray-50/50 dark:bg-slate-900/50 rounded-3xl border border-gray-200/80 dark:border-slate-800">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-4 shadow-sm">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {searchQuery ? "No matching upcoming sessions" : "No upcoming live sessions"}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 max-w-sm mb-5">
            {searchQuery ? "Try searching for a different keyword." : "Register for workshops to build your weekly live schedule."}
          </p>
          <Link
            href="/explore"
            className="px-5 py-2.5 bg-brand text-white text-xs font-bold rounded-xl hover:bg-brand-hover transition-all shadow-md shadow-brand/20"
          >
            Find Live Sessions
          </Link>
        </div>

        {/* Featured Upcoming */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
            Featured Upcoming Sessions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workshops.slice(0, 2).map((ws) => (
              <div key={ws.id} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200/80 dark:border-slate-800 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={ws.imageUrl} alt={ws.title} fill sizes="64px" className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-gray-900 dark:text-white truncate">{ws.title}</h5>
                  <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5">{ws.topic} • {ws.duration}</p>
                  <Link href={`/workshop/${ws.id}`} className="text-[11px] text-brand font-bold hover:underline mt-1 inline-block">
                    Register Seat →
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
      {upcomingWorkshops.map(({ workshop, registration, startsIn }) => (
        <SessionCard
          key={registration.id}
          workshop={workshop}
          onJoinRoom={onJoinRoom}
          onExportCalendar={onExportCalendar}
          meta={startsIn}
        />
      ))}
    </div>
  );
}
