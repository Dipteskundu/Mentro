# Mentro - Implementation Roadmap

## 📋 Project Overview

**Mentro** is a modern, responsive frontend dashboard where students can discover technical workshops and mentorship sessions, filter opportunities, view session details, save interesting sessions, and manage a personal schedule.

**Tech Stack:** Next.js 16 + TypeScript + Tailwind CSS

---

## 🎯 Development Approach

**Methodology:** Feature-Driven Development (FDD) with Atomic Commits

This approach ensures:
- ✅ Trackable progress with clear milestones
- ✅ Early testing and bug detection
- ✅ Small, focused commits (Atomic Commits)
- ✅ Professional workflow matching real team practices
- ✅ Easy debugging with isolated feature development
- ✅ Clean git history with feature branches

---

## 🔀 Git Branching Strategy

### Branch Structure

```
main (production-ready)
  └── develop (integration branch)
       ├── feature/foundation-setup
       ├── feature/workshop-explorer
       ├── feature/workshop-details
       ├── feature/state-management
       ├── feature/my-learning-dashboard
       ├── feature/schedule-conflict
       ├── feature/responsive-polish
       └── feature/documentation
```

### Workflow for Each Feature

```bash
# 1. Start new feature
git checkout develop
git pull origin develop
git checkout -b feature/feature-name

# 2. Work on feature (multiple small commits)
git add .
git commit -m "feat: description"

# 3. Push feature branch
git push origin feature/feature-name

# 4. Create Pull Request to develop
# 5. Review and merge
# 6. Delete feature branch
```

### Branch Naming Convention

| Feature | Branch Name |
|---------|-------------|
| Foundation | `feature/foundation-setup` |
| Workshop Explorer | `feature/workshop-explorer` |
| Workshop Details | `feature/workshop-details` |
| State Management | `feature/state-management` |
| My Learning | `feature/my-learning-dashboard` |
| Schedule Conflict | `feature/schedule-conflict` |
| Polish | `feature/responsive-polish` |
| Documentation | `feature/documentation` |

---

## 📅 Implementation Timeline

---

### **Phase 1: Foundation (Day 1)**
**Goal:** Set up project architecture and design system
**Branch:** `feature/foundation-setup`
**Modules:** 4

#### Module 1.1: Project Initialization
| Task | Status | Description |
|------|--------|-------------|
| Initialize Next.js | ⬜ | Create Next.js app with TypeScript and Tailwind |
| Configure TypeScript | ⬜ | Set up tsconfig.json |
| Configure Tailwind | ⬜ | Set up tailwind.config.ts |
| Create folder structure | ⬜ | Create components, pages, utils folders |

**Git Commit:**
```bash
git commit -m "feat: initialize Next.js project with TypeScript and Tailwind"
```

#### Module 1.2: Types & Constants
| Task | Status | Description |
|------|--------|-------------|
| Define Workshop type | ⬜ | Workshop interface |
| Define Mentor type | ⬜ | Mentor interface |
| Define Registration type | ⬜ | Registration interface |
| Create constants | ⬜ | Navigation links, filter options |

**Git Commit:**
```bash
git commit -m "feat: add TypeScript types and constants"
```

#### Module 1.3: UI Components
| Task | Status | Description |
|------|--------|-------------|
| Create Button component | ⬜ | Reusable button with variants |
| Create Badge component | ⬜ | Level and type badges |
| Create Modal component | ⬜ | Reusable modal dialog |
| Create Input component | ⬜ | Input with label and error |

**Git Commit:**
```bash
git commit -m "feat: create reusable UI components (Button, Badge, Modal, Input)"
```

#### Module 1.4: Layout Components
| Task | Status | Description |
|------|--------|-------------|
| Create Navbar component | ✅ | Responsive navigation |
| Create Footer component | ✅ | Site footer |
| Set up page routing | ✅ | Home, Explore, My Learning pages |

**Git Commit:**
```bash
git commit -m "feat: implement layout components (Navbar, Footer)"
```

**Phase 1 Deliverables:**
- Working Next.js app with routing
- Reusable Button, Input, Badge, Modal components
- Responsive Navbar and Footer
- Clean project structure

---

### **Phase 2: Workshop Explorer (Days 2-3)**
**Goal:** Build core workshop discovery feature
**Branch:** `feature/workshop-explorer`
**Modules:** 4

