import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import { Workshop } from "@/types";

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: WorkshopCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(workshop.date));

  const categoryColors: Record<string, string> = {
    Development: "bg-blue-100 text-blue-800",
    Marketing: "bg-pink-100 text-pink-800",
    Business: "bg-indigo-100 text-indigo-800",
    Design: "bg-purple-100 text-purple-800",
    "IT & Software": "bg-green-100 text-green-800",
  };

  return (
    <Link
      href={`/workshop/${workshop.id}`}
      className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0">
          <Image
            src={workshop.imageUrl}
            alt={workshop.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 192px"
          />
        </div>

        <div className="flex-1 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <span
                className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
                  categoryColors[workshop.category] || "bg-gray-100 text-gray-800"
                }`}
              >
                {workshop.category}
              </span>

              <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2">
                {workshop.title}
              </h3>

              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {workshop.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  {workshop.level}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {workshop.duration}
                </span>
                <StarRating
                  rating={workshop.rating}
                  reviewCount={workshop.reviewCount}
                />
              </div>

              <div className="mt-3">
                <span className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                  View Course
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="text-right flex-shrink-0">
              {workshop.price === 0 ? (
                <span className="text-lg font-bold text-green-600">FREE</span>
              ) : (
                <span className="text-lg font-bold text-gray-900">
                  ${workshop.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
