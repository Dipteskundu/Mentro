import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Workshop } from "@/types";

interface SessionCardProps {
  workshop: Workshop;
  actionLabel: string;
  onAction: () => void;
  actionVariant?: "primary" | "danger" | "outline";
  meta?: string;
}

export default function SessionCard({
  workshop,
  actionLabel,
  onAction,
  actionVariant = "outline",
  meta,
}: SessionCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(workshop.date));

  return (
    <div className="rounded-2xl border border-gray-200 p-5 bg-white hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="level" level={workshop.level}>
              {workshop.level}
            </Badge>
            <Badge variant="type" sessionType={workshop.sessionType}>
              {workshop.sessionType}
            </Badge>
          </div>

          <Link
            href={`/workshop/${workshop.id}`}
            className="text-lg font-bold text-gray-900 hover:text-brand transition-colors line-clamp-1"
          >
            {workshop.title}
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-gray-400"
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
              {formattedDate} · {workshop.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              {workshop.topic}
            </span>
          </div>

          {meta && (
            <p className="text-xs text-gray-400 mt-2">{meta}</p>
          )}
        </div>

        <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-3">
          <Button
            variant={actionVariant}
            size="sm"
            onClick={onAction}
          >
            {actionLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
