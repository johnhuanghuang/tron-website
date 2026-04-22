"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-4xl p-6",
        "shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
        "transition-all duration-200 ease-out",
        hover &&
          "hover:border-[var(--color-border-hover)] hover:shadow-[0_8px_32px_rgba(255,59,48,0.15)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}