"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { House, Code, TreeStructure } from "@phosphor-icons/react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 flex items-center justify-center">
        <div className="relative w-full max-w-4xl mx-auto px-4 py-20 text-center">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-5 rounded-full blur-[120px]" />

          {/* 404 Number */}
          <div className="relative mb-8">
            <h1
              className="text-[200px] md:text-[280px] font-bold leading-none tracking-tight select-none"
              style={{
                background: "linear-gradient(180deg, var(--color-text-primary) 0%, var(--color-text-secondary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 80px var(--color-primary-glow)",
                filter: "drop-shadow(0 0 40px var(--color-primary-glow))",
              }}
            >
              404
            </h1>
            {/* Glow effect behind the number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[var(--color-primary)] opacity-20 rounded-full blur-[80px] pointer-events-none" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Page Not Found
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-[var(--color-text-secondary)] mb-12 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all duration-200"
            >
              <House size={18} />
              Home
            </Link>
            <Link
              href="/developers"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all duration-200"
            >
              <Code size={18} />
              Developers
            </Link>
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all duration-200"
            >
              <TreeStructure size={18} />
              Ecosystem
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] shadow-[0_0_20px_var(--color-primary-glow)] transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
