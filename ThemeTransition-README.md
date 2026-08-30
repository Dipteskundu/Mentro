# TrustShield — Theme Transition Effect

## Implementation README

**A full-page cinematic theme transition effect using the browser-native View Transitions API — no animation libraries, no GPU-heavy dependencies, runs at 60fps on every page in the application.**

---

## Table of Contents

- [What This Feature Is](#what-this-feature-is)
- [How It Works — The Core Idea](#how-it-works--the-core-idea)
- [The Five Effects](#the-five-effects)
- [Technology Used and Why](#technology-used-and-why)
- [Browser Support and Fallback](#browser-support-and-fallback)
- [Complete File Structure](#complete-file-structure)
- [Step-by-Step Implementation](#step-by-step-implementation)
  - [Step 1 — next.config.js](#step-1--nextconfigjs)
  - [Step 2 — Global CSS](#step-2--global-css)
  - [Step 3 — useThemeTransition Hook](#step-3--usethemetransition-hook)
  - [Step 4 — ThemeToggle Component](#step-4--themetoggle-component)
  - [Step 5 — Root Layout Integration](#step-5--root-layout-integration)
  - [Step 6 — CSS Variables for Both Themes](#step-6--css-variables-for-both-themes)
  - [Step 7 — Reduced Motion Respect](#step-7--reduced-motion-respect)
- [Effect Variants — Full Code](#effect-variants--full-code)
  - [Effect 1 — Circular Ripple from Click](#effect-1--circular-ripple-from-click)
  - [Effect 2 — Diagonal Wipe](#effect-2--diagonal-wipe)
  - [Effect 3 — Vertical Curtain](#effect-3--vertical-curtain)
  - [Effect 4 — Radial Burst with Glow](#effect-4--radial-burst-with-glow)
  - [Effect 5 — Ink Bleed](#effect-5--ink-bleed)
- [flushSync — Why It Is Required](#flushsync--why-it-is-required)
- [Toggle Button Variants](#toggle-button-variants)
- [Testing Checklist](#testing-checklist)
- [Performance Notes](#performance-notes)
- [Accessibility](#accessibility)
- [Implementation Checklist](#implementation-checklist)

---

## What This Feature Is

When a user clicks the theme toggle anywhere in TrustShield — on the homepage, inside the dashboard, on the login page, on the document chat page, anywhere — a full-screen cinematic animation plays as the theme switches from light to dark or dark to light. The animation covers the entire viewport and is complete in 500–600ms. The user sees a visual "reveal" effect expanding from the exact pixel they clicked, as if the new theme is sweeping out from their fingertip.

This effect works on every page in the application without any per-page configuration because it operates at the `::view-transition` pseudo-element level — a browser-native layer that sits above the rendered page, capturing snapshots of the entire viewport before and after the theme change and animating between them.

---

## How It Works — The Core Idea

The View Transitions API works in three steps every time it is called:

```
1. Browser takes a screenshot of the current page (the "old" state)
         ↓
2. Your callback runs — the DOM changes (theme class toggled on <html>)
         ↓
3. Browser takes a screenshot of the new page (the "new" state)
         ↓
4. Browser animates between old and new screenshots using CSS pseudo-elements
         ↓
5. Animation completes — user sees the fully rendered new theme
```

The key insight from MDN's documentation: the animations run on compositor layers, meaning they execute on the GPU rather than the main thread. The page stays fully interactive during the transition and the animation stays at 60fps even while JavaScript is running.

The two pseudo-elements that drive the animation are:

```
::view-transition-old(root)   — the screenshot of the page BEFORE the change
::view-transition-new(root)   — the screenshot of the page AFTER the change
```

By default the browser crossfades between these two. TrustShield replaces this default with a custom `clip-path` circle animation that expands from the user's click position — making the effect feel personal and direct rather than generic.

---

## The Five Effects

TrustShield implements five transition effects. The default is Effect 1 (Circular Ripple). The others are available by changing one constant.

| # | Effect Name | Visual Description | Direction |
|---|---|---|---|
| 1 | **Circular Ripple** *(default)* | A circle expands from the exact click position outward to fill the screen | From click point outward |
| 2 | **Diagonal Wipe** | New theme slides in from the top-left corner diagonally | Top-left → bottom-right |
| 3 | **Vertical Curtain** | New theme drops down from the top like a curtain being pulled | Top → bottom |
| 4 | **Radial Burst with Glow** | Circle expands with a soft blur glow at the edge during the transition | From click point outward with bloom |
| 5 | **Ink Bleed** | New theme bleeds in from the center outward, slower and more organic | Center outward, eased |

---

## Technology Used and Why

| Technology | Why |
|---|---|
| **View Transitions API** (`document.startViewTransition`) | Native browser API — no library, no bundle size, GPU-accelerated at 60fps. As of October 2025 it is Baseline Newly Available across Chrome 111+, Edge 111+, Firefox 133+, and Safari 18+ |
| **Web Animations API** (`element.animate()`) | Used to programmatically start the clip-path animation at the exact moment the View Transition pseudo-elements are created (the `.ready` promise). This is what allows the animation to start from the user's specific click coordinates |
| **`flushSync` from React** | React DOM updates are asynchronous. Without `flushSync`, `startViewTransition`'s callback may complete before React has actually written the new theme class to the DOM, causing the transition to animate to a state that hasn't rendered yet |
| **`next-themes`** | Handles theme persistence in localStorage, SSR hydration safety, system preference detection, and the `class` strategy that adds `dark` to `<html>` |
| **CSS custom properties** | All colors reference CSS variables (`--background`, `--foreground`, etc.) which instantly change when the `dark` class is toggled — this is what the View Transition snapshot captures |

**There is no Framer Motion, no GSAP, and no CSS animation library involved.** The entire effect is the browser's native View Transitions API plus a single `element.animate()` call.

---

## Browser Support and Fallback

The View Transitions API joined Baseline Newly Available in October 2025. Support as of mid-2026:

| Browser | Support |
|---|---|
| Chrome 111+ | Full support |
| Edge 111+ | Full support |
| Safari 18+ | Full support |
| Firefox 133+ | Full support |
| Older browsers | Falls back to instant theme change — no animation, no crash |

The fallback is built into the hook with a single guard:

```ts
if (!document.startViewTransition) {
  // Instant theme change — no animation, works everywhere
  setTheme(newTheme);
  return;
}
// Otherwise run the full effect
```

This means the feature is genuine progressive enhancement — it adds a visual delight for modern browsers and degrades gracefully to a functional instant switch on older ones.

---

## Complete File Structure

```
frontend/
├── app/
│   ├── layout.tsx                          # MODIFY — add suppressHydrationWarning
│   └── globals.css                         # MODIFY — add View Transition CSS
│
├── components/
│   ├── providers/
│   │   └── theme-provider.tsx              # MODIFY — configure next-themes correctly
│   └── ui/
│       └── theme-toggle/
│           ├── ThemeToggle.tsx             # NEW — main toggle button component
│           ├── ThemeToggleIcon.tsx         # NEW — animated sun/moon icon
│           └── index.ts                   # NEW — re-export
│
├── hooks/
│   └── useThemeTransition.ts              # NEW — core hook, all effect logic lives here
│
├── lib/
│   └── theme-effects.ts                   # NEW — the 5 effect implementations
│
└── next.config.js                          # MODIFY — enable viewTransition flag
```

---

## Step-by-Step Implementation

### Step 1 — next.config.js

Enable Next.js's experimental View Transitions integration. This is documented at `nextjs.org/docs/app/api-reference/config/next-config-js/viewTransition`.

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,   // Enables React's View Transitions API integration
  },
};

module.exports = nextConfig;
```

### Step 2 — Global CSS

This CSS is the most important part of the entire feature. Without it, the browser applies its default crossfade animation, and the custom clip-path animation fights with it.

```css
/* app/globals.css */

/* ─── View Transition Base ──────────────────────────────────────────────────
   CRITICAL: These rules disable the browser's default crossfade animation
   and remove mix-blend-mode, so our custom clip-path animation runs cleanly.
   Without these, both animations run simultaneously and produce visual glitches.
   Source: MDN Web Docs — Using the View Transition API
─────────────────────────────────────────────────────────────────────────── */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;       /* Disable the default crossfade */
  mix-blend-mode: normal; /* Prevent blending between old and new snapshots */
}

/* The old (outgoing) snapshot stays completely visible underneath */
::view-transition-old(root) {
  z-index: 1;
}

/* The new (incoming) snapshot sits on top and is what we animate */
::view-transition-new(root) {
  z-index: 9999;
}

/* ─── CSS Variables — store click coordinates for Effects 1 and 4 ──────────
   These are set from JavaScript before startViewTransition is called,
   so the CSS animations can reference the exact click position.
─────────────────────────────────────────────────────────────────────────── */
:root {
  --vt-x: 50%;          /* Click X position — defaults to center */
  --vt-y: 50%;          /* Click Y position — defaults to center */
  --vt-radius: 0px;     /* Computed circle radius to cover the screen */
  --vt-duration: 500ms; /* Transition speed — adjustable */
  --vt-easing: ease-in-out;
}

/* ─── Reduced Motion — always respect user preference ───────────────────────
   If the user has prefers-reduced-motion enabled in their OS settings,
   skip the animation entirely. The theme still changes, just instantly.
   This is an accessibility requirement, not optional.
─────────────────────────────────────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none !important;
    transition: none !important;
  }
}

/* ─── Light Theme Variables ──────────────────────────────────────────────── */
:root {
  --background: #f3f1ea;
  --foreground: #15161a;
  --surface: #fbfaf6;
  --border: #d8d4c6;
  --text-secondary: #3a3c44;
  --accent: #1f6e5c;
  --accent-soft: #e3efe9;
}

/* ─── Dark Theme Variables ───────────────────────────────────────────────── */
.dark {
  --background: #0f1117;
  --foreground: #e8e6df;
  --surface: #1a1c23;
  --border: #2d2f38;
  --text-secondary: #9a9cab;
  --accent: #3fcca8;
  --accent-soft: #1a3d33;
}
```

### Step 3 — useThemeTransition Hook

This is the core of the feature. All five effects are implemented here. The hook intercepts the normal `setTheme` call from `next-themes` and wraps it in `startViewTransition`.

```ts
// hooks/useThemeTransition.ts
"use client";

import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { THEME_EFFECTS } from "@/lib/theme-effects";

// Change this constant to switch between effects
// Options: "circular" | "diagonal" | "curtain" | "radial-burst" | "ink-bleed"
const ACTIVE_EFFECT = "circular" as const;

type EffectName = "circular" | "diagonal" | "curtain" | "radial-burst" | "ink-bleed";

interface TransitionOptions {
  effect?: EffectName;
  duration?: number;
}

export function useThemeTransition(options: TransitionOptions = {}) {
  const { theme, setTheme } = useTheme();
  const effect = options.effect ?? ACTIVE_EFFECT;
  const duration = options.duration ?? 500;

  async function toggleTheme(event?: React.MouseEvent) {
    const newTheme = theme === "dark" ? "light" : "dark";

    // ── Fallback for browsers without View Transitions API ───────────────
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // ── Fallback for reduced motion preference ───────────────────────────
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTheme(newTheme);
      return;
    }

    // ── Get click coordinates for effects that originate from cursor ──────
    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;

    // Calculate the radius needed to cover the entire screen from click point.
    // This uses the Pythagorean theorem: the furthest corner from (x,y) is the
    // hypotenuse of the triangle formed by the larger of:
    //   horizontal: max(x, screenWidth - x)
    //   vertical:   max(y, screenHeight - y)
    // Source: MDN ViewTransition docs + Akash Hamirwasia's implementation
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Set CSS variables so CSS-based effects can read click position
    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);
    document.documentElement.style.setProperty("--vt-radius", `${endRadius}px`);
    document.documentElement.style.setProperty("--vt-duration", `${duration}ms`);

    // ── Start the View Transition ─────────────────────────────────────────
    const transition = document.startViewTransition(() => {
      // flushSync forces React to synchronously write DOM changes BEFORE
      // startViewTransition's callback returns. Without this, React's async
      // rendering may not have applied the new theme class to <html> yet when
      // the browser takes its "new state" snapshot — resulting in the
      // transition animating to the wrong (unchanged) theme.
      // Source: Akash Hamirwasia — Full-page theme toggle animation
      flushSync(() => {
        setTheme(newTheme);
      });
    });

    // ── Wait for pseudo-elements to be created ───────────────────────────
    // transition.ready resolves when ::view-transition-new(root) and
    // ::view-transition-old(root) exist in the DOM, meaning we can now
    // animate them programmatically using the Web Animations API.
    transition.ready.then(() => {
      // Run the selected effect
      THEME_EFFECTS[effect]({
        x,
        y,
        endRadius,
        duration,
        direction: newTheme === "dark" ? "to-dark" : "to-light",
      });
    });

    // Optional: do something after the animation is fully complete
    await transition.finished;
  }

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
}
```

### Step 4 — ThemeToggle Component

```tsx
// components/ui/theme-toggle/ThemeToggle.tsx
"use client";

import { useThemeTransition } from "@/hooks/useThemeTransition";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { toggleTheme, isDark } = useThemeTransition();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch — only render after client mount
  // next-themes cannot know the theme during SSR
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a neutral placeholder that matches the button size
    // to prevent layout shift on hydration
    const sizeMap = { sm: "h-8 w-8", md: "h-9 w-9", lg: "h-10 w-10" };
    return <div className={cn(sizeMap[size], "rounded-md")} aria-hidden />;
  }

  const iconSize = { sm: 14, md: 16, lg: 18 }[size];
  const buttonSize = { sm: "h-8 w-8", md: "h-9 w-9", lg: "h-10 w-10" }[size];

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        buttonSize,
        "relative inline-flex items-center justify-center rounded-md",
        "border border-border bg-surface",
        "text-foreground hover:bg-accent-soft",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
    >
      <Sun
        size={iconSize}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        )}
        aria-hidden="true"
      />
      <Moon
        size={iconSize}
        className={cn(
          "absolute transition-all duration-300",
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        )}
        aria-hidden="true"
      />
    </button>
  );
}
```

### Step 5 — Root Layout Integration

```tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning is REQUIRED by next-themes.
    // next-themes modifies the class on <html> before React hydration completes.
    // Without this prop, React throws a hydration mismatch warning.
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

```tsx
// components/providers/theme-provider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      // "class" strategy adds/removes the "dark" class on <html>
      // This is what Tailwind's dark: variant responds to
      defaultTheme="system"
      // Respects the user's OS preference on first visit
      enableSystem
      // disableTransitionOnChange MUST be false (or omitted) for our
      // View Transition effect to work. If set to true, next-themes
      // temporarily disables all CSS transitions including our animation.
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
```

### Step 6 — CSS Variables for Both Themes

Every color in TrustShield must reference a CSS variable. If any component uses a hardcoded color (e.g. `bg-white` instead of `bg-[var(--background)]` or `bg-background`), it will not respond to the theme change during the transition snapshot and will look wrong during the animation.

```css
/* Rule: use semantic color variables, not hardcoded Tailwind colors */

/* CORRECT — responds to theme switch */
.card { background: var(--surface); }
.card { @apply bg-surface; }

/* WRONG — stays white in both themes, breaks transition */
.card { background: white; }
.card { @apply bg-white; }
```

Add these Tailwind extensions to use CSS variables as Tailwind utility classes:

```js
// tailwind.config.js
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        border: "var(--border)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        "text-secondary": "var(--text-secondary)",
      },
    },
  },
};
```

### Step 7 — Reduced Motion Respect

This is already covered in the CSS (Step 2) and the hook (Step 3). The implementation respects `prefers-reduced-motion` at both levels:

- **CSS level**: `@media (prefers-reduced-motion: reduce)` sets `animation: none` on the view transition pseudo-elements
- **JavaScript level**: the hook checks `window.matchMedia("(prefers-reduced-motion: reduce)")` and falls back to an instant theme change if the preference is set

Users who have enabled reduced motion in their OS settings will never see the animation — the theme still changes, just instantly.

---

## Effect Variants — Full Code

```ts
// lib/theme-effects.ts
// All five effect implementations.
// Each function animates ::view-transition-new(root) using the Web Animations API.

interface EffectOptions {
  x: number;          // Click X coordinate (pixels)
  y: number;          // Click Y coordinate (pixels)
  endRadius: number;  // Radius needed to cover the screen from (x,y)
  duration: number;   // Animation duration in ms
  direction: "to-dark" | "to-light";
}

// ── Effect 1 — Circular Ripple ────────────────────────────────────────────
// The new theme expands as a circle from the exact pixel the user clicked.
// Source technique: MDN ViewTransition docs circular reveal example.
function circularRipple({ x, y, endRadius, duration }: EffectOptions) {
  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,         // Start: invisible dot at cursor
        `circle(${endRadius}px at ${x}px ${y}px)`, // End: circle covers full screen
      ],
    },
    {
      duration,
      easing: "ease-in-out",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

// ── Effect 2 — Diagonal Wipe ──────────────────────────────────────────────
// New theme slides in from the top-left corner diagonally to the bottom-right.
// Uses polygon clip-path with 3 points that expand to fill the screen.
function diagonalWipe({ duration }: EffectOptions) {
  document.documentElement.animate(
    {
      clipPath: [
        "polygon(0 0, 0 0, 0 0)",               // Start: invisible triangle
        "polygon(0 0, 200% 0, 0 200%)",          // End: triangle covers full screen
      ],
    },
    {
      duration,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

// ── Effect 3 — Vertical Curtain ───────────────────────────────────────────
// New theme drops from the top like a stage curtain being lowered.
// Simple inset clip-path that reveals from top to bottom.
function verticalCurtain({ duration }: EffectOptions) {
  document.documentElement.animate(
    {
      clipPath: [
        "inset(0 0 100% 0)",    // Start: clipped from bottom — nothing visible
        "inset(0 0 0% 0)",      // End: fully visible
      ],
    },
    {
      duration,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",  // Ease-out expo — snappy curtain drop
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

// ── Effect 4 — Radial Burst with Glow ────────────────────────────────────
// Like Effect 1 but adds a CSS filter blur on the edge of the expanding circle
// during the transition, creating a "bloom" or "glow" effect at the boundary.
// The blur is applied via a CSS animation on the element itself, not clip-path.
function radialBurst({ x, y, endRadius, duration }: EffectOptions) {
  // Animate the clip-path circle (same as circular ripple)
  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ],
    },
    {
      duration,
      easing: "ease-out",
      pseudoElement: "::view-transition-new(root)",
    }
  );

  // Simultaneously animate a glow pulse on the new view layer
  // The filter blurs at the midpoint (expanding edge) and sharpens at the end
  document.documentElement.animate(
    {
      filter: [
        "blur(0px) brightness(1)",       // Start: sharp
        "blur(8px) brightness(1.3)",     // Mid: glowing blur at the expansion edge
        "blur(0px) brightness(1)",       // End: sharp again
      ],
      offset: [0, 0.5, 1],              // Keyframe timing
    },
    {
      duration,
      easing: "ease-in-out",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

// ── Effect 5 — Ink Bleed ──────────────────────────────────────────────────
// The new theme "bleeds" in from the center outward with a slower,
// more organic easing — like ink spreading on paper.
// Ignores click position and always originates from the screen center.
function inkBleed({ duration }: EffectOptions) {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const endRadius = Math.hypot(cx, cy) * 1.2; // Slightly oversized for comfort

  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${cx}px ${cy}px)`,
        `circle(${endRadius}px at ${cx}px ${cy}px)`,
      ],
    },
    {
      duration: duration * 1.4,         // Slower than the others — more deliberate
      easing: "cubic-bezier(0.0, 0.9, 0.57, 1)", // Custom ease: slow start, fast mid, settle
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

// ── Export map ────────────────────────────────────────────────────────────
export const THEME_EFFECTS = {
  circular:      circularRipple,
  diagonal:      diagonalWipe,
  curtain:       verticalCurtain,
  "radial-burst": radialBurst,
  "ink-bleed":   inkBleed,
} as const;
```

---

## flushSync — Why It Is Required

This is the most technically important detail in the whole implementation. Without `flushSync`, the transition will randomly show no animation or will animate to the wrong state.

React schedules DOM updates asynchronously. When you call `setTheme(newTheme)`, React does not immediately write the new `dark` class to the `<html>` element. It schedules it for the next render cycle. The `startViewTransition` callback, however, is synchronous from the browser's perspective — it must complete (returning a resolved Promise) before the browser takes the "after" snapshot.

The sequence without `flushSync`:

```
startViewTransition callback starts
  → setTheme("dark") called        ← React schedules the class change
  → callback returns               ← browser takes "after" snapshot
  → browser sees: <html> still has old theme  ← wrong snapshot!
  → React eventually adds "dark" class
  → transition animates: old theme → old theme  ← invisible transition
```

The sequence with `flushSync`:

```
startViewTransition callback starts
  → flushSync(() => setTheme("dark"))  ← React writes to DOM SYNCHRONOUSLY
  → <html class="dark"> is in the DOM RIGHT NOW
  → callback returns
  → browser takes "after" snapshot    ← correct snapshot: dark theme
  → transition animates: light → dark ← correct animation
```

```ts
// CORRECT
const transition = document.startViewTransition(() => {
  flushSync(() => {
    setTheme(newTheme);  // DOM update is synchronous inside flushSync
  });
});

// WRONG — animation may not work
const transition = document.startViewTransition(() => {
  setTheme(newTheme);  // DOM update is async — browser snapshots wrong state
});
```

---

## Toggle Button Variants

The `ThemeToggle` component can be used anywhere in the application:

```tsx
// In the Navbar — medium size, default
import { ThemeToggle } from "@/components/ui/theme-toggle";

// Standard usage
<ThemeToggle />

// Large size for the homepage hero
<ThemeToggle size="lg" />

// Small size for mobile nav
<ThemeToggle size="sm" />

// With custom className
<ThemeToggle className="ml-auto" />
```

Because the effect logic lives in the `useThemeTransition` hook rather than in the button component, multiple toggle buttons can exist on the same page (e.g. one in the navbar and one in account settings) and they all trigger the same full-screen effect correctly, each originating from their own click position.

---

## Testing Checklist

Test every scenario in this list before shipping:

### Effect behavior
- [ ] Effect triggers on every page — homepage, login, dashboard, document chat, admin
- [ ] Effect originates from the click position (move click to corners, edges, center)
- [ ] Effect completes in ~500ms — not too fast, not too slow
- [ ] Old theme is fully visible underneath until the new theme circle covers it
- [ ] After the transition, the new theme renders correctly with no color glitches

### Fallback behavior
- [ ] On a browser with no View Transitions API support: theme changes instantly with no errors
- [ ] With `prefers-reduced-motion: reduce` in OS settings: theme changes instantly with no animation
- [ ] With JavaScript disabled: no toggle (expected — next-themes requires JS)

### Hydration and SSR
- [ ] No hydration mismatch warning in the browser console
- [ ] Page renders correctly on first load with both light and dark themes
- [ ] System preference (OS dark mode) is respected on first visit

### Multiple toggles
- [ ] Rapidly clicking the toggle does not produce broken visual states
- [ ] Clicking the toggle during an active transition waits for the previous one to finish
- [ ] Two ThemeToggle components on the same page both work correctly

### Color correctness
- [ ] All components use CSS variables — no hardcoded colors that would break
- [ ] The transition snapshot correctly captures the full new theme (no partially-changed components)

### Performance
- [ ] Animation runs at 60fps — no jank during the clip-path expansion
- [ ] No visible lag between click and animation start
- [ ] Memory usage does not grow with repeated theme switching

---

## Performance Notes

The View Transitions API operates at the compositor layer — the same GPU-accelerated layer used by CSS `transform` and `opacity` animations. The clip-path animation does not trigger layout or paint on the main thread during the transition.

The one performance consideration is memory: the API snapshots the entire viewport. On pages with very complex layouts, this snapshot is a large image in GPU memory for ~500ms. In practice this is negligible for TrustShield's page complexity, but it is worth knowing if the app ever adds very high-resolution canvas or video content.

The `transition.ready` promise resolves in one frame (approximately 16ms at 60fps). The `transition.finished` promise resolves after the animation completes (500ms). The total user-visible effect is exactly as long as the `duration` constant.

---

## Accessibility

| Consideration | Implementation |
|---|---|
| `prefers-reduced-motion` | Checked in both CSS and JavaScript — instant switch if enabled |
| `aria-label` on toggle button | "Switch to light mode" / "Switch to dark mode" — updates with state |
| `aria-pressed` on toggle button | Communicates current state to screen readers |
| Keyboard accessibility | Toggle button is a native `<button>` — focusable and activatable with Enter/Space |
| The clip-path animation is decorative | The theme change is functional regardless of whether the animation plays |
| Focus is not lost during transition | View Transitions API does not affect focus management |

---

## Implementation Checklist

- [ ] Install `next-themes` — `npm install next-themes`
- [ ] Modify `next.config.js` — add `experimental.viewTransition: true`
- [ ] Modify `app/layout.tsx` — add `suppressHydrationWarning` to `<html>`
- [ ] Create `components/providers/theme-provider.tsx` — configure next-themes with `attribute="class"`, `enableSystem`, `disableTransitionOnChange={false}`
- [ ] Modify `app/globals.css` — add view transition CSS rules and CSS variable definitions
- [ ] Extend `tailwind.config.js` — map CSS variables to Tailwind color utilities
- [ ] Create `lib/theme-effects.ts` — all five effect implementations
- [ ] Create `hooks/useThemeTransition.ts` — core hook with flushSync and effect runner
- [ ] Create `components/ui/theme-toggle/ThemeToggle.tsx` — the toggle button component
- [ ] Create `components/ui/theme-toggle/index.ts` — re-export
- [ ] Add `<ThemeToggle />` to the navbar component
- [ ] Audit all components for hardcoded colors — replace with CSS variable equivalents
- [ ] Test on Chrome, Edge, Safari, Firefox
- [ ] Test with `prefers-reduced-motion: reduce` enabled in OS settings
- [ ] Test on mobile (touch — `clientX`/`clientY` work correctly on touch events too)
