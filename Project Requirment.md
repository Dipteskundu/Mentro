# Mentro — Workshop & Mentorship Discovery Dashboard

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=flat&logo=next.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-success)

> **A modern, responsive frontend platform for students to discover technical workshops and mentorship sessions, filter opportunities by topic and level, and manage their personal learning schedule.**

---

## Project Overview

Mentro is a comprehensive workshop and mentorship discovery dashboard built as part of the **TechArenaX Frontend Development Internship**. The platform enables students to explore curated technical workshops, bookmark interesting sessions, register for mentorship opportunities, and maintain a personalized learning dashboard.

| **Detail**         | **Information**                                      |
| ------------------ | ---------------------------------------------------- |
| **Candidate**      | Diptes Kundu                                         |
| **Track**          | Frontend Development                                 |
| **Project Level**  | Mid-Level / Slightly Above Current Skill Level       |
| **Technology**     | React / Next.js + TypeScript + Tailwind CSS          |
| **Project Period** | 20 August – 30 August 2026                           |
| **Deadline**       | 30 August 2026                                       |

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Pages & Sections](#pages--sections)
- [Technical Architecture](#technical-architecture)
- [Evaluation Criteria](#evaluation-criteria)
- [Git Workflow](#git-workflow)
- [Roadmap](#roadmap)
- [License](#license)

---

## Features

### Core Functionality

| Feature                  | Description                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------ |
| **Workshop Explorer**    | Display 10–12 sample workshops/mentorship sessions using reusable cards              |
| **Search**               | Search by workshop title, mentor name, or topic                                      |
| **Advanced Filters**     | Filter by topic, skill level (Beginner/Intermediate/Advanced), and session type      |
| **Workshop Details**     | View mentor, description, date, duration, level, seats, and learning outcomes        |
| **Save Sessions**        | Bookmark/unbookmark workshops for later reference                                    |
| **Registration**         | Open registration modal/form with confirmation feedback                              |
| **My Learning Dashboard**| View registered and saved sessions with upcoming dates                               |
| **Schedule Validation**  | Prevent registering for two sessions with conflicting date/time                      |
| **Responsive UI**        | Polished experience across desktop, tablet, and mobile devices                       |

### Optional Enhancements

- Dark/Light theme toggle
- Calendar-style schedule view
- Mentor availability indicator

---

## Tech Stack

| Layer            | Technology                                      |
| ---------------- | ----------------------------------------------- |
| **Framework**    | Next.js 14 (App Router)                        |
| **Language**     | TypeScript 5+                                   |
| **Styling**      | Tailwind CSS 3+                                 |
| **State Mgmt**   | React Context API / Hooks                       |
| **Data Persistence** | localStorage                               |
| **Package Mgmt** | npm / yarn                                      |

---

## Project Structure

```
Mentro/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── explore/
│   │   │   └── page.tsx
│   │   ├── workshop/[id]/
│   │   │   └── page.tsx
│   │   └── my-learning/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── Input.tsx
│   │   ├── workshop/
│   │   │   ├── WorkshopCard.tsx
│   │   │   ├── WorkshopGrid.tsx
│   │   │   └── WorkshopDetails.tsx
│   │   ├── filters/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   └── SortDropdown.tsx
│   │   ├── dashboard/
│   │   │   ├── RegisteredSessions.tsx
│   │   │   ├── SavedSessions.tsx
│   │   │   └── UpcomingSchedule.tsx
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       └── Hero.tsx
│   ├── context/
│   │   └── AppContext.tsx
│   ├── data/
│   │   └── workshops.ts
│   ├── hooks/
│   │   └── useLocalStorage.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── scheduleValidator.ts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 or **yarn** >= 1.22.0

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Mentro.git

# Navigate to the project directory
cd Mentro

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Pages & Sections

| Page              | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| **Home**          | Hero section, featured sessions, category overview, and quick search     |
| **Explore**       | Workshop cards grid, search bar, advanced filters, and sorting options   |
| **Workshop Details** | Full session info, mentor profile, schedule, and registration action  |
| **My Learning**   | Registered sessions, saved/bookmarked sessions, and upcoming schedule    |

---

## Technical Architecture

### State Management

- **React Context API** for global application state (workshops, filters, user selections)
- **Custom Hooks** for reusable logic (localStorage persistence, filtering)
- **localStorage** for persisting saved and registered sessions across page reloads

### Component Design Principles

- **Reusable UI components** (Button, Modal, Badge, Input)
- **Domain-specific components** (WorkshopCard, FilterPanel, RegistrationForm)
- **Composition-based architecture** for flexible layout arrangements

### Schedule Conflict Prevention

The application validates session registration against existing bookings to prevent time conflicts. When a user attempts to register for a session that overlaps with an already registered session, the system displays a conflict notification.

---

## Evaluation Criteria

| Area                                      | Weight |
| ----------------------------------------- | ------ |
| Frontend Functionality                    | 25%    |
| Component Architecture & Code Quality     | 20%    |
| UI/UX & Responsiveness                    | 20%    |
| State Management & Client-Side Logic      | 15%    |
| Git/GitHub Workflow & Commit History      | 10%    |
| README, Testing & Presentation            | 10%    |

---

## Git Workflow

This project follows a structured Git workflow with regular, meaningful commits:

- **Clear commit messages** describing each change
- **Regular pushes** throughout the development period
- **No single final commit** — progress is tracked incrementally
- **No sensitive data** (passwords, API keys, environment variables) committed

```bash
# Commit convention
git commit -m "feat: add workshop search and filter functionality"
git commit -m "fix: resolve schedule conflict validation bug"
git commit -m "style: improve responsive layout for mobile devices"
```

---

## Roadmap

| Phase   | Timeline          | Tasks                                                        |
| ------- | ----------------- | ------------------------------------------------------------ |
| Phase 1 | Days 1–2          | Requirement analysis, project setup, mock data, routing      |
| Phase 2 | Days 3–4          | Workshop cards, search, filters, and sorting                 |
| Phase 3 | Days 5–6          | Details page, registration modal, saved-session logic        |
| Phase 4 | Days 7–8          | My Learning dashboard, localStorage, schedule validation     |
| Phase 5 | Day 9             | Responsive refinement, UI polish, testing, bug fixes         |
| Phase 6 | Day 10            | README, screenshots, cleanup, final GitHub push              |

---

## Important Notes

- This is a **Frontend Development** assignment. Backend, database, and payment integration are not required.
- AI tools may be used for assistance, but the candidate must understand and explain the final implementation.
- Focus on a **polished, functional frontend** and clean implementation rather than unnecessary features.
- **Clean, functional, and well-explained code** with consistent GitHub progress is preferred over scale.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>TechArenaX</strong> — Compete. Learn. Innovate.
</p>
