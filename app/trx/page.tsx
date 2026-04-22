"use client";

import Link from "next/link";
import {
  Coins,
  ArrowsLeftRight,
  Bridge,
  PiggyBank,
  ArrowRight,
  TrendUp,
  Gavel,
  Vault,
  Lightning,
  Bank,
  Airplane,
  Gift,
  Globe,
  CheckCircle,
  Copy,
  ArrowSquareOut,
  ShieldCheck,
  Wallet,
  Users,
  ChartLine,
  Buildings,
} from "@phosphor-icons/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";

// Static data — in production these would come from API
const trxStats = {
  totalSupply: "94,779,628,275",
  price: "$0.3329",
  dailyTransfer: "$218,908,604",
};

const networkRoles = [
  {
    icon: Vault,
    title: "Incentivize Contributors",
    description: "TRX is distributed as block production and voting rewards to SRs and voters",
    color: "#FF3B30",
  },
  {
    icon: Gavel,
    title: "Vote for Super Representatives",
    description: "Stake TRX to obtain voting rights and elect Super Representatives",
    color: "#9B5DE5",
  },
  {
    icon: Lightning,
    title: "Obtain Network Resources",
    description: "Stake TRX to obtain corresponding Energy or Bandwidth",
    color: "#00C9A7",
  },
  {
    icon: Coins,
    title: "Pay Network Fees",
    description: "Pay TRX as transaction fees or use it to deduct Energy and Bandwidth",
    color: "#F0B90B",
  },
];

const applications = [
  {
    icon: Bank,
    title: "Deposit & Lending",
    description: "Earn interest by depositing TRX on decentralized lending platforms, or borrow stablecoins",
    color: "#FF3B30",
  },
  {
    icon: ArrowsLeftRight,
    title: "Provide Liquidity",
    description: "Deposit TRX and another token into a DEX liquidity pool to earn trading fees",
    color: "#9B5DE5",
  },
  {
    icon: Wallet,
    title: "Mint & Buy NFTs",
    description: "Use TRX to mint and purchase NFTs on the AINFT platform",
    color: "#00C9A7",
  },
  {
    icon: ShieldCheck,
    title: "Issue USDD",
    description: "Issue the over-collateralized stablecoin USDD by staking TRX",
    color: "#F0B90B",
  },
  {
    icon: Globe,
    title: "Government & Compliance",
    description: "On Oct 7, 2022, TRX was officially established as Dominica's national legal digital currency",
    color: "#FF6B5A",
  },
  {
    icon: Airplane,
    title: "Travel",
    description: "Travala supports 230+ countries/regions with 3M+ travel products, payable with TRX",
    color: "#3B82F6",
  },
  {
    icon: Buildings,
    title: "TRON ATM",
    description: "MeconCash partnership enables TRX-to-fiat exchange at 13,000+ ATMs across South Korea",
    color: "#10B981",
  },
  {
    icon: Gift,
    title: "Buy Gift Cards",
    description: "Coinsbee accepts TRX for gift cards across multiple categories",
    color: "#F59E0B",
  },
  {
    icon: TrendUp,
    title: "Network Governance",
    description: "Become a Super Representative for block rewards, or vote to earn voting rewards",
    color: "#8B5CF6",
  },
];

const getTrxMethods = [
  {
    icon: ArrowsLeftRight,
    title: "Decentralized Exchanges (DEXs)",
    description: "Connect your wallet to a DEX and swap tokens for TRX securely — no KYC required",
    link: "https://sun.io",
    linkText: "SUN.io",
    color: "#FF3B30",
  },
  {
    icon: Bank,
    title: "Centralized Exchanges (CEXs)",
    description: "Purchase TRX on centralized exchanges and withdraw to your TRON wallet",
    link: "https://www.binance.com",
    linkText: "Binance",
    color: "#9B5DE5",
  },
  {
    icon: Gavel,
    title: "Participate in Governance",
    description: "Become a Super Representative for block rewards, or vote to earn rewards",
    link: "https://tronscan.org/#/sr/representatives",
    linkText: "Become an SR",
    color: "#00C9A7",
  },
];

const exchanges = [
  { name: "Binance", url: "https://www.binance.com" },
  { name: "OKX", url: "https://www.okx.com" },
  { name: "HTX", url: "https://www.htx.com" },
  { name: "KuCoin", url: "https://www.kucoin.com" },
  { name: "Poloniex", url: "https://www.poloniex.com" },
  { name: "Gate.io", url: "https://www.gate.io" },
  { name: "Coinbase", url: "https://www.coinbase.com" },
  { name: "Bybit", url: "https://www.bybit.com" },
];

const erc20Info = {
  burned: "99,188,397,993.45",
  percent: "99.19%",
};

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
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] hover:border-[var(--color-primary)]/40 transition-all duration-200"
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

