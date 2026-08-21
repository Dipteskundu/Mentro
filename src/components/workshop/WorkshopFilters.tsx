"use client";

import { TOPICS, LEVELS, SESSION_TYPES } from "@/utils/constants";
import { FilterState } from "@/types";

interface WorkshopFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

export default function WorkshopFilters({
  filters,
  onFilterChange,
}: WorkshopFiltersProps) {
  function handleChange(key: keyof FilterState, value: string) {
    onFilterChange({ ...filters, [key]: value });
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <div className="relative flex-1">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
        <input
          type="text"
          placeholder="Search workshops..."
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <select
        value={filters.topic}
        onChange={(e) => handleChange("topic", e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        {TOPICS.map((topic) => (
          <option key={topic} value={topic}>
            {topic === "All" ? "All Topics" : topic}
          </option>
        ))}
      </select>

      <select
        value={filters.level}
        onChange={(e) => handleChange("level", e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        {LEVELS.map((level) => (
          <option key={level} value={level}>
            {level === "All" ? "All Levels" : level}
          </option>
        ))}
      </select>

      <select
        value={filters.sessionType}
        onChange={(e) => handleChange("sessionType", e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
      >
        {SESSION_TYPES.map((type) => (
          <option key={type} value={type}>
            {type === "All" ? "All Types" : type}
          </option>
        ))}
      </select>
    </div>
  );
}
