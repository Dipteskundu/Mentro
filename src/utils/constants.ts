export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "My Learning", href: "/my-learning" },
] as const;

export const TOPICS = [
  "All",
  "Web Development",
  "Mobile Development",
  "AI/ML",
  "Data Science",
  "Cloud Computing",
  "DevOps",
  "Cybersecurity",
  "UI/UX Design",
] as const;

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
