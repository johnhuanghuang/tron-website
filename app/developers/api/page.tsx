"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ApiMethodCard } from "@/components/dev";
import apiRefs from "@/content/api-refs.json";
import { cn } from "@/lib/utils/cn";

export default function ApiPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = apiRefs.categories
    .map((cat) => ({
      ...cat,
      methods: cat.methods.filter(
        (m) =>
          (activeCategory === "all" || cat.id === activeCategory) &&
          (search === "" ||
            m.name.toLowerCase().includes(search.toLowerCase()) ||
            m.description.toLowerCase().includes(search.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.methods.length > 0);

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">API Reference</h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            Explore TRON network API methods. All methods support both HTTP and WebSocket connections.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <MagnifyingGlass size={18} weight="bold" className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search methods..."
              className={cn(
                "w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
                "focus:outline-none focus:border-[var(--color-border-hover)] transition-colors"
              )}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                activeCategory === "all"
                  ? "bg-[rgb(251,113,133)] text-white"
                  : "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              )}
            >
              All
            </button>
            {apiRefs.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeCategory === cat.id
                    ? "bg-[rgb(251,113,133)] text-white"
                    : "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Method Groups */}
        <div className="space-y-8">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 capitalize">
                {cat.label}
              </h2>
              <div className="space-y-3">
                {cat.methods.map((method) => (
                  <ApiMethodCard key={method.name} method={method} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-20 text-[var(--color-text-tertiary)]">
            No methods found matching your search.
          </div>
        )}
      </div>
    </main>
  );
}
