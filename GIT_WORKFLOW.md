# Mentro - Git Workflow Guide

## Overview

This document outlines the professional Git workflow for the Mentro project. Following this workflow demonstrates senior developer practices and ensures clean, trackable version control.

---

## Git Branching Strategy (GitFlow)

### Branch Types

| Branch | Purpose | Lifetime |
|--------|---------|----------|
| `main` | Production-ready code | Permanent |
| `develop` | Integration branch | Permanent |
| `feature/*` | New features | Temporary |

### Branch Structure

```
main (production)
  └── develop (integration)
       ├── feature/foundation-setup
       ├── feature/workshop-explorer
       ├── feature/workshop-details
       ├── feature/state-management
       ├── feature/my-learning-dashboard
       ├── feature/schedule-conflict
       ├── feature/responsive-polish
       └── feature/documentation
```

---

## Initial Setup

### 1. Create GitHub Repository

```bash
# Create repository on GitHub, then clone
git clone https://github.com/your-username/Mentro.git
cd Mentro
```

### 2. Create Main Branch

```bash
# Make initial commit
git add .
git commit -m "feat: initial project setup"

# Push to main
git branch -M main
git push -u origin main
```

### 3. Create Develop Branch

```bash
# Create and switch to develop
git checkout -b develop

# Push develop branch
git push -u origin develop
```

---

## Daily Workflow

### Starting a New Feature

```bash
# 1. Ensure you're on develop and up to date
git checkout develop
git pull origin develop

# 2. Create feature branch
git checkout -b feature/feature-name

# 3. Start working on the feature
```

### Working on a Module

```bash
# Make changes to files
# ...

# Stage specific files
git add src/components/WorkshopCard.tsx
git commit -m "feat: add WorkshopCard component"

# Stage multiple files
git add src/components/
git commit -m "feat: implement workshop grid layout"

# Stage all changes
git add .
git commit -m "feat: add search and filter functionality"

# Push to feature branch
git push origin feature/feature-name
```

### Completing a Feature

```bash
# 1. Push final changes
git push origin feature/feature-name

# 2. Go to GitHub and create Pull Request
#    - Base: develop
#    - Compare: feature/feature-name

# 3. Add description and request review

# 4. After review, merge PR

# 5. Delete feature branch locally
git checkout develop
git pull origin develop
git branch -d feature/feature-name
```

---

## Commit Message Convention

### Format

```
<type>: <description>
```

### Types

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | `feat: add workshop card component` |
| `fix` | Bug fix | `fix: resolve filter reset issue` |
| `docs` | Documentation | `docs: update README` |
| `style` | Code style | `style: format code with Prettier` |
| `refactor` | Code refactoring | `refactor: extract filter logic` |
| `test` | Tests | `test: add unit tests for helpers` |
| `chore` | Maintenance | `chore: update dependencies` |

### Examples

```bash
# Good commit messages
git commit -m "feat: add workshop card component"
git commit -m "feat: implement search functionality"
git commit -m "fix: resolve date formatting issue"
git commit -m "docs: add setup instructions to README"
git commit -m "refactor: extract filter logic to custom hook"

# Bad commit messages (avoid)
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

---

## Feature Branch Workflow by Phase and Module

### Phase 1: Foundation

**Branch:** `feature/foundation-setup`

```bash
# Start Phase 1
git checkout develop
git pull origin develop
git checkout -b feature/foundation-setup

# Module 1.1: Project Initialization
# ... work on project setup ...
git add .
git commit -m "feat: initialize Next.js project with TypeScript and Tailwind"

# Module 1.2: Types & Constants
# ... work on types and constants ...
git add .
git commit -m "feat: add TypeScript types and constants"

# Module 1.3: UI Components
# ... work on UI components ...
git add .
git commit -m "feat: create reusable UI components (Button, Badge, Modal, Input)"

# Module 1.4: Layout Components
# ... work on layout components ...
git add .
git commit -m "feat: implement layout components (Navbar, Footer)"

# Push and create PR
git push origin feature/foundation-setup
# Create PR to develop
```

### Phase 2: Workshop Explorer

**Branch:** `feature/workshop-explorer`

```bash
# Start Phase 2
git checkout develop
git pull origin develop
git checkout -b feature/workshop-explorer

# Module 2.1: Mock Data
# ... work on mock data ...
git add .
git commit -m "feat: add mock workshop and mentor data"

# Module 2.2: Workshop Card
# ... work on WorkshopCard component ...
git add .
git commit -m "feat: create WorkshopCard component"

# Module 2.3: Workshop Grid
# ... work on WorkshopGrid component ...
git add .
git commit -m "feat: implement WorkshopGrid with responsive layout"

# Module 2.4: Search & Filters
# ... work on search and filters ...
git add .
git commit -m "feat: add search and filter functionality"

# Push and create PR
git push origin feature/workshop-explorer
# Create PR to develop
```

### Phase 3: Workshop Details

**Branch:** `feature/workshop-details`

```bash
# Start Phase 3
git checkout develop
git pull origin develop
git checkout -b feature/workshop-details

# Module 3.1: Details Page
# ... work on details page ...
git add .
git commit -m "feat: create dynamic workshop details page"

# Module 3.2: Mentor Profile
# ... work on mentor profile ...
git add .
git commit -m "feat: add mentor profile section"

