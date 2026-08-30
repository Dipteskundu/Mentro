export interface Workshop {
  id: string;
  title: string;
  description: string;
  mentorId: string;
  topic: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  sessionType: "Workshop" | "Mentorship" | "Bootcamp" | "Webinar";
  date: string;
  duration: string;
  totalSeats: number;
  availableSeats: number;
  learningOutcomes: string[];
  imageUrl: string;
  price: number;
  rating: number;
  reviewCount: number;
  enrolledCount: number;
}

export interface Mentor {
  id: string;
  name: string;
  bio: string;
  expertise: string[];
  avatar?: string;
  company?: string;
  role?: string;
  rating?: number;
  reviewCount?: number;
  studentsMentored?: number;
  yearsExperience?: number;
  availability?: string;
  languages?: string[];
  achievements?: string[];
  quote?: string;
  featured?: boolean;
  linkedIn?: string;
  github?: string;
  twitter?: string;
}

export interface Registration {
  id: string;
  workshopId: string;
  name: string;
  email: string;
  registeredAt: string;
}

export interface SavedSession {
  workshopId: string;
  savedAt: string;
}

export interface AppState {
  savedSessions: SavedSession[];
  registrations: Registration[];
  theme: "light" | "dark";
}

export interface FilterState {
  search: string;
  categories: string[];
  levels: string[];
  priceFilter: "all" | "free" | "paid";
  minRating: number;
}
