"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DataCard } from "@/components/ui/DataCard";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";
import {
  Lightning,
  ShieldCheck,
  Coins,
  ChartLine,
  Users,
  Globe,
  Rocket,
  FileText,
  LightningSlash,
  Timer,
  GasPump,
  CircleDashed,
  CheckCircle,
  ArrowRight,
  Book,
  Code,
  CurrencyCircleDollar,
  Headset,
  GithubLogo,
  DiscordLogo,
  ChartBar,
  Handshake,
  Buildings,
  GameController,
  Cube,
  Link,
  Star,
  Calendar,
  MapPin,
  Trophy,
  CaretRight,
  Wallet,
  Swap,
  Bridge,
  Vault,
  Newspaper,
  UsersThree,
  Target,
  LightningA,
} from "@phosphor-icons/react";

// Generate particles with stable positions
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: ((i * 37 + 13) % 100),
  top: ((i * 53 + 29) % 100),
  size: 3 + ((i * 17) % 4),
  isOrange: i % 2 === 0,
  delay: (i * 0.6) % 15,
  duration: 15 + ((i * 0.3) % 10),
}));

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Ecosystem products data
const ecosystemProducts = [
  { name: "JustLend", category: "DeFi", description: "Decentralized Lending", data: "TVL $4.2B", icon: Wallet },
  { name: "SunSwap", category: "DeFi", description: "DEX & Staking", data: "24h Vol $890M", icon: Swap },
  { name: "BTTC", category: "Cross-Chain", description: "BitTorrent Chain", data: "$2.8B Cross-Chain", icon: Bridge },
  { name: "WINk", category: "Games", description: "Gaming Platform", data: "MAU 2.1M", icon: GameController },
  { name: "BTFS", category: "Storage", description: "Storage Network", data: "Nodes 500K+", icon: Cube },
  { name: "USDD", category: "Stablecoin", description: "Decentralized Stablecoin", data: "Supply $730M", icon: CurrencyCircleDollar },
  { name: "JUST Governance", category: "Governance", description: "DAO Governance", data: "Governance", icon: ChartBar },
  { name: "TRON DAO Reserve", category: "Reserve", description: "Reserve Management", data: "Reserve", icon: Vault },
  { name: "Crypto.com", category: "Partnership", description: "Global Exchange", data: "Partner", icon: Handshake },
  { name: "Poloniex", category: "Partnership", description: "Crypto Exchange", data: "Partner", icon: Buildings },
  { name: "Samsung", category: "Partnership", description: "Tech Partner", data: "Partner", icon: Star },
  { name: "BitTorrent (BTT)", category: "Utility", description: "File Sharing Token", data: "Utility Token", icon: Link },
];

const productCategories = ["All", "DeFi", "Storage", "Cross-Chain", "Stablecoin", "NFT", "Games"];

// News data
const newsItems = [
  {
    title: "TRON DAO Reserve Expands USDD Minting Cap to $5B",
    category: "Product Update",
    date: "2026-04-15",
    summary: "The TRON DAO Reserve has increased the minting cap for USDD, enabling greater flexibility for decentralized stablecoin usage.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
  },
  {
    title: "BitTorrent Chain Achieves 10M Daily Active Addresses",
    category: "Partnership",
    date: "2026-04-10",
    summary: "BTTC reaches a new milestone with 10 million daily active addresses, showcasing massive user adoption.",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&h=250&fit=crop",
  },
  {
    title: "TRON Partners with Major DeFi Protocols for TVL Incentive Program",
    category: "Developer",
    date: "2026-04-05",
    summary: "New incentives program launched to boost DeFi TVL across TRON ecosystem protocols.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
  },
];

