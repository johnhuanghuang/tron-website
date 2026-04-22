"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { EcosystemProduct } from "@/lib/data/ecosystem-products";
import { iconMap } from "@/lib/data/icon-map";
import { CopyButton } from "@/components/ecosystem/CopyButton";
import styles from "./page.module.css";

const navLinks = [
  { label: "Start", href: "/start" },
  { label: "Build", href: "/developers" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Participate", href: "/events" },
  { label: "More", href: "/about" },
];

function SimpleHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-lg text-[var(--color-text-primary)]">TRON</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/developers"
            className="hidden md:block px-4 py-2 rounded-full bg-[var(--color-primary)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start Building
          </Link>
        </div>
      </div>
    </header>
  );
}

function SimpleFooter() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-sm text-[var(--color-text-tertiary)] text-center">
          &copy; {new Date().getFullYear()} TRON Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const allProducts: EcosystemProduct[] = [
  { name: "JustLend", slug: "justlend", category: "DeFi", description: "Decentralized Lending", fullDescription: "JustLend is a decentralized non-custodial liquidity market protocol where users can participate as depositors or borrowers.", data: "TVL $4.2B", iconName: "Wallet", tvl: "$4.2B", users: "125K+", contracts: "0x3fCcdE2c1e7bA2dC4f7a0C4f7a2dC4f7a0C4f7a2", auditStatus: "Audited by CertiK", externalUrl: "https://justlend.org", tutorialSteps: ["Connect your TRON wallet", "Navigate to JustLend dashboard", "Deposit TRX or other supported assets", "Start earning interest on your deposits"], news: [{ title: "JustLend Launches New Asset Support", date: "2026-04-18", summary: "JustLend has added support for three new assets." }, { title: "JustLend TVL Reaches New High", date: "2026-04-12", summary: "Total value locked exceeds $4 billion." }] },
  { name: "SunSwap", slug: "sunswap", category: "DeFi", description: "DEX & Staking", fullDescription: "SunSwap is a decentralized exchange built on TRON with deep liquidity.", data: "24h Vol $890M", iconName: "Swap", tvl: "$520M", users: "450K+", volume24h: "$890M", externalUrl: "https://sunswap.io", tutorialSteps: ["Visit SunSwap and connect wallet", "Select token pair to swap"], news: [{ title: "SunSwap V3 Launched", date: "2026-04-20", summary: "New version brings improved liquidity pools." }] },
  { name: "BTTC", slug: "bittorrent-chain", category: "Cross-Chain", description: "BitTorrent Chain", fullDescription: "BitTorrent Chain is a cross-chain solution connecting TRON, Ethereum, and BNB Chain.", data: "$2.8B Cross-Chain", iconName: "Bridge", tvl: "$2.8B", users: "2.5M+", volume24h: "$450M", externalUrl: "https://bt.io", tutorialSteps: ["Set up BTTC wallet", "Bridge assets from other chains"], news: [{ title: "BTTC Launches Mainnet", date: "2026-04-10", summary: "Mainnet launch brings full cross-chain functionality." }] },
  { name: "WINk", slug: "wink", category: "Games", description: "Gaming Platform", fullDescription: "WINk is a comprehensive gaming platform on TRON.", data: "MAU 2.1M", iconName: "GameController", users: "2.1M MAU", volume24h: "$120M", externalUrl: "https://wink.org", tutorialSteps: ["Register on WINk platform"], news: [{ title: "WINk Launches New Lottery Game", date: "2026-04-19", summary: "New progressive jackpot lottery now available." }] },
  { name: "BTFS", slug: "btfs", category: "Storage", description: "Storage Network", fullDescription: "BTFS is a decentralized storage network leveraging BitTorrent and TRON.", data: "Nodes 500K+", iconName: "Cube", users: "500K+ Nodes", volume24h: "15PB Storage", externalUrl: "https://btfs.io", tutorialSteps: ["Install BTFS client"], news: [{ title: "BTFS Network Reaches 500K Nodes", date: "2026-04-17", summary: "Major milestone in decentralized storage adoption." }] },
  { name: "USDD", slug: "usdd", category: "Stablecoin", description: "Decentralized Stablecoin", fullDescription: "USDD is a decentralized stablecoin built on TRON, pegged to the US Dollar.", data: "Supply $730M", iconName: "CurrencyCircleDollar", tvl: "$730M", users: "3.2M+", contracts: "0xB1f0A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7a7", externalUrl: "https://usdd.io", tutorialSteps: ["Acquire TRX or other crypto assets"], news: [{ title: "USDD Minting Cap Increased", date: "2026-04-15", summary: "TRON DAO Reserve expands minting capacity." }] },
  { name: "JUST Governance", slug: "just-governance", category: "Governance", description: "DAO Governance", fullDescription: "JUST Governance is the decentralized governance system for the TRON ecosystem.", data: "Governance", iconName: "ChartBar", users: "85K+", contracts: "0xC2f1A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7a8", externalUrl: "https://just.gov", tutorialSteps: ["Stake TRX for voting power"], news: [{ title: "New Governance Proposal Passed", date: "2026-04-21", summary: "Vote approves new TVL incentive program." }] },
  { name: "TRON DAO Reserve", slug: "tron-dao-reserve", category: "Reserve", description: "Reserve Management", fullDescription: "TRON DAO Reserve manages the USDD stablecoin and ensures its stability.", data: "Reserve", iconName: "Vault", users: "1.5M+", contracts: "0xD3f2A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7a9", externalUrl: "https://tron.io/reserve", tutorialSteps: ["Monitor reserve status"], news: [{ title: "Reserve Expands Asset Portfolio", date: "2026-04-22", summary: "Reserve adds new collateral assets." }] },
  { name: "Crypto.com", slug: "crypto-com", category: "Exchange", description: "Global Exchange", fullDescription: "Crypto.com is a global cryptocurrency exchange partnered with TRON.", data: "Partner", iconName: "Handshake", users: "10M+", volume24h: "$2.5B", externalUrl: "https://crypto.com", auditStatus: "SOC2 Certified", news: [{ title: "Crypto.com Lists TRON", date: "2026-04-12", summary: "TRON trading pairs now available on Crypto.com." }] },
  { name: "Poloniex", slug: "poloniex", category: "Exchange", description: "Crypto Exchange", fullDescription: "Poloniex is a leading cryptocurrency exchange with deep TRON integration.", data: "Partner", iconName: "Buildings", users: "3M+", volume24h: "$850M", externalUrl: "https://poloniex.com", auditStatus: "Security Audited", news: [{ title: "Poloniex Launches TRON Trading Competition", date: "2026-04-18", summary: "$100K prize pool for TRON traders." }] },
  { name: "Samsung", slug: "samsung", category: "Partner", description: "Tech Partner", fullDescription: "Samsung has integrated TRON into various blockchain initiatives.", data: "Partner", iconName: "Star", users: "50M+", externalUrl: "https://samsung.com/blockchain", auditStatus: "Enterprise Certified", news: [{ title: "Samsung Galaxy S26 Supports TRON", date: "2026-04-19", summary: "Native TRON wallet in Samsung devices." }] },
  { name: "BitTorrent (BTT)", slug: "bittorrent-btt", category: "Utility", description: "File Sharing Token", fullDescription: "BitTorrent (BTT) is a utility token for the BitTorrent network on TRON.", data: "Utility Token", iconName: "LinkSimple", users: "100M+", volume24h: "$45M", contracts: "0xE4f3A3D8E7bA2dC4f7a0C4f7a2dC4f7a0C4f7aa", auditStatus: "Token Audited", externalUrl: "https://bt.io/btt", tutorialSteps: ["Get BTT from exchange"], news: [{ title: "BTT Token Migration Complete", date: "2026-04-20", summary: "All BTT tokens migrated to TRON network." }] },
];

