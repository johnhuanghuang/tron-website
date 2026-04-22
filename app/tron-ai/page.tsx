"use client";

import Link from "next/link";
import { StaticHeader } from "@/components/layout/StaticHeader";
import { StaticFooter } from "@/components/layout/StaticFooter";
import { AISearchModal } from "@/app/components/ai/AISearchModal";
import { useState } from "react";
import { Sparkle, Book, ChartLine, ArrowRight } from "@phosphor-icons/react";

export default function TronAIPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <StaticHeader />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 text-[var(--color-primary)] text-sm font-medium mb-6">
            <Sparkle size={16} weight="fill" />
            AI-Powered
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Tron AI
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Your intelligent guide to the TRON ecosystem. Ask anything about TRON, DeFi, development, or the ecosystem.
          </p>
        </div>
      </section>

      {/* AI Chat Interface */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <AISearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-4 bg-[var(--color-bg-secondary)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] text-center mb-10">
            What Tron AI Can Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-border-hover)] transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
                <ChartLine size={24} weight="fill" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Ecosystem Knowledge</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Get detailed answers about TRON DeFi protocols, wallets, DApps, TVL stats, and ecosystem trends.
              </p>
            </div>
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-border-hover)] transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
                <Book size={24} weight="fill" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Development Help</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Step-by-step guides for smart contracts, SDK integration, API usage, and deployment on TRON.
              </p>
            </div>
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-border-hover)] transition-all duration-200">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
                <Sparkle size={24} weight="fill" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">Real-time Data</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Current TVL, token prices, transaction stats, and network metrics across the TRON ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Questions */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">
            Try Asking
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "What is the TVL of JustLend?",
              "How to deploy a smart contract on TRON?",
              "Compare SunSwap vs JustLend",
              "How to get Tron USDT?",
              "What are the TRON network fees?",
            ].map((q) => (
              <button
                key={q}
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all duration-200"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[var(--color-bg-secondary)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Ready to Explore?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Tron AI is just the beginning. Discover the full TRON ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Explore Ecosystem
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/developers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-surface)] transition-all duration-200"
            >
              Start Building
            </Link>
          </div>
        </div>
      </section>

      <StaticFooter />
    </div>
  );
}
