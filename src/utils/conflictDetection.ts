import { Workshop, Registration } from "@/types";

export interface ConflictResult {
  hasConflict: boolean;
  conflictingWorkshops: Workshop[];
}

export function parseDurationToMs(duration: string): number {
  const match = duration.match(/(\d+)\s*(hour|hours|day|days|minute|minutes)/i);

  if (!match) {
    return 2 * 60 * 60 * 1000; // Default: 2 hours
  }

  const value = parseInt(match[1], 10);
  const unit = match[2].toLowerCase();

  if (unit === "minute" || unit === "minutes") {
    return value * 60 * 1000;
  }
  if (unit === "hour" || unit === "hours") {
    return value * 60 * 60 * 1000;
  }
  if (unit === "day" || unit === "days") {
    return value * 24 * 60 * 60 * 1000;
  }

  return 2 * 60 * 60 * 1000; // Default: 2 hours
}

export function getWorkshopTimeRange(workshop: Workshop): {
  start: Date;
  end: Date;
} {
  const start = new Date(workshop.date);
  const durationMs = parseDurationToMs(workshop.duration);
  const end = new Date(start.getTime() + durationMs);
  return { start, end };
}

export function checkConflict(
  candidate: Workshop,
  registrations: Registration[],
  allWorkshops: Workshop[]
): ConflictResult {
  const candidateRange = getWorkshopTimeRange(candidate);
  const conflicting: Workshop[] = [];

  for (const reg of registrations) {
    if (reg.workshopId === candidate.id) continue;

    const registered = allWorkshops.find((w) => w.id === reg.workshopId);
    if (!registered) continue;

    const registeredRange = getWorkshopTimeRange(registered);

    const overlaps =
      candidateRange.start < registeredRange.end &&
      candidateRange.end > registeredRange.start;

    if (overlaps) {
      conflicting.push(registered);
    }
  }

  return {
    hasConflict: conflicting.length > 0,
    conflictingWorkshops: conflicting,
  };
}
