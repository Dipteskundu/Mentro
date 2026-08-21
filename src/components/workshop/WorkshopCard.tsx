import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { mentors } from "@/data";
import { Workshop } from "@/types";

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: WorkshopCardProps) {
  const mentor = mentors.find((m) => m.id === workshop.mentorId);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(workshop.date));

  const seatsLow = workshop.availableSeats <= 5;

  return (
    <Link
      href={`/workshop/${workshop.id}`}
      className="block rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white"
    >
      <div className="flex items-center gap-2 mb-3">
        <Badge variant="level" level={workshop.level}>
          {workshop.level}
        </Badge>
        <Badge variant="type" sessionType={workshop.sessionType}>
          {workshop.sessionType}
        </Badge>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {workshop.title}
      </h3>

      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
        {workshop.description}
      </p>

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formattedDate} · {workshop.duration}
        </span>
      </div>

      {mentor && (
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
            {mentor.name.charAt(0)}
          </div>
          <span className="text-sm text-gray-600">
            {mentor.name}
            {mentor.company && (
              <span className="text-gray-400"> · {mentor.company}</span>
            )}
          </span>
        </div>
      )}

      <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
        <span
          className={`text-sm font-medium ${
            seatsLow ? "text-red-600" : "text-gray-500"
          }`}
        >
          {workshop.availableSeats} seats available
        </span>
        <span className="text-sm text-blue-600 font-medium">
          View Details →
        </span>
      </div>
    </Link>
  );
}
