"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-white border-t border-gray-200/80 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Main Card — 4-Column Responsive Grid */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-gray-200/80 dark:border-slate-800 p-8 sm:p-10 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Column 1 — Brand info + Social */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/MentroLogo.png"
                alt="Mentro Logo"
                width={36}
                height={36}
                style={{ width: "auto", height: "auto" }}
                className="rounded-xl shadow-sm group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight">Mentro</span>
                <span className="text-[10px] font-bold text-brand dark:text-brand-light tracking-widest">LEARN • CONNECT • GROW</span>
              </div>
              <span className="text-xl font-bold text-white">Mentro</span>
            </Link>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
              Discover interactive workshops, 1-on-1 mentorship sessions, and accelerate your tech career alongside staff engineers.
            </p>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 dark:bg-slate-800/80 rounded-full text-xs font-medium text-gray-600 dark:text-slate-300 border border-gray-200/60 dark:border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {[
                {
                  label: "Twitter",
                  href: "https://twitter.com",
                  svg: (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  ),
                },
                {
                  label: "GitHub",
                  href: "https://github.com",
                  svg: (
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  svg: (
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  ),
                },
                {
                  label: "YouTube",
                  href: "https://youtube.com",
                  svg: (
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 bg-gray-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-slate-300 hover:bg-brand hover:text-white dark:hover:bg-brand dark:hover:text-white transition-all shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Explore Workshops", href: "/explore" },
                { label: "Meet Mentors", href: "/mentors" },
                { label: "About Mentro", href: "/about" },
                { label: "My Learning Dashboard", href: "/my-learning" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand-light transition-colors flex items-center gap-1.5"
                  >
                    <span>›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Expertise Domains */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-4">
              Domains & Skills
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Web Development", href: "/mentors" },
                { label: "Mobile Engineering", href: "/mentors" },
                { label: "AI & Machine Learning", href: "/mentors" },
                { label: "Cloud & DevOps", href: "/mentors" },
                { label: "UI/UX Design Systems", href: "/mentors" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand-light transition-colors flex items-center gap-1.5"
                  >
                    <span>›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Support & Legal */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-xs uppercase tracking-wider mb-4">
              Support & Legal
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Help & FAQ", href: "/mentors#mentors-grid" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Code of Conduct", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand-light transition-colors flex items-center gap-1.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-slate-400 pt-2 border-t border-gray-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Mentro Platform Inc. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Built with passion for curious engineers</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-gray-700 dark:text-slate-300 hover:text-brand dark:hover:text-brand-light transition-all shadow-sm"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
