"use client";

import { useState } from "react";
import { Calendar as CalendarIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface TimeSlot {
  time: string;
  available: boolean;
}

const defaultSlots: TimeSlot[] = [
  { time: "09:00 UTC", available: false },
  { time: "10:00 UTC", available: true },
  { time: "11:00 UTC", available: true },
  { time: "14:00 UTC", available: true },
  { time: "15:00 UTC", available: false },
  { time: "16:00 UTC", available: true },
];

export function BookingCalendar() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [slots] = useState(defaultSlots);

  return (
    <div className="bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)] p-6">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon size={18} weight="bold" className="text-[rgb(251,113,133)]" />
        <span className="text-sm font-semibold text-[var(--color-text-primary)]">Available Slots</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {slots.map((slot) => (
          <button
            key={slot.time}
            disabled={!slot.available}
            onClick={() => setSelectedSlot(slot.time)}
            className={cn(
              "py-2 px-3 rounded-lg text-sm font-mono transition-all",
              slot.available
                ? selectedSlot === slot.time
                  ? "bg-[rgb(251,113,133)] text-white"
                  : "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] border border-transparent hover:text-[var(--color-text-primary)]"
                : "bg-[var(--color-bg-surface)]/50 text-[var(--color-text-muted)] line-through cursor-not-allowed"
            )}
          >
            {slot.time}
          </button>
        ))}
      </div>
      <p className="text-xs text-[var(--color-text-muted)] mt-3">
        All times in UTC. Sessions are 30 minutes.
      </p>
    </div>
  );
}
