"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { workshops } from "@/data";
import { Workshop, SavedSession } from "@/types";
import SessionCard from "./SessionCard";

interface SavedWorkshop {
  workshop: Workshop;
  saved: SavedSession;
}

export default function SavedSessions() {
  const { state, dispatch } = useApp();

  const savedWorkshops: SavedWorkshop[] = state.savedSessions
    .map((saved) => {
      const workshop = workshops.find((w) => w.id === saved.workshopId);
      return workshop ? { workshop, saved } : null;
    })
    .filter((item): item is SavedWorkshop => item !== null)
    .sort(
      (a, b) =>
        new Date(b.saved.savedAt).getTime() -
        new Date(a.saved.savedAt).getTime()
    );

  function handleRemove(workshopId: string) {
    dispatch({ type: "UNSAVE_WORKSHOP", payload: { workshopId } });
  }

  if (savedWorkshops.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          No saved sessions
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Save workshops you&apos;re interested in to view them later.
        </p>
        <Link
          href="/explore"
          className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Browse Workshops
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {savedWorkshops.map(({ workshop, saved }) => (
        <SessionCard
          key={saved.workshopId}
          workshop={workshop}
          actionLabel="Remove"
          onAction={() => handleRemove(workshop.id)}
          actionVariant="outline"
          meta={`Saved on ${new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }).format(new Date(saved.savedAt))}`}
        />
      ))}
    </div>
  );
}
