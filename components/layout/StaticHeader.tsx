import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Start", href: "/start" },
  { label: "Build", href: "/developers" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Participate", href: "/events" },
  { label: "More", href: "/about" },
];

export function StaticHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/tron-logo.png"
              alt="TRON"
              className="h-8 w-auto object-contain"
            />
            <span className="font-bold text-lg text-[var(--color-text-primary)]">TRON</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/developers"
              className="hidden md:block px-4 py-2 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start Building
            </Link>
            <Link
              href="#mobile-menu"
              className="md:hidden p-2 text-[var(--color-text-secondary)]"
            >
              <List size={24} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
