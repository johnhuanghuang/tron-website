"use client";

import Link from "next/link";
import {
  Coins,
  ArrowsLeftRight,
  ArrowRight,
  Lightning,
  Wallet,
  ChartLine,
  Globe,
  Copy,
  CheckCircle,
  AirplaneTakeoff,
  Handshake,
  PiggyBank,
  TrendUp,
  ShieldCheck,
  ArrowSquareOut,
  Users,
  ChartBar,
  Bank,
} from "@phosphor-icons/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";

const USDT_STATS = {
  totalSupply: "86,371,791,507",
  holders: "73,659,981",
  dailyVolume: "$ 26,824,871,296",
};

const CONTRACT_ADDRESS = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";

const useCases = [
  {
    num: "01",
    title: "Cross-Border Payment",
    description:
      "USDT's instant settlement makes it the ideal choice for cross-border transactions",
    color: "#00C9A7",
  },
  {
    num: "02",
    title: "Payment Tool",
    description:
      "Users can conveniently and quickly use USDT for online shopping and service payments",
    color: "#9B5DE5",
  },
  {
    num: "03",
    title: "Store of Value",
    description:
      "In regions with severe currency depreciation, USDT is viewed as a vital value storage tool",
    color: "#F0B90B",
  },
  {
    num: "04",
    title: "Decentralized Finance (DeFi)",
    description:
      "USDT is widely used in DeFi — users can lend, borrow, and farm yields with USDT",
    color: "#FF6B5A",
  },
  {
    num: "05",
    title: "Medium of Exchange",
    description:
      "USDT serves as the primary trading pair in crypto exchanges, enabling fast value transfers",
    color: "#3B82F6",
  },
  {
    num: "06",
    title: "Investment Tool",
    description:
      "Investors can engage in cross-platform arbitrage using USDT's stability",
    color: "#10B981",
  },
];

const tronAdvantages = [
  {
    icon: Lightning,
    title: "High Throughput",
    description:
      "DPos consensus handles 2,000+ transactions per second with guaranteed high throughput",
    color: "#FF3B30",
  },
  {
    icon: ChartBar,
    title: "Low Fees",
    description:
      "Transaction fees under $0.01, payable in USDT — significantly lowering the barrier to use",
    color: "#9B5DE5",
  },
  {
    icon: ArrowsLeftRight,
    title: "Multi-Chain Support",
    description:
      "Multi-chain cross-chain support enables seamless capital flow and expanded use cases",
    color: "#00C9A7",
  },
];

// Mock chart data (representing daily transfer volume trend)
const chartData = [
  { day: "Mon", value: 62 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 55 },
  { day: "Thu", value: 89 },
  { day: "Fri", value: 95 },
  { day: "Sat", value: 71 },
  { day: "Sun", value: 83 },
];
const maxVal = Math.max(...chartData.map((d) => d.value));

