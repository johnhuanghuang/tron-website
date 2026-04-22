"use client";

import Link from "next/link";
import {
  Coins,
  Graph,
  ArrowsLeftRight,
  Bridge,
  PiggyBank,
  ArrowRight,
  CheckCircle,
  TrendUp,
  Gavel,
} from "@phosphor-icons/react";
import { StaticHeader } from "@/components/layout/StaticHeader";
import { StaticFooter } from "@/components/layout/StaticFooter";
import { Card } from "@/components/ui/Card";

const getTrxMethods = [
  {
    icon: ArrowsLeftRight,
    title: "Buy on Exchanges",
    description: "Purchase TRX on major centralized exchanges",
    details: "Binance · OKX · HTX · KuCoin · Poloniex",
    color: "#F0B90B",
  },
  {
    icon: ArrowsLeftRight,
    title: "Decentralized Exchange",
    description: "Swap tokens directly on SunSwap — no KYC required",
    details: "SunSwap on TRON",
    color: "#FF6B5A",
  },
  {
    icon: Bridge,
    title: "Cross-Chain Bridge",
    description: "Bridge assets from Ethereum or BNB Chain via BTTC",
    details: "BitTorrent Chain (BTTC)",
    color: "#9B5DE5",
  },
  {
    icon: PiggyBank,
    title: "Earn TRX",
    description: "Stake TRX or provide liquidity to earn rewards",
    details: "JustLend · Official Staking",
    color: "#00C9A7",
  },
];

const whyTrxCards = [
  {
    icon: Coins,
    title: "Utility",
    description: "TRX powers every interaction on the TRON network — from transfers to smart contract execution.",
  },
  {
    icon: TrendUp,
    title: "Staking",
    description: "Stake TRX to earn annual rewards. Help secure the network while growing your holdings.",
  },
  {
    icon: Graph,
    title: "Governance",
    description: "TRX holders vote on network proposals and guide the future development of TRON.",
  },
];

const topExchanges = [
  { name: "Binance", url: "https://www.binance.com" },
  { name: "OKX", url: "https://www.okx.com" },
  { name: "HTX", url: "https://www.htx.com" },
  { name: "KuCoin", url: "https://www.kucoin.com" },
  { name: "Poloniex", url: "https://www.poloniex.com" },
  { name: "Bybit", url: "https://www.bybit.com" },
  { name: "Gate.io", url: "https://www.gate.io" },
  { name: "Bitfinex", url: "https://www.bitfinex.com" },
];

export default function GetTrxPage() {
  return (
    <>
      <StaticHeader />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/10 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 mb-6">
                <Coins size={16} weight="fill" className="text-[var(--color-primary)]" />
                <span className="text-sm text-[var(--color-primary)] font-medium">Native Token</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
                Get TRX
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Learn how and where to acquire TRX, the native token of the TRON network
              </p>
            </div>
          </div>
        </section>

        {/* How to Get TRX */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2 text-center">
            How to Get TRX
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-xl mx-auto">
            Multiple ways to acquire TRX — choose the one that fits your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getTrxMethods.map((method) => (
              <Card key={method.title} className="p-8 group">
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    <method.icon size={28} weight="fill" style={{ color: method.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
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

        {/* Why TRX */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2 text-center">
            Why TRX
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-xl mx-auto">
            More than just a token — TRX is the engine of the TRON ecosystem
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyTrxCards.map((card) => (
              <Card key={card.title} className="p-8 text-center group">
                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                  <card.icon size={32} weight="fill" className="text-[var(--color-primary)]" />
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

        {/* Top Exchanges */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2 text-center">
            Top Exchanges
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-xl mx-auto">
            TRX is listed on major centralized exchanges worldwide
          </p>
          <Card className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {topExchanges.map((exchange) => (
                <a
                  key={exchange.name}
                  href={exchange.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <ArrowsLeftRight size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <span className="font-medium text-[var(--color-text-primary)]">
                    {exchange.name}
                  </span>
                </a>
              ))}
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-12 text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #FF6B5A 100%)" }}
          >
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Use TRX?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Explore the TRON ecosystem and discover what you can build with TRX
              </p>
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
              >
                Start Using TRX
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
