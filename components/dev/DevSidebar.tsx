"use client";

import { useState } from "react";
import { CaretDown, CaretRight, List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface DocPage {
  slug: string;
  title: string;
}

interface DocCategory {
  id: string;
  label: string;
  pages: DocPage[];
}

interface DevSidebarProps {
  categories: DocCategory[];
  currentSlug?: string;
  onNavigate?: (slug: string) => void;
}

export function DevSidebar({ categories, currentSlug, onNavigate }: DevSidebarProps) {
  const [expandedCats, setExpandedCats] = useState<Set<string>>(
    new Set(categories.map((c) => c.id))
  );
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleCat = (catId: string) => {
    setExpandedCats((prev) => {
      const next = new Set(prev);
      if (next.has(catId)) next.delete(catId);
      else next.add(catId);
      return next;
    });
  };

  const SidebarContent = () => (
    <nav className="flex flex-col gap-1">
      {categories.map((cat) => (
        <div key={cat.id}>
          <button
            onClick={() => toggleCat(cat.id)}
            className={cn(
              "flex items-center justify-between w-full px-3 py-2 text-sm font-semibold",
              "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
              "transition-colors rounded-lg hover:bg-[var(--color-bg-surface)]"
            )}
          >
            {cat.label}
            {expandedCats.has(cat.id) ? (
              <CaretDown size={14} weight="bold" />
            ) : (
              <CaretRight size={14} weight="bold" />
            )}
          </button>
          {expandedCats.has(cat.id) && (
            <div className="ml-4 pl-2 border-l border-[var(--color-border)] flex flex-col gap-0.5 py-1">
              {cat.pages.map((page) => (
                <button
                  key={page.slug}
                  onClick={() => onNavigate?.(page.slug)}
                  className={cn(
                    "text-left px-3 py-1.5 text-sm rounded-md transition-colors",
                    currentSlug === page.slug
                      ? "bg-[rgb(251,113,133)] text-white"
                      : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]"
                  )}
                >
                  {page.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className={cn(
          "lg:hidden fixed bottom-4 left-4 z-30 p-3 rounded-full",
          "bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
          "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        )}
      >
        <List size={24} weight="bold" />
      </button>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <>
          <div
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/60 z-40"
          />
          <aside
            className={cn(
              "lg:hidden fixed left-0 top-0 bottom-0 w-[280px] z-50",
              "bg-[var(--color-bg-primary)] border-r border-[var(--color-border)]",
              "p-4 pt-8 overflow-y-auto"
            )}
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-4 right-4 p-1 text-[var(--color-text-secondary)]"
            >
              <X size={20} weight="bold" />
            </button>
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
}