#### Module 2.1: Mock Data
| Task | Status | Description |
|------|--------|-------------|
| Create workshop data | ✅ | 12 workshops with details |
| Create mentor data | ✅ | 5 mentors with profiles |
| Create topics array | ✅ | List of all topics |

**Git Commit:**
```bash
git commit -m "feat: add mock workshop and mentor data"
```

#### Module 2.2: Workshop Card
| Task | Status | Description |
|------|--------|-------------|
| Create WorkshopCard component | ✅ | Card displaying workshop info |
| Add level and type badges | ✅ | Show workshop level and type |
| Add mentor info | ✅ | Display mentor name and topic |
| Add seat availability | ✅ | Show available seats |

**Git Commit:**
```bash
git commit -m "feat: create WorkshopCard component"
```

#### Module 2.3: Workshop Grid
| Task | Status | Description |
|------|--------|-------------|
| Create WorkshopGrid component | ✅ | Responsive grid layout |
| Add empty state | ✅ | Show message when no results |
| Create Explore page | ✅ | Page displaying all workshops |

**Git Commit:**
```bash
git commit -m "feat: implement WorkshopGrid with responsive layout"
```

#### Module 2.4: Search & Filters
| Task | Status | Description |
|------|--------|-------------|
| Create WorkshopFilters component | ✅ | Search and filter controls |
| Implement search functionality | ✅ | Search by title, mentor, topic |
| Implement topic filter | ✅ | Filter by topic |
| Implement level filter | ✅ | Filter by skill level |
| Implement type filter | ✅ | Filter by session type |

**Git Commit:**
```bash
git commit -m "feat: add search and filter functionality"
```

**Phase 2 Deliverables:**
- Explore page with all workshops
- Working search functionality
- Filter dropdowns
- Responsive card grid

---

### **Phase 3: Workshop Details (Day 4)**
**Goal:** Show detailed workshop information
**Branch:** `feature/workshop-details`
**Modules:** 4

#### Module 3.1: Details Page
| Task | Status | Description |
|------|--------|-------------|
| Create dynamic route | ✅ | `/workshop/[id]` page |
| Display workshop info | ✅ | Title, description, date, duration |
| Add back navigation | ✅ | Return to explore page |

**Git Commit:**
```bash
git commit -m "feat: create dynamic workshop details page"
```

#### Module 3.2: Mentor Profile
| Task | Status | Description |
|------|--------|-------------|
| Create mentor section | ✅ | Display mentor information |
| Show mentor bio | ✅ | Mentor biography |
| Show expertise tags | ✅ | Mentor skills |

**Git Commit:**
```bash
git commit -m "feat: add mentor profile section"
```

#### Module 3.3: Learning Outcomes
| Task | Status | Description |
|------|--------|-------------|
| Create outcomes section | ✅ | List learning outcomes |
| Add check icons | ✅ | Visual indicators |

**Git Commit:**
```bash
git commit -m "feat: implement learning outcomes display"
```

#### Module 3.4: Registration Actions
| Task | Status | Description |
|------|--------|-------------|
| Add register button | ✅ | Call to action button |
| Add save button | ✅ | Bookmark workshop |
| Show seat availability | ✅ | Display available seats |

**Git Commit:**
```bash
git commit -m "feat: add registration and save actions"
```

**Phase 3 Deliverables:**
- Complete workshop details page
- Mentor information display
- Responsive layout

---

### **Phase 4: State Management (Day 5)**
**Goal:** Implement global state and persistence
**Branch:** `feature/state-management`
**Modules:** 4

#### Module 4.1: AppContext Setup
| Task | Status | Description |
|------|--------|-------------|
| Create AppContext | ✅ | React Context for global state |
| Implement useReducer | ✅ | State management logic |
| Define actions | ✅ | Register, save, filter actions |

**Git Commit:**
```bash
git commit -m "feat: create AppContext with useReducer"
```

#### Module 4.2: Save/Bookmark
| Task | Status | Description |
|------|--------|-------------|
| Implement save action | ✅ | Save workshop to state |
| Implement unsave action | ✅ | Remove from saved |
| Update UI | ✅ | Show saved status |

**Git Commit:**
```bash
git commit -m "feat: implement save/unsave functionality"
```

#### Module 4.3: Registration State
| Task | Status | Description |
|------|--------|-------------|
| Implement register action | ✅ | Register for workshop |
| Implement unregister action | ✅ | Cancel registration |
| Update UI | ✅ | Show registration status |

**Git Commit:**
```bash
git commit -m "feat: add registration state management"
```

