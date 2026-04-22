"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import {
  Wallet,
  Coins,
  Globe,
  Code,
  ArrowRight,
  Lightning,
  ShieldCheck,
  CurrencyCircleDollar,
  Storefront,
  Books,
  Rocket,
  ArrowsLeftRight,
  Eye,
} from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    title: "Pick a Wallet",
    description: "Choose a secure wallet to store your TRX and tokens.",
    icon: Wallet,
    href: "#wallets",
    color: "var(--color-primary)",
  },
  {
    number: "02",
    title: "Get TRX",
    description: "Acquire TRX to interact with the TRON network.",
    icon: Coins,
    href: "#get-trx",
    color: "#FF8C42",
  },
  {
    number: "03",
    title: "Explore DApps",
    description: "Discover decentralized apps in the TRON ecosystem.",
    icon: Globe,
    href: "/ecosystem",
    color: "#9B5DE5",
  },
  {
    number: "04",
    title: "Start Building",
    description: "Build your own projects with our developer tools.",
    icon: Code,
    href: "/developers",
    color: "#00C9A7",
  },
];

const quickLinks = [
  {
    title: "TRON Wallets",
    description: "TronLink,Token Pocket, and more",
    icon: Wallet,
    href: "#",
    color: "var(--color-primary)",
  },
  {
    title: "Buy TRX",
    description: "Purchase TRX on major exchanges",
    icon: ArrowsLeftRight,
    href: "#",
    color: "#FF8C42",
  },
  {
    title: "DApp Browser",
    description: "Access dApps directly in your browser",
    icon: Eye,
    href: "#",
    color: "#9B5DE5",
  },
  {
    title: "Developer Tools",
    description: "APIs, SDKs, and documentation",
    icon: Rocket,
    href: "/developers",
    color: "#00C9A7",
  },
  {
    title: "Ecosystem",
    description: "Explore all dApps and services",
    icon: Storefront,
    href: "/ecosystem",
    color: "#FF6B9D",
  },
  {
    title: "Documentation",
    description: "Guides, tutorials, and API reference",
    icon: Books,
    href: "/developers/docs",
    color: "#4ECDC4",
  },
];

const benefits = [
  {
    title: "Fast",
    stat: "2000 TPS",
    detail: "3 second block time",
    icon: Lightning,
    color: "var(--color-primary)",
  },
  {
    title: "Secure",
    stat: "DPoS",
    detail: "Audited consensus mechanism",
    icon: ShieldCheck,
    color: "#FF8C42",
  },
  {
    title: "Affordable",
    stat: "~$0.005",
    detail: "Near-zero transaction fees",
    icon: CurrencyCircleDollar,
    color: "#00C9A7",
  },
];

export default function StartPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden">
        {/* Background gradient with orange glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[#0D0D0F] to-[var(--color-bg-primary)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-primary)] opacity-[0.06] blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[var(--color-primary)] opacity-[0.12] blur-[60px] rounded-full" />

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="text-sm text-[var(--color-text-secondary)]">New to TRON? Start here →</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
            Start Your
            <span className="relative">
              <span className="relative z-10 px-4" style={{ color: "var(--color-primary)" }}>
                {" "}
                TRON Journey
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Everything you need to get started with TRON — wallet, tokens, and DApps in minutes
          </p>

          <a href="/developers" className="inline-flex items-center gap-2 px-8 py-4 text-lg rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] shadow-[0_0_20px_var(--color-primary-glow)] transition-all duration-200 hover:-translate-y-0.5">
              Get Started
              <ArrowRight size={20} weight="bold" />
            </a>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Get Started in 4 Steps
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto">
              Follow this simple guide to join the TRON ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <a
                key={step.number}
                href={step.href}
                className="group relative block"
              >
                <Card hover className="h-full">
                  {/* Step number */}
                  <div
                    className="text-5xl font-bold mb-4 tracking-tight"
                    style={{ color: "var(--color-bg-primary)", opacity: 0.15 }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                    style={{
                      backgroundColor: `${step.color}15`,
                    }}
                  >
                    <step.icon
                      size={24}
                      weight="duotone"
                      style={{ color: step.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2 transition-colors duration-200 group-hover:text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 text-sm font-medium transition-all duration-200 group-hover:gap-2" style={{ color: step.color }}>
                    <span>Learn more</span>
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-24 px-4 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Quick Links
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto">
              Jump to the resources you need most
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="group block"
              >
                <Card hover className="h-full">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{
                        backgroundColor: `${link.color}15`,
                      }}
                    >
                      <link.icon
                        size={24}
                        weight="duotone"
                        style={{ color: link.color }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1 transition-colors duration-200 group-hover:text-white">
                        {link.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] text-sm">
                        {link.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight
                      size={18}
                      weight="bold"
                      className="flex-shrink-0 text-[var(--color-text-tertiary)] transition-all duration-200 group-hover:text-white group-hover:translate-x-1"
                    />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Why Choose TRON
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto">
              Built for performance, security, and accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color}15, ${benefit.color}05)`,
                    border: `1px solid ${benefit.color}20`,
                  }}
                >
                  <benefit.icon
                    size={32}
                    weight="duotone"
                    style={{ color: benefit.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                  {benefit.title}
                </h3>

                {/* Stat */}
                <div className="text-3xl font-bold mb-2" style={{ color: benefit.color }}>
                  {benefit.stat}
                </div>

                {/* Detail */}
                <p className="text-[var(--color-text-secondary)] text-sm">
                  {benefit.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-3xl p-12 text-center overflow-hidden"
            style={{
              background: `linear-gradient(135deg, var(--color-bg-surface), var(--color-bg-secondary))`,
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Glow effect */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 opacity-20 blur-3xl"
              style={{ background: "var(--color-primary)" }}
            />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                Ready to dive in?
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-xl mx-auto">
                Join millions of users and developers building on TRON today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/developers" className="inline-flex items-center gap-2 px-8 py-4 text-lg rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] shadow-[0_0_20px_var(--color-primary-glow)] transition-all duration-200">
                    Start Building
                    <ArrowRight size={18} weight="bold" className="ml-2" />
                  </a>
                  <a href="/ecosystem" className="inline-flex items-center gap-2 px-8 py-4 text-lg rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-surface)] transition-all duration-200">
                    Explore Ecosystem
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}