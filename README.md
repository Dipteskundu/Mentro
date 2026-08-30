# Mentro

<div align="center">

![Mentro Logo](public/MentroLogo.png)

**Workshop & Mentorship Discovery Platform**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://typescriptlang.org)

[Live Demo](https://mentro.vercel.app) | [Report Bug](https://github.com/Dipteskundu/Mentro/issues) | [Request Feature](https://github.com/Dipteskundu/Mentro/issues)

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

**Mentro** হলো একটি আধুনিক ওয়েব প্ল্যাটফর্ম যা ambitious learnersদের active industry leaders, staff engineers, lead architects এবং design directorsদের সাথে connect করার জন্য তৈরি করা হয়েছে। এই প্রজেক্টটি hands-on learning experiences এর মাধ্যমে learnersদের engineering career তে accelerate করতে সাহায্য করে।

The platform offers live studio workshops, 1-on-1 code reviews, hands-on capstone projects, and mentorship sessions guided by experienced industry professionals. Users can discover workshops by topic, level, and session type, connect with mentors, manage their learning journey through a personalized dashboard, and track their progress — all in a beautifully designed, responsive interface with dark mode support.

### Problem Statement

বর্তমানে tech learning landscape এ একটি significant gap রয়েছে — learnersরা theoretical knowledge পায় কিন্তু real-world, hands-on experience পায় না। Mentro এই gap কোনো করতে চায় industry professionalsদের সাথে direct connection এর মাধ্যমে।

### Our Solution

Mentro একটি comprehensive platform প্রদান করে যাতে:

- Learnersরা diverse workshops discover করতে পারে different topics এ
- Expert mentorsদের সাথে 1-on-1 mentorship sessions book করতে পারে
- Workshop registration করতে পারে real-time conflict detection সহ
- Personal dashboard এ তাদের entire learning journey track করতে পারে
- Dark mode support পায় for comfortable viewing in any environment

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

### Technical Challenges

<table>
<tr><th>Problem</th><th>Root Cause</th><th>Solution</th><th>Status</th></tr>
<tr>
<td><strong>Theme transition stuck on rapid clicks</strong></td>
<td>Multiple overlapping <code>startViewTransition</code> calls corrupt browser state</td>
<td>Added <code>isTransitioning</code> guard with 100ms cooldown and timeout fallback</td>
<td>✅ Fixed</td>
</tr>
<tr>
<td><strong>Animation not smooth during theme switch</strong></td>
<td><code>animation: none</code> on view-transition pseudo-elements prevented proper crossfade</td>
<td>Replaced with <code>vt-fade-out</code>/<code>vt-fade-in</code> keyframes + optimized cubic-bezier easing</td>
<td>✅ Fixed</td>
</tr>
<tr>
<td><strong>Hydration mismatch with next-themes</strong></td>
<td>Server renders with light theme, client may have dark theme from localStorage</td>
<td>Added <code>suppressHydrationWarning</code> on <code>&lt;html&gt;</code> + mounted state check in ThemeToggle</td>
<td>✅ Fixed</td>
</tr>
<tr>
<td><strong>Mobile menu accessibility</strong></td>
<td>Basic dropdown without focus management or ARIA attributes</td>
<td>Implemented full WCAG 2.1 AA: focus trapping, Escape key, <code>aria-expanded</code>, <code>role="dialog"</code></td>
<td>✅ Fixed</td>
</tr>
<tr>
<td><strong>Workshop time conflicts</strong></td>
<td>No validation for overlapping workshop registrations</td>
<td>Built <code>conflictDetection.ts</code> utility checking date/time overlaps before registration</td>
<td>✅ Fixed</td>
</tr>
<tr>
<td><strong>Modal scroll lock</strong></td>
<td>Body scrolls when modal is open on mobile</td>
<td>Added <code>document.body.style.overflow</code> management in modal open/close lifecycle</td>
<td>✅ Fixed</td>
</tr>
<tr>
<td><strong>Dark mode CSS specificity</strong></td>
<td>Tailwind v4 changed dark mode configuration approach</td>
<td>Used <code>@variant dark (&:is(.dark *))</code> pattern with CSS custom properties</td>
<td>✅ Fixed</td>
</tr>
<tr>
<td><strong>Tailwind v4 migration</strong></td>
<td>From <code>@tailwind</code> directives to new <code>@import</code> syntax</td>
<td>Migrated to <code>@import "tailwindcss"</code> + <code>@theme inline</code> block for custom values</td>
<td>✅ Fixed</td>
</tr>
</table>

### Problem-Solution Flow

```
Problem: Theme transition stuck
    ↓
Root Cause: No guard against rapid clicks
    ↓
Solution: isTransitioning flag + timeout fallback
    ↓
Result: Smooth, non-blocking transitions
```

```
Problem: Animation not smooth
    ↓
Root Cause: animation:none prevented crossfade
    ↓
Solution: Fade animations + optimized easing
    ↓
Result: 60fps GPU-accelerated transitions
```

---

## Dark Mode Implementation

### Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Theme Toggle                         │
│                        ↓                                │
│              useThemeTransition hook                    │
│                        ↓                                │
│         ┌─────────────────────────────┐                 │
│         │  1. Guard check             │                 │
│         │  2. Get click coordinates   │                 │
│         │  3. Start View Transition   │                 │
│         │  4. flushSync(setTheme)     │                 │
│         │  5. Animate effect          │                 │
│         │  6. Wait for finished       │                 │
│         └─────────────────────────────┘                 │
│                        ↓                                │
│              ThemeProvider (next-themes)                │
│                        ↓                                │
│           <html class="dark"> toggle                   │
│                        ↓                                │
│         CSS variables update instantly                  │
│                        ↓                                │
│         View Transition captures snapshots              │
│                        ↓                                │
│         Clip-path animation reveals new theme           │
└─────────────────────────────────────────────────────────┘
```

### Transition Effects

| Effect | Visual | Duration | Easing |
|--------|--------|:--------:|--------|
| **Circular** | Circle expands from click point | 600ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| **Diagonal** | Wipe from top-left corner | 600ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Curtain** | Drop from top like a curtain | 600ms | `cubic-bezier(0.33, 1, 0.68, 1)` |
| **Radial Burst** | Circle with glow bloom | 600ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Ink Bleed** | Organic spread from center | 720ms | `cubic-bezier(0.22, 1, 0.36, 1)` |

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ for curious engineers**

[⬆ Back to Top](#mentro)

</div>
