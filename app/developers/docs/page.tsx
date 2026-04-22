"use client";

import Link from "next/link";
import { Book, ArrowRight } from "@phosphor-icons/react";
import { DevSidebar } from "@/components/dev";
import docIndex from "@/content/docs/index.json";

const categories = docIndex.categories.map((cat) => ({
  id: cat.id,
  label: cat.label,
  pages: cat.pages.map((p) => ({ slug: p.slug, title: p.title })),
}));

export default function DocsPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          <DevSidebar categories={categories} />
          <div className="flex-1 min-w-0">
            <div className="text-center py-20">
              <div className="inline-flex p-4 rounded-2xl bg-[var(--color-bg-surface)] mb-6">
                <Book size={48} weight="duotone" className="text-[rgb(251,113,133)]" />
              </div>
              <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                TRON Documentation
              </h1>
              <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto mb-8">
                Select a topic from the sidebar to start reading, or browse all topics below.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) =>
                  cat.pages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/developers/docs/${page.slug}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] border border-transparent transition-all text-sm"
                    >
                      {page.title}
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
