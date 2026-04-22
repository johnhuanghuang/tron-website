"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  ShieldCheck,
  Bug,
  FileMagnifyingGlass,
  Lock,
  Key,
  Eye,
  Link as LinkIcon,
  WarningDiamond,
  CheckCircle,
  Shield,
  Code,
  Wallet,
  Flag,
  ArrowRight,
  Globe,
  FileText,
  Trophy,
  ShieldWarning,
  Warning,
  SealCheck,
} from "@phosphor-icons/react";

const bestPractices = [
  {
    icon: Code,
    title: "Smart Contract Security",
    description:
      "Always audit your smart contracts before deployment. Use standardized templates and follow TRON's security guidelines.",
    items: [
      "Use battle-tested libraries",
      "Implement proper access controls",
      "Add circuit breakers for emergencies",
      "Test thoroughly on Shasta testnet",
    ],
    link: "#",
  },
  {
    icon: Wallet,
    title: "Wallet Security",
    description:
      "Protect your wallet credentials and use hardware wallets for large holdings.",
    items: [
      "Never share private keys",
      "Use hardware wallets for significant holdings",
      "Enable two-factor authentication",
      "Regularly audit wallet permissions",
    ],
    link: "#",
  },
  {
    icon: ShieldWarning,
    title: "Anti-Phishing Guide",
    description:
      "Stay vigilant against phishing attempts targeting TRON users.",
    items: [
      "Verify URLs before connecting",
      "Never share seed phrases",
      "Check contract addresses carefully",
      "Use official TRON channels only",
    ],
    link: "#",
  },
];

const auditFirms = [
  {
    name: "CertiK",
    logo: "CK",
    description: "Leading blockchain security firm with comprehensive auditing services",
    rating: "AAA",
    reports: 50,
  },
  {
    name: "SlowMist",
    logo: "SM",
    description: "Security services for exchanges, wallets, and smart contracts",
    rating: "AA",
    reports: 42,
  },
  {
    name: "Trail of Bits",
    logo: "ToB",
    description: "Security research and auditing for Web3 projects",
    rating: "AA",
    reports: 38,
  },
  {
    name: "Consensys Diligence",
    logo: "CD",
    description: "Smart contract auditing by Ethereum's founding company",
    rating: "A",
    reports: 31,
  },
];

const bountyTiers = [
  { level: "Critical", reward: "$10,000 - $50,000", severity: "Critical severity bugs" },
  { level: "High", reward: "$5,000 - $10,000", severity: "High severity bugs" },
  { level: "Medium", reward: "$1,000 - $5,000", severity: "Medium severity bugs" },
  { level: "Low", reward: "$100 - $1,000", severity: "Low severity bugs" },
];

const pastBounties = [
  { id: "TRON-2023-001", severity: "Critical", reward: "$45,000", status: "Resolved", date: "2023-06" },
  { id: "TRON-2023-012", severity: "High", reward: "$8,500", status: "Resolved", date: "2023-09" },
  { id: "TRON-2024-003", severity: "Medium", reward: "$3,200", status: "Resolved", date: "2024-02" },
];