# Module 3.3: Learning Outcomes
# ... work on learning outcomes ...
git add .
git commit -m "feat: implement learning outcomes display"

# Module 3.4: Registration Actions
# ... work on registration actions ...
git add .
git commit -m "feat: add registration and save actions"

# Push and create PR
git push origin feature/workshop-details
# Create PR to develop
```

### Phase 4: State Management

**Branch:** `feature/state-management`

```bash
# Start Phase 4
git checkout develop
git pull origin develop
git checkout -b feature/state-management

# Module 4.1: AppContext Setup
# ... work on AppContext ...
git add .
git commit -m "feat: create AppContext with useReducer"

# Module 4.2: Save/Bookmark
# ... work on save/unsave ...
git add .
git commit -m "feat: implement save/unsave functionality"

# Module 4.3: Registration State
# ... work on registration state ...
git add .
git commit -m "feat: add registration state management"

# Module 4.4: localStorage Persistence
# ... work on localStorage ...
git add .
git commit -m "feat: implement localStorage persistence"

# Push and create PR
git push origin feature/state-management
# Create PR to develop
```

### Phase 5: My Learning Dashboard

**Branch:** `feature/my-learning-dashboard`

```bash
# Start Phase 5
git checkout develop
git pull origin develop
git checkout -b feature/my-learning-dashboard

# Module 5.1: Dashboard Layout
# ... work on dashboard layout ...
git add .
git commit -m "feat: create My Learning dashboard layout"

# Module 5.2: Registered Sessions
# ... work on RegisteredSessions ...
git add .
git commit -m "feat: implement RegisteredSessions component"

# Module 5.3: Saved Sessions
# ... work on SavedSessions ...
git add .
git commit -m "feat: implement SavedSessions component"

# Module 5.4: Upcoming Schedule
# ... work on UpcomingSchedule ...
git add .
git commit -m "feat: add UpcomingSchedule component"

# Push and create PR
git push origin feature/my-learning-dashboard
# Create PR to develop
```

### Phase 6: Schedule Conflict

**Branch:** `feature/schedule-conflict`

```bash
# Start Phase 6
git checkout develop
git pull origin develop
git checkout -b feature/schedule-conflict

# Module 6.1: Conflict Detection
# ... work on conflict detection ...
git add .
git commit -m "feat: implement schedule conflict detection"

# Module 6.2: Warning Display
# ... work on warning display ...
git add .
git commit -m "feat: add conflict warning display"

# Module 6.3: Registration Modal
# ... work on RegistrationModal ...
git add .
git commit -m "feat: create RegistrationModal with form validation"

# Module 6.4: Confirmation Flow
# ... work on confirmation flow ...
git add .
git commit -m "feat: add registration confirmation flow"

# Push and create PR
git push origin feature/schedule-conflict
# Create PR to develop
```

### Phase 7: Responsive Polish

**Branch:** `feature/responsive-polish`

```bash
# Start Phase 7
git checkout develop
git pull origin develop
git checkout -b feature/responsive-polish

# Module 7.1: Mobile Design
# ... work on mobile design ...
git add .
git commit -m "feat: optimize responsive design for mobile"

# Module 7.2: Tablet Design
# ... work on tablet design ...
git add .
git commit -m "feat: add tablet breakpoints"

# Module 7.3: Loading & Empty States
# ... work on loading states ...
git add .
git commit -m "feat: implement loading and empty states"

# Module 7.4: Error Handling
# ... work on error handling ...
git add .
git commit -m "feat: add error handling and animations"

# Push and create PR
git push origin feature/responsive-polish
# Create PR to develop
```

### Phase 8: Documentation

**Branch:** `feature/documentation`

```bash
# Start Phase 8
git checkout develop
git pull origin develop
git checkout -b feature/documentation

# Module 8.1: README
# ... work on README ...
git add .
git commit -m "docs: add comprehensive README"

# Module 8.2: Documentation
# ... work on documentation ...
git add .
git commit -m "docs: add project documentation"

# Module 8.3: Code Cleanup
# ... work on code cleanup ...
git add .
git commit -m "chore: clean up unused code"

# Module 8.4: Final Testing
# ... work on final testing ...
git add .
git commit -m "chore: final testing and verification"

# Push and create PR
git push origin feature/documentation
# Create PR to develop
```

---

## Module Completion Checklist

After completing each module:

- [ ] Code works as expected
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] Commit with meaningful message
- [ ] Push to feature branch
- [ ] Update IMPLEMENTATION_ROADMAP.md status

---

## Useful Git Commands

### Status and Logs

```bash
# Check status
git status

# View commit history
git log --oneline

# View branch history
git log --oneline --graph --all

# See changes
git diff
```

### Branch Management

```bash
# List branches
git branch

# List all branches (local and remote)
git branch -a

# Switch branch
git checkout branch-name

# Delete branch
git branch -d branch-name
```

### Undoing Changes

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Unstage a file
git reset HEAD file-name
```

---

## Pull Request Template

```markdown
## Description

Brief description of changes

## Module Completed

- [ ] Module X.Y: Description

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How Has This Been Tested?

Describe the tests you ran

## Checklist

- [ ] My code follows the style guidelines
- [ ] I have performed a self-review
- [ ] I have commented my code
- [ ] I have updated the documentation
- [ ] My changes generate no new warnings
```

---

**Last Updated:** August 20, 2026
