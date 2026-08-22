"use client";

import { useState } from "react";
import RegisteredSessions from "@/components/dashboard/RegisteredSessions";
import SavedSessions from "@/components/dashboard/SavedSessions";

type Tab = "registered" | "saved";

export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState<Tab>("registered");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Learning</h1>
          <p className="mt-2 text-gray-600">
            Manage your registered workshops and saved sessions.
          </p>
        </header>

        <div className="bg-white rounded-xl border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6" aria-label="Tabs">
              <button
                onClick={() => setActiveTab("registered")}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "registered"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Registered Sessions
              </button>
              <button
                onClick={() => setActiveTab("saved")}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "saved"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Saved Sessions
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "registered" && <RegisteredSessions />}
            {activeTab === "saved" && <SavedSessions />}
          </div>
        </div>
      </div>
    </main>
  );
}
