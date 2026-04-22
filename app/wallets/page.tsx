"use client";

import Link from "next/link";
import {
  Wallet,
  Browser,
  DeviceMobile,
  Usb,
  PuzzlePiece,
  ArrowRight,
  ShieldCheck,
  LockKey,
  Key,
  Eye,
} from "@phosphor-icons/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";

const walletCategories = [
  {
    category: "Browser",
    icon: Browser,
    color: "#FF6B5A",
    wallets: [
      {
        name: "TronLink",
        description: "The most popular TRON wallet. Available as a browser extension and mobile app. Supports TRX, USDT, and all TRC tokens.",
        platforms: ["Chrome", "Firefox", "Brave"],
        url: "https://www.tronlink.org",
        icon: Wallet,
      },
      {
        name: "Klever Wallet",
        description: "A simple and secure crypto wallet with built-in browser for DApps. Supports TRON and multiple chains.",
        platforms: ["Browser Extension"],
        url: "https://klever.io",
        icon: Wallet,
      },
    ],
  },
  {
    category: "Mobile",
    icon: DeviceMobile,
    color: "#9B5DE5",
    wallets: [
      {
        name: "TronWallet",
        description: "Official TRON mobile wallet. Buy, swap, and stake TRX directly from your phone with a clean, intuitive interface.",
        platforms: ["iOS", "Android"],
        url: "https://www.tronwallet.io",
        icon: Wallet,
      },
      {
        name: "Klever",
        description: "Mobile-first wallet with DApp browser. Earn rewards, manage NFTs, and access DeFi on the go.",
        platforms: ["iOS", "Android"],
        url: "https://klever.io",
        icon: Wallet,
      },
      {
        name: "TokenPocket",
        description: "Multi-chain wallet supporting TRON, Ethereum, BSC, and more. Built-in DApp store and staking features.",
        platforms: ["iOS", "Android"],
        url: "https://www.tokenpocket.pro",
        icon: Wallet,
      },
    ],
  },
  {
    category: "Hardware",
    icon: Usb,
    color: "#F0B90B",
    wallets: [
      {
        name: "Ledger",
        description: "Industry-leading hardware wallet. Keep your TRX and tokens offline with military-grade security.",
        platforms: ["Hardware"],
        url: "https://www.ledger.com",
        icon: Usb,
      },
      {
        name: "Trezor",
        description: "Open-source hardware wallet with air-gapped signing. Trusted by thousands for cold storage.",
        platforms: ["Hardware"],
        url: "https://trezor.io",
        icon: Usb,
      },
    ],
  },
  {
    category: "Extensions",
    icon: PuzzlePiece,
    color: "#00C9A7",
    wallets: [
      {
        name: "TronLink Chrome",
        description: "Chrome browser extension for TRON. Manage your assets and interact with DApps without leaving your browser.",
        platforms: ["Chrome"],
        url: "https://www.tronlink.org",
        icon: PuzzlePiece,
      },
      {
        name: "TronLink Firefox",
        description: "Firefox browser extension for TRON. Securely connect to DApps and manage your TRC assets.",
        platforms: ["Firefox"],
        url: "https://www.tronlink.org",
        icon: PuzzlePiece,
      },
    ],
  },
];

const securityTips = [
  {
    icon: ShieldCheck,
    title: "Never Share Your Seed Phrase",
    description: "No one from TRON Foundation will ever ask for your private keys or seed phrase. Keep them offline.",
  },
  {
    icon: LockKey,
    title: "Use Hardware Wallets for Large Amounts",
    description: "For significant holdings, use a hardware wallet to keep your private keys completely offline.",
  },
  {
    icon: Key,
    title: "Verify URLs Before Connecting",
    description: "Always double-check that you're on the official website before connecting your wallet to any DApp.",
  },
  {
    icon: Eye,
    title: "Review Transaction Details",
    description: "Always verify the recipient address and amount before signing any transaction, no matter how small.",
  },
];

export default function WalletsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 mb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-[#9B5DE5]/10 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9B5DE5]/10 border border-[#9B5DE5]/20 mb-6">
                <Wallet size={16} weight="fill" className="text-[#9B5DE5]" />
                <span className="text-sm text-[#9B5DE5] font-medium">Wallets</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
                Choose Your Wallet
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Securely store, send, and receive TRX and USDT on the TRON network
              </p>
            </div>
          </div>
        </section>

        {/* Wallet Categories */}
        {walletCategories.map((category) => (
          <section key={category.category} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${category.color}20` }}
              >
                <category.icon size={22} weight="fill" style={{ color: category.color }} />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
                {category.category} Wallets
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.wallets.map((wallet) => (
                <Card key={wallet.name} className="p-6 group flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <wallet.icon size={24} weight="fill" style={{ color: category.color }} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {wallet.name}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-4 flex-grow">
                    {wallet.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {wallet.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-2 py-1 rounded-md text-xs font-medium bg-[var(--color-bg-secondary)] text-[var(--color-text-tertiary)]"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                  <a
                    href={wallet.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
                  >
                    Get Started
                    <ArrowRight size={14} />
                  </a>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {/* Security Tips */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2 text-center">
            Security Tips
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-xl mx-auto">
            Protect your assets by following these essential security practices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityTips.map((tip) => (
              <Card key={tip.title} className="p-6 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                  <tip.icon size={24} weight="fill" className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-sm">
                    {tip.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
