"use client";

import { useEffect, useState, useCallback } from "react";

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface DocTOCProps {
  headings: Heading[];
}

export function DocTOC({ headings }: DocTOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const aTop = a.boundingClientRect.top;
            const bTop = b.boundingClientRect.top;
            return aTop - bTop;
          });

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto hidden lg:block w-[200px] flex-shrink-0">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
        On This Page
      </p>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => handleClick(heading.id)}
              className={`
                block w-full text-left text-xs py-1 transition-colors duration-150
                ${heading.level === 3 ? "pl-3" : ""}
                ${
                  activeId === heading.id
                    ? "text-[rgb(251,113,133)] border-l-2 border-[rgb(251,113,133)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] border-l-2 border-transparent"
                }
              `}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
