import Link from "next/link";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import WorkshopActions from "@/components/workshop/WorkshopActions";
import { workshops, mentors } from "@/data";

const categoryColors: Record<string, string> = {
  Development: "bg-blue-100 text-blue-800",
  Marketing: "bg-pink-100 text-pink-800",
  Business: "bg-indigo-100 text-indigo-800",
  Design: "bg-purple-100 text-purple-800",
  "IT & Software": "bg-green-100 text-green-800",
};

export default async function WorkshopDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workshop = workshops.find((w) => w.id === id);

  if (!workshop) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Workshop not found
          </h1>
          <p className="text-gray-500 mb-8">
            The workshop you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/explore"
            className="inline-flex items-center px-6 py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand-hover transition-colors shadow-lg shadow-brand/25"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Explore
          </Link>
        </div>
      </main>
    );
  }

  const mentor = mentors.find((m) => m.id === workshop.mentorId);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(workshop.date));

  const seatsPercentage = Math.round(
    ((workshop.totalSeats - workshop.availableSeats) / workshop.totalSeats) * 100
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="relative h-72 sm:h-80 lg:h-96 w-full overflow-hidden">
        <Image
          src={workshop.imageUrl}
          alt={workshop.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/explore"
            className="inline-flex items-center text-sm text-white/80 hover:text-white font-medium mt-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Explore
          </Link>
          <div className="absolute bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8">
            <span className={`inline-block px-3 py-1.5 text-sm font-semibold rounded-xl ${categoryColors[workshop.category] || "bg-gray-100 text-gray-800"} mb-3`}>
              {workshop.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              {workshop.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/90">
              <StarRating rating={workshop.rating} reviewCount={workshop.reviewCount} size="md" />
              <span className="text-white/40">·</span>
              <span>{workshop.enrolledCount.toLocaleString()} students</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About this course</h2>
              <p className="text-gray-600 leading-relaxed">{workshop.description}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "Date", value: formattedDate.split(",").slice(0, 2).join(","), icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
                  { label: "Duration", value: workshop.duration, icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Level", value: workshop.level, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                  { label: "Type", value: workshop.sessionType, icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" },
                ].map((item) => (
                  <div key={item.label} className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                    <svg className="w-6 h-6 text-brand mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What you&apos;ll learn</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {workshop.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-green-50 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600 leading-relaxed">{outcome}</span>
                  </li>
                ))}
              </ul>
            </section>

            {mentor && (
              <section className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Your instructor</h2>
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand to-brand-hover flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg shadow-brand/25">
                    {mentor.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{mentor.name}</h3>
                    {mentor.role && mentor.company && (
                      <p className="text-sm text-gray-500 mt-0.5">{mentor.role} at {mentor.company}</p>
                    )}
                    <p className="mt-4 text-sm text-gray-600 leading-relaxed">{mentor.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {mentor.expertise.map((skill) => (
                        <span key={skill} className="px-3 py-1.5 bg-brand-light border border-brand-medium rounded-lg text-xs font-semibold text-brand">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg shadow-gray-200/50 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div>
                  {workshop.price === 0 ? (
                    <span className="text-3xl font-bold text-green-600">FREE</span>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">${workshop.price.toFixed(2)}</span>
                  )}
                </div>
                <Badge variant="level" level={workshop.level}>
                  {workshop.level}
                </Badge>
              </div>

              <WorkshopActions
                workshopId={workshop.id}
                availableSeats={workshop.availableSeats}
                totalSeats={workshop.totalSeats}
              />

              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Seats filled</span>
                  <span className="font-semibold text-gray-900">{seatsPercentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-brand to-brand-hover h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${seatsPercentage}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-medium ${workshop.availableSeats <= 5 ? "text-red-600" : "text-gray-500"}`}>
                    {workshop.availableSeats} seats left
                  </span>
                  <span className="text-gray-400">{workshop.totalSeats} total</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
                {[
                  { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", label: workshop.sessionType },
                  { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: formattedDate },
                  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: workshop.duration },
                  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", label: `${workshop.enrolledCount.toLocaleString()} enrolled` },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    <span className="text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
