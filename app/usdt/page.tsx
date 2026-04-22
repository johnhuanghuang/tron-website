"use client";

import Link from "next/link";
import {
  Coins,
  ArrowsLeftRight,
  Bridge,
  PiggyBank,
  ArrowRight,
  Lightning,
  Gauge,
  Star,
  Handshake,
  AirplaneTakeoff,
  Wallet,
  ChartLine,
} from "@phosphor-icons/react";
import { StaticHeader } from "@/components/layout/StaticHeader";
import { StaticFooter } from "@/components/layout/StaticFooter";
import { Card } from "@/components/ui/Card";

const getUsdtMethods = [
  {
    icon: Coins,
    title: "Buy on CEX",
    description: "Purchase USDT on major centralized exchanges",
    details: "Binance · OKX · HTX · KuCoin · Poloniex",
    color: "#F0B90B",
  },
  {
    icon: Bridge,
    title: "Cross-Chain Bridge",
    description: "Bridge USDT from Ethereum or BNB Chain via BTTC",
    details: "BitTorrent Chain (BTTC)",
    color: "#9B5DE5",
  },
  {
    icon: ArrowsLeftRight,
    title: "Decentralized Exchange",
    description: "Swap for USDT directly on SunSwap DEX",
    details: "SunSwap on TRON",
    color: "#FF6B5A",
  },
  {
    icon: PiggyBank,
    title: "Earn through DeFi",
    description: "Provide liquidity or lend USDT to earn yield",
    details: "JustLend · SunSwap Farms",
    color: "#00C9A7",
  },
];

const benefitCards = [
  {
    icon: Lightning,
    title: "Zero Gas Fees",
    description: "Send USDT on TRON for fractions of a cent. No network congestion, no delays.",
  },
  {
    icon: Gauge,
    title: "2000+ TPS",
    description: "Handle thousands of transfers per second with near-instant finality.",
  },
  {
    icon: Star,
    title: "Native to TRON",
    description: "TRC20-USDT is the most widely used stablecoin on the TRON blockchain.",
  },
];

const useCases = [
  { icon: Handshake, title: "DeFi", description: "Lending, borrowing, and yield farming" },
  { icon: AirplaneTakeoff, title: "Remittance", description: "Send money worldwide at near-zero cost" },
  { icon: Wallet, title: "Payments", description: "Accept and make payments globally" },
  { icon: ChartLine, title: "Trading", description: "Trade against TRX and other TRC20 tokens" },
];

export default function GetUsdtPage() {
  return (
    <>
      <StaticHeader />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00C9A7]/10 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00C9A7]/10 border border-[#00C9A7]/20 mb-6">
                <Coins size={16} weight="fill" className="text-[#00C9A7]" />
                <span className="text-sm text-[#00C9A7] font-medium">TRC20-USDT</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
                Tron USDT
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                The most widely used stablecoin on the TRON network. Zero gas fees, instant transfers.
              </p>
            </div>
          </div>
        </section>

        {/* What is Tron USDT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <Card className="p-10">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#00C9A7]/10 flex items-center justify-center flex-shrink-0">
                <Coins size={32} weight="fill" className="text-[#00C9A7]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">
                  What is Tron USDT?
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Tron USDT (TRC20-USDT) is a USD-denominated stablecoin issued on the TRON blockchain.
                  It maintains a 1:1 peg with the US Dollar and is fully backed by reserves. As the most
                  widely used stablecoin on TRON, it powers billions of dollars in daily transactions
                  across DeFi, payments, and remittances. With near-zero fees and high throughput,
                  Tron USDT is the preferred choice for users worldwide.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* How to Get Tron USDT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2 text-center">
            How to Get Tron USDT
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-xl mx-auto">
            Multiple ways to acquire TRC20-USDT on the TRON network
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getUsdtMethods.map((method) => (
              <Card key={method.title} className="p-8 group">
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    <method.icon size={28} weight="fill" style={{ color: method.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[#00C9A7] transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] mb-3">
                      {method.description}
                    </p>
                    <p className="text-sm font-medium" style={{ color: method.color }}>
                      {method.details}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2 text-center">
            Benefits
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-xl mx-auto">
            Why millions choose Tron USDT for their stablecoin needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitCards.map((card) => (
              <Card key={card.title} className="p-8 text-center group">
                <div className="w-16 h-16 rounded-full bg-[#00C9A7]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00C9A7]/20 transition-colors">
                  <card.icon size={32} weight="fill" className="text-[#00C9A7]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                  {card.title}
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  {card.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2 text-center">
            Use Cases
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-xl mx-auto">
            Tron USDT powers real-world applications across industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="p-6 text-center group">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                  <useCase.icon size={24} weight="fill" className="text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                  {useCase.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {useCase.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #00C9A7 0%, #00A388 100%)" }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Explore DeFi with USDT
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Put your USDT to work in the TRON DeFi ecosystem — earn yields, provide liquidity, and more
              </p>
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#00C9A7] font-semibold hover:bg-white/90 transition-colors"
              >
                Explore DeFi
                <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <StaticFooter />
    </>
  );
}
