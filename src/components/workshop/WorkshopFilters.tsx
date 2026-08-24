"use client";

import CollapsibleSection from "@/components/ui/CollapsibleSection";
import { FilterState } from "@/types";

interface WorkshopFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  categoryCounts: Record<string, number>;
  levelCounts: Record<string, number>;
  ratingCounts: Record<number, number>;
}

const CATEGORIES = ["Design", "IT & Software", "Development", "Marketing", "Business"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const RATINGS = [5, 4.5, 4, 3.5];
const PRICE_OPTIONS = ["all", "free", "paid"] as const;

export default function WorkshopFilters({
  filters,
  onFilterChange,
  categoryCounts,
  levelCounts,
  ratingCounts,
}: WorkshopFiltersProps) {
  function handleCategoryChange(category: string) {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  }

  function handleLevelChange(level: string) {
    const newLevels = filters.levels.includes(level)
      ? filters.levels.filter((l) => l !== level)
      : [...filters.levels, level];
    onFilterChange({ ...filters, levels: newLevels });
  }

  function handleRatingChange(rating: number) {
    onFilterChange({
      ...filters,
      minRating: filters.minRating === rating ? 0 : rating,
    });
  }

  function handlePriceChange(price: "all" | "free" | "paid") {
    onFilterChange({ ...filters, priceFilter: price });
  }

  function clearAllFilters() {
    onFilterChange({
      search: filters.search,
      categories: [],
      levels: [],
      priceFilter: "all",
      minRating: 0,
    });
  }

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.levels.length > 0 ||
    filters.priceFilter !== "all" ||
    filters.minRating > 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 sticky top-24 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-brand hover:text-brand-hover font-semibold transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      <CollapsibleSection title="Category">
        <div className="space-y-2">
          {CATEGORIES.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="w-4 h-4 text-brand border-gray-300 rounded focus:ring-brand"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">
                {category}
              </span>
              <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                {categoryCounts[category] || 0}
              </span>
            </label>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Ratings">
        <div className="space-y-2">
          {RATINGS.map((rating) => (
            <label
              key={rating}
              className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                checked={filters.minRating === rating}
                onChange={() => handleRatingChange(rating)}
                className="w-4 h-4 text-brand border-gray-300 rounded focus:ring-brand"
              />
              <div className="flex items-center gap-1 flex-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating)
                        ? "text-yellow-400 fill-current"
                        : i < rating
                          ? "text-yellow-400"
                          : "text-gray-300 fill-current"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-600 ml-1">{rating}</span>
              </div>
              <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                {ratingCounts[rating] || 0}
              </span>
            </label>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Price">
        <div className="space-y-2">
          {PRICE_OPTIONS.map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                checked={filters.priceFilter === option}
                onChange={() => handlePriceChange(option)}
                className="w-4 h-4 text-brand border-gray-300 rounded focus:ring-brand"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 capitalize flex-1">
                {option === "all" ? "All" : option}
              </span>
            </label>
          ))}
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Level">
        <div className="space-y-2">
          {LEVELS.map((level) => (
            <label
              key={level}
              className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <input
                type="checkbox"
                checked={filters.levels.includes(level)}
                onChange={() => handleLevelChange(level)}
                className="w-4 h-4 text-brand border-gray-300 rounded focus:ring-brand"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1">
                {level}
              </span>
              <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                {levelCounts[level] || 0}
              </span>
            </label>
          ))}
        </div>
      </CollapsibleSection>
    </div>
  );
}
