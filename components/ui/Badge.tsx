"use client";

import { cn } from "@/lib/utils/cn";

type BadgeVariant = "default" | "primary" | "outline";
type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)]",
  primary: "bg-[var(--color-primary)] text-white",
  outline:
    "bg-transparent border border-[var(--color-border)] text-[var(--color-text-secondary)]",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs rounded-md",
  md: "px-3 py-1 text-sm rounded-lg",
  lg: "px-4 py-1.5 text-base rounded-xl",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}