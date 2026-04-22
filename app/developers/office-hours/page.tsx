"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, ChatCircle, Video } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { BookingCalendar } from "@/components/dev";
import { cn } from "@/lib/utils/cn";

const contactMethods = [
  { icon: ChatCircle, label: "Discord Community", desc: "Get help from the TRON community", href: "#" },
  { icon: Video, label: "Video Call", desc: "Face-to-face 1:1 session", href: "#" },
];

export default function OfficeHoursPage() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Office Hours
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Book a 1:1 session with the TRON team. Get technical guidance, project feedback, and direct support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Booking */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">
              Book a Session
            </h2>
            <BookingCalendar />

            <div className="mt-6 space-y-3">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)]",
                    "bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-surface)]",
                    "hover:border-[var(--color-border-hover)] transition-all group"
                  )}
                >
                  <method.icon size={24} weight="duotone" className="text-[rgb(251,113,133)]" />
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-text-primary)]">{method.label}</div>
                    <div className="text-xs text-[var(--color-text-tertiary)]">{method.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">
              Or fill out the form
            </h2>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CalendarCheck size={64} weight="duotone" className="text-[var(--color-success)] mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Request Submitted!</h3>
                <p className="text-[var(--color-text-secondary)]">
                  We&apos;ll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                      "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
                      "focus:outline-none focus:border-[var(--color-border-hover)]"
                    )}
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                      "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
                      "focus:outline-none focus:border-[var(--color-border-hover)]"
                    )}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Project name / URL"
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                    "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
                    "focus:outline-none focus:border-[var(--color-border-hover)]"
                  )}
                />
                <textarea
                  placeholder="What would you like to discuss?"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                    "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
                    "focus:outline-none focus:border-[var(--color-border-hover)] resize-none"
                  )}
                />
                <Button type="submit" size="lg" className="w-full">
                  Submit Request
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