#### Module 4.4: localStorage Persistence
| Task | Status | Description |
|------|--------|-------------|
| Load saved data | ✅ | Load from localStorage on mount |
| Save to localStorage | ✅ | Persist registrations and saves |

**Git Commit:**
```bash
git commit -m "feat: implement localStorage persistence"
```

**Phase 4 Deliverables:**
- Working save/unsave functionality
- Registration system
- Data persistence across page reloads

---

### **Phase 5: My Learning Dashboard (Day 6)**
**Goal:** User's personal learning hub
**Branch:** `feature/my-learning-dashboard`
**Modules:** 2

#### Module 5.1: Dashboard Layout + Session Lists
| Task | Status | Description |
|------|--------|-------------|
| Create My Learning page | ⬜ | Full dashboard layout with header |
| Create RegisteredSessions component | ⬜ | List registered workshops with cancel |
| Create SavedSessions component | ⬜ | List saved workshops with remove |
| Add empty states | ⬜ | Show messages when no data |
| Add responsive grid | ⬜ | Two-column on desktop, stacked on mobile |

**Git Commit:**
```bash
git commit -m "feat: create My Learning dashboard with registered and saved sessions"
```

#### Module 5.2: Upcoming Schedule
| Task | Status | Description |
|------|--------|-------------|
| Create UpcomingSchedule component | ⬜ | Calendar-style sorted view |
| Sort by date | ⬜ | Show upcoming sessions first |
| Format dates | ⬜ | Display dates in readable format |
| Integrate with dashboard | ⬜ | Add to page layout |

**Git Commit:**
```bash
git commit -m "feat: add UpcomingSchedule component with date sorting"
```

**Phase 5 Deliverables:**
- Complete My Learning page
- List of registered sessions with cancel
- List of saved sessions with remove
- Upcoming schedule view sorted by date

---

### **Phase 6: Advanced Features (Day 7)**
**Goal:** Schedule conflict prevention
**Branch:** `feature/schedule-conflict`
**Modules:** 4

#### Module 6.1: Conflict Detection
| Task | Status | Description |
|------|--------|-------------|
| Create conflict detection function | ⬜ | Check for time conflicts |
| Test conflict logic | ⬜ | Verify detection works |

**Git Commit:**
```bash
git commit -m "feat: implement schedule conflict detection"
```

#### Module 6.2: Warning Display
| Task | Status | Description |
|------|--------|-------------|
| Create conflict warning | ⬜ | Show conflict message |
| Add conflicting session info | ⬜ | Display which session conflicts |

**Git Commit:**
```bash
git commit -m "feat: add conflict warning display"
```

#### Module 6.3: Registration Modal
| Task | Status | Description |
|------|--------|-------------|
| Create RegistrationModal component | ⬜ | Registration form |
| Add form validation | ⬜ | Validate name and email |
| Add conflict check | ⬜ | Check before registration |

**Git Commit:**
```bash
git commit -m "feat: create RegistrationModal with form validation"
```

#### Module 6.4: Confirmation Flow
| Task | Status | Description |
|------|--------|-------------|
| Add success message | ⬜ | Registration confirmation |
| Add error handling | ⬜ | Handle registration errors |

**Git Commit:**
```bash
git commit -m "feat: add registration confirmation flow"
```

**Phase 6 Deliverables:**
- Schedule conflict prevention
- Working registration modal
- Form validation
- Success/error messages

---

### **Phase 7: Polish & Responsive (Day 8)**
**Goal:** UI/UX refinement
**Branch:** `feature/responsive-polish`
**Modules:** 4

#### Module 7.1: Mobile Design
| Task | Status | Description |
|------|--------|-------------|
| Optimize mobile layout | ⬜ | Responsive design for mobile |
| Test on mobile | ⬜ | Verify mobile experience |

**Git Commit:**
```bash
git commit -m "feat: optimize responsive design for mobile"
```

#### Module 7.2: Tablet Design
| Task | Status | Description |
|------|--------|-------------|
| Add tablet breakpoints | ⬜ | Optimize for tablet screens |
| Test on tablet | ⬜ | Verify tablet experience |

**Git Commit:**
```bash
git commit -m "feat: add tablet breakpoints"
```

#### Module 7.3: Loading & Empty States
| Task | Status | Description |
|------|--------|-------------|
| Add loading states | ⬜ | Skeleton loaders |
| Add empty states | ⬜ | No data messages |

**Git Commit:**
```bash
git commit -m "feat: implement loading and empty states"
```

