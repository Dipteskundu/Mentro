"use client";

import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { THEME_EFFECTS } from "@/lib/theme-effects";

const ACTIVE_EFFECT = "circular" as const;

type EffectName = "circular" | "diagonal" | "curtain" | "radial-burst" | "ink-bleed";

interface TransitionOptions {
  effect?: EffectName;
  duration?: number;
}

let isTransitioning = false;

export function useThemeTransition(options: TransitionOptions = {}) {
  const { theme, setTheme } = useTheme();
  const effect = options.effect ?? ACTIVE_EFFECT;
  const duration = options.duration ?? 600;

  async function toggleTheme(event?: React.MouseEvent) {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTheme(newTheme);
      return;
    }

    if (isTransitioning) return;
    isTransitioning = true;

    try {
      const x = event?.clientX ?? window.innerWidth / 2;
      const y = event?.clientY ?? window.innerHeight / 2;

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      document.documentElement.style.setProperty("--vt-x", `${x}px`);
      document.documentElement.style.setProperty("--vt-y", `${y}px`);
      document.documentElement.style.setProperty("--vt-radius", `${endRadius}px`);
      document.documentElement.style.setProperty("--vt-duration", `${duration}ms`);

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(newTheme);
        });
      });

      transition.ready.then(() => {
        THEME_EFFECTS[effect]({
          x,
          y,
          endRadius,
          duration,
          direction: newTheme === "dark" ? "to-dark" : "to-light",
        });
      });

      await Promise.race([
        transition.finished,
        new Promise<void>((resolve) => setTimeout(resolve, duration + 200)),
      ]);
    } catch {
      setTheme(newTheme);
    } finally {
      setTimeout(() => {
        isTransitioning = false;
      }, 100);
    }
  }

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
}
