"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { workshops } from "@/data";
import { Workshop, Registration } from "@/types";
import SessionCard from "./SessionCard";

interface RegisteredWorkshop {
  workshop: Workshop;
  registration: Registration;
}

export default function RegisteredSessions() {
  const { state, dispatch } = useApp();

  const registeredWorkshops: RegisteredWorkshop[] = state.registrations
    .map((reg) => {
      const workshop = workshops.find((w) => w.id === reg.workshopId);
      return workshop ? { workshop, registration: reg } : null;
    })
    .filter((item): item is RegisteredWorkshop => item !== null)
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          No registered sessions
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Browse workshops and register to get started.
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
      {registeredWorkshops.map(({ workshop, registration }) => (
        <SessionCard
          key={registration.id}
          workshop={workshop}
          actionLabel="Cancel Registration"
          onAction={() => handleCancel(workshop.id)}
          actionVariant="danger"
          meta={`Registered on ${new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }).format(new Date(registration.registeredAt))}`}
        />
      ))}
    </div>
  );
}
