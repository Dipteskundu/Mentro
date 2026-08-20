export interface Workshop {
  id: string;
  title: string;
  description: string;
  mentorId: string;
  topic: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  sessionType: "Workshop" | "Mentorship" | "Bootcamp" | "Webinar";
  date: string;
  duration: string;
  totalSeats: number;
  availableSeats: number;
  learningOutcomes: string[];
  imageUrl?: string;
}

export interface Mentor {
  id: string;
  name: string;
  bio: string;
  expertise: string[];
  avatar?: string;
  company?: string;
  role?: string;
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
}

export interface FilterState {
  search: string;
  topic: string;
  level: string;
  sessionType: string;
}
