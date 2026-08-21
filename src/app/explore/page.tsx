import { workshops } from "@/data";
import WorkshopGrid from "@/components/workshop/WorkshopGrid";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Explore Workshops</h1>
          <p className="mt-2 text-gray-600">
            Discover technical workshops, mentorship sessions, and bootcamps.
          </p>
        </header>

        <WorkshopGrid workshops={workshops} />
      </div>
    </main>
  );
}
