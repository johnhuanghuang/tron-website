"use client";

import { useState } from "react";
import { Newspaper, Calendar, Tag, ArrowRight, TwitterLogo, DiscordLogo, TelegramLogo, Link, CheckCircle } from "@phosphor-icons/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils/cn";

const categories = ["全部", "产品更新", "生态合作", "活动回顾", "开发者", "机构"];

const newsItems = [
  {
    id: 1,
    category: "生态合作",
    title: "TRON Foundation 与 Chainlink 达成战略合作，共建预言机基础设施",
    date: "2025-04-15",
    excerpt: "此次合作将为 TRON 生态引入高质量的链下数据源，增强 DeFi 协议的安全性和可靠性。",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["Chainlink", "DeFi", "基础设施"],
    featured: true,
  },
  {
    id: 2,
    category: "产品更新",
    title: "TRON 钱包 3.0 发布：全新 UI + 多链支持",
    date: "2025-04-10",
    excerpt: "钱包 3.0 版本带来全新设计语言，支持 TRON、ETH、BNB 多链资产管理，安全性大幅提升。",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
    tags: ["钱包", "多链", "产品更新"],
    featured: false,
  },
  {
    id: 3,
    category: "机构",
    title: "TRX 被多家主流交易所上线，流动性创历史新高",
    date: "2025-04-05",
    excerpt: "随着更多主流交易所上线 TRX，交易量和流动性持续攀升，TRON 生态影响力进一步扩大。",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    tags: ["TRX", "交易所", "流动性"],
    featured: false,
  },
  {
    id: 4,
    category: "活动回顾",
    title: "TRON DevCon 2024 圆满落幕，200+ 项目参与黑客松",
    date: "2025-03-20",
    excerpt: "为期三天的开发者大会吸引了全球超过 1,200 名开发者参与，黑客松收到 150+ 项目提交。",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    tags: ["DevCon", "黑客松", "回顾"],
    featured: false,
  },
  {
    id: 5,
    category: "开发者",
    title: "TRON 开发套件 v2.5 发布：更快的编译速度 + 新 API",
    date: "2025-03-15",
    excerpt: "新版本 SDK 编译速度提升 40%，新增 NFT 批量铸造 API 和跨链桥接模块。",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    tags: ["SDK", "开发者工具", "API"],
    featured: false,
  },
  {
    id: 6,
    category: "生态合作",
    title: "TRON 与 Bitlayer 深度合作，推动 Bitcoin L2 生态发展",
    date: "2025-03-08",
    excerpt: "双方将在技术集成、流动性共享、用户导流等方面展开深度合作，共同探索 BTC L2 创新。",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
    tags: ["Bitlayer", "BTC", "L2"],
    featured: false,
  },
];

const popularTags = [
  "DeFi", "TRX", "NFT", "黑客松", "开发者", "生态合作",
  "钱包", "跨链", "安全", "基础设施"
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredNews = activeCategory === "全部"
    ? newsItems
    : newsItems.filter((item) => item.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-8">
              <Newspaper size={16} className="text-[var(--color-text-secondary)]" />
              <span className="text-sm text-[var(--color-text-secondary)]">Stay Updated</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
              TRON News & Updates
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              The latest from the TRON ecosystem — product launches, partnerships, events, and developer resources.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-[var(--color-text-primary)] text-[var(--color-bg-primary)]"
                    : "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border border-[var(--color-border)]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* News List */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredNews.map((news) => (
                  <article
                    key={news.id}
                    className={cn(
                      "bg-[var(--color-bg-surface)] rounded-2xl overflow-hidden border border-[var(--color-border)]",
                      "hover:border-[var(--color-border-hover)] transition-all duration-300",
                      news.featured && "md:col-span-2"
                    )}
                  >
                    <div className="aspect-video bg-[var(--color-bg-secondary)] relative overflow-hidden">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-xs font-semibold",
                          news.category === "产品更新" && "bg-blue-500/20 text-blue-400",
                          news.category === "生态合作" && "bg-green-500/20 text-green-400",
                          news.category === "活动回顾" && "bg-purple-500/20 text-purple-400",
                          news.category === "开发者" && "bg-orange-500/20 text-orange-400",
                          news.category === "机构" && "bg-pink-500/20 text-pink-400"
                        )}>
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className={cn(
                        "text-[var(--color-text-primary)] font-bold leading-snug mb-3",
                        news.featured ? "text-xl" : "text-base"
                      )}>
                        {news.title}
                      </h2>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2 leading-relaxed">
                        {news.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
                          <Calendar size={12} />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {news.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded text-xs bg-[var(--color-bg-primary)] text-[var(--color-text-tertiary)]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-10">
                <button className="inline-flex items-center gap-2 py-3 px-8 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-surface)] transition-colors duration-200">
                  Load More Articles
                  <ArrowRight size={16} weight="bold" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Popular Tags */}
              <div className="bg-[var(--color-bg-surface)] rounded-2xl p-6 border border-[var(--color-border)]">
                <div className="flex items-center gap-2 mb-5">
                  <Tag size={18} className="text-[var(--color-text-tertiary)]" />
                  <h3 className="font-bold text-[var(--color-text-primary)]">热门标签</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-sm bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] border border-[var(--color-border)] transition-colors duration-200"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subscribe */}
              <div className="bg-gradient-to-br from-[var(--color-bg-surface)] to-[var(--color-bg-secondary)] rounded-2xl p-6 border border-[var(--color-border)]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                    <Newspaper size={20} weight="duotone" className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-bold text-[var(--color-text-primary)]">订阅新闻</h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-5 leading-relaxed">
                  Get weekly updates on TRON ecosystem news, events, and developer resources.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-200"
                    required
                  />
                  <button
                    type="submit"
                    className={cn(
                      "w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2",
                      subscribed
                        ? "bg-[var(--color-success)] text-white"
                        : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)] shadow-[0_0_20px_var(--color-primary-glow)]"
                    )}
                  >
                    {subscribed ? (
                      <>
                        <CheckCircle size={16} weight="fill" />
                        Subscribed!
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </form>
                <p className="text-xs text-[var(--color-text-tertiary)] mt-3 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </div>

              {/* Social Share */}
              <div className="bg-[var(--color-bg-surface)] rounded-2xl p-6 border border-[var(--color-border)]">
                <div className="flex items-center gap-2 mb-5">
                  <Link size={18} className="text-[var(--color-text-tertiary)]" />
                  <h3 className="font-bold text-[var(--color-text-primary)]">社交媒体</h3>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-secondary)] transition-colors duration-200"
                  >
                    <TwitterLogo size={20} className="text-[var(--color-text-secondary)]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-secondary)] transition-colors duration-200"
                  >
                    <DiscordLogo size={20} className="text-[var(--color-text-secondary)]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-secondary)] transition-colors duration-200"
                  >
                    <TelegramLogo size={20} className="text-[var(--color-text-secondary)]" />
                  </a>
                </div>
                <div className="mt-5 pt-5 border-t border-[var(--color-border)]">
                  <div className="text-xs text-[var(--color-text-tertiary)] mb-3">TRON Official</div>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                      @tronfoundation
                    </a>
                    <a href="#" className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                      @tronnetwork
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      <Footer />
    </>
  );
}