"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface AccordionItem {
  question: string;
  answer: string;
}

interface GrantAccordionProps {
  items: AccordionItem[];
}

export function GrantAccordion({ items }: GrantAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[var(--color-border)]">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-[var(--color-text-primary)] font-medium pr-4">{item.question}</span>
            <CaretDown
              size={16}
              weight="bold"
              className={cn(
                "text-[var(--color-text-tertiary)] flex-shrink-0 transition-transform",
                open === idx ? "rotate-180" : ""
              )}
            />
          </button>
          {open === idx && (
            <div className="overflow-hidden">
              <p className="pb-4 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
