"use client";

import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Workshop } from "@/types";
import { mentors } from "@/data";

interface SessionCardProps {
  workshop: Workshop;
  actionLabel: string;
  onAction: () => void;
  actionVariant?: "primary" | "danger" | "outline";
  meta?: string;
  onJoinRoom?: (workshop: Workshop) => void;
  onExportCalendar?: (workshop: Workshop) => void;
}

export default function SessionCard({
  workshop,
  actionLabel,
  onAction,
  actionVariant = "outline",
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
    <div className="group rounded-3xl bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Side: Content */}
        <div className="flex-1 min-w-0 space-y-4">
          {/* Status Badge & Date */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {meta || "Up Next on Your Schedule"}
            </span>
            <span className="text-slate-400 text-sm font-medium">
              {formattedDate}, {formattedTime}
            </span>
          </div>

          {/* Title */}
          <Link
            href={`/workshop/${workshop.id}`}
            className="block text-2xl sm:text-3xl font-bold text-white hover:text-purple-300 transition-colors line-clamp-2"
          >
            {workshop.title}
          </Link>

          {/* Mentor Info */}
          {mentor && (
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/20">
                <Image
                  src={mentor.avatar || "/images/mentor-sarah-chen.jpg"}
                  alt={mentor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{mentor.name}</p>
                <p className="text-slate-400 text-xs">
                  {mentor.role || "Staff Frontend Engineer"} • {mentor.company || "Northstar Studio"}
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {onJoinRoom && (
              <button
                onClick={() => onJoinRoom(workshop)}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Join Live Studio Room
              </button>
            )}

            {onExportCalendar && (
              <button
                onClick={() => onExportCalendar(workshop)}
                className="px-4 py-2.5 border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 text-slate-300 text-sm font-semibold rounded-xl transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Add to Calendar (.ics)
              </button>
            )}

            <Link
              href={`/workshop/${workshop.id}`}
              className="px-4 py-2.5 border border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 text-slate-300 text-sm font-semibold rounded-xl transition-all inline-flex items-center gap-2"
            >
              View Agenda
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Side: Thumbnail */}
        <div className="relative w-full lg:w-72 h-48 lg:h-56 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10">
          <Image
            src={workshop.imageUrl}
            alt={workshop.title}
            fill
            sizes="(max-width: 1024px) 100vw, 288px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Duration overlay */}
          <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-lg text-white text-xs font-semibold flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {workshop.duration} Live Session
          </div>
        </div>
      </div>

      {/* Hidden elements for backward compatibility */}
      <div className="hidden">
        <Badge variant="level" level={workshop.level}>{workshop.level}</Badge>
        <Badge variant="type" sessionType={workshop.sessionType}>{workshop.sessionType}</Badge>
        <Button variant={actionVariant} size="sm" onClick={onAction}>{actionLabel}</Button>
      </div>
    </div>
  );
}
