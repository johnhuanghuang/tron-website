"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlass,
  ChatCircle,
  Wallet,
  List,
  X,
  CaretDown,
  ArrowRight,
  Coins,
  Globe,
  PuzzlePiece,
  Question,
  Book,
  Code,
  Flask,
  CurrencyDollar,
  Calendar,
  Users,
  Rocket,
  Trophy,
  Buildings,
  MapTrifold,
  FileText,
  ShieldCheck,
  Envelope,
  Gear,
  Handshake,
  Cube,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { AISearchModal } from "@/app/components/ai/AISearchModal";
import { cn } from "@/lib/utils/cn";

interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  icon: React.ElementType;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "Start",
    dropdown: [
      { label: "Get TRX", href: "/trx", description: "Learn how to acquire TRX tokens", icon: Coins },
      { label: "Get Tron USDT", href: "/usdt", description: "Get Tron USDT - zero gas fees, instant transfers", icon: CurrencyDollar },
      { label: "Select a Wallet", href: "/wallets", description: "Choose the best TRON wallet for you", icon: Wallet },
      { label: "Developers", href: "/developers", description: "Build on TRON", icon: Rocket },
      { label: "Explorer", href: "https://tronscan.org/", description: "Browse the TRON blockchain", icon: Globe },
      { label: "Whitepaper", href: "/whitepaper", description: "Read the TRON technical whitepaper", icon: FileText },
      { label: "FAQ", href: "/faq", description: "Frequently asked questions", icon: Question },
      { label: "Tron AI", href: "/tron-ai", description: "AI-powered TRON ecosystem assistant", icon: ChatCircle },
    ],
  },
  {
    label: "Build",
    dropdown: [
      { label: "Developer Hub", href: "/developers", description: "All developer resources", icon: Rocket },
      { label: "Documentation", href: "/developers/docs", description: "Guides and references", icon: Book },
      { label: "API Reference", href: "/developers/api", description: "Technical API docs", icon: Code },
      { label: "SDKs", href: "/developers/sdk", description: "Software development kits", icon: PuzzlePiece },
      { label: "Cookbook", href: "/developers/cookbook", description: "Step-by-step tutorials", icon: Flask },
      { label: "Grants", href: "/developers/grants", description: "Funding programs", icon: CurrencyDollar },
      { label: "Office Hours", href: "/developers/office-hours", description: "1v1 with core team", icon: Calendar },
    ],
  },
  {
    label: "Ecosystem",
    dropdown: [
      { label: "All Products", href: "/ecosystem", description: "Browse all dApps", icon: Globe },
      { label: "DeFi", href: "/ecosystem?tab=defi", description: "JustLend, SunSwap & more", icon: CurrencyDollar },
      { label: "Storage", href: "/ecosystem?tab=storage", description: "BTFS and storage", icon: FileText },
      { label: "Cross-Chain", href: "/ecosystem?tab=crosschain", description: "BTTC bridge", icon: Globe },
      { label: "Stablecoin", href: "/ecosystem?tab=stablecoin", description: "USDD and stablecoins", icon: Coins },
      { label: "NFT", href: "/ecosystem?tab=nft", description: "NFT platforms", icon: PuzzlePiece },
      { label: "Games", href: "/ecosystem?tab=games", description: "Gaming dApps", icon: Trophy },
    ],
  },
  {
    label: "Participate",
    dropdown: [
      { label: "Events", href: "/events", description: "Upcoming events", icon: Calendar },
      { label: "Hackathons", href: "/events", description: "Global hackathon series", icon: Trophy },
      { label: "Grants", href: "/programs", description: "Funding opportunities", icon: CurrencyDollar },
      { label: "Community", href: "https://discord.gg/trondao", description: "Join the community", icon: Users },
      { label: "Governance", href: "/about#governance", description: "DAO participation", icon: Handshake },
    ],
  },
  {
    label: "More",
    dropdown: [
      { label: "About", href: "/about", description: "About TRON", icon: Buildings },
      { label: "Roadmap", href: "/roadmap", description: "Project roadmap", icon: MapTrifold },
      { label: "Whitepaper", href: "/whitepaper", description: "Technical whitepaper", icon: FileText },
      { label: "Security", href: "/security", description: "Security center", icon: ShieldCheck },
      { label: "Contact", href: "/contact", description: "Get in touch", icon: Envelope },
    ],
  },
  { label: "Developers", href: "/developers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAISearchOpen, setIsAISearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
          isScrolled
            ? "bg-[var(--color-bg-primary)] backdrop-blur-md"
            : "bg-[rgba(10,10,11,0.8)] backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/images/tron-logo.jpeg"
              alt="TRON"
              className="h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium",
                        "flex items-center gap-1.5",
                        "transition-all duration-200",
                        openDropdown === item.label
                          ? "text-white"
                          : "text-[var(--color-text-secondary)] hover:text-white"
                      )}
                    >
                      {item.label}
                      <CaretDown 
                        size={12} 
                        weight="bold" 
                        className={cn(
                          "transition-all duration-200",
                          openDropdown === item.label ? "rotate-180" : ""
                        )} 
                      />
                      {/* Active indicator dot */}
                      <span className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full",
                        "bg-[rgb(251,113,133)] transition-all duration-200",
                        openDropdown === item.label ? "w-6 opacity-100" : "w-0 opacity-0"
                      )} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          onMouseEnter={() => setOpenDropdown(item.label)}
                          onMouseLeave={() => setOpenDropdown(null)}
                          className={cn(
                            "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80",
                            "z-50"
                          )}
                          style={{ pointerEvents: openDropdown === item.label ? "auto" : "none" }}
                        >
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-gradient-to-b from-[rgb(251,113,133)]/[0.03] to-transparent rounded-2xl blur-xl" />
                          
                          {/* Dropdown panel */}
                          <div className={cn(
                            "relative bg-[var(--color-bg-primary)]",
                            "border border-[rgba(255,255,255,0.08)]",
                            "rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)]",
                            "overflow-hidden"
                          )}>
                            {/* Top accent line */}
                            <div className="h-px bg-gradient-to-r from-transparent via-[rgb(251,113,133)] to-transparent" />
                            
                            <div className="p-2">
                              {item.dropdown.map((dropItem, idx) => (
                                <a
                                  key={dropItem.label}
                                  href={dropItem.href}
                                  className={cn(
                                    "group flex items-center gap-4 px-4 py-3 rounded-xl",
                                    "hover:bg-[var(--color-bg-surface)] transition-all duration-200",
                                    "relative overflow-hidden"
                                  )}
                                >
                                  {/* Hover background effect */}
                                  <div className={cn(
                                    "absolute inset-0 bg-gradient-to-r from-[rgb(251,113,133)]/[0.08] to-transparent",
                                    "translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"
                                  )} />
                                  
                                  {/* Icon */}
                                  <div className={cn(
                                    "relative flex-shrink-0 w-10 h-10 rounded-xl",
                                    "bg-[var(--color-bg-surface)] group-hover:bg-[rgba(251,113,133,0.15)]",
                                    "flex items-center justify-center",
                                    "transition-all duration-200",
                                    "group-hover:scale-110"
                                  )}>
                                    <dropItem.icon 
                                      size={20} 
                                      weight="duotone" 
                                      className="text-[var(--color-text-tertiary)] group-hover:text-[rgb(251,113,133)] transition-colors duration-200" 
                                    />
                                  </div>
                                  
                                  {/* Text */}
                                  <div className="relative flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-white transition-colors">
                                        {dropItem.label}
                                      </span>
                                      <ArrowRight 
                                        size={14} 
                                        weight="bold" 
                                        className="text-[rgb(251,113,133)] opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-200" 
                                      />
                                    </div>
                                    {dropItem.description && (
                                      <span className="text-xs text-[var(--color-text-muted)] group-hover:text-[var(--color-text-tertiary)] transition-colors">
                                        {dropItem.description}
                                      </span>
                                    )}
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)]",
                      "hover:text-[var(--color-text-primary)] transition-colors duration-200",
                      "rounded-lg hover:bg-[var(--color-bg-surface)]"
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              className={cn(
                "p-2 rounded-lg text-[var(--color-text-secondary)]",
                "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]",
                "transition-colors duration-200"
              )}
              aria-label="Search"
            >
              <MagnifyingGlass size={20} weight="bold" />
            </button>
            <button
              onClick={() => setIsAISearchOpen(true)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full",
                "bg-[rgba(251,113,133,0.1)] border border-[rgba(251,113,133,0.3)]",
                "text-[rgb(251,113,133)] font-semibold text-sm",
                "hover:bg-[rgba(251,113,133,0.15)] hover:border-[rgba(251,113,133,0.5)]",
                "transition-all duration-200"
              )}
              aria-label="Tron AI"
            >
              <ChatCircle size={18} weight="bold" />
              Tron AI
            </button>
            <Button size="sm" className="ml-2">
              <Wallet size={18} weight="bold" className="mr-2" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg text-[var(--color-text-secondary)]",
              "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]",
              "transition-colors duration-200"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "fixed top-16 left-0 right-0 z-40 lg:hidden",
              "bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]",
              "shadow-lg"
            )}
          >
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium text-[var(--color-text-secondary)]",
                    "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]",
                    "rounded-xl transition-colors duration-200"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center gap-3">
                <button
                  className={cn(
                    "p-3 rounded-xl text-[var(--color-text-secondary)]",
                    "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]",
                    "transition-colors duration-200"
                  )}
                  aria-label="Search"
                >
                  <MagnifyingGlass size={22} weight="bold" />
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAISearchOpen(true);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 rounded-xl",
                    "bg-[rgba(251,113,133,0.1)] border border-[rgba(251,113,133,0.3)]",
                    "text-[rgb(251,113,133)] font-semibold",
                    "hover:bg-[rgba(251,113,133,0.15)] hover:border-[rgba(251,113,133,0.5)]",
                    "transition-all duration-200"
                  )}
                  aria-label="Tron AI"
                >
                  <ChatCircle size={22} weight="bold" />
                  Tron AI
                </button>
                <Button size="md" className="flex-1">
                  <Wallet size={18} weight="bold" className="mr-2" />
                  Connect Wallet
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tron AI Modal */}
      <AISearchModal
        isOpen={isAISearchOpen}
        onClose={() => setIsAISearchOpen(false)}
      />
    </>
  );
}