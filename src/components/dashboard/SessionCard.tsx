"use client";

import Link from "next/link";
import Image from "next/image";
import { Workshop } from "@/types";
import { mentors } from "@/data";

interface SessionCardProps {
  workshop: Workshop;
  meta?: string;
  onJoinRoom?: (workshop: Workshop) => void;
  onExportCalendar?: (workshop: Workshop) => void;
}

export default function SessionCard({
  workshop,
  meta,
  onJoinRoom,
  onExportCalendar,
}: SessionCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(new Date(workshop.date));

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(workshop.date));

  const mentor = mentors.find((m) => m.id === workshop.mentorId);

  return (
    <div className="group relative rounded-3xl bg-white dark:bg-slate-900 overflow-hidden transition-all duration-500 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-brand/20 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 dark:from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex flex-col sm:flex-row h-full">
        <div className="relative w-full sm:w-64 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-gray-100 dark:bg-slate-950">
          <Image
            src={workshop.imageUrl}
            alt={workshop.title}
            fill
            sizes="(max-width: 640px) 100vw, 256px"
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 dark:opacity-80 dark:mix-blend-lighten"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 dark:from-slate-900 via-transparent to-transparent sm:bg-gradient-to-r" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-full text-gray-900 dark:text-white/90 text-xs font-bold border border-gray-200 dark:border-white/10 shadow-sm">
              {workshop.duration}
            </span>
          </div>
        </div>

        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative z-10">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              {meta && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand/10 dark:bg-brand/20 text-brand dark:text-brand-light text-[10px] font-bold rounded-full uppercase tracking-wider border border-brand/20 dark:border-brand/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  {meta}
                </span>
              )}
              <span className="text-gray-500 dark:text-white/50 text-xs font-medium uppercase tracking-wider flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formattedDate} • {formattedTime}
              </span>
            </div>

            <div>
              <Link
                href={`/workshop/${workshop.id}`}
                className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white hover:text-brand dark:hover:text-brand-light transition-colors line-clamp-2 leading-tight"
              >
                {workshop.title}
              </Link>
              <div className="flex items-center gap-2 mt-2">
                 <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/60 border border-gray-200 dark:border-white/5">
                   {workshop.topic}
                 </span>
                 <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/60 border border-gray-200 dark:border-white/5">
                   {workshop.level}
                 </span>
              </div>
            </div>

            {mentor && (
              <div className="flex items-center gap-3 mt-4">
                <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-gray-200 dark:ring-white/10">
                  <Image src={mentor.avatar || "/images/mentor-sarah-chen.jpg"} alt={mentor.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-xs font-bold">{mentor.name}</p>
                  <p className="text-gray-500 dark:text-white/40 text-[10px]">{mentor.role}</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 mt-auto">
            {onJoinRoom && (
              <button
                onClick={() => onJoinRoom(workshop)}
                className="px-4 py-2 bg-brand hover:bg-brand-hover text-white text-xs font-bold rounded-lg shadow-md dark:shadow-lg shadow-brand/20 transition-all flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Join Live Room
              </button>
            )}

            {onExportCalendar && (
              <button
                onClick={() => onExportCalendar(workshop)}
                className="px-3 py-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-white/70 hover:text-gray-900 dark:hover:text-white text-xs font-semibold rounded-lg border border-gray-200 dark:border-white/10 transition-all"
                title="Add to Calendar"
              >
                📅 Add
              </button>
            )}

            <Link
              href={`/workshop/${workshop.id}`}
              className="px-4 py-2 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white text-xs font-semibold rounded-lg border border-gray-200 dark:border-white/10 transition-all ml-auto inline-flex items-center gap-2"
            >
              Details
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
