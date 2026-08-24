"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/utils/constants";
import { useApp } from "@/context/AppContext";

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { state, dispatch } = useApp();

  const toggleTheme = () =>
    dispatch({ type: "SET_THEME", payload: state.theme === "dark" ? "light" : "dark" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${state.theme === "dark" ? "light" : "dark"} theme`}
                className="relative w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-200 flex items-center justify-center"
              >
                <span key={state.theme} className="animate-nav-theme-spin">
                  {state.theme === "dark" ? (
                    <SunIcon className="w-[18px] h-[18px] text-amber-400" />
                  ) : (
                    <MoonIcon className="w-[18px] h-[18px]" />
                  )}
                </span>
              </button>

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
            <span className="text-sm font-bold text-gray-900 dark:text-white tracking-tight">
              Mentro
            </span>
          </Link>

          {/* Right: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${state.theme === "dark" ? "light" : "dark"} theme`}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <span key={state.theme} className="animate-nav-theme-spin">
                {state.theme === "dark" ? (
                  <SunIcon className="w-4 h-4 text-amber-400" />
                ) : (
                  <MoonIcon className="w-4 h-4" />
                )}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="w-8 h-8 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 animate-slide-down">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 border border-gray-200/50 dark:border-white/10 overflow-hidden mx-1">
              {/* Nav Links */}
              <div className="py-2">
                {NAV_LINKS.map((link) => {
                  const active = pathname === link.href;
                  const home = isHome(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-5 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "text-brand bg-brand-light"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
                      }`}
                    >
                      {home && <HomeIcon className="w-4 h-4 shrink-0" />}
                      {link.label}
                      {active && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="px-4 pb-4 pt-2">
                <Link
                  href="/explore"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-2.5 text-sm font-semibold text-white bg-brand rounded-xl hover:bg-brand-hover active:scale-[0.98] transition-all duration-200 shadow-md shadow-brand/20"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
