"use client";

import { useState } from "react";
import {
  CaretDown,
  Coins,
  Wallet,
  Lightning,
  Scales,
  ArrowRight,
} from "@phosphor-icons/react";
import { StaticHeader } from "@/components/layout/StaticHeader";
import { StaticFooter } from "@/components/layout/StaticFooter";
import { Card } from "@/components/ui/Card";

const faqItems = [
  {
    question: "What is TRON?",
    answer:
      "TRON is a decentralized blockchain protocol founded in 2017. It uses a Delegated Proof of Stake (DPoS) consensus mechanism to deliver high throughput — up to 2,000 TPS — with near-zero transaction fees. TRON's mission is to decentralize the web and enable creators to have full ownership of their digital content.",
    icon: Lightning,
  },
  {
    question: "What is TRX?",
    answer:
      "TRX (TRON Coin) is the native cryptocurrency token of the TRON blockchain. It is used to pay for transaction fees, stake for network validation rewards, and participate in governance voting. TRX plays a central role in the TRON ecosystem as the primary medium of exchange and utility token.",
    icon: Coins,
  },
  {
    question: "How do I get a TRON wallet?",
    answer:
      "Download a supported wallet like TronLink (available as a browser extension or mobile app), Klever Wallet, or TokenPocket. Create a new wallet, securely store your seed phrase, and you'll be ready to receive TRX and USDT. Hardware wallets like Ledger and Trezor offer additional security for larger holdings.",
    icon: Wallet,
  },
  {
    question: "What is the difference between TRON and Ethereum?",
    answer:
      "Both are smart contract platforms, but TRON offers near-zero transaction fees (fractions of a cent) compared to Ethereum's variable gas costs which can reach tens of dollars during congestion. TRON processes up to 2,000 TPS versus Ethereum's ~15-30 TPS. TRON uses DPoS consensus while Ethereum uses Proof of Stake. Both have robust DeFi ecosystems.",
    icon: Scales,
  },
  {
    question: "How do I buy TRX?",
    answer:
      "You can buy TRX on major centralized exchanges (CEX) like Binance, OKX, HTX, and KuCoin using fiat or other cryptocurrencies. Alternatively, use SunSwap, a decentralized exchange (DEX) on TRON, to swap other tokens for TRX. For cross-chain purchases, use BTTC bridge to move assets from Ethereum or BNB Chain to TRON.",
    icon: Coins,
  },
  {
    question: "What is USDT on TRON?",
    answer:
      "Tron USDT (TRC20-USDT) is a US Dollar stablecoin issued on the TRON blockchain. It maintains a 1:1 peg with the US Dollar and is fully backed by reserves. As the most widely used stablecoin on TRON, it enables global payments, DeFi activities, and remittances with near-zero fees and instant finality.",
    icon: Coins,
  },
  {
    question: "How do I use DApps on TRON?",
    answer:
      "Install the TronLink wallet extension or mobile app, fund your wallet with TRX (needed for transaction fees), then navigate to any TRON DApp. Your wallet will prompt you to connect. Always verify you're on the official DApp URL before connecting your wallet or signing any transactions.",
    icon: Wallet,
  },
  {
    question: "What are the fees on TRON?",
    answer:
      "TRON uses a unique fee model based on Bandwidth and Energy. Simple transfers cost almost nothing (a few TRX worth of bandwidth). Smart contract interactions consume Energy, which can be purchased with TRX. Overall, most transactions cost less than $0.01, making TRON one of the most cost-effective blockchain networks.",
    icon: Lightning,
  },
  {
    question: "How do I stake TRX?",
    answer:
      "You can stake TRX through JustLend (TRON's main lending market) or through the official TRON staking mechanism. Staking TRX helps secure the network and earns you annual rewards. APY varies based on network conditions. Navigate to the staking section of your wallet or visit JustLend directly to get started.",
    icon: Scales,
  },
  {
    question: "Is TRON secure?",
    answer:
      "Yes. TRON uses DPoS consensus with 25 elected super representatives and 77 super representative candidates, ensuring decentralized validation. All major smart contracts have been audited by leading security firms. The network has processed billions of transactions without major security incidents. Users should still follow best practices: protect seed phrases, use hardware wallets for large holdings, and verify DApp URLs.",
    icon: Wallet,
  },
];

function FaqItem({
  item,
  isOpen,
  onClick,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)]/20 transition-colors">
            <item.icon size={20} weight="fill" className="text-[var(--color-primary)]" />
          </div>
          <span className="text-lg font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
            {item.question}
          </span>
        </div>
        <CaretDown
          size={20}
          className={`text-[var(--color-text-tertiary)] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[var(--color-text-secondary)] leading-relaxed pl-14">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                <Scales size={16} weight="fill" className="text-[var(--color-primary)]" />
                <span className="text-sm text-[var(--color-primary)] font-medium">FAQ</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                Everything you need to know about TRON, TRX, USDT, and the ecosystem
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <Card className="p-0 overflow-hidden">
            <div className="p-8">
              {faqItems.map((item, index) => (
                <FaqItem
                  key={item.question}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </Card>
        </section>

        {/* Still have questions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-12 text-center relative overflow-hidden bg-[var(--color-bg-surface)] border border-[var(--color-border)]">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                Still have questions?
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
                Check out our developer documentation or ask the community for help
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/developers/docs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  View Documentation
                  <ArrowRight size={18} />
                </a>
                <a
                  href="https://discord.gg/trondao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] font-medium hover:border-[var(--color-border-hover)] transition-colors"
                >
                  Join Discord
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <StaticFooter />
    </>
  );
}