const securityAlerts = [
  {
    id: "SA-2024-015",
    title: "Fake TRON Airdrop Phishing Campaign",
    description: "Attackers are distributing fake TRX airdrop links via social media. Do NOT click unknown links claiming free TRX.",
    severity: "high",
    status: "Active",
    date: "2024-11-20",
    recommendation: "Only use official TRON channels and verified links",
  },
  {
    id: "SA-2024-012",
    title: "Malicious Wallet Extension Detected",
    description: "A Chrome extension impersonating TronLink has been identified. It steals private keys.",
    severity: "critical",
    status: "Mitigated",
    date: "2024-10-15",
    recommendation: "Only install wallet extensions from official sources",
  },
  {
    id: "SA-2024-008",
    title: "Contract Approval Phishing",
    description: "New phishing method targeting users with malicious contract approval requests.",
    severity: "medium",
    status: "Resolved",
    date: "2024-08-22",
    recommendation: "Review all contract approvals carefully",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden hero-bg">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-3" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-6">
            <ShieldCheck size={16} className="text-[var(--color-primary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">Security Center</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            TRON Security <span className="text-[var(--color-primary)]">Center</span>
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mb-8">
            Comprehensive security resources, bug bounty programs, and audit services to keep the TRON ecosystem safe for all users.
          </p>
          <div className="flex items-center gap-4 text-sm text-[var(--color-text-tertiary)]">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>$100M+ Bounties Paid</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>200+ Audits Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>0 Critical Incidents</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Best Practices</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Follow these guidelines to keep your assets and applications secure on TRON.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {bestPractices.map((practice, index) => (
              <div key={index} className="group">
                <Card className="h-full transition-all duration-200 ease-out hover:border-[var(--color-border-hover)] hover:shadow-[0_8px_32px_rgba(255,59,48,0.15)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <practice.icon size={24} className="text-[var(--color-primary)]" />
                    </div>
                    <h3 className="text-xl font-semibold">{practice.title}</h3>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-4">{practice.description}</p>
                  <ul className="space-y-2 mb-6">
                    {practice.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={practice.link}
                    className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:gap-3 transition-all duration-200"
                  >
                    Learn more <ArrowRight size={16} />
                  </a>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bug Bounty Section */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 mb-6">
                <Bug size={16} className="text-[var(--color-primary)]" />
                <span className="text-sm text-[var(--color-primary)]">Bug Bounty Program</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Vulnerabilities, Earn Rewards</h2>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Our Bug Bounty program rewards security researchers who identify vulnerabilities in TRON infrastructure. Critical findings can earn up to $50,000.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>Responsible disclosure policy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>Fast response and triage</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>No legal action for good-faith researchers</span>
                </div>
              </div>
              <a
                href="https://hackerone.com/tron"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
              >
                Submit Vulnerability <ArrowRight size={18} />
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Reward Tiers</h3>
              <div className="space-y-3 mb-8">
                {bountyTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-[var(--color-bg-surface)] rounded-xl border border-[var(--color-border)]"
                  >
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={tier.level === "Critical" ? "primary" : "outline"}
                        size="sm"
                      >
                        {tier.level}
                      </Badge>
                      <span className="text-sm text-[var(--color-text-secondary)]">{tier.severity}</span>
                    </div>
                    <span className="font-mono font-bold text-[var(--color-primary)]">{tier.reward}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-4">Past Bounties</h3>
              <div className="space-y-2">
                {pastBounties.map((bounty) => (
                  <div
                    key={bounty.id}
                    className="flex items-center justify-between p-3 bg-[var(--color-bg-surface)] rounded-lg border border-[var(--color-border)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[var(--color-text-tertiary)]">{bounty.id}</span>
                      <Badge
                        variant={bounty.severity === "Critical" ? "primary" : "outline"}
                        size="sm"
                      >
                        {bounty.severity}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-green-400">{bounty.reward}</span>
                      <span className="text-xs text-[var(--color-text-tertiary)]">{bounty.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Audits */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-6">
              <SealCheck size={16} className="text-[var(--color-primary)]" />
              <span className="text-sm text-[var(--color-text-secondary)]">Verified Security</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Audits</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              TRON works with leading security firms to audit all major ecosystem projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {auditFirms.map((firm, index) => (
              <Card key={index} hover={true} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] mx-auto mb-4 flex items-center justify-center">
                  <span className="font-mono font-bold text-lg">{firm.logo}</span>
                </div>
                <h3 className="font-semibold mb-1">{firm.name}</h3>
                <p className="text-xs text-[var(--color-text-tertiary)] mb-3">{firm.description}</p>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="outline" size="sm">{firm.rating}</Badge>
                  <span className="text-xs text-[var(--color-text-tertiary)]">{firm.reports} reports</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Alerts */}
      <section className="py-20 px-6 bg-[var(--color-bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-4">
                <Warning size={16} className="text-yellow-500" />
                <span className="text-sm text-yellow-500">Live Alerts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Security Warnings</h2>
            </div>
            <Badge variant="outline" size="lg">Last updated: 2024-11-20</Badge>
          </div>

          <div className="space-y-4">
            {securityAlerts.map((alert, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-200 ${
                  alert.severity === "critical"
                    ? "bg-red-500/5 border-red-500/20"
                    : alert.severity === "high"
                    ? "bg-orange-500/5 border-orange-500/20"
                    : "bg-yellow-500/5 border-yellow-500/20"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <WarningDiamond
                      size={20}
                      className={
                        alert.severity === "critical"
                          ? "text-red-400"
                          : alert.severity === "high"
                          ? "text-orange-400"
                          : "text-yellow-400"
                      }
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{alert.title}</h3>
                      <p className="text-xs text-[var(--color-text-tertiary)] font-mono mt-1">
                        {alert.id} · {alert.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      size="sm"
                      className={
                        alert.severity === "critical"
                          ? "border-red-500/30 text-red-400"
                          : alert.severity === "high"
                          ? "border-orange-500/30 text-orange-400"
                          : "border-yellow-500/30 text-yellow-400"
                      }
                    >
                      {alert.severity}
                    </Badge>
                    <Badge
                      variant={alert.status === "Active" ? "primary" : "outline"}
                      size="sm"
                    >
                      {alert.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">{alert.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Shield size={14} className="text-green-400" />
                  <span className="text-[var(--color-text-secondary)]">Recommendation:</span>
                  <span className="text-[var(--color-text-primary)]">{alert.recommendation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card hover={false} className="bg-gradient-to-br from-[var(--color-bg-surface)] to-[var(--color-bg-primary)]">
            <Shield size={48} className="text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Protected</h2>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
              Security is a shared responsibility. Stay informed about the latest threats and best practices.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://twitter.com/TronFoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
              >
                Follow Security Alerts <ArrowRight size={18} />
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}