export default function TrxPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">

        {/* ─── Hero ─── */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[var(--color-primary)] opacity-[0.06] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-[var(--color-primary)] opacity-[0.04] rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--color-primary)]/40" />
              <span className="px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 text-xs text-[var(--color-primary)] font-medium tracking-widest uppercase">
                TRON Network
              </span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--color-primary)]/40" />
            </div>

            <h1 className="text-center text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
              What is TRX
            </h1>

            <p className="text-center text-[var(--color-text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
              TRX (TRONIX) is the native utility token of the TRON network. On October 7, 2022, the Commonwealth of Dominica officially recognized TRX as its national legal digital currency.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-5 text-center hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-widest mb-2">Total Supply</div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-mono tabular-nums leading-tight">
                  {trxStats.totalSupply}
                </div>
              </div>
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-5 text-center hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-widest mb-2">Current Price</div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-primary)] font-mono tabular-nums leading-tight">
                  {trxStats.price}
                </div>
              </div>
              <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-5 text-center hover:border-[var(--color-primary)]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-widest mb-2">24h Transfer Volume</div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] font-mono tabular-nums leading-tight">
                  {trxStats.dailyTransfer}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#get-trx"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-semibold text-base hover:bg-[var(--color-primary-light)] transition-colors shadow-[0_0_30px_rgba(255,59,48,0.25)]"
              >
                Get TRX
                <ArrowRight size={18} weight="bold" />
              </a>
              <Link
                href="/ecosystem"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold text-base hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-surface)] transition-all duration-200"
              >
                Explore Ecosystem
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Divider ─── */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />

        {/* ─── TRX as Foundation ─── */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                TRX Powers the TRON Network
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                As the native token of TRON, TRX plays a critical role in the operation of the TRON network
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {networkRoles.map((role) => (
                <div
                  key={role.title}
                  className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${role.color}15` }}
                  >
                    <role.icon size={24} weight="fill" style={{ color: role.color }} />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Application Scenarios ─── */}
        <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                TRX Use Cases
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                TRX is woven throughout the TRON ecosystem with a rich variety of use cases
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {applications.map((app) => (
                <div
                  key={app.title}
                  className="group bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${app.color}15` }}
                    >
                      <app.icon size={22} weight="fill" style={{ color: app.color }} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                        {app.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Get TRX ─── */}
        <section id="get-trx" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                Get TRX
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Multiple ways to acquire TRX — choose the one that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {getTrxMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8 hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1 block"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${method.color}15` }}
                  >
                    <method.icon size={28} weight="fill" style={{ color: method.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] mb-5 text-sm leading-relaxed">
                    {method.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: method.color }}>
                    <span>{method.linkText}</span>
                    <ArrowSquareOut size={14} />
                  </div>
                </a>
              ))}
            </div>

            {/* More exchanges */}
            <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border)] rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-5">
                Centralized Exchanges
              </h3>
              <div className="flex flex-wrap gap-3">
                {exchanges.map((ex) => (
                  <a
                    key={ex.name}
                    href={ex.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-medium hover:border-[var(--color-primary)]/40 hover:text-[var(--color-text-primary)] transition-all duration-200"
                  >
                    <Bank size={15} className="text-[var(--color-text-tertiary)]" />
                    {ex.name}
                    <ArrowSquareOut size={11} className="text-[var(--color-text-tertiary)]" />
                  </a>
                ))}
                <a
                  href="https://www.coingecko.com/en/coins/tron#markets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-[var(--color-border)] text-[var(--color-text-tertiary)] text-sm hover:border-[var(--color-primary)]/40 hover:text-[var(--color-text-secondary)] transition-all duration-200"
                >
                  More exchanges
                  <ArrowSquareOut size={11} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ERC-20 History ─── */}
        <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Migration */}
              <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <ArrowsLeftRight size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    Migration
                  </h3>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5">
                  ERC-20 TRX issued on Ethereum was migrated to the TRON mainnet on June 25, 2018 (SGT). The following exchanges permanently support TRX migration:
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Binance", "Gate.io", "KuCoin"].map((ex) => (
                    <span
                      key={ex}
                      className="px-4 py-2 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)]"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <CopyButton text="0xf230b790e05390fc8295f4d3f60332c93bed42e2" />
                  <a
                    href="https://etherscan.io/token/0xf230b790e05390fc8295f4d3f60332c93bed42e2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:underline"
                  >
                    View ERC-20 TRX
                    <ArrowSquareOut size={12} />
                  </a>
                </div>
              </div>

              {/* Burn */}
              <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Coins size={20} className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                    Token Burn
                  </h3>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5">
                  After the migration to TRON mainnet on June 25, 2018, TRON DAO gradually burned all ERC-20 TRX. Total burned to date:
                </p>
                <div className="bg-[var(--color-bg-surface)] rounded-2xl p-5 mb-5">
                  <div className="grid grid-cols-2 gap-5 text-center">
                    <div>
                      <div className="text-lg md:text-xl font-bold text-[var(--color-primary)] font-mono tabular-nums leading-tight mb-1">
                        {erc20Info.burned}
                      </div>
                      <div className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">Tokens Burned</div>
                    </div>
                    <div>
                      <div className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] font-mono tabular-nums leading-tight mb-1">
                        {erc20Info.percent}
                      </div>
                      <div className="text-[10px] text-[var(--color-text-tertiary)] uppercase tracking-wider">of Total Supply</div>
                    </div>
                  </div>
                </div>
                <a
                  href="/burn"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--color-primary)] hover:underline"
                >
                  View Burn Records
                  <ArrowSquareOut size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--color-bg-surface)] to-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-3xl p-10 text-center">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                Contact Us
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-text-secondary)]">
                <a href="mailto:press@tron.network" className="hover:text-[var(--color-primary)] transition-colors">
                  press@tron.network
                </a>
                <a href="mailto:service@tron.network" className="hover:text-[var(--color-primary)] transition-colors">
                  service@tron.network
                </a>
                <a href="/static/doc/廉正举报须知.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">
                  Integrity Report
                </a>
              </div>
              <div className="flex items-center justify-center gap-4 mt-8">
                {[
                  { label: "Discord", href: "https://discord.gg/hqKvyAM" },
                  { label: "Medium", href: "https://trondao.medium.com/" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/trondao" },
                  { label: "YouTube", href: "https://www.youtube.com/channel/UC5OPOGRq02iK-0T9sKse_kA" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] transition-all duration-200"
                  >
                    <Globe size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
