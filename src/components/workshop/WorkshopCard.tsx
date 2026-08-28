import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/ui/StarRating";
import { Workshop } from "@/types";
import { motion } from "framer-motion";

interface WorkshopCardProps {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: WorkshopCardProps) {
  const categoryColors: Record<string, string> = {
    Development: "bg-blue-100 text-blue-800",
    Marketing: "bg-pink-100 text-pink-800",
    Business: "bg-indigo-100 text-indigo-800",
    Design: "bg-purple-100 text-purple-800",
    "IT & Software": "bg-green-100 text-green-800",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <Link
        href={`/workshop/${workshop.id}`}
        className="group block bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl dark:hover:shadow-brand/20 transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row h-full">
        <div className="relative w-full sm:w-56 h-52 sm:h-auto flex-shrink-0 overflow-hidden">
          <Image
            src={workshop.imageUrl}
            alt={workshop.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 224px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <span
              className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-lg ${categoryColors[workshop.category] || "bg-gray-100 text-gray-800"} backdrop-blur-sm`}
            >
              {workshop.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            {workshop.price === 0 ? (
              <span className="inline-flex items-center px-2.5 py-1 bg-green-500 text-white text-xs font-bold rounded-lg shadow-lg">
                FREE
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-1 bg-white/90 text-gray-900 text-xs font-bold rounded-lg shadow-lg backdrop-blur-sm">
                ${workshop.price.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-brand transition-colors duration-200">
                {workshop.title}
              </h3>

              <p className="mt-1.5 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                {workshop.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-500">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  {workshop.level}
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
                <span className="inline-flex items-center text-sm font-semibold text-brand group-hover:text-brand-hover transition-colors">
                  View Course
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
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
        </div>
        </div>
        </div>
      </Link>
    </motion.div>
  );
}
