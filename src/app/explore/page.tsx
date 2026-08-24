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
  const [sort, setSort] = useState("soonest");
  const [filtersOpen, setFiltersOpen] = useState(false);

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

  const sortedWorkshops = useMemo(() => [...filteredWorkshops].sort((a, b) => sort === "rating" ? b.rating - a.rating : sort === "price" ? a.price - b.price : new Date(a.date).getTime() - new Date(b.date).getTime()), [filteredWorkshops, sort]);
  const totalPages = Math.ceil(sortedWorkshops.length / ITEMS_PER_PAGE);

  const paginatedWorkshops = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedWorkshops.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedWorkshops, currentPage]);

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

  function removeCategory(category: string) {
    handleFilterChange({
      ...filters,
      categories: filters.categories.filter((c) => c !== category),
    });
  }

  function removeLevel(level: string) {
    handleFilterChange({
      ...filters,
      levels: filters.levels.filter((l) => l !== level),
    });
  }

  function clearAllFilters() {
    handleFilterChange({
      search: "",
      categories: [],
      levels: [],
      priceFilter: "all",
      minRating: 0,
    });
  }

  const hasActiveFilters =
    filters.search !== "" ||
    filters.categories.length > 0 ||
    filters.levels.length > 0 ||
    filters.priceFilter !== "all" ||
    filters.minRating > 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-gray-900">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-hover">
              Workshops
            </span>
          </h1>
          <p className="mt-2 text-gray-500">
            Discover technical workshops, mentorship sessions, and bootcamps.
          </p>
          <label className="relative mt-6 block">
            <span className="sr-only">Search workshops</span>
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" /></svg>
            <input value={filters.search} onChange={(event) => handleFilterChange({ ...filters, search: event.target.value })} placeholder="Search by skill, mentor, or topic" className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white" />
          </label>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-gray-500">
                  Showing <span className="font-semibold text-gray-900">{paginatedWorkshops.length}</span> of{" "}
                  <span className="font-semibold text-gray-900">{filteredWorkshops.length}</span> workshops
                </p>
                <div className="flex items-center gap-2">
                  <button type="button" onClick={() => setFiltersOpen(true)} className="lg:hidden min-h-[44px] rounded-xl border border-gray-200 px-3 text-sm font-semibold text-gray-700 dark:border-slate-700 dark:text-slate-200">Filters</button>
                  <label className="sr-only" htmlFor="sort">Sort workshops</label>
                  <select id="sort" value={sort} onChange={(event) => { setSort(event.target.value); setCurrentPage(1); }} className="min-h-[44px] rounded-xl border border-gray-200 bg-white px-3 text-sm font-medium text-gray-700 outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"><option value="soonest">Soonest</option><option value="rating">Top rated</option><option value="price">Lowest price</option></select>
                </div>
              </div>

              {hasActiveFilters && (
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  {filters.search && (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-lg">
                      Search: &quot;{filters.search}&quot;
                      <button
                        onClick={() => handleFilterChange({ ...filters, search: "" })}
                        className="ml-1 hover:text-blue-900"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  )}
                  {filters.categories.map((cat) => (
                    <span key={cat} className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 text-xs font-medium rounded-lg">
                      {cat}
                      <button onClick={() => removeCategory(cat)} className="ml-1 hover:text-purple-900">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                  {filters.levels.map((level) => (
                    <span key={level} className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-100 text-green-700 text-xs font-medium rounded-lg">
                      {level}
                      <button onClick={() => removeLevel(level)} className="ml-1 hover:text-green-900">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                  {filters.priceFilter !== "all" && (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-lg capitalize">
                      {filters.priceFilter}
                      <button onClick={() => handleFilterChange({ ...filters, priceFilter: "all" })} className="ml-1 hover:text-orange-900">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  )}
                  <button
                    onClick={clearAllFilters}
                    className="text-xs font-medium text-gray-500 hover:text-gray-700 underline underline-offset-2"
                  >
                    Clear all
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {paginatedWorkshops.length > 0 ? (
                paginatedWorkshops.map((workshop, index) => (
                  <div key={workshop.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                    <WorkshopCard workshop={workshop} />
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-gray-200">
                  <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      className="w-10 h-10 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No workshops found
                  </h3>
                  <p className="text-gray-500 mb-6 max-w-sm">
                    Try adjusting your filters or search terms to find what you&apos;re looking for.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-2.5 text-sm font-semibold text-white bg-brand rounded-xl hover:bg-brand-hover transition-colors shadow-lg shadow-brand/25"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>

          <div className="hidden w-full lg:block lg:w-72 flex-shrink-0">
            <WorkshopFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              categoryCounts={categoryCounts}
              levelCounts={levelCounts}
              ratingCounts={ratingCounts}
            />
          </div>
        </div>
        {filtersOpen && <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Workshop filters"><button className="absolute inset-0 bg-slate-950/45" onClick={() => setFiltersOpen(false)} aria-label="Close filters" /><div className="absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-4 dark:bg-slate-900"><div className="mb-3 flex items-center justify-between"><h2 className="font-bold text-gray-900 dark:text-white">Refine results</h2><button onClick={() => setFiltersOpen(false)} className="min-h-[44px] px-3 text-sm font-semibold text-indigo-600">Done</button></div><WorkshopFilters filters={filters} onFilterChange={handleFilterChange} categoryCounts={categoryCounts} levelCounts={levelCounts} ratingCounts={ratingCounts} /></div></div>}
      </div>
    </main>
  );
}
