import Link from "next/link";
import Image from "next/image";
import { workshops } from "@/data/workshops";
import { mentors } from "@/data/mentors";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const time = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  if (diffDays === 0) return { label: "Today", time };
  if (diffDays === 1) return { label: "Tomorrow", time };
  if (diffDays <= 7) return { label: `In ${diffDays} days`, time };
  return { label: formatted, time };
}

const sessionTypeColors: Record<string, string> = {
  Workshop: "bg-blue-100 text-blue-700",
  Mentorship: "bg-purple-100 text-purple-700",
  Bootcamp: "bg-orange-100 text-orange-700",
  Webinar: "bg-cyan-100 text-cyan-700",
};

export default function UpcomingSessions() {
  const now = new Date();
  const upcoming = [...workshops]
    .filter((w) => new Date(w.date) > now && w.availableSeats > 0)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4);

  if (upcoming.length === 0) return null;

  return (
    <section className="py-20 bg-[#f8f9fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-600 text-xs font-semibold rounded-full mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Happening Soon
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Upcoming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
                Live Sessions
              </span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl text-lg">
              Don&apos;t miss these expert-led sessions. Reserve your seat before they fill up.
            </p>
          </div>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 font-semibold text-sm rounded-full border border-gray-200 hover:border-brand hover:text-brand transition-all duration-200 shadow-sm hover:shadow-md self-start sm:self-auto"
          >
            View All Sessions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcoming.map((workshop) => {
            const mentor = mentors.find((m) => m.id === workshop.mentorId);
            const dateInfo = formatDate(workshop.date);
            const seatsPercent = ((workshop.totalSeats - workshop.availableSeats) / workshop.totalSeats) * 100;
            const isAlmostFull = workshop.availableSeats <= 5;

            return (
              <Link
                key={workshop.id}
                href={`/workshop/${workshop.id}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Date Badge */}
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg text-center min-w-[60px]">
                    <p className="text-[10px] font-bold text-brand uppercase tracking-wider">{dateInfo.label}</p>
                    <p className="text-xs font-bold text-gray-900">{dateInfo.time}</p>
                  </div>

                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={workshop.imageUrl}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />

                    {workshop.price === 0 && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-lg">
                        Free
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  {/* Type + Level */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className={`px-2 py-0.5 text-[11px] font-semibold rounded-full ${sessionTypeColors[workshop.sessionType] || "bg-gray-100 text-gray-700"}`}>
                      {workshop.sessionType}
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[11px] font-medium rounded-full">
                      {workshop.level}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 group-hover:text-brand transition-colors line-clamp-2 leading-snug">
                    {workshop.title}
                  </h3>

                  {/* Mentor */}
                  {mentor && (
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-gray-200 shrink-0">
                        <Image
                          src={mentor.avatar || "/images/mentor-sarah-chen.jpg"}
                          alt={mentor.name}
                          width={24}
                          height={24}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-xs text-gray-500 truncate">
                        {mentor.name} · {mentor.company}
                      </p>
                    </div>
                  )}

                  {/* Seats Progress */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs font-semibold ${isAlmostFull ? "text-red-500" : "text-gray-500"}`}>
                        {isAlmostFull ? `Only ${workshop.availableSeats} seats left!` : `${workshop.availableSeats} seats available`}
                      </span>
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs font-semibold text-gray-700">{workshop.rating}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full transition-all ${isAlmostFull ? "bg-red-400" : "bg-brand"}`}
                        style={{ width: `${seatsPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
