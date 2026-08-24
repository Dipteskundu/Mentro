  import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    label: "Twitter",
    icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
  },
  {
    label: "GitHub",
    icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
  },
  {
    label: "LinkedIn",
    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    label: "YouTube",
    icon: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z",
  },
];


export default function Footer() {
  return (
    <footer className="bg-[#f5f7fa] dark:bg-[#f5f7fa] text-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ">
        {/* Card 1 — 3-Column Layout */}
        <div className="bg-white dark:bg-white rounded-2xl shadow-sm px-8 py-10 mb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 — Brand + Social */}
          <div className="ml-">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/MentroLogo.png"
                alt="Mentro Logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">Mentro</span>
                <span className="text-xs text-gray-400">LEARN CONNECT GROW</span>
              </div>
              <span className="text-xl font-bold text-white">Mentro</span>
            </Link>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Discover workshops, mentorship sessions, and accelerate your
              learning journey with industry experts.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-brand hover:text-white transition-all duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={social.icon}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div className="ml-20">
            <h3 className="text-gray-900 font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Explore", href: "/explore" },
                { label: "Mentors", href: "/mentors" },
                { label: "About", href: "/about" },
                { label: "My Learning", href: "/my-learning" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Legal */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gray-900 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>support@Mentro.com</li>
              <li>Mentro Inc.</li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-5 text-center">
          <p className="text-gray-400 text-sm inline-flex items-center gap-2">
            &copy; 2026 Mentro. All rights reserved.
            <span className="inline-flex items-center gap-1.5">
              <Image
                src="/MentroLogo.png"
                alt="Mentro Logo"
                width={20}
                height={20}
                className="rounded-md"
              />
              <span className="text-gray-400 text-sm font-medium">Mentro</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
