"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

interface WorkshopActionsProps {
  workshopId: string;
  availableSeats: number;
  totalSeats: number;
}

export default function WorkshopActions({
  workshopId,
  availableSeats,
  totalSeats,
}: WorkshopActionsProps) {
  const [isSaved, setIsSaved] = useState(false);
  const seatsLow = availableSeats <= 5;
  const soldOut = availableSeats === 0;

  function handleRegister() {
    alert("Registration coming soon!");
  }

  function handleSave() {
    setIsSaved(!isSaved);
  }

  return (
    <div className="p-4 bg-gray-50 rounded-lg mb-8">
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <Button
          variant="primary"
          size="lg"
          disabled={soldOut}
          onClick={handleRegister}
          className="flex-1"
        >
          {soldOut ? "Sold Out" : "Register Now"}
        </Button>

        <button
          onClick={handleSave}
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors border-2 ${
            isSaved
              ? "border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          }`}
        >
          {isSaved ? (
            <>
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Saved
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Save
            </>
          )}
        </button>
      </div>

      <div className="flex items-center gap-2">
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span
          className={`text-sm font-medium ${
            seatsLow ? "text-red-600" : "text-gray-600"
          }`}
        >
          {availableSeats} of {totalSeats} seats available
        </span>
      </div>
    </div>
  );
}
