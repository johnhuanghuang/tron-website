"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full px-4 py-3 bg-[var(--color-bg-secondary)] border rounded-xl",
          "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)]",
          "transition-all duration-200 ease-out",
          "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-[var(--color-border)] hover:border-[var(--color-border-hover)]",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, type InputProps };