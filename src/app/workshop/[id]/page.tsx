import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { workshops, mentors } from "@/data";

export default async function WorkshopDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workshop = workshops.find((w) => w.id === id);

  if (!workshop) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Workshop not found
          </h1>
          <p className="text-gray-600 mb-6">
            The workshop you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/explore"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Explore
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

  const seatsLow = workshop.availableSeats <= 5;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/explore"
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium mb-8"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Explore
        </Link>

        <article className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="level" level={workshop.level}>
              {workshop.level}
            </Badge>
            <Badge variant="type" sessionType={workshop.sessionType}>
              {workshop.sessionType}
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {workshop.title}
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6">
            {workshop.description}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 mb-6">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-400"
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
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-400"
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

          <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg mb-8">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span
              className={`text-sm font-medium ${
                seatsLow ? "text-red-600" : "text-gray-700"
              }`}
            >
              {workshop.availableSeats} of {workshop.totalSeats} seats available
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Learning Outcomes
            </h2>
            <ul className="space-y-3">
              {workshop.learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {mentor && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                About the Mentor
              </h2>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold text-blue-600 flex-shrink-0">
                    {mentor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {mentor.name}
                    </h3>
                    {mentor.role && mentor.company && (
                      <p className="text-sm text-gray-500">
                        {mentor.role} · {mentor.company}
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  {mentor.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