const getUsdtChannels = [
  {
    title: "Decentralized Exchanges (DEXs)",
    description: "Connect your wallet to a DEX and swap tokens for USDT securely — no KYC required",
    brand: "SUN.io",
    brandLogo: "/images/sun-logo.png",
    link: "https://sun.io/#/home",
    color: "#FF3B30",
  },
  {
    title: "Centralized Exchanges (CEXs)",
    description: "Purchase USDT on centralized exchanges and withdraw to your TRON wallet",
    brand: "HTX",
    brandLogo: "/images/htx-logo.png",
    link: "https://www.htx.com/",
    color: "#9B5DE5",
  },
  {
    title: "Wallets",
    description: "Create a TRON network address using a wallet to receive USDT from others",
    brand: "TronLink",
    brandLogo: "/images/tronlink-logo.png",
    link: "https://tronlink.org/",
    color: "#00C9A7",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] hover:border-[#00C9A7]/40 transition-all duration-200"
    >
      {copied ? (
        <CheckCircle size={12} weight="fill" className="text-[var(--color-success)]" />
      ) : (
        <Copy size={12} />
      )}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

// Simple bar chart component
function TransferChart() {
  return (
    <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-base font-semibold text-[var(--color-text-primary)]">
          TRON USDT Transfer Volume (7d)
        </h4>
        <span className="text-xs text-[var(--color-text-tertiary)]">24h vol: $26.8B</span>
      </div>
      <div className="flex items-end gap-2 h-24">
        {chartData.map((d) => (
          <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md transition-all duration-500"
              style={{
                height: `${(d.value / maxVal) * 80}px`,
                background: "linear-gradient(to top, #00C9A7, #00E5BB)",
                opacity: 0.8,
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        {chartData.map((d) => (
          <span
            key={d.day}
            className="flex-1 text-center text-[10px] text-[var(--color-text-tertiary)]"
          >
            {d.day}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function UsdtPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">

        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]" />
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00C9A7] opacity-[0.06] rounded-full blur-[120px] pointer-events-none"
          />

          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#00C9A7]/40" />
              <span className="px-4 py-1.5 rounded-full bg-[#00C9A7]/10 border border-[#00C9A7]/20 text-xs text-[#00C9A7] font-medium tracking-widest uppercase">
                TRON Network
              </span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#00C9A7]/40" />
            </div>

            <h1 className="text-center text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight">
              TRON USDT
            </h1>

            <div className="flex items-center justify-center gap-3 mb-10">
              <span className="text-sm text-[var(--color-text-secondary)]">
                TRC-20 USDT Contract:
              </span>
              <a
                href="https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-[#00C9A7] hover:underline"
              >
                {CONTRACT_ADDRESS}
              </a>
              <CopyButton text={CONTRACT_ADDRESS} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-5 text-center hover:border-[#00C9A7]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-widest mb-2">
                  Total Supply
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-mono tabular-nums leading-tight">
                  {USDT_STATS.totalSupply}
                </div>
              </div>
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-5 text-center hover:border-[#00C9A7]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-widest mb-2">
                  Holder Accounts
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-mono tabular-nums leading-tight">
                  {USDT_STATS.holders}
                </div>
              </div>
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-5 text-center hover:border-[#00C9A7]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-widest mb-2">
                  24h Transfer Volume
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#00C9A7] font-mono tabular-nums leading-tight">
                  {USDT_STATS.dailyVolume}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#get-usdt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00C9A7] text-white font-semibold text-base hover:bg-[#00B896] transition-colors shadow-[0_0_30px_rgba(0,201,167,0.25)]"
              >
                Get USDT
                <ArrowRight size={18} weight="bold" />
              </a>
              <a
                href="https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold text-base hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-surface)] transition-all duration-200"
              >
                View on Tronscan
                <ArrowSquareOut size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ─── Divider ─── */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

        {/* ─── Use Cases ─── */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                Use Cases
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                USDT has become a universal tool bridging traditional finance and the crypto economy, covering all kinds of financial activities
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((uc) => (
                <div
                  key={uc.num}
                  className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="text-3xl font-bold tabular-nums flex-shrink-0"
                      style={{ color: `${uc.color}30` }}
                    >
                      {uc.num}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[#00C9A7] transition-colors">
                        {uc.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {uc.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Why TRON ─── */}
        <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                The Preferred Network for USDT — TRON
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Backed by TRON network's high throughput, high scalability, and high reliability, with 40%+ of USDT circulation currently on TRON
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {tronAdvantages.map((adv) => (
                <div
                  key={adv.title}
                  className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${adv.color}15` }}
                  >
                    <adv.icon size={24} weight="fill" style={{ color: adv.color }} />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[#00C9A7] transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Transfer Chart */}
            <TransferChart />
          </div>
        </section>

        {/* ─── Get USDT ─── */}
        <section id="get-usdt" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                Get USDT
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Multiple ways to acquire USDT on the TRON network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {getUsdtChannels.map((ch) => (
                <a
                  key={ch.title}
                  href={ch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1 block"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${ch.color}15` }}
                  >
                    <Bank size={28} weight="fill" style={{ color: ch.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[#00C9A7] transition-colors">
                    {ch.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-5 text-sm leading-relaxed">
                    {ch.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                      <Globe size={14} className="text-[var(--color-text-tertiary)]" />
                      <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {ch.brand}
                      </span>
                    </div>
                    <ArrowSquareOut size={14} className="text-[var(--color-text-tertiary)]" />
                  </div>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.coingecko.com/en/coins/tether"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-dashed border-[var(--color-border)] text-[var(--color-text-tertiary)] text-sm hover:border-[#00C9A7]/40 hover:text-[var(--color-text-secondary)] transition-all duration-200"
              >
                More exchanges
                <ArrowSquareOut size={12} />
              </a>
              <a
                href="/wallets"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-dashed border-[var(--color-border)] text-[var(--color-text-tertiary)] text-sm hover:border-[#00C9A7]/40 hover:text-[var(--color-text-secondary)] transition-all duration-200"
              >
                More wallets
                <ArrowSquareOut size={12} />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}