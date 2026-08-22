"use client";

import { useMemo, useState } from "react";
import { workshops, mentors } from "@/data";
import { FilterState } from "@/types";
import WorkshopFilters from "@/components/workshop/WorkshopFilters";
import WorkshopCard from "@/components/workshop/WorkshopCard";
import Pagination from "@/components/ui/Pagination";

const ITEMS_PER_PAGE = 4;

export default function ExplorePage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    categories: [],
    levels: [],
    priceFilter: "all",
    minRating: 0,
  });

  const [currentPage, setCurrentPage] = useState(1);

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

      const categoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(w.category);

      const levelMatch =
        filters.levels.length === 0 || filters.levels.includes(w.level);

      const priceMatch =
        filters.priceFilter === "all" ||
        (filters.priceFilter === "free" && w.price === 0) ||
        (filters.priceFilter === "paid" && w.price > 0);

      const ratingMatch = w.rating >= filters.minRating;

      return searchMatch && categoryMatch && levelMatch && priceMatch && ratingMatch;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredWorkshops.length / ITEMS_PER_PAGE);

  const paginatedWorkshops = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredWorkshops.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredWorkshops, currentPage]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    workshops.forEach((w) => {
      counts[w.category] = (counts[w.category] || 0) + 1;
    });
    return counts;
  }, []);

  const levelCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    workshops.forEach((w) => {
      counts[w.level] = (counts[w.level] || 0) + 1;
    });
    return counts;
  }, []);

  const ratingCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    const ratings = [5, 4.5, 4, 3.5];
    ratings.forEach((rating) => {
      counts[rating] = workshops.filter((w) => w.rating >= rating).length;
    });
    return counts;
  }, []);

  function handleFilterChange(newFilters: FilterState) {
    setFilters(newFilters);
    setCurrentPage(1);
  }

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

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-gray-900">{paginatedWorkshops.length}</span> of{" "}
                <span className="font-semibold text-gray-900">{filteredWorkshops.length}</span> workshops
              </p>
            </div>

            <div className="space-y-4">
              {paginatedWorkshops.length > 0 ? (
                paginatedWorkshops.map((workshop) => (
                  <WorkshopCard key={workshop.id} workshop={workshop} />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center bg-white rounded-xl border border-gray-200">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    No workshops found
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Try adjusting your filters or search terms.
                  </p>
                  <button
                    onClick={() =>
                      handleFilterChange({
                        search: "",
                        categories: [],
                        levels: [],
                        priceFilter: "all",
                        minRating: 0,
                      })
                    }
                    className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

          <div className="w-full lg:w-72 flex-shrink-0">
            <WorkshopFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              categoryCounts={categoryCounts}
              levelCounts={levelCounts}
              ratingCounts={ratingCounts}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