#### Module 7.4: Error Handling
| Task | Status | Description |
|------|--------|-------------|
| Add error boundaries | ⬜ | Handle errors gracefully |
| Add animations | ⬜ | Smooth transitions |

**Git Commit:**
```bash
git commit -m "feat: add error handling and animations"
```

**Phase 7 Deliverables:**
- Fully responsive design
- Loading and empty states
- Smooth animations
- Error handling

---

### **Phase 8: Documentation & Deployment (Day 9-10)**
**Goal:** Final preparation
**Branch:** `feature/documentation`
**Modules:** 4

#### Module 8.1: README
| Task | Status | Description |
|------|--------|-------------|
| Create README.md | ⬜ | Project overview and setup |
| Add features section | ⬜ | List all features |
| Add screenshots | ⬜ | Capture all pages |

**Git Commit:**
```bash
git commit -m "docs: add comprehensive README"
```

#### Module 8.2: Documentation
| Task | Status | Description |
|------|--------|-------------|
| Add setup instructions | ⬜ | How to run the project |
| Add technology list | ⬜ | List all technologies used |

**Git Commit:**
```bash
git commit -m "docs: add project documentation"
```

#### Module 8.3: Code Cleanup
| Task | Status | Description |
|------|--------|-------------|
| Remove unused code | ⬜ | Clean up codebase |
| Format code | ⬜ | Consistent formatting |

**Git Commit:**
```bash
git commit -m "chore: clean up unused code"
```

#### Module 8.4: Final Testing
| Task | Status | Description |
|------|--------|-------------|
| Test all features | ⬜ | Verify everything works |
| Final commit | ⬜ | Last commit to main |

**Git Commit:**
```bash
git commit -m "chore: final testing and verification"
```

**Phase 8 Deliverables:**
- Comprehensive README
- Screenshots of all pages
- Clean codebase
- Professional git history

---

## 📊 Progress Tracker

| Phase | Module | Status | Progress | Branch |
|-------|--------|--------|----------|--------|
| **Phase 1** | 1.1 Project Initialization | ⬜ | 0% | `feature/foundation-setup` |
| | 1.2 Types & Constants | ⬜ | 0% | |
| | 1.3 UI Components | ⬜ | 0% | |
| | 1.4 Layout Components | ✅ | 100% | |
| **Phase 2** | 2.1 Mock Data | ✅ | 100% | `feature/workshop-explorer` |
| | 2.2 Workshop Card | ✅ | 100% | |
| | 2.3 Workshop Grid | ✅ | 100% | |
| | 2.4 Search & Filters | ✅ | 100% | |
| **Phase 3** | 3.1 Details Page | ✅ | 100% | `feature/workshop-details` |
| | 3.2 Mentor Profile | ✅ | 100% | |
| | 3.3 Learning Outcomes | ✅ | 100% | |
| | 3.4 Registration Actions | ✅ | 100% | |
| **Phase 4** | 4.1 AppContext Setup | ✅ | 100% | `feature/state-management` |
| | 4.2 Save/Bookmark | ✅ | 100% | |
| | 4.3 Registration State | ✅ | 100% | |
| | 4.4 localStorage | ✅ | 100% | |
| **Phase 5** | 5.1 Dashboard Layout + Session Lists | ⬜ | 0% | `feature/my-learning-dashboard` |
| | 5.2 Upcoming Schedule | ⬜ | 0% | |
| **Phase 6** | 6.1 Conflict Detection | ⬜ | 0% | `feature/schedule-conflict` |
| | 6.2 Warning Display | ⬜ | 0% | |
| | 6.3 Registration Modal | ⬜ | 0% | |
| | 6.4 Confirmation Flow | ⬜ | 0% | |
| **Phase 7** | 7.1 Mobile Design | ⬜ | 0% | `feature/responsive-polish` |
| | 7.2 Tablet Design | ⬜ | 0% | |
| | 7.3 Loading States | ⬜ | 0% | |
| | 7.4 Error Handling | ⬜ | 0% | |
| **Phase 8** | 8.1 README | ⬜ | 0% | `feature/documentation` |
| | 8.2 Documentation | ⬜ | 0% | |
| | 8.3 Code Cleanup | ⬜ | 0% | |
| | 8.4 Final Testing | ⬜ | 0% | |

**Overall Progress:** 43% (13/30 modules complete)

---

