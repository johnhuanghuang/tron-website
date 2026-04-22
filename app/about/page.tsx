"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Target,
  Eye,
  Users,
  Handshake,
  Envelope,
  DiscordLogo,
  TelegramLogo,
  Globe,
  GithubLogo,
  TwitterLogo,
  LinkedinLogo,
  Buildings,
  Rocket,
  Heart,
  Star,
  Shield,
} from "@phosphor-icons/react";

const teamMembers = [
  {
    name: "Justin Sun",
    role: "Founder & CEO",
    bio: "Visionary entrepreneur and blockchain pioneer, founder of TRON and BitTorrent.",
    avatar: "JS",
    links: { twitter: "#", linkedin: "#" },
  },
  {
    name: "DaYuan Zhang",
    role: "Chief Technology Officer",
    bio: "Led the development of TRON's core protocol and technical architecture.",
    avatar: "DZ",
    links: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Chase Lin",
    role: "Head of Business Development",
    bio: "Spearheads strategic partnerships and ecosystem growth initiatives.",
    avatar: "CL",
    links: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Sam Chen",
    role: "Chief Security Officer",
    bio: "Oversees all security operations and manages the Bug Bounty program.",
    avatar: "SC",
    links: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Linda Wang",
    role: "Head of Marketing",
    bio: "Drives global brand awareness and community engagement strategies.",
    avatar: "LW",
    links: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Ray Liu",
    role: "VP of Engineering",
    bio: "Leads the engineering team building next-generation blockchain infrastructure.",
    avatar: "RL",
    links: { twitter: "#", linkedin: "#" },
  },
];

const partners = [
  { name: "Samsung", logo: "S24", category: "Technology" },
  { name: "Crypto.com", logo: "CDC", category: "Exchange" },
  { name: "Poloniex", logo: "POLO", category: "Exchange" },
  { name: "BitMart", logo: "BM", category: "Exchange" },
  { name: "KuCoin", logo: "KCX", category: "Exchange" },
  { name: "Bittrex", logo: "BTX", category: "Exchange" },
  { name: "Microsoft", logo: "MS", category: "Technology" },
  { name: "Google Cloud", logo: "GCP", category: "Cloud" },
  { name: "Amazon", logo: "AWS", category: "Cloud" },
  { name: "Alibaba", logo: "ALI", category: "Cloud" },
  { name: "Samsung Blockchain", logo: "SBC", category: "Blockchain" },
  { name: "Opera Browser", logo: "OPR", category: "Browser" },
];

const investors = [
  { name: "Sequoia Capital", logo: "SEQ" },
  { name: "IDG Capital", logo: "IDG" },
  { name: "淡马锡", logo: "TEM" },
  { name: "General Atlantic", logo: "GA" },
];

const stats = [
  { label: "Team Members", value: "150+", icon: Users },
  { label: "Countries", value: "45+", icon: Globe },
  { label: "Partners", value: "200+", icon: Handshake },
  { label: "Years Active", value: "7+", icon: Star },
];

const values = [
  {
    icon: Globe,
    title: "Decentralization",
    description: "We believe in democratizing the internet through decentralized protocols.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Continuously pushing boundaries to build the fastest and most scalable blockchain.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "Our community is our strength. Every decision is made with their best interest in mind.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Security is non-negotiable. We invest heavily in protecting our ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden hero-bg">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-4" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-6">
            <Buildings size={16} className="text-[var(--color-primary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">About TRON</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Building the <span className="text-[var(--color-primary)]">Future</span> of Internet
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mb-8">
            TRON is a decentralized blockchain platform dedicated to building a free, global digital content entertainment system.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)]"
              >
                <stat.icon size={28} className="text-[var(--color-primary)] mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <p className="text-sm text-[var(--color-text-tertiary)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card hover={false} className="p-8">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                <Target size={28} className="text-[var(--color-primary)]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                To decentralize the web and create a truly transparent, efficient, and trustless content entertainment system. We are committed to empowering content creators with ownership and control over their digital assets.
              </p>
            </Card>
            <Card hover={false} className="p-8">
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                <Eye size={28} className="text-[var(--color-primary)]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                A world where content is freely distributed, creators are fairly compensated, and users have full sovereignty over their data. TRON aims to replace traditional centralized entertainment systems with a decentralized alternative.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              These principles guide everything we do at TRON.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover={true} className="text-center p-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              A diverse team of engineers, researchers, and operators dedicated to TRON's mission.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} hover={true} className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center text-xl font-bold">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <Badge variant="outline" size="sm" className="mt-1">
                      {member.role}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">{member.bio}</p>
                <div className="flex items-center gap-3">
                  <a href={member.links.twitter} className="text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors">
                    <TwitterLogo size={18} />
                  </a>
                  <a href={member.links.linkedin} className="text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors">
                    <LinkedinLogo size={18} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partners & Investors</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Collaborating with industry leaders to build a thriving ecosystem.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-6 text-center text-[var(--color-text-secondary)]">Strategic Partners</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="aspect-square bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)] flex flex-col items-center justify-center p-4 hover:border-[var(--color-border-hover)] transition-all duration-200 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center mb-2">
                    <span className="font-mono font-bold text-sm">{partner.logo}</span>
                  </div>
                  <span className="text-xs font-medium text-center">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-center text-[var(--color-text-secondary)]">Investors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {investors.map((investor, index) => (
                <div
                  key={index}
                  className="p-6 bg-[var(--color-bg-surface)] rounded-2xl border border-[var(--color-border)] flex flex-col items-center justify-center hover:border-[var(--color-border-hover)] transition-all duration-200 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center mb-3">
                    <span className="font-mono font-bold">{investor.logo}</span>
                  </div>
                  <span className="text-sm font-medium">{investor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Have questions or want to collaborate? We'd love to hear from you.
            </p>
          </div>
          <Card hover={false} className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="mailto:contact@tron.network"
                className="flex flex-col items-center gap-3 p-6 bg-[var(--color-bg-primary)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-200"
              >
                <Envelope size={28} className="text-[var(--color-primary)]" />
                <span className="font-medium">Email</span>
                <span className="text-sm text-[var(--color-text-tertiary)]">contact@tron.network</span>
              </a>
              <a
                href="https://discord.gg/tron"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-[var(--color-bg-primary)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-200"
              >
                <DiscordLogo size={28} className="text-[#5865F2]" />
                <span className="font-medium">Discord</span>
                <span className="text-sm text-[var(--color-text-tertiary)]">Join our server</span>
              </a>
              <a
                href="https://t.me/tronfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-[var(--color-bg-primary)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-200"
              >
                <TelegramLogo size={28} className="text-[#229ED9]" />
                <span className="font-medium">Telegram</span>
                <span className="text-sm text-[var(--color-text-tertiary)]">@tronfoundation</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-[var(--color-border)]">
              <a href="#" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors">
                <TwitterLogo size={22} />
              </a>
              <a href="#" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors">
                <DiscordLogo size={22} />
              </a>
              <a href="#" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors">
                <TelegramLogo size={22} />
              </a>
              <a href="#" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors">
                <GithubLogo size={22} />
              </a>
              <a href="#" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-primary)] transition-colors">
                <LinkedinLogo size={22} />
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}