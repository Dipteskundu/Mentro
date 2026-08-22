"use client";

import Link from "next/link";
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

export default function UpcomingSchedule() {
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
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          No upcoming sessions
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Register for workshops to see them here.
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
      {upcomingWorkshops.map(({ workshop, registration, startsIn }) => (
        <SessionCard
          key={registration.id}
          workshop={workshop}
          actionLabel="View Details"
          onAction={() => router.push(`/workshop/${workshop.id}`)}
          actionVariant="primary"
          meta={startsIn}
        />
      ))}
    </div>
  );
}
