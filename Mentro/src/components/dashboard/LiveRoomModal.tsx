"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Workshop } from "@/types";
import { mentors } from "@/data";

interface LiveRoomModalProps {
  workshop: Workshop | null;
  onClose: () => void;
}

export default function LiveRoomModal({ workshop, onClose }: LiveRoomModalProps) {
  const [chatMessages, setChatMessages] = useState<Array<{ user: string; text: string; time: string }>>([
    { user: "Alex Rivera", text: "Excited for this architecture deep dive!", time: "10:01 AM" },
    { user: "Elena Rostova", text: "Can we get the slides afterward?", time: "10:02 AM" },
    { user: "David Kim", text: "The custom hook pattern looks clean!", time: "10:04 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"chat" | "resources" | "outcomes">("chat");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (workshop) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [workshop, onClose]);

  if (!workshop) return null;

  const mentor = mentors.find((m) => m.id === workshop.mentorId) || mentors[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { user: "You", text: newMessage.trim(), time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
    ]);
    setNewMessage("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in-up">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-gray-950/85 backdrop-blur-md" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-5xl bg-slate-900 text-white rounded-3xl shadow-2xl overflow-hidden border border-slate-800 z-10 my-6 flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-full border border-red-500/30">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              LIVE STUDIO ROOM
            </span>
            <h3 className="text-base font-bold text-white truncate max-w-md">{workshop.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main Grid: Video Player + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
          {/* Left Video Area */}
          <div className="lg:col-span-8 bg-black p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden min-h-[300px] sm:min-h-[420px]">
            {/* Background image preview */}
            <div className="absolute inset-0 opacity-40">
              <Image src={workshop.imageUrl} alt={workshop.title} fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
            </div>

            {/* Video Overlay Top */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-slate-800">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={mentor.avatar || "/images/mentor-sarah-chen.jpg"} alt={mentor.name} fill sizes="32px" className="object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{mentor.name}</p>
                  <p className="text-[10px] text-slate-400">{mentor.role}</p>
                </div>
              </div>

              <div className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-xl text-xs text-slate-300 font-medium">
                👥 48 Learners in Room
              </div>
            </div>

            {/* Video Center Play Simulation */}
            <div className="relative z-10 text-center my-auto py-8">
              <div className="w-16 h-16 bg-brand/90 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-brand/50 animate-pulse cursor-pointer">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-xs text-slate-300 mt-3 font-semibold">Live Interactive Stream Connected</p>
            </div>

            {/* Video Controls Bar Bottom */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  HD 1080p Stream
                </span>
                <span>⏱️ {workshop.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg">Mute</button>
                <button className="px-3 py-1 bg-brand text-white font-bold rounded-lg hover:bg-brand-hover">Share Screen</button>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Chat / Resources */}
          <div className="lg:col-span-4 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col h-[350px] lg:h-auto">
            {/* Sidebar Tabs */}
            <div className="flex border-b border-slate-800 bg-slate-950">
              <button
                onClick={() => setActiveTab("chat")}
                className={`flex-1 py-3 text-xs font-bold transition-colors ${
                  activeTab === "chat" ? "text-brand-light border-b-2 border-brand" : "text-slate-400 hover:text-white"
                }`}
              >
                Live Chat ({chatMessages.length})
              </button>
              <button
                onClick={() => setActiveTab("resources")}
                className={`flex-1 py-3 text-xs font-bold transition-colors ${
                  activeTab === "resources" ? "text-brand-light border-b-2 border-brand" : "text-slate-400 hover:text-white"
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => setActiveTab("outcomes")}
                className={`flex-1 py-3 text-xs font-bold transition-colors ${
                  activeTab === "outcomes" ? "text-brand-light border-b-2 border-brand" : "text-slate-400 hover:text-white"
                }`}
              >
                Outcomes
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {activeTab === "chat" && (
                <div className="space-y-3 flex flex-col justify-between h-full">
                  <div className="space-y-3 overflow-y-auto max-h-[220px] lg:max-h-[300px] pr-1">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className="p-2.5 bg-slate-800/80 rounded-xl text-xs space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className={`font-bold ${msg.user === "You" ? "text-brand-light" : "text-indigo-300"}`}>{msg.user}</span>
                          <span className="text-slate-500">{msg.time}</span>
                        </div>
                        <p className="text-slate-200">{msg.text}</p>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSendMessage} className="pt-2 flex gap-2">
                    <input
                      type="text"
                      placeholder="Ask mentor a question..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                    <button type="submit" className="px-3 py-2 bg-brand text-white text-xs font-bold rounded-xl hover:bg-brand-hover">
                      Send
                    </button>
                  </form>
                </div>
              )}

              {activeTab === "resources" && (
                <div className="space-y-2 text-xs">
                  <p className="text-slate-400 font-semibold mb-2">Workshop Downloads & Assets</p>
                  {[
                    { name: "Starter-Repository.zip", size: "4.2 MB", type: "Code Template" },
                    { name: "Architecture-Diagrams.pdf", size: "1.8 MB", type: "Slides" },
                    { name: "Cheat-Sheet-Patterns.md", size: "120 KB", type: "Reference" },
                  ].map((res, i) => (
                    <div key={i} className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-white">{res.name}</p>
                        <p className="text-[10px] text-slate-400">{res.type} • {res.size}</p>
                      </div>
                      <button className="px-2.5 py-1 bg-brand/20 text-brand-light font-bold rounded-lg hover:bg-brand/40 text-[11px]">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "outcomes" && (
                <div className="space-y-2 text-xs">
                  <p className="text-slate-400 font-semibold mb-2">What you will accomplish today:</p>
                  {workshop.learningOutcomes.map((out, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-200 p-2 bg-slate-800/50 rounded-lg">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
