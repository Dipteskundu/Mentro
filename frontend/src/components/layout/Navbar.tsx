"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/utils/constants";
import ThemeToggle from "@/components/ui/ThemeToggle";

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm2.78 7.97-5.03 5.03a.75.75 0 0 0 0 1.06l1.06 1.06a.75.75 0 0 0 1.06 0l5.03-5.03a.75.75 0 0 0 0-1.06l-1.06-1.06a.75.75 0 0 0-1.06 0z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
  );
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

const LINK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "/": HomeIcon,
  "/explore": CompassIcon,
  "/mentors": UsersIcon,
  "/about": InfoIcon,
  "/my-learning": BookIcon,
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const getFocusableElements = useCallback(() => {
    if (!menuRef.current) return [];
    return Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    );
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setTimeout(() => hamburgerRef.current?.focus(), 100);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!mobileMenuOpen) return;

      if (e.key === "Escape") {
        closeMenu();
        return;
      }

      if (e.key === "Tab") {
        const focusable = getFocusableElements();
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, closeMenu, getFocusableElements]);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      setTimeout(() => {
        const focusable = getFocusableElements();
        focusable[0]?.focus();
      }, 150);
    }
  }, [mobileMenuOpen, getFocusableElements]);

  const isHome = (href: string) => href === "/";

  return (
    <div className="sticky top-0 z-50">
      {/* Desktop Navbar */}
      <nav
        className={`hidden lg:block transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-white/10 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)]"
            : "bg-white/70 dark:bg-white/5 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <Image
                src="/MentroLogo.png"
                alt="Mentro"
                width={36}
                height={36}
                className="rounded-lg transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                Mentro
              </span>
            </Link>

            {/* Desktop Floating Pill Nav */}
            <div className="flex items-center">
              <div className="flex items-center gap-0.5 bg-gray-100/80 dark:bg-white/5 rounded-full px-1.5 py-1.5 backdrop-blur-sm">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  const home = isHome(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        active
                          ? "text-brand"
                          : "text-gray-900 dark:text-white hover:text-gray-950 dark:hover:text-white"
                      }`}
                    >
                      {active && (
                        <span className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm" />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {home && <HomeIcon className="w-4 h-4" />}
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Desktop Right Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle size="md" />

              <Link
                href="/explore"
                className="px-5 py-2.5 bg-brand text-white text-sm font-semibold rounded-full hover:bg-brand-hover active:scale-[0.97] transition-all duration-200 shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Pill Navbar */}
      <div className="lg:hidden px-3 pt-3">
        <div className="bg-white/90 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-200/50 dark:border-white/10 px-4 py-2.5 flex items-center justify-between">
          {/* Left: Logo + Brand */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/MentroLogo.png"
              alt="Mentro"
              width={28}
              height={28}
              className="rounded-lg transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Mentro</span>
          </Link>

          {/* Right: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-1.5">
            <ThemeToggle size="sm" />
            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="w-10 h-10 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 transition-colors"
            >
              <div className="w-4 h-3 relative flex flex-col justify-between">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-white dark:bg-gray-900 block origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className="w-full h-0.5 bg-white dark:bg-gray-900 block"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-0.5 bg-white dark:bg-gray-900 block origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              ref={menuRef}
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-50 lg:hidden shadow-2xl shadow-black/20 dark:shadow-black/40"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-white/10">
                  <Link href="/" className="flex items-center gap-2.5 group" onClick={closeMenu}>
                    <Image
                      src="/MentroLogo.png"
                      alt="Mentro"
                      width={32}
                      height={32}
                      className="rounded-lg transition-transform duration-200 group-hover:scale-105"
                    />
                    <span className="text-lg font-bold text-gray-900 dark:text-white">Mentro</span>
                  </Link>
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex-1 overflow-y-auto py-4 px-3">
                  <div className="space-y-1">
                    {NAV_LINKS.map((link, index) => {
                      const active = pathname === link.href;
                      const Icon = LINK_ICONS[link.href] || HomeIcon;
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 + 0.1 }}
                        >
                          <Link
                            href={link.href}
                            onClick={closeMenu}
                            className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                              active
                                ? "bg-brand/10 text-brand"
                                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5"
                            }`}
                          >
                            <Icon className={`w-5 h-5 shrink-0 ${active ? "text-brand" : "text-gray-400 dark:text-gray-500"}`} />
                            <span className="flex-1">{link.label}</span>
                            {active && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 rounded-full bg-brand"
                              />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="px-4 pb-6 pt-4 border-t border-gray-100 dark:border-white/10 space-y-3">
                  <Link
                    href="/explore"
                    onClick={closeMenu}
                    className="flex items-center justify-center w-full px-5 py-3.5 text-sm font-semibold text-white bg-brand rounded-xl hover:bg-brand-hover active:scale-[0.98] transition-all duration-200 shadow-md shadow-brand/20"
                  >
                    Get Started
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
