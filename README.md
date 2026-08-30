# Mentro

<div align="center">

![Mentro Logo](public/MentroLogo.png)

**Workshop & Mentorship Discovery Platform**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://typescriptlang.org)

[Live Demo](https://mentro-lake.vercel.app) | [Report Bug](https://github.com/Dipteskundu/Mentro/issues) | [Request Feature](https://github.com/Dipteskundu/Mentro/issues)

</div>

---

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Component Architecture](#component-architecture)
- [Problems Faced & Solutions](#problems-faced--solutions)
- [Dark Mode Implementation](#dark-mode-implementation)
- [Animation System](#animation-system)
- [Error Handling](#error-handling)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

**Mentro** is a modern web platform designed to connect ambitious learners with active industry leaders, staff engineers, lead architects, and design directors. This project helps learners accelerate their engineering careers through hands-on learning experiences.

The platform offers live studio workshops, 1-on-1 code reviews, hands-on capstone projects, and mentorship sessions guided by experienced industry professionals. Users can discover workshops by topic, level, and session type, connect with mentors, manage their learning journey through a personalized dashboard, and track their progress — all in a beautifully designed, responsive interface with dark mode support.

### Problem Statement

Currently, there is a significant gap in the tech learning landscape — learners gain theoretical knowledge but lack real-world, hands-on experience. Mentro aims to bridge this gap through direct connections with industry professionals.

### Our Solution

Mentro provides a comprehensive platform where:

- Learners can discover diverse workshops across different topics
- Book 1-on-1 mentorship sessions with expert mentors
- Register for workshops with real-time conflict detection
- Track their entire learning journey on a personal dashboard
- Enjoy dark mode support for comfortable viewing in any environment

---

## Key Features

<div align="center">

| Category | Features |
|:--------:|:---------|
| **Workshop Discovery** | Topic-based filtering, Level filtering, Session type filtering, Search, Pagination, Sort options |
| **Mentor Connection** | Mentor profiles, Expertise filtering, Grid/List view, Booking system, Spotlight carousel |
| **User Dashboard** | Upcoming sessions, Registered workshops, Saved sessions, Tab-based navigation |
| **Theme System** | Cinematic View Transitions, 5 transition effects, Persistent preference, System detection |
| **Mobile Experience** | Glassmorphism drawer menu, Focus trapping, ARIA accessibility, Touch-optimized |
| **Error Handling** | Custom 404/500 pages, Global error boundary, SVG illustrations, Recovery actions |

</div>

### Detailed Feature List

| Feature | Description | Status |
|---------|-------------|:------:|
| Workshop Discovery | Browse 12+ workshops across 8 topics with advanced filters | ✅ |
| Mentor Profiles | View 5 expert mentors with detailed profiles and expertise | ✅ |
| Real-time Search | Instant search across workshops and mentors | ✅ |
| Workshop Registration | Register for workshops with conflict detection | ✅ |
| Save Workshops | Bookmark interesting workshops for later | ✅ |
| Learning Dashboard | Track upcoming, registered, and saved sessions | ✅ |
| Dark Mode | Cinematic theme transitions with 5 effects | ✅ |
| Responsive Design | Mobile-first with glassmorphism navigation | ✅ |
| Error Pages | Custom 404/500 pages with illustrations | ✅ |
| Accessibility | WCAG 2.1 AA compliant navigation | ✅ |
| Animations | Framer Motion + CSS keyframes + View Transitions | ✅ |
| State Persistence | localStorage for theme and user data | ✅ |

---

## Tech Stack

### Core Technologies

| Category | Technology | Version | Purpose |
|----------|------------|:-------:|---------|
| **Framework** | Next.js | 16.3.1 | React framework with App Router |
| **UI Library** | React | 19.2.8 | Component-based UI development |
| **Language** | TypeScript | 5.x | Type-safe JavaScript |
| **Styling** | Tailwind CSS | v4 | Utility-first CSS framework |
| **PostCSS** | @tailwindcss/postcss | 4.x | Tailwind CSS integration |

### Additional Libraries

| Library | Version | Purpose |
|---------|:-------:|---------|
| Framer Motion | 13.1.1 | Animations and transitions |
| next-themes | 0.4.6 | Dark/light mode management |
| React Context + useReducer | Built-in | Global state management (registrations, saved sessions, theme) with localStorage persistence |
| Geist Font | - | Modern typography |

### Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code linting with Next.js core-web-vitals |
| TypeScript | Static type checking |
| PostCSS | CSS processing |

---

## Project Structure

```
frontend/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (providers, navbar, footer)
│   │   ├── page.tsx                  # Home page (13 sections)
│   │   ├── globals.css               # Global styles, Tailwind, animations
│   │   ├── not-found.tsx             # Custom 404 page
│   │   ├── error.tsx                 # Runtime error boundary
│   │   ├── global-error.tsx          # Global error boundary
│   │   ├── explore/
│   │   │   └── page.tsx              # Workshop discovery
│   │   ├── mentors/
│   │   │   ├── page.tsx              # Mentor listing
│   │   │   └── [id]/page.tsx         # Mentor detail
│   │   ├── about/
│   │   │   └── page.tsx              # About page
│   │   ├── my-learning/
│   │   │   └── page.tsx              # Learning dashboard
│   │   └── workshop/
│   │       └── [id]/page.tsx         # Workshop detail
│   │
│   ├── components/                   # React components
│   │   ├── ui/                       # Reusable UI (Button, Modal, Badge, etc.)
│   │   ├── layout/                   # Navbar, Footer
│   │   ├── home/                     # Home page sections (16 components)
│   │   ├── about/                    # About page sections (7 components)
│   │   ├── workshop/                 # Workshop components (5 components)
│   │   ├── mentors/                  # Mentor components (5 components)
│   │   ├── dashboard/                # Dashboard components (5 components)
│   │   ├── error/                    # Error page component
│   │   └── providers/                # ThemeProvider
│   │
│   ├── context/
│   │   └── AppContext.tsx             # Global state (useReducer + localStorage)
│   │
│   ├── data/                         # Static data
│   │   ├── workshops.ts              # Workshop data
│   │   ├── mentors.ts                # Mentor data
│   │   ├── testimonials.ts           # Testimonials
│   │   └── successStories.ts         # Success stories
│   │
│   ├── hooks/
│   │   └── useThemeTransition.ts     # View Transitions API hook
│   │
│   ├── lib/
│   │   └── theme-effects.ts          # 5 theme transition effects
│   │
│   ├── types/
│   │   └── index.ts                  # TypeScript interfaces
│   │
│   └── utils/
│       ├── constants.ts              # Navigation, topics, colors
│       └── conflictDetection.ts      # Workshop time conflict detection
│
├── public/                           # Static assets
│   ├── MentroLogo.png
│   └── images/                       # User avatars
│
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.mjs                # PostCSS configuration
└── eslint.config.mjs                 # ESLint configuration
```

---

## Pages & Routes

| Route | Page | Type | Description |
|-------|------|:----:|-------------|
| `/` | Home | Static | Landing page with 13 sections: Hero, Stats, Features, Featured Workshops, Upcoming Sessions, Learning Roadmaps, How It Works, Mentor Spotlights, Learning Perks, Testimonials, FAQ, Trust & Transparency, CTA |
| `/explore` | Explore | Dynamic | Workshop discovery with filters (8 topics, 4 levels, 5 session types), search, pagination (4/page), sort |
| `/mentors` | Mentors | Dynamic | Mentor listing with expertise/company filters, grid/list view toggle |
| `/mentors/[id]` | Mentor Detail | Dynamic | Individual mentor profile with bio, expertise, and booking |
| `/about` | About | Static | Company info with 7 sections: Hero, Stats, Mission/Vision, Core Values, Methodology, Mentors, CTA |
| `/my-learning` | Dashboard | Dynamic | Learning dashboard with 3 tabs: Upcoming, Registered, Saved |
| `/workshop/[id]` | Workshop Detail | Dynamic | Workshop info with enrollment, mentor, and pricing |

---

## Component Architecture

### UI Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Button` | `variant`, `size`, `isLoading` | Reusable button with 5 variants |
| `Modal` | `isOpen`, `onClose`, `title` | Portal-based modal with scroll lock |
| `Badge` | `variant`, `level` | Colored badge for categories |
| `ThemeToggle` | `size`, `className` | Animated dark/light toggle |
| `ScrollReveal` | `delay`, `className` | Framer Motion scroll animation |
| `Pagination` | `currentPage`, `totalPages`, `onPageChange` | Page navigation |
| `StarRating` | `rating`, `reviewCount` | Star display |
| `Skeleton` | `className` | Loading skeleton |
| `Input` | `label`, `placeholder`, `error` | Form input |
| `CollapsibleSection` | `title`, `children` | Expandable content |

### Layout Components

| Component | Features |
|-----------|----------|
| `Navbar` | Sticky, glassmorphism, mobile drawer, animated hamburger, theme toggle |
| `Footer` | 4-column grid, social links, navigation, copyright |

### Feature Components

| Category | Components |
|----------|------------|
| **Workshop** | `WorkshopCard`, `WorkshopGrid`, `WorkshopFilters`, `WorkshopActions`, `RegistrationModal` |
| **Mentor** | `MentorCard`, `MentorProfileModal`, `BookMentorshipModal`, `BecomeMentorModal`, `MentorSpotlightCarousel` |
| **Dashboard** | `UpcomingSchedule`, `RegisteredSessions`, `SavedSessions`, `SessionCard`, `LiveRoomModal` |
| **Home** | `HomeHero`, `HomeStatsAndFeatures`, `TrustedBy`, `FeaturedWorkshops`, `UpcomingSessions`, `LearningRoadmaps`, `HowItWorks`, `MentorSpotlights`, `LearningPerks`, `LearnerWallOfLoveCarousel`, `FAQ`, `TrustAndTransparencyPledge`, `HomeCTA`, `SuccessStories` |
| **About** | `AboutHero`, `AboutStats`, `MissionVisionToggle`, `CoreValuesGrid`, `MethodologyTimeline`, `MentorSpotlightGrid`, `AboutCTA` |

---

## Problems Faced & Solutions

### 1. State Management & Persistence Without a Backend

**The Problem:**
Mentro has no server-side storage. All user state — workshop registrations, saved sessions, and theme preference — must persist across browser sessions using only `localStorage`. This creates two hard challenges:

- **Hydration mismatch:** Next.js server renders with a default light theme, but the client may have `"dark"` stored in `localStorage`. When React hydrates, the mismatch between server HTML and client state causes warnings and a visible flash of the wrong theme.
- **Idempotent state mutations:** Users can rapidly click "Register" or "Save" — the reducer must prevent duplicate entries without blocking legitimate actions.

**The Solution:**

```typescript
// Hydration-safe pattern (AppContext.tsx)
useEffect(() => {
  const saved = localStorage.getItem("Mentro-state");
  if (saved) {
    const parsed = JSON.parse(saved);
    dispatch({ type: "SET_THEME", payload: parsed.theme });
  }
}, []);

// Idempotent reducer
case "SAVE_WORKSHOP":
  if (state.savedSessions.some(s => s.workshopId === action.payload.workshopId))
    return state; // no-op, already saved
  return { ...state, savedSessions: [...state.savedSessions, newSession] };
```

- Added `suppressHydrationWarning` on `<html>` to prevent Next.js from flagging the server/client mismatch
- Theme sync: `document.documentElement.classList.toggle("dark", ...)` applied in a separate `useEffect` so the DOM updates immediately when reducer state changes
- Write-through persistence: every dispatch serializes full state to `localStorage` via a dependency-tracking `useEffect`

### 2. Multi-Dimensional Filter Pipeline with Live Facet Counts

**The Problem:**
The Explore page requires 5 independent filter dimensions (text search across titles AND mentor names, category multi-select, level multi-select, price range, and rating threshold) to AND-combine in real time — while simultaneously showing accurate facet counts (how many workshops match each category/level/rating) that don't change as filters narrow results. All of this runs client-side with no API.

**The Solution:**

Built a dependent `useMemo` pipeline that chains four computed values:

```
filteredWorkshops → sortedWorkshops → paginatedWorkshops → facetCounts
```

- **Text search** joins workshops with the mentors array on every keystroke (`O(N×M)`) to match mentor names — acceptable for the dataset size but requires careful memoization
- **Facet counts** are computed from the **unfiltered** dataset so they always reflect total available options, not current filter state
- **Automatic page reset** — any filter or sort change resets `currentPage` to 1 to prevent landing on an empty page
- **Responsive filter layout** — the same `WorkshopFilters` component renders as a sticky sidebar on desktop and a bottom sheet (`max-h-[85vh]` with scroll) on mobile, with active filter chips for individual removal

### 3. Browser-Native Cinematic Theme Transitions

**The Problem:**
The app uses the cutting-edge View Transitions API (`document.startViewTransition`) to create cinematic theme transitions (circular ripple, diagonal wipe, radial burst, etc.). This API requires the React state update to happen **synchronously** inside the transition callback — but React 19 batches state updates by default, causing the transition to capture the wrong frame. Additionally, rapid toggles corrupt the browser's internal transition state.

**The Solution:**

```typescript
// useThemeTransition.ts
const transition = document.startViewTransition(() => {
  flushSync(() => { setTheme(newTheme); }); // force synchronous commit
});

// Race condition guard
let isTransitioning = false;
// ... guard check before starting, 100ms cooldown in finally block

// Timeout fallback
Promise.race([
  transition.finished,
  new Promise(resolve => setTimeout(resolve, duration + 200))
]);
```

- **`flushSync`** forces React to commit the state update synchronously so the View Transitions API captures the correct before/after frames
- **Module-level `isTransitioning` flag** with 100ms cooldown prevents overlapping transitions from corrupting browser state
- **5 animation effects** using Web Animations API on `::view-transition-new(root)` pseudo-element — clip-path circles, polygons, and inset animations
- **Graceful degradation:** checks `document.startViewTransition` existence and falls back to instant theme switch; respects `prefers-reduced-motion` media query

### Browser Support

| Browser | Support |
|---------|:-------:|
| Chrome 111+ | ✅ Full |
| Edge 111+ | ✅ Full |
| Safari 18+ | ✅ Full |
| Firefox 133+ | ✅ Full |
| Older browsers | 🔄 Fallback (instant switch) |

---

## Animation System

### Framer Motion

| Animation | Usage |
|-----------|-------|
| `whileInView` | Scroll reveal for sections |
| `whileHover` | Card hover effects |
| `AnimatePresence` | Modal enter/exit |
| `motion.div` | Page transitions |
| Spring physics | Mobile menu drawer |

### CSS Keyframes

| Animation | Duration | Usage |
|-----------|:--------:|-------|
| `auroraShift` | 20s | Hero background glow |
| `float` | 6s | Floating elements |
| `marquee` | 30s | Testimonial scroll |
| `shimmer` | 1.5s | Loading skeletons |
| `fadeInUp` | 0.4s | Content reveal |
| `slideDown` | 0.3s | Menu expand |

### View Transitions API

```typescript
// Smooth theme transition with clip-path animation
const transition = document.startViewTransition(() => {
  flushSync(() => { setTheme(newTheme); });
});

transition.ready.then(() => {
  // Animate ::view-transition-new(root) with clip-path
  document.documentElement.animate(
    { clipPath: ['circle(0px)', 'circle(100%)'] },
    { duration: 600, pseudoElement: '::view-transition-new(root)' }
  );
});
```

---

## Error Handling

### Error Pages

| Page | Trigger | Features |
|------|---------|----------|
| `not-found.tsx` | 404 errors | SVG illustration, search bar, Home/Learning buttons |
| `error.tsx` | Runtime errors | Retry button, Home/Learning buttons |
| `global-error.tsx` | Root layout errors | Minimal wrapper, retry button |

### Error Page Design

- **Illustration**: Custom SVG line art (two people on bench with devices)
- **Geometric Shapes**: Animated yellow diamond decorations
- **Typography**: Bold error code badge + title + description
- **Actions**: "Return to Home" (primary) + "Go to Learning" (secondary)
- **Search**: Optional search bar for 404 pages

---

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Dipteskundu/Mentro.git

# Navigate to frontend directory
cd Mentro/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:3000` |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

### Environment Setup

No environment variables required — all data is static.

---

## State Management

### AppContext

```typescript
interface AppState {
  theme: "light" | "dark";
  savedSessions: SavedSession[];
  registrations: Registration[];
}

// Actions
type Action =
  | { type: "SAVE_WORKSHOP"; payload: { workshopId: string } }
  | { type: "UNSAVE_WORKSHOP"; payload: { workshopId: string } }
  | { type: "REGISTER_WORKSHOP"; payload: Registration }
  | { type: "UNREGISTER_WORKSHOP"; payload: { workshopId: string } }
  | { type: "SET_THEME"; payload: "light" | "dark" }
  | { type: "LOAD_STATE"; payload: AppState };
```

### Persistence

- Theme preference → `localStorage`
- Saved sessions → `localStorage`
- Registrations → `localStorage`

---

## Data Types

### Workshop

```typescript
interface Workshop {
  id: string;
  title: string;
  description: string;
  mentorId: string;
  date: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  sessionType: "Workshop" | "Mentorship" | "Bootcamp" | "Webinar";
  topic: string;
  totalSeats: number;
  availableSeats: number;
  enrolledCount: number;
  rating: number;
  reviewCount: number;
  price: number;
  imageUrl: string;
  learningOutcomes: string[];
  tags: string[];
}
```

### Mentor

```typescript
interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  expertise: string[];
  rating: number;
  sessionsCount: number;
  availability: string;
}
```

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all components
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Add `"use client"` for interactive components
- Use framer-motion for animations

---

<div align="center">

[⬆ Back to Top](#mentro)

</div>