// Events data
const events = [
  {
    name: "TRON Builder Bootcamp",
    date: "May 15-17, 2026",
    location: "Miami / Online",
    type: "Bootcamp",
    description: "3-day intensive workshop for developers building on TRON",
  },
  {
    name: "TRON DevCon 2026",
    date: "June 20-22, 2026",
    location: "Singapore",
    type: "Conference",
    description: "Annual developer conference showcasing the future of TRON",
  },
  {
    name: "TRON Hackathon Global",
    date: "August 1-30, 2026",
    location: "Global / Online",
    type: "Hackathon",
    description: "Global hackathon with $500,000 in prizes",
  },
];

export default function HomePage() {
  return (
    <>
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-40px) scale(1.1); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(40px) scale(1.05); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -20px); }
          66% { transform: translate(-20px, 20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes drift {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 1; }
        }
      `}</style>
      
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section 
          className="relative min-h-[90vh] flex flex-col overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0A0A0B 0%, #150505 50%, #0A0A0B 100%)',
          }}
        >
          {/* Grid Background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              zIndex: 1,
            }}
          />
          
          {/* Glow Orbs */}
          <div className="absolute pointer-events-none" style={{width:'1000px',height:'1000px',background:'radial-gradient(circle, rgba(255,59,48,0.35) 0%, rgba(255,59,48,0.1) 20%, transparent 60%)',top:'-400px',right:'-300px',borderRadius:'50%',filter:'blur(50px)',zIndex:2,animation:'float1 10s ease-in-out infinite'}} />
          <div className="absolute pointer-events-none" style={{width:'800px',height:'800px',background:'radial-gradient(circle, rgba(255,59,48,0.25) 0%, rgba(255,59,48,0.08) 30%, transparent 60%)',bottom:'-300px',left:'-250px',borderRadius:'50%',filter:'blur(60px)',zIndex:2,animation:'float2 12s ease-in-out infinite'}} />
          <div className="absolute pointer-events-none" style={{width:'600px',height:'600px',background:'radial-gradient(circle, rgba(255,59,48,0.2) 0%, rgba(255,59,48,0.06) 40%, transparent 65%)',top:'20%',right:'10%',borderRadius:'50%',filter:'blur(60px)',zIndex:2,animation:'float3 15s ease-in-out infinite'}} />
          <div className="absolute pointer-events-none" style={{width:'500px',height:'500px',background:'radial-gradient(circle, rgba(255,59,48,0.3) 0%, rgba(255,59,48,0.1) 40%, transparent 70%)',top:'5%',left:'20%',borderRadius:'50%',filter:'blur(50px)',zIndex:2,animation:'pulse-glow 6s ease-in-out infinite'}} />
          <div className="absolute pointer-events-none" style={{width:'700px',height:'700px',background:'radial-gradient(circle, rgba(255,59,48,0.15) 0%, transparent 65%)',top:'50%',left:'50%',transform:'translate(-50%, -50%)',borderRadius:'50%',filter:'blur(80px)',zIndex:2,animation:'pulse-glow 8s ease-in-out infinite'}} />
          <div className="absolute pointer-events-none" style={{width:'400px',height:'400px',background:'radial-gradient(circle, rgba(255,150,80,0.2) 0%, transparent 65%)',bottom:'15%',right:'5%',borderRadius:'50%',filter:'blur(40px)',zIndex:2,animation:'float1 8s ease-in-out infinite reverse'}} />
          
          {/* Particles */}
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: p.isOrange ? 'rgba(255,59,48,1)' : 'rgba(255,255,255,1)',
                boxShadow: p.isOrange 
                  ? '0 0 10px 4px rgba(255,59,48,0.8), 0 0 20px 8px rgba(255,59,48,0.4)' 
                  : '0 0 10px 4px rgba(255,255,255,0.6), 0 0 20px 8px rgba(255,255,255,0.3)',
                animation: `drift ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
                zIndex: 5,
              }}
            />
          ))}

          {/* Hero Content */}
          <div className="relative z-20 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Side - Title Area */}
              <div className="flex-1 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Badge variant="outline" size="lg" className="inline-flex mb-6 border-[var(--color-primary)]/40">
                    <Lightning size={16} weight="fill" className="mr-2 text-[var(--color-primary)]" />
                    High-Performance Layer-1 Blockchain
                  </Badge>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[var(--color-text-primary)] leading-none tracking-tight mb-6"
                >
                  DECENTRALIZE
                  <br />
                  <span className="text-[var(--color-primary)]">THE WEB</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-lg lg:text-xl text-[var(--color-text-secondary)] max-w-xl mb-10 leading-relaxed"
                >
                  TRON is the world&apos;s leading high-performance public chain, 
                  powering the decentralized internet with unmatched speed, 
                  security, and scalability.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button size="lg">
                    <Rocket size={20} weight="fill" className="mr-2" />
                    Start Building
                  </Button>
                  <Button variant="secondary" size="lg">
                    <FileText size={20} weight="regular" className="mr-2" />
                    Read Whitepaper
                  </Button>
                </motion.div>
              </div>

              {/* Right Side - Data Dashboard */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex-[1.5] flex flex-col justify-center"
              >
                <div className="mb-4 text-sm font-medium text-[var(--color-text-tertiary)] uppercase tracking-wider">
                  Live Data
                </div>
                <div className="grid grid-cols-2 gap-4 lg:gap-6">
                  <DataCard label="Total Accounts" value="234M" prefix="#" delay={0.4} />
                  <DataCard label="Total Transactions" value="8.7B" prefix="#" delay={0.45} />
                  <DataCard label="Total Value Locked" value="$12.3B" prefix="$" delay={0.5} />
                  <DataCard label="24h Transactions" value="8.7M" delay={0.55} />
                  <DataCard label="Block Height" value="92.5M" prefix="#" delay={0.6} />
                  <DataCard label="Total Supply" value="100.8B" suffix="TRX" delay={0.65} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative z-20"
            style={{
              background: 'linear-gradient(180deg, rgba(10, 10, 11, 0) 0%, rgba(10, 10, 11, 0.98) 20%, rgba(10, 10, 11, 0.98) 80%, rgba(10, 10, 11, 0) 100%)',
              backdropFilter: 'blur(12px)',
              borderTop: '1px solid rgba(255,59,48,0.3)',
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(255,59,48,0.3)' }}>
                    <LightningSlash size={20} weight="fill" className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-lg font-mono font-bold text-[var(--color-text-primary)]" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}>2,627</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">TPS</div>
                  </div>
                </motion.div>
                <div className="w-px h-10 bg-[var(--color-border)] hidden lg:block" />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(255,59,48,0.3)' }}>
                    <Timer size={20} weight="fill" className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-lg font-mono font-bold text-[var(--color-text-primary)]" style={{ animation: 'pulse-glow 3.5s ease-in-out infinite' }}>0.3s</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Block Time</div>
                  </div>
                </motion.div>
                <div className="w-px h-10 bg-[var(--color-border)] hidden lg:block" />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(255,59,48,0.3)' }}>
                    <GasPump size={20} weight="fill" className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-lg font-mono font-bold text-[var(--color-text-primary)]" style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}>$0.001</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Gas Fee</div>
                  </div>
                </motion.div>
                <div className="w-px h-10 bg-[var(--color-border)] hidden lg:block" />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(255,59,48,0.3)' }}>
                    <CircleDashed size={20} weight="fill" className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="text-lg font-mono font-bold text-[var(--color-text-primary)]" style={{ animation: 'pulse-glow 4.5s ease-in-out infinite' }}>2,547</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Nodes</div>
                  </div>
                </motion.div>
                <div className="w-px h-10 bg-[var(--color-border)] hidden lg:block" />
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center relative" style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(34,197,94,0.4)' }}>
                    <div className="absolute inset-0 rounded-xl" style={{ background: 'rgba(34,197,94,0.2)', animation: 'pulse-glow 2s ease-in-out infinite' }} />
                    <CheckCircle size={20} weight="fill" className="text-green-500 relative z-10" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-400">Online</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Status</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, #0A0A0B 0%, #131315 100%)' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,59,48,0.3), transparent)' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Secure */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.4) 0%, rgba(34,197,94,0.1) 50%, transparent 100%)' }} />
                <div className="relative rounded-2xl p-8 text-center overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(28,28,31,0.9) 0%, rgba(20,20,22,0.95) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 100%)', border: '1px solid rgba(34,197,94,0.2)' }}>
                    <ShieldCheck size={36} weight="fill" className="text-green-400" />
                    <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(circle at center, rgba(34,197,94,0.2) 0%, transparent 70%)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Secure</h3>
                  <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">Built on robust blockchain technology with proven security</p>
                </div>
              </motion.div>

              {/* Low Cost */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(234,179,8,0.4) 0%, rgba(234,179,8,0.1) 50%, transparent 100%)' }} />
                <div className="relative rounded-2xl p-8 text-center overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(28,28,31,0.9) 0%, rgba(20,20,22,0.95) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, rgba(234,179,8,0.15) 0%, rgba(234,179,8,0.05) 100%)', border: '1px solid rgba(234,179,8,0.2)' }}>
                    <Coins size={36} weight="fill" className="text-yellow-400" />
                    <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(circle at center, rgba(234,179,8,0.2) 0%, transparent 70%)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Low Cost</h3>
                  <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">Near-zero transaction fees for seamless user experience</p>
                </div>
              </motion.div>

              {/* High Performance */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)' }} />
                <div className="relative rounded-2xl p-8 text-center overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(28,28,31,0.9) 0%, rgba(20,20,22,0.95) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 100%)', border: '1px solid rgba(59,130,246,0.2)' }}>
                    <ChartLine size={36} weight="fill" className="text-blue-400" />
                    <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(circle at center, rgba(59,130,246,0.2) 0%, transparent 70%)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">High Performance</h3>
                  <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">Process thousands of transactions per second</p>
                </div>
              </motion.div>

              {/* Community Driven */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)' }} />
                <div className="relative rounded-2xl p-8 text-center overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(28,28,31,0.9) 0%, rgba(20,20,22,0.95) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.05) 100%)', border: '1px solid rgba(168,85,247,0.2)' }}>
                    <Users size={36} weight="fill" className="text-purple-400" />
                    <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(circle at center, rgba(168,85,247,0.2) 0%, transparent 70%)' }} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Community Driven</h3>
                  <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">Governed by the TRON DAO for decentralized decision making</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ecosystem Products Section */}
        <section className="py-24 relative" style={{ background: '#111113' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,59,48,0.2), transparent)' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255,59,48,0.1)', border: '1px solid rgba(255,59,48,0.2)' }}>
                <Globe size={16} weight="fill" className="text-[var(--color-primary)]" />
                <span className="text-sm text-[var(--color-primary)] font-medium">Ecosystem</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">The TRON Ecosystem</h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">One of the world's largest decentralized ecosystems</p>
            </motion.div>

            {/* Tab Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {productCategories.map((cat, idx) => (
                <button
                  key={cat}
                  className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${idx === 0 ? 'bg-white/10 text-white' : 'bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-white'}`}
                  style={{ border: idx === 0 ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.08)' }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Product Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {ecosystemProducts.map((product, idx) => (
                <motion.div
                  key={product.name}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(255,59,48,0.3) 0%, rgba(255,59,48,0.1) 50%, transparent 100%)' }} />
                  <div className="relative rounded-2xl p-5 cursor-pointer h-full" style={{ background: 'linear-gradient(180deg, rgba(28,28,31,0.95) 0%, rgba(20,20,22,0.98) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 relative" style={{ background: 'linear-gradient(135deg, rgba(255,59,48,0.15) 0%, rgba(255,59,48,0.05) 100%)', border: '1px solid rgba(255,59,48,0.2)' }}>
                        <product.icon size={26} weight="fill" className="text-[var(--color-primary)]" />
                        <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(circle at center, rgba(255,59,48,0.15) 0%, transparent 70%)' }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-[var(--color-text-primary)] mb-1 truncate">{product.name}</h4>
                        <p className="text-xs text-[var(--color-text-tertiary)] mb-2">{product.description}</p>
                        <div className="text-xs font-mono text-white/60">{product.data}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Button variant="ghost">View All Products <ArrowRight size={18} weight="bold" className="ml-2" /></Button>
            </motion.div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="py-24 relative" style={{ background: '#0E0E10' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,149,0,0.2), transparent)' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                <Code size={16} weight="fill" className="text-blue-400" />
                <span className="text-sm text-blue-400 font-medium">Developers</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">Build on TRON</h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">Developer-friendly public chain</p>
            </motion.div>

            {/* Developer Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Book, title: "Developer Hub", desc: "Comprehensive docs, API references", tags: ["Docs", "API", "SDK"], color: 'blue' },
                { icon: Code, title: "Cookbook", desc: "Real-world project examples", tags: ["Examples", "Tutorials"], color: 'green' },
                { icon: CurrencyCircleDollar, title: "Grants & Funding", desc: "TVL incentives, Gas grants, Ecosystem fund", tags: ["TVL Incentive", "Gas Grants"], color: 'yellow' },
                { icon: Headset, title: "Office Hours", desc: "1v1 sessions with core team", tags: ["1v1 Support"], color: 'purple' },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ 
                    background: item.color === 'blue' ? 'linear-gradient(135deg, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)' :
                              item.color === 'green' ? 'linear-gradient(135deg, rgba(34,197,94,0.4) 0%, rgba(34,197,94,0.1) 50%, transparent 100%)' :
                              item.color === 'yellow' ? 'linear-gradient(135deg, rgba(234,179,8,0.4) 0%, rgba(234,179,8,0.1) 50%, transparent 100%)' :
                              'linear-gradient(135deg, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)'
                  }} />
                  <div className="relative rounded-3xl p-8 h-full" style={{ background: 'linear-gradient(180deg, rgba(28,28,31,0.95) 0%, rgba(20,20,22,0.98) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-200 group-hover:scale-110" style={{ 
                      background: item.color === 'blue' ? 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 100%)' :
                                item.color === 'green' ? 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 100%)' :
                                item.color === 'yellow' ? 'linear-gradient(135deg, rgba(234,179,8,0.15) 0%, rgba(234,179,8,0.05) 100%)' :
                                'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.05) 100%)',
                      border: item.color === 'blue' ? '1px solid rgba(59,130,246,0.2)' :
                             item.color === 'green' ? '1px solid rgba(34,197,94,0.2)' :
                             item.color === 'yellow' ? '1px solid rgba(234,179,8,0.2)' :
                             '1px solid rgba(168,85,247,0.2)'
                    }}>
                      <item.icon size={32} weight="fill" className={item.color === 'blue' ? 'text-blue-400' : item.color === 'green' ? 'text-green-400' : item.color === 'yellow' ? 'text-yellow-400' : 'text-purple-400'} />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{item.title}</h3>
                    <p className="text-sm text-[var(--color-text-tertiary)] mb-4 leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => <Badge key={tag} variant="outline" size="sm">{tag}</Badge>)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center gap-4 mt-12"
            >
              <Button variant="secondary"><GithubLogo size={20} weight="fill" className="mr-2" />GitHub</Button>
              <Button variant="secondary"><DiscordLogo size={20} weight="fill" className="mr-2" />Discord</Button>
            </motion.div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-24 relative" style={{ background: '#111113' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,59,48,0.2), transparent)' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-2">Latest TRON News</h2>
                <p className="text-[var(--color-text-secondary)]">Stay updated with the latest from TRON</p>
              </div>
              <Button variant="ghost">View All News <ArrowRight size={18} weight="bold" className="ml-2" /></Button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems.map((news, idx) => (
                <motion.div
                  key={news.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group rounded-3xl overflow-hidden cursor-pointer"
                  style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" size="sm">{news.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[var(--color-text-tertiary)] mb-3">
                      <Calendar size={14} />
                      <span>{news.date}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 line-clamp-2">{news.title}</h4>
                    <p className="text-sm text-[var(--color-text-tertiary)] line-clamp-2">{news.summary}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-24 relative" style={{ background: '#0E0E10' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,149,0,0.2), transparent)' }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.2)' }}>
                <Calendar size={16} weight="fill" className="text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">Events</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">Events & Global Hackathons</h2>
              <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">Join TRON events around the world</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event, idx) => {
                const eventColors = {
                  Bootcamp: { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.3)', text: 'text-blue-400', glow: 'blue' },
                  Conference: { bg: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.3)', text: 'text-purple-400', glow: 'purple' },
                  Hackathon: { bg: 'rgba(234,179,8,0.15)', border: 'rgba(234,179,8,0.3)', text: 'text-yellow-400', glow: 'yellow' },
                };
                const color = eventColors[event.type as keyof typeof eventColors] || eventColors.Conference;
                
                return (
                  <motion.div
                    key={event.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="group relative"
                  >
                    <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ 
                      background: color.glow === 'blue' ? 'linear-gradient(135deg, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)' :
                                color.glow === 'purple' ? 'linear-gradient(135deg, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0.1) 50%, transparent 100%)' :
                                'linear-gradient(135deg, rgba(234,179,8,0.4) 0%, rgba(234,179,8,0.1) 50%, transparent 100%)'
                    }} />
                    <div className="relative rounded-3xl p-8 h-full" style={{ background: 'linear-gradient(180deg, rgba(28,28,31,0.95) 0%, rgba(20,20,22,0.98) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="absolute top-4 right-4">
                        <Badge variant="outline" size="sm" className="capitalize">{event.type}</Badge>
                      </div>
                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: `linear-gradient(135deg, ${color.bg} 0%, transparent 100%)`, border: `1px solid ${color.border}` }}>
                          {event.type === 'Bootcamp' && <LightningA size={32} weight="fill" className={color.text} />}
                          {event.type === 'Conference' && <Users size={32} weight="fill" className={color.text} />}
                          {event.type === 'Hackathon' && <Trophy size={32} weight="fill" className={color.text} />}
                        </div>
                        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{event.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-[var(--color-text-tertiary)] mb-4">
                          <div className="flex items-center gap-1"><Calendar size={14} /><span>{event.date}</span></div>
                          <div className="flex items-center gap-1"><MapPin size={14} /><span>{event.location}</span></div>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-6">{event.description}</p>
                        <Button variant="secondary" size="sm" className="w-full">Learn More <CaretRight size={14} weight="bold" className="ml-2" /></Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <Button variant="ghost">View All Events <ArrowRight size={18} weight="bold" className="ml-2" /></Button>
            </motion.div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 relative" style={{ background: '#111113' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,59,48,0.3), transparent)' }} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          >
            <div className="relative overflow-hidden rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, rgba(28,28,31,0.9) 0%, rgba(20,20,22,0.95) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
              {/* Inner Glow */}
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,59,48,0.15) 0%, transparent 60%)', filter: 'blur(35px)' }} />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,149,0,0.12) 0%, transparent 60%)', filter: 'blur(35px)' }} />
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(255,59,48,0.05)' }} />
              
              <div className="relative text-center max-w-xl mx-auto">
                <Globe size={48} weight="fill" className="mx-auto mb-6 text-[var(--color-primary)]" />
                <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">Stay Updated</h2>
                <p className="text-[var(--color-text-secondary)] mb-8">Subscribe to our newsletter for the latest updates, news, and developments in the TRON ecosystem.</p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