function getProductBySlug(slug: string): EcosystemProduct | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <>
        <SimpleHeader />
        <main className={styles.main}>
          <div className={styles.notFound}>
            <h1>Product Not Found</h1>
            <Link href="/ecosystem" className={styles.backLink}>
              ← Back to Ecosystem
            </Link>
          </div>
        </main>
        <SimpleFooter />
      </>
    );
  }

  const Icon = iconMap[product.iconName];

  return (
    <>
      <SimpleHeader />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.container}>
            <Link href="/ecosystem" className={styles.backLink}>← Back to Ecosystem</Link>
            <div className={styles.heroContent}>
              <div className={styles.iconWrapper}>
                <Icon size={48} weight="fill" />
              </div>
              <div className={styles.heroInfo}>
                <h1 className={styles.title}>{product.name}</h1>
                <div className={styles.meta}>
                  <span className={styles.category}>{product.category}</span>
                  {product.externalUrl && (
                    <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                      Official Website →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        {(product.tvl || product.users || product.volume24h || product.auditStatus) && (
          <section className={styles.stats}>
            <div className={styles.container}>
              <div className={styles.statsGrid}>
                {product.tvl && <div className={styles.statCard}><span className={styles.statLabel}>TVL</span><span className={styles.statValue}>{product.tvl}</span></div>}
                {product.users && <div className={styles.statCard}><span className={styles.statLabel}>Users</span><span className={styles.statValue}>{product.users}</span></div>}
                {product.volume24h && <div className={styles.statCard}><span className={styles.statLabel}>24h Volume</span><span className={styles.statValue}>{product.volume24h}</span></div>}
                {product.auditStatus && <div className={styles.statCard}><span className={styles.statLabel}>Audit</span><span className={styles.statValue}>{product.auditStatus}</span></div>}
              </div>
            </div>
          </section>
        )}

        {/* Description */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>About {product.name}</h2>
            <p className={styles.description}>{product.fullDescription}</p>
          </div>
        </section>

        {/* Contract Address */}
        {product.contractAddress && (
          <section className={styles.section}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Contract Address</h2>
              <div className={styles.contractWrapper}>
                <code className={styles.addressCode}>{product.contractAddress}</code>
                <CopyButton text={product.contractAddress} />
              </div>
            </div>
          </section>
        )}

        {/* Tutorial */}
        {product.tutorialSteps && product.tutorialSteps.length > 0 && (
          <section className={styles.section}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>How to Get Started</h2>
              <div className={styles.tutorialSteps}>
                {product.tutorialSteps.map((step, i) => (
                  <div key={i} className={styles.step}>
                    <div className={styles.stepNumber}>{i + 1}</div>
                    <p className={styles.stepText}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* News */}
        {product.news && product.news.length > 0 && (
          <section className={styles.section}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Latest News</h2>
              <div className={styles.newsGrid}>
                {product.news.map((item, i) => (
                  <div key={i} className={styles.newsCard}>
                    <span className={styles.newsDate}>{item.date}</span>
                    <h3 className={styles.newsTitle}>{item.title}</h3>
                    <p className={styles.newsSummary}>{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <SimpleFooter />
    </>
  );
}
