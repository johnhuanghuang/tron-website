"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import {
  MapTrifold,
  CheckCircle,
  Circle,
  ArrowRight,
  Lightning,
  Coin,
  Link,
  Brain,
  Buildings,
  Lock,
  Circuitry,
  Globe,
} from "@phosphor-icons/react";

const timelineData = [
  {
    period: "Completed",
    year: "2020 - 2023",
    status: "completed",
    color: "green",
    items: [
      {
        title: "Mainnet Launch",
        description: "TRON mainnet officially launched, marking the beginning of a new era in decentralized infrastructure.",
        date: "2020",
        icon: Lightning,
      },
      {
        title: "Justin Sun as Advisor",
        description: "Strategic leadership transition with Justin Sun taking advisory role to drive ecosystem growth.",
        date: "2021",
        icon: Circuitry,
      },
      {
        title: "USDD Launch",
        description: "TRON Decentralized USD (USDD) launched, providing a decentralized stablecoin solution.",
        date: "2022",
        icon: Coin,
      },
      {
        title: "TRON 4.0 Upgrade",
        description: "Major protocol upgrade introducing enhanced smart contract capabilities and interoperability.",
        date: "2023",
        icon: Link,
      },
    ],
  },
  {
    period: "In Progress",
    year: "2024 - 2026",
    status: "progress",
    color: "orange",
    items: [
      {
        title: "Cross-Chain Expansion",
        description: "Seamless integration with Ethereum, BSC, and other major chains for enhanced DeFi connectivity.",
        date: "2024",
        icon: Link,
      },
      {
        title: "AI Integration",
        description: "Incorporating AI capabilities for smart contract optimization and predictive analytics.",
        date: "2025",
        icon: Brain,
      },
      {
        title: "RWA Tokenization",
        description: "Real-world asset tokenization infrastructure enabling traditional asset bridging.",
        date: "2026",
        icon: Buildings,
      },
    ],
  },
  {
    period: "Coming Soon",
    year: "2027 - 2028",
    status: "upcoming",
    color: "blue",
    items: [
      {
        title: "ZK-Rollup Integration",
        description: "Layer 2 scaling solutions using zero-knowledge proofs for enhanced privacy and throughput.",
        date: "2027",
        icon: Circuitry,
      },
      {
        title: "Quantum Resistance",
        description: "Post-quantum cryptography integration to safeguard against future quantum computing threats.",
        date: "2028",
        icon: Lock,
      },
    ],
  },
  {
    period: "Future Vision",
    year: "2029+",
    status: "future",
    color: "purple",
    items: [
      {
        title: "Global Adoption",
        description: "Targeting billions of users and becoming the backbone of the decentralized internet.",
        date: "2029",
        icon: Globe,
      },
      {
        title: "Full Autonomy",
        description: "Self-sustaining DAO governance with minimal human intervention.",
        date: "2030",
        icon: Circuitry,
      },
    ],
  },
];

const milestones = [
  { label: "Mainnets Supported", value: "10+" },
  { label: "TVL Achieved", value: "$12B+" },
  { label: "Daily Transactions", value: "5M+" },
  { label: "Network uptime", value: "99.99%" },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden hero-bg">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-6">
            <MapTrifold size={16} className="text-[var(--color-primary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">Development Roadmap</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            TRON <span className="text-[var(--color-primary)]">Roadmap</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mb-8">
            From mainnet launch to global adoption — the journey of building the internet of the future.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)]"
              >
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">{item.value}</div>
                <p className="text-sm text-[var(--color-text-tertiary)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Journey</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              A visual timeline of TRON's evolution from inception to the future of decentralized internet.
            </p>
          </div>

          {/* Timeline vertical line */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-orange-500 via-blue-500 to-purple-500" />

            {/* Timeline items */}
            <div className="space-y-16">
              {timelineData.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="relative">
                  {/* Phase header */}
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center border-4 z-10 ${
                          phase.status === "completed"
                            ? "bg-green-500/20 border-green-500"
                            : phase.status === "progress"
                            ? "bg-orange-500/20 border-orange-500"
                            : phase.status === "upcoming"
                            ? "bg-blue-500/20 border-blue-500"
                            : "bg-purple-500/20 border-purple-500"
                        }`}
                      >
                        {phase.status === "completed" ? (
                          <CheckCircle size={24} className="text-green-400" />
                        ) : phase.status === "progress" ? (
                          <Circle size={24} className="text-orange-400 fill-orange-400" />
                        ) : (
                          <Circle size={24} className="text-blue-400" />
                        )}
                      </div>
                      <div>
                        <Badge
                          variant="outline"
                          className={`mb-1 ${
                            phase.color === "green"
                              ? "border-green-500/30 text-green-400"
                              : phase.color === "orange"
                              ? "border-orange-500/30 text-orange-400"
                              : phase.color === "blue"
                              ? "border-blue-500/30 text-blue-400"
                              : "border-purple-500/30 text-purple-400"
                          }`}
                        >
                          {phase.period}
                        </Badge>
                        <p className="text-lg font-semibold">{phase.year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Items for this phase - alternating layout */}
                  <div className="space-y-6 ml-0 md:ml-[calc(50%+2rem)]">
                    {phase.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="relative p-6 bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-200 group"
                      >
                        {/* Connector dot on the main line */}
                        <div
                          className={`absolute -left-[calc(50%+2rem+2rem)] top-8 w-4 h-4 rounded-full border-2 ${
                            phase.color === "green"
                              ? "bg-green-500 border-green-400"
                              : phase.color === "orange"
                              ? "bg-orange-500 border-orange-400"
                              : phase.color === "blue"
                              ? "bg-blue-500 border-blue-400"
                              : "bg-purple-500 border-purple-400"
                          }`}
                        />

                        <div className="flex items-start gap-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              phase.color === "green"
                                ? "bg-green-500/10"
                                : phase.color === "orange"
                                ? "bg-orange-500/10"
                                : phase.color === "blue"
                                ? "bg-blue-500/10"
                                : "bg-purple-500/10"
                            }`}
                          >
                            <item.icon
                              size={20}
                              className={
                                phase.color === "green"
                                  ? "text-green-400"
                                  : phase.color === "orange"
                                  ? "text-orange-400"
                                  : phase.color === "blue"
                                  ? "text-blue-400"
                                  : "text-purple-400"
                              }
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-lg group-hover:text-[var(--color-primary)] transition-colors">
                                {item.title}
                              </h3>
                              <Badge variant="outline" size="sm">
                                {item.date}
                              </Badge>
                            </div>
                            <p className="text-[var(--color-text-secondary)] text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-6">
            <ArrowRight size={16} className="text-[var(--color-primary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">Shape the Future</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us on This Journey</h2>
          <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
            Whether you're a developer, partner, or community member, there's a place for you in the TRON ecosystem.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Get in Touch <ArrowRight size={18} />
            </a>
            <a
              href="/developers"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] rounded-xl font-semibold hover:border-[var(--color-border-hover)] transition-colors"
            >
              Start Building
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}