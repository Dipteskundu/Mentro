import { ReactNode } from "react";
import { LEVEL_COLORS, SESSION_TYPE_COLORS } from "@/utils/constants";

interface BadgeProps {
  children: ReactNode;
  variant?: "level" | "type" | "default";
  level?: "Beginner" | "Intermediate" | "Advanced";
  sessionType?: "Workshop" | "Mentorship" | "Bootcamp" | "Webinar";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  level,
  sessionType,
  className = "",
}: BadgeProps) {
  let colorClass = "bg-gray-100 text-gray-800";

  if (variant === "level" && level) {
    colorClass = LEVEL_COLORS[level] || colorClass;
  } else if (variant === "type" && sessionType) {
    colorClass = SESSION_TYPE_COLORS[sessionType] || colorClass;
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
}
