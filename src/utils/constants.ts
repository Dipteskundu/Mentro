export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Mentors", href: "/mentors" },
  { label: "About", href: "/about" },
  { label: "My Learning", href: "/my-learning" },
] as const;

export const TOPICS = [
  { label: "Web Development", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", gradient: "from-blue-500 to-blue-600" },
  { label: "Mobile Development", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", gradient: "from-green-500 to-emerald-600" },
  { label: "AI/ML", icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5", gradient: "from-purple-500 to-violet-600" },
  { label: "Data Science", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z", gradient: "from-cyan-500 to-teal-600" },
  { label: "Cloud Computing", icon: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z", gradient: "from-sky-500 to-blue-600" },
  { label: "DevOps", icon: "M11.42 15.17l-5.1-3.4a.75.75 0 010-1.25l5.1-3.4a.75.75 0 011.08.66v6.74a.75.75 0 01-1.08.66zM17.58 15.17l-5.1-3.4a.75.75 0 010-1.25l5.1-3.4a.75.75 0 011.08.66v6.74a.75.75 0 01-1.08.66z", gradient: "from-orange-500 to-amber-600" },
  { label: "Cybersecurity", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", gradient: "from-red-500 to-rose-600" },
  { label: "UI/UX Design", icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42", gradient: "from-pink-500 to-fuchsia-600" },
] as const;

export const TOPIC_LABELS = TOPICS.map((t) => t.label) as readonly string[];

export const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"] as const;

export const SESSION_TYPES = [
  "All",
  "Workshop",
  "Mentorship",
  "Bootcamp",
  "Webinar",
] as const;

export const LEVEL_COLORS: Record<string, string> = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
};

export const SESSION_TYPE_COLORS: Record<string, string> = {
  Workshop: "bg-blue-100 text-blue-800",
  Mentorship: "bg-purple-100 text-purple-800",
  Bootcamp: "bg-orange-100 text-orange-800",
  Webinar: "bg-cyan-100 text-cyan-800",
};
