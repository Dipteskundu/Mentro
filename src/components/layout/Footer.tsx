import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/MentroLogo.png"
                alt="Mentro Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Mentro</span>
                <span className="text-xs text-gray-400">LEARN CONNECT GROW</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Discover workshops, mentorship sessions, and accelerate your learning journey.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>support@mentro.com</li>
              <li>Mentro Inc.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mentro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