## 🏗️ Architecture Overview

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx           # Home page
│   ├── explore/           # Workshop explorer
│   ├── workshop/[id]/     # Workshop details
│   └── my-learning/       # User dashboard
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components
│   ├── workshop/          # Workshop-related components
│   ├── dashboard/         # Dashboard components
│   └── home/              # Home page components
├── context/               # React Context
├── data/                  # Mock data
├── types/                 # TypeScript types
└── utils/                 # Utility functions
```

---

## 🔧 Key Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| Next.js | React Framework | 16.3.1 |
| TypeScript | Type Safety | Latest |
| Tailwind CSS | Styling | Latest |
| React Context | State Management | Built-in |
| localStorage | Data Persistence | Browser API |

---

## ✅ Features Checklist

### Core Features
- [ ] Workshop Explorer with 12+ sessions
- [ ] Search by title, mentor, topic
- [ ] Filter by topic, level, type
- [ ] Workshop Details page
- [ ] Save/Bookmark sessions
- [ ] Registration modal
- [ ] My Learning Dashboard
- [ ] Schedule conflict prevention
- [ ] Responsive UI
- [ ] localStorage persistence

### Technical Features
- [ ] TypeScript throughout
- [ ] Reusable components
- [ ] Clean code architecture
- [ ] Proper error handling
- [ ] Loading states
- [ ] Empty states

---

## 📝 Git Commit Strategy (Per Module)

| Phase | Module | Commit Message |
|-------|--------|----------------|
| 1 | 1.1 | `feat: initialize Next.js project with TypeScript and Tailwind` |
| 1 | 1.2 | `feat: add TypeScript types and constants` |
| 1 | 1.3 | `feat: create reusable UI components (Button, Badge, Modal, Input)` |
| 1 | 1.4 | `feat: implement layout components (Navbar, Footer)` |
| 2 | 2.1 | `feat: add mock workshop and mentor data` |
| 2 | 2.2 | `feat: create WorkshopCard component` |
| 2 | 2.3 | `feat: implement WorkshopGrid with responsive layout` |
| 2 | 2.4 | `feat: add search and filter functionality` |
| 3 | 3.1 | `feat: create dynamic workshop details page` |
| 3 | 3.2 | `feat: add mentor profile section` |
| 3 | 3.3 | `feat: implement learning outcomes display` |
| 3 | 3.4 | `feat: add registration and save actions` |
| 4 | 4.1 | `feat: create AppContext with useReducer` |
| 4 | 4.2 | `feat: implement save/unsave functionality` |
| 4 | 4.3 | `feat: add registration state management` |
| 4 | 4.4 | `feat: implement localStorage persistence` |
| 5 | 5.1 | `feat: create My Learning dashboard with registered and saved sessions` |
| 5 | 5.2 | `feat: add UpcomingSchedule component with date sorting` |
| 6 | 6.1 | `feat: implement schedule conflict detection` |
| 6 | 6.2 | `feat: add conflict warning display` |
| 6 | 6.3 | `feat: create RegistrationModal with form validation` |
| 6 | 6.4 | `feat: add registration confirmation flow` |
| 7 | 7.1 | `feat: optimize responsive design for mobile` |
| 7 | 7.2 | `feat: add tablet breakpoints` |
| 7 | 7.3 | `feat: implement loading and empty states` |
| 7 | 7.4 | `feat: add error handling and animations` |
| 8 | 8.1 | `docs: add comprehensive README` |
| 8 | 8.2 | `docs: add project documentation` |
| 8 | 8.3 | `chore: clean up unused code` |
| 8 | 8.4 | `chore: final testing and verification` |

---

## 🎓 Learning Outcomes

By following this roadmap, you will learn:

1. **Professional Workflow** - Feature-driven development approach
2. **Atomic Commits** - Small, focused commits
3. **State Management** - React Context with useReducer
4. **TypeScript** - Type-safe React development
5. **Responsive Design** - Mobile-first approach
6. **Component Architecture** - Reusable component patterns
7. **Git Workflow** - Meaningful commits and version control
8. **Branch Management** - Feature branch workflow

---

## 🚀 Next Steps

After completing this project:

1. **Deploy** - Deploy to Vercel/Netlify
2. **Add Tests** - Write unit and integration tests
3. **Performance** - Optimize with Lighthouse
4. **Accessibility** - Add ARIA labels and keyboard navigation
5. **Dark Mode** - Implement theme switching

---

**Last Updated:** August 20, 2026
**Project Status:** ⬜ Not Started
