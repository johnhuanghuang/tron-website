"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils/cn";
import { ArrowLeft, Calendar, User, Clock, TwitterLogo, FacebookLogo, Link as LinkIcon } from "@phosphor-icons/react";

const newsDetail = {
  id: "1",
  title: "TRON Foundation Partners with Chainlink for Oracle Infrastructure",
  category: "Ecosystem",
  date: "2026-04-20",
  image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80",
  excerpt: "This partnership will bring high-quality off-chain data sources to the TRON ecosystem.",
  content: `The TRON Foundation is excited to announce a strategic partnership with Chainlink, the leading decentralized oracle network, to bring reliable and secure off-chain data to the TRON blockchain ecosystem.

## Why This Partnership Matters

The integration of Chainlink's oracle infrastructure will enable TRON-based decentralized applications (dApps) to access real-world data in a trust-minimized manner. This is crucial for the development of sophisticated DeFi protocols, insurance products, and gaming applications that require external data feeds.

## Key Benefits

**Enhanced Security**
Chainlink's oracle network provides cryptographically verified data sources, ensuring that smart contracts on TRON receive accurate and tamper-proof external data.

**Expanded DeFi Capabilities**
Developers can now build more sophisticated financial products, including:
- Decentralized price feeds for trading pairs
- Dynamic interest rates based on market conditions
- Cross-chain liquidity protocols
- Synthetic asset platforms

**Developer-Friendly**
The integration comes with comprehensive documentation, SDK tools, and starter templates to help developers quickly onboard onto the new oracle infrastructure.

## What's Next

Both teams are working closely on the technical integration, with a planned public testnet launch in Q2 2026. The mainnet deployment is expected to follow in Q3 2026.

## About Chainlink

Chainlink is the industry-standard decentralized computing platform. It has become the dominant oracle solution for blockchain applications, securing tens of billions of dollars across DeFi, insurance, gaming, and other major verticals.

## Get Involved

Developers interested in building on the new oracle infrastructure can apply for the Chainlink TRON Grant Program, which provides funding and technical support for qualifying projects.`,
  author: "TRON Foundation",
  readTime: "5 min read",
};

const relatedNews = [
  {
    id: 2,
    title: "TRON Wallet 3.0 Released: New UI + Multi-Chain Support",
    category: "Product Update",
    date: "2025-04-10",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
  },
  {
    id: 3,
    title: "TRX Listed on Major Exchanges, Liquidity Hits All-Time High",
    category: "Institutional",
    date: "2025-04-05",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    id: 4,
    title: "TRON DevCon 2024 Concludes with 200+ Hacker Projects",
    category: "Event Recap",
    date: "2025-03-20",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
];

export default function NewsDetailPage() {
  const params = useParams();
  const newsId = params.id as string;

  // In a real app, you'd fetch the news by ID. Here we use the hardcoded data.
  const news = newsDetail;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-5 rounded-full blur-[120px]" />
          <div className="relative max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to News
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold",
                news.category === "Ecosystem" && "bg-green-500/20 text-green-400"
              )}>
                {news.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight leading-tight">
              {news.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{news.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{news.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-[var(--color-bg-surface)]">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <div>
                <div className="prose prose-invert prose-lg max-w-none">
                  {news.content.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-[var(--color-text-primary)] mt-10 mb-4">
                          {paragraph.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <p key={index} className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                          {paragraph.replace(/\*\*/g, "")}
                        </p>
                      );
                    }
                    if (paragraph.startsWith("- ")) {
                      const items = paragraph.split("\n").filter((line) => line.startsWith("- "));
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 text-[var(--color-text-secondary)] mb-4">
                          {items.map((item, i) => (
                            <li key={i}>{item.replace("- ", "")}</li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={index} className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Share Buttons */}
                <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[var(--color-text-secondary)]">Share:</span>
                    <button className="w-10 h-10 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-secondary)] transition-colors">
                      <TwitterLogo size={18} className="text-[var(--color-text-secondary)]" />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-secondary)] transition-colors">
                      <FacebookLogo size={18} className="text-[var(--color-text-secondary)]" />
                    </button>
                    <button className="w-10 h-10 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-secondary)] transition-colors">
                      <LinkIcon size={18} className="text-[var(--color-text-secondary)]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar - Article Info */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-[var(--color-bg-surface)] rounded-2xl p-6 border border-[var(--color-border)]">
                    <h3 className="text-sm font-semibold text-[var(--color-text-tertiary)] mb-4 uppercase tracking-wider">
                      Article Info
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs text-[var(--color-text-tertiary)] mb-1">Category</div>
                        <div className="text-sm text-[var(--color-text-primary)]">{news.category}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--color-text-tertiary)] mb-1">Published</div>
                        <div className="text-sm text-[var(--color-text-primary)]">{news.date}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--color-text-tertiary)] mb-1">Author</div>
                        <div className="text-sm text-[var(--color-text-primary)]">{news.author}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--color-text-tertiary)] mb-1">Read Time</div>
                        <div className="text-sm text-[var(--color-text-primary)]">{news.readTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related News Section */}
        <section className="py-16 px-4 bg-[var(--color-bg-secondary)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">Related News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="bg-[var(--color-bg-surface)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300"
                >
                  <div className="aspect-video bg-[var(--color-bg-primary)] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="p-4">
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--color-bg-primary)] text-[var(--color-text-tertiary)]">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mt-3 line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-xs text-[var(--color-text-tertiary)]">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              Stay Updated with TRON
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Subscribe to our newsletter to get the latest news and updates.
            </p>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] shadow-[0_0_20px_var(--color-primary-glow)] transition-colors"
            >
              View More News
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
