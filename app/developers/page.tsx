"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Book,
  Code,
  CurrencyDollar,
  Handshake,
  Bug,
  Calendar,
  GithubLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils/cn";

const entrances = [
  {
    href: "/developers/docs",
    icon: Book,
    title: "Documentation",
    description: "Comprehensive guides, tutorials, and API references for building on TRON.",
    color: "from-orange-500/20 to-red-500/20",
    badge: null,
  },
  {
    href: "/developers/api",
    icon: Code,
    title: "API Reference",
    description: "Explore TRON network APIs with detailed documentation and code examples.",
    color: "from-blue-500/20 to-purple-500/20",
    badge: null,
  },
  {
    href: "/developers/cookbook",
    icon: CurrencyDollar,
    title: "Cookbook",
    description: "Step-by-step tutorials for DeFi, NFT, gaming, and infrastructure projects.",
    color: "from-green-500/20 to-emerald-500/20",
    badge: "Coming Soon",
  },
  {
    href: "/developers/grants",
    icon: Handshake,
    title: "Grants & Funding",
    description: "Apply for MVP, growth, and research grants to build your TRON project.",
    color: "from-yellow-500/20 to-orange-500/20",
    badge: null,
  },
];

const quickLinks = [
  { href: "/developers/office-hours", icon: Calendar, label: "Office Hours" },
  { href: "https://github.com", icon: GithubLogo, label: "GitHub", external: true },
];

export default function DevelopersPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
            Developer Center
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-6">
            Everything you need to build on TRON. From quick-start guides to advanced smart contract development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-8 text-sm text-[var(--color-text-tertiary)]">
              <span>50+ Docs</span>
              <span>•</span>
              <span>20+ API Methods</span>
              <span>•</span>
              <span>24/7 Network</span>
            </div>
          </div>
        </motion.div>

        {/* Entrance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {entrances.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="group block h-full p-6 rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] hover:border-[rgb(251,113,133)]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(251,113,133,0.15)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "p-3 rounded-xl bg-gradient-to-br",
                    item.color
                  )}>
                    <item.icon size={28} weight="duotone" className="text-[rgb(251,113,133)]" />
                  </div>
                  {item.badge && <Badge variant="outline">{item.badge}</Badge>}
                </div>
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                  {item.title}
                  <ArrowRight
                    size={18}
                    weight="bold"
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </h2>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-[var(--color-border)]"
        >
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)] transition-colors"
            >
              <link.icon size={16} weight="bold" />
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
