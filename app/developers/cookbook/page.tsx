"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CookbookCard } from "@/components/dev";
import { cn } from "@/lib/utils/cn";

const tabs = ["All", "DeFi", "NFT", "Gaming", "Infrastructure"];

const recipes = [
  {
    title: "Build a DeFi Lending Protocol",
    description: "Create a lending pool with interest rates using TRON's smart contract standards.",
    category: "DeFi",
    difficulty: "Advanced" as const,
    time: "2-3 hours",
  },
  {
    title: "Deploy Your First TRC-20 Token",
    description: "Step-by-step guide to creating and deploying a meme token on TRON network.",
    category: "DeFi",
    difficulty: "Beginner" as const,
    time: "30 min",
  },
  {
    title: "Build an NFT Marketplace",
    description: "Create a full NFT marketplace with minting, buying, and bidding functionality.",
    category: "NFT",
    difficulty: "Advanced" as const,
    time: "4-5 hours",
  },
  {
    title: "Create a Gaming NFT Collection",
    description: "Design and deploy a generative art NFT collection with on-chain metadata.",
    category: "NFT",
    difficulty: "Intermediate" as const,
    time: "1-2 hours",
  },
  {
    title: "Set Up a TRON Validator Node",
    description: "Configure and run a TRON full node or witness node from scratch.",
    category: "Infrastructure",
    difficulty: "Advanced" as const,
    time: "3-4 hours",
  },
  {
    title: "Build a Cross-Chain Bridge",
    description: "Connect TRON to Ethereum and BSC using bridge protocols.",
    category: "Infrastructure",
    difficulty: "Advanced" as const,
    time: "5+ hours",
  },
];

export default function CookbookPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? recipes : recipes.filter((r) => r.category === activeTab);

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Cookbook</h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            Step-by-step tutorials and example projects. Learn by building real applications on TRON.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                activeTab === tab
                  ? "bg-[rgb(251,113,133)] text-white"
                  : "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((recipe, idx) => (
            <motion.div
              key={recipe.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <CookbookCard {...recipe} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--color-text-tertiary)]">
            No recipes found for this category.
          </div>
        )}
      </div>
    </main>
  );
}
