"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

interface DataCardProps {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
}

function AnimatedNumber({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    
    const unsubscribe = motionValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, motionValue, duration]);
  
  const formattedValue = displayValue >= 1000000000 
    ? (displayValue / 1000000000).toFixed(1) + "B"
    : displayValue >= 1000000 
    ? (displayValue / 1000000).toFixed(1) + "M"
    : displayValue >= 1000 
    ? (displayValue / 1000).toFixed(1) + "K"
    : displayValue.toString();
  
  return <span>{formattedValue}</span>;
}

function NumberDisplay({ value }: { value: string | number }) {
  const numValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) || 0 : value;
  const hasLetters = typeof value === 'string' && /[A-Za-z]/.test(value);
  
  if (hasLetters) {
    return <span>{value}</span>;
  }
  
  return <AnimatedNumber value={numValue} />;
}

export function DataCard({
  label,
  value,
  prefix,
  suffix,
  className,
  delay = 0,
}: DataCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative overflow-hidden px-6 py-8 bg-[var(--color-bg-surface)]",
        "border border-[var(--color-border)] rounded-2xl",
        "shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
        "transition-all duration-200 ease-out",
        "hover:border-[var(--color-border-hover)] hover:shadow-[0_0_30px_var(--color-primary-glow)]",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-[var(--color-primary-glow)] before:to-transparent before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        className
      )}
    >
      <div className="relative z-10">
        <p className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
          {label}
        </p>
        <div className="flex items-baseline gap-1">
          {prefix && (
            <span className="text-xl font-mono font-bold text-[var(--color-text-secondary)]">
              {prefix}
            </span>
          )}
          <span className="text-4xl font-mono font-bold text-[var(--color-text-primary)]">
            <NumberDisplay value={value} />
          </span>
          {suffix && (
            <span className="text-lg font-mono text-[var(--color-text-secondary)]">
              {suffix}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
