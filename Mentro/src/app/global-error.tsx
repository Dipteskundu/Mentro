"use client";

import ErrorPage from "@/components/error/ErrorPage";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f7f8fc]">
        <div>
          <ErrorPage
            errorCode="Error"
            title="Oops!"
            description="An unexpected error occurred. Please try refreshing the page or navigating back to the home page."
            showSearch={false}
          />
          <div className="flex justify-center pb-8">
            <button
              onClick={reset}
              className="inline-flex items-center px-6 py-3 bg-brand hover:bg-brand-hover text-white font-bold text-sm rounded-xl shadow-lg shadow-brand/25 transition-all hover:scale-105"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
