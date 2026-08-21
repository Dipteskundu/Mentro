"use client";

import { useMemo, useState } from "react";
import { workshops, mentors } from "@/data";
import { FilterState } from "@/types";
import WorkshopFilters from "@/components/workshop/WorkshopFilters";
import WorkshopGrid from "@/components/workshop/WorkshopGrid";

export default function ExplorePage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    topic: "All",
    level: "All",
    sessionType: "All",
  });

  const filteredWorkshops = useMemo(() => {
    return workshops.filter((w) => {
      const searchLower = filters.search.toLowerCase();

      const searchMatch =
        filters.search === "" ||
        w.title.toLowerCase().includes(searchLower) ||
        w.description.toLowerCase().includes(searchLower) ||
        w.topic.toLowerCase().includes(searchLower) ||
        mentors
          .find((m) => m.id === w.mentorId)
          ?.name.toLowerCase()
          .includes(searchLower);

      const topicMatch =
        filters.topic === "All" || w.topic === filters.topic;

      const levelMatch =
        filters.level === "All" || w.level === filters.level;

      const typeMatch =
        filters.sessionType === "All" ||
        w.sessionType === filters.sessionType;

      return searchMatch && topicMatch && levelMatch && typeMatch;
    });
  }, [filters]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Explore Workshops
          </h1>
          <p className="mt-2 text-gray-600">
            Discover technical workshops, mentorship sessions, and bootcamps.
          </p>
        </header>

        <WorkshopFilters filters={filters} onFilterChange={setFilters} />
        <WorkshopGrid workshops={filteredWorkshops} />
      </div>
    </main>
  );
}
