"use client";

import Link from "next/link";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { workshops } from "@/data";
import { Workshop, SavedSession } from "@/types";
import SessionCard from "./SessionCard";

interface SavedWorkshop {
  workshop: Workshop;
  saved: SavedSession;
}

interface SavedSessionsProps {
  searchQuery?: string;
  onExportCalendar?: (workshop: Workshop) => void;
}

export default function SavedSessions({
  searchQuery = "",
  onExportCalendar,
}: SavedSessionsProps) {
  const { state } = useApp();

  const savedWorkshops: SavedWorkshop[] = state.savedSessions
    .map((saved) => {
      const workshop = workshops.find((w) => w.id === saved.workshopId);
      return workshop ? { workshop, saved } : null;
    })
    .filter((item): item is SavedWorkshop => item !== null)
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
        new Date(b.saved.savedAt).getTime() -
        new Date(a.saved.savedAt).getTime()
    );

  if (savedWorkshops.length === 0) {
    return (
      <div className="space-y-8">
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-gray-50/50 dark:bg-slate-900/50 rounded-3xl border border-gray-200/80 dark:border-slate-800">
          <div className="w-16 h-16 bg-purple-100 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mb-4 shadow-sm">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {searchQuery ? "No matching saved sessions" : "No saved sessions yet"}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 max-w-sm mb-5">
            {searchQuery ? "Try refining your search keyword." : "Bookmark workshops you're interested in while browsing to keep track of them."}
          </p>
          <Link
            href="/explore"
            className="px-5 py-2.5 bg-brand text-white text-xs font-bold rounded-xl hover:bg-brand-hover transition-all shadow-md shadow-brand/20"
          >
            Explore Workshops
          </Link>
        </div>

        {/* Suggested Workshops */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
            Trending Workshops to Bookmark
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {workshops.slice(2, 4).map((ws) => (
              <div key={ws.id} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-200/80 dark:border-slate-800 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={ws.imageUrl} alt={ws.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="text-xs font-bold text-gray-900 dark:text-white truncate">{ws.title}</h5>
                  <p className="text-[11px] text-gray-500 dark:text-slate-400 mt-0.5">{ws.topic} • {ws.price === 0 ? "Free" : `$${ws.price}`}</p>
                  <Link href={`/workshop/${ws.id}`} className="text-[11px] text-brand font-bold hover:underline mt-1 inline-block">
                    Save Session →
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
      {savedWorkshops.map(({ workshop, saved }) => (
        <SessionCard
          key={saved.workshopId}
          workshop={workshop}
          onExportCalendar={onExportCalendar}
          meta={`Saved on ${new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
          }).format(new Date(saved.savedAt))}`}
        />
      ))}
    </div>
  );
}
