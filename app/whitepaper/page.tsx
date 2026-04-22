"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  FileText,
  Download,
  Globe,
  Code,
  LinkSimple as LinkIcon,
  ShieldCheck,
  Lightning,
  Users,
  ChartBar,
  ArrowRight,
} from "@phosphor-icons/react";

const technicalArchitecture = [
  {
    icon: Lightning,
    title: "Consensus Mechanism",
    description:
      "TRON uses Delegated Proof of Stake (DPoS) consensus, enabling high throughput and energy efficiency. Block producers are elected by TRX token holders, ensuring decentralized governance.",
    specs: [
      "Transaction speed: 2,000 TPS",
      "Block time: 3 seconds",
      "Energy efficient consensus",
      "48 active block producers",
    ],
  },
  {
    icon: Code,
    title: "Smart Contract Layer",
    description:
      "TRON supports Solidity-compatible smart contracts, enabling easy migration of Ethereum-based dApps. The TVM (TRON Virtual Machine) provides a secure and efficient execution environment.",
    specs: [
      "Solidity support",
      "EVM compatibility",
      "Cross-contract calls",
      "Gas optimization",
    ],
  },
  {
    icon: LinkIcon,
    title: "Interoperability",
    description:
      "TRON's cross-chain communication enables seamless asset transfers and data sharing across multiple blockchain networks through BTTC and other bridges.",
    specs: [
      "Multi-chain support",
      "Cross-chain assets",
      "BTTC bridge",
      "Oracle integration",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security Model",
    description:
      "TRON implements multi-layer security with hardware security modules, regular audits, and a comprehensive bug bounty program to protect network integrity.",
    specs: [
      "Regular security audits",
      "Bug bounty program",
      "HSM key management",
      "Multi-signature support",
    ],
  },
];

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden hero-bg">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-3" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-6">
            <FileText size={16} className="text-[var(--color-primary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">Technical Documentation</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            TRON <span className="text-[var(--color-primary)]">Whitepaper</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mb-8">
            The comprehensive technical specification of the TRON blockchain protocol, consensus mechanisms, and ecosystem architecture.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/whitepaper-tron-en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
            >
              <Download size={18} />
              Download English PDF
            </a>
            <a
              href="/whitepaper-tron-zh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] rounded-xl font-semibold hover:border-[var(--color-border-hover)] transition-colors"
            >
              <Download size={18} />
              下载中文版
            </a>
          </div>
        </div>
      </section>

      {/* Language Tabs */}
      <section className="py-8 px-6 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Badge variant="primary" size="lg">English</Badge>
            <Badge variant="outline" size="lg">中文</Badge>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Overview</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
              TRON is a decentralized blockchain platform designed to build a free, global digital content entertainment system. 
              Launched in 2017, TRON has evolved to become one of the largest blockchain networks with thousands of dApps and 
              millions of users. The protocol utilizes DPoS consensus for high throughput while maintaining decentralization 
              and security.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card hover={false} className="text-center p-6">
              <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">2017</div>
              <p className="text-sm text-[var(--color-text-tertiary)]">Founded</p>
            </Card>
            <Card hover={false} className="text-center p-6">
              <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">100M+</div>
              <p className="text-sm text-[var(--color-text-tertiary)]">Users</p>
            </Card>
            <Card hover={false} className="text-center p-6">
              <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">2,000</div>
              <p className="text-sm text-[var(--color-text-tertiary)]">TPS</p>
            </Card>
            <Card hover={false} className="text-center p-6">
              <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">$12B+</div>
              <p className="text-sm text-[var(--color-text-tertiary)]">TVL</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Architecture</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              TRON's multi-layered architecture enables high performance, security, and interoperability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {technicalArchitecture.map((section, index) => (
              <Card key={index} hover={true} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <section.icon size={24} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                      <span className="text-[var(--color-text-secondary)]">{spec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-6">
                <ChartBar size={16} className="text-[var(--color-primary)]" />
                <span className="text-sm text-[var(--color-text-secondary)]">Tokenomics</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">TRX Token</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                TRX is the native utility token of the TRON network. It serves multiple purposes including staking for 
                block production, paying for network fees, participating in governance, and accessing various ecosystem services.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[var(--color-bg-surface)] rounded-xl border border-[var(--color-border)]">
                  <span className="text-sm text-[var(--color-text-secondary)]">Total Supply</span>
                  <span className="font-mono font-bold">100,000,000,000 TRX</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[var(--color-bg-surface)] rounded-xl border border-[var(--color-border)]">
                  <span className="text-sm text-[var(--color-text-secondary)]">Circulating Supply</span>
                  <span className="font-mono font-bold">~87B TRX</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[var(--color-bg-surface)] rounded-xl border border-[var(--color-border)]">
                  <span className="text-sm text-[var(--color-text-secondary)]">Block Rewards</span>
                  <span className="font-mono font-bold">32 TRX/Block</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card hover={false} className="p-6 text-center">
                <Users size={28} className="text-[var(--color-primary)] mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">Decentralized</div>
                <p className="text-xs text-[var(--color-text-tertiary)]">No central authority controls TRX</p>
              </Card>
              <Card hover={false} className="p-6 text-center">
                <Lightning size={28} className="text-[var(--color-primary)] mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">Fast</div>
                <p className="text-xs text-[var(--color-text-tertiary)]">Near-instant settlement</p>
              </Card>
              <Card hover={false} className="p-6 text-center">
                <ShieldCheck size={28} className="text-[var(--color-primary)] mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">Secure</div>
                <p className="text-xs text-[var(--color-text-tertiary)]">Battle-tested network</p>
              </Card>
              <Card hover={false} className="p-6 text-center">
                <Globe size={28} className="text-[var(--color-primary)] mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">Global</div>
                <p className="text-xs text-[var(--color-text-tertiary)]">Used worldwide</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Governance</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              TRON is governed by its community through on-chain voting and proposals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card hover={true} className="p-6">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-3">48</div>
              <h3 className="font-semibold mb-2">Block Producers</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Elected representatives who validate transactions and produce blocks.
              </p>
            </Card>
            <Card hover={true} className="p-6">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-3">27</div>
              <h3 className="font-semibold mb-2">SR Partners</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Standby block producers ready to step in if needed.
              </p>
            </Card>
            <Card hover={true} className="p-6">
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-3">1</div>
              <h3 className="font-semibold mb-2">DAO</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Community-driven governance with TRX token voting.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card hover={false} className="p-12 bg-gradient-to-br from-[var(--color-bg-surface)] to-[var(--color-bg-primary)]">
            <FileText size={48} className="text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Download the Full Whitepaper</h2>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
              Get the complete technical specification including consensus algorithms, tokenomics, and ecosystem details.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="/whitepaper-tron-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
              >
                <Download size={18} />
                English Version
              </a>
              <a
                href="/whitepaper-tron-zh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] rounded-xl font-semibold hover:border-[var(--color-border-hover)] transition-colors"
              >
                <Download size={18} />
                中文版
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}