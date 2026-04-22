"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface AccordionItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: AccordionItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[var(--color-border)]">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex items-center justify-between py-5 text-left hover:bg-[var(--color-bg-secondary)] transition-colors duration-200 px-2 rounded-lg"
          >
            <span className="text-[var(--color-text-primary)] font-medium pr-4">{item.question}</span>
            <CaretDown
              size={16}
              weight="bold"
              className={cn(
                "text-[var(--color-text-tertiary)] flex-shrink-0 transition-transform duration-300",
                open === idx ? "rotate-180" : ""
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-out",
              open === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <p className="pb-5 text-[var(--color-text-secondary)] text-sm leading-relaxed pl-2">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}