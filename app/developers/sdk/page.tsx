"use client";

import { motion } from "framer-motion";
import { Code, Book, Package, ArrowSquareOut } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/Badge";

const sdks = [
  {
    name: "TronWeb",
    language: "JavaScript / TypeScript",
    description: "The official JavaScript SDK for TRON. Full-featured wallet, contract, and network interactions.",
    features: ["Wallet management", "Smart contract deployment", "TRX & token transfers", "Event monitoring"],
    badge: "Official",
    color: "from-orange-500/20 to-red-500/20",
    href: "#",
  },
  {
    name: "TronBox",
    language: "JavaScript",
    description: "Truffle-flavored development framework for TRON. Compile, test, and deploy smart contracts.",
    features: ["Contract compilation", "Migration system", "Automated testing", "Network management"],
    badge: "Official",
    color: "from-blue-500/20 to-indigo-500/20",
    href: "#",
  },
  {
    name: "TronPy",
    language: "Python",
    description: "Python SDK for TRON. Ideal for backend integrations and data analysis.",
    features: ["RPC calls", "Transaction building", "Address generation", "Chain data queries"],
    badge: "Community",
    color: "from-green-500/20 to-emerald-500/20",
    href: "#",
  },
  {
    name: "TronJava",
    language: "Java / Kotlin",
    description: "Java/Kotlin SDK for enterprise-grade TRON applications.",
    features: ["Android support", "gRPC backend", "Transaction signing", "Multi-sig support"],
    badge: "Official",
    color: "from-red-500/20 to-orange-500/20",
    href: "#",
  },
  {
    name: "TronSwift",
    language: "Swift",
    description: "Native iOS SDK for building TRON-powered mobile applications.",
    features: ["iOS native", "CocoaPods support", "WalletConnect ready", "Secure key storage"],
    badge: "Community",
    color: "from-purple-500/20 to-pink-500/20",
    href: "#",
  },
  {
    name: "TronNet",
    language: "C# / .NET",
    description: ".NET SDK for TRON blockchain integration on Windows, Linux, and macOS.",
    features: [".NET Standard 2.0", "Async/await API", "WebSocket support", "Nethereum compatibility"],
    badge: "Community",
    color: "from-violet-500/20 to-purple-500/20",
    href: "#",
  },
];

const tools = [
  {
    name: "TronIDE",
    description: "Online Solidity IDE for TRON smart contracts. Write, compile, and deploy from your browser.",
    href: "#",
    badge: "Tool",
  },
  {
    name: "TronScan",
    description: "Block explorer for TRON. View transactions, contracts, tokens, and chain statistics.",
    href: "#",
    badge: "Explorer",
  },
  {
    name: "TronGrid",
    description: "Hosted API service for TRON. No infrastructure required, just plug and play.",
    href: "#",
    badge: "API",
  },
  {
    name: "TRON Faucet",
    description: "Get testnet TRX for development and testing on TRON's Nile test network.",
    href: "#",
    badge: "Testnet",
  },
];

export default function SDKPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-6">
            <Code size={14} weight="bold" className="text-[rgb(251,113,133)]" />
            <span className="text-xs font-medium text-[var(--color-text-secondary)]">Official & Community SDKs</span>
          </div>
          <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            SDKs & Tools
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl">
            Build on TRON with official and community-supported SDKs. From JavaScript to Python, iOS to Android — pick your stack.
          </p>
        </motion.div>

        {/* SDKs Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Software Development Kits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sdks.map((sdk, idx) => (
              <motion.a
                key={sdk.name}
                href={sdk.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${sdk.color}`}>
                    <Package size={24} weight="duotone" className="text-[rgb(251,113,133)]" />
                  </div>
                  <Badge variant="outline" className="text-xs">{sdk.badge}</Badge>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1 group-hover:text-white transition-colors">
                  {sdk.name}
                </h3>
                <p className="text-xs text-[var(--color-text-tertiary)] font-mono mb-3">{sdk.language}</p>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4 flex-1">{sdk.description}</p>
                <div className="space-y-1">
                  {sdk.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
                      <div className="w-1 h-1 rounded-full bg-[rgb(251,113,133)]" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center gap-1.5 text-xs text-[rgb(251,113,133)] opacity-0 group-hover:opacity-100 transition-opacity">
                  View docs <ArrowSquareOut size={12} weight="bold" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Developer Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tools.map((tool, idx) => (
              <motion.a
                key={tool.name}
                href={tool.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex items-start gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-surface)] hover:border-[var(--color-border-hover)] transition-all duration-200"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-[var(--color-bg-surface)] group-hover:bg-[rgba(251,113,133,0.1)] transition-colors">
                  <Book size={20} weight="duotone" className="text-[var(--color-text-tertiary)] group-hover:text-[rgb(251,113,133)] transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-white transition-colors">{tool.name}</span>
                    <Badge variant="outline" className="text-xs">{tool.badge}</Badge>
                  </div>
                  <p className="text-sm text-[var(--color-text-tertiary)]">{tool.description}</p>
                </div>
                <ArrowSquareOut size={16} weight="bold" className="text-[var(--color-text-muted)] group-hover:text-[rgb(251,113,133)] transition-colors flex-shrink-0 mt-1" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
