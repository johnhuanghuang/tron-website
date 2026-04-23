"use client";

import {
  Rocket,
  Code,
  Globe,
  Coins,
  Handshake,
  Lightbulb,
  Users,
  ArrowRight,
  CheckCircle,
  Trophy,
  Target,
  GraduationCap,
  Lightning,
} from "@phosphor-icons/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils/cn";

const benefits = [
  {
    icon: Code,
    title: "Technical Mentorship",
    description: "Dedicated support from TRON core developers and ecosystem experts to accelerate your product development.",
  },
  {
    icon: Globe,
    title: "Marketing Exposure",
    description: "Featured coverage across TRON's official channels, social media, and newsletter with 1M+ reach.",
  },
  {
    icon: Coins,
    title: "$50,000 Grant",
    description: "No-equity grant funding to cover development costs, infrastructure, and team growth.",
  },
  {
    icon: Handshake,
    title: "Investor Network",
    description: "Direct introductions to top-tier VCs, angels, and ecosystem funds actively investing in TRON projects.",
  },
  {
    icon: Lightbulb,
    title: "Priority Listing",
    description: "Fast-tracked listing opportunities on major TRON ecosystem platforms and directories.",
  },
  {
    icon: Users,
    title: "Peer Network",
    description: "Join a quarterly cohort of ambitious builders. Share learnings, collaborate, and grow together.",
  },
];

const applicationSteps = [
  {
    step: "01",
    title: "Submit Application",
    description: "Fill out the online application form with your project details, team background, and vision for the TRON ecosystem.",
  },
  {
    step: "02",
    title: "Review & Evaluation",
    description: "Our team evaluates your application based on technical merit, team strength, and ecosystem alignment within 5-7 business days.",
  },
  {
    step: "03",
    title: "Interview",
    description: "Shortlisted projects are invited for a virtual interview to discuss your roadmap, goals, and how MVB can help you succeed.",
  },
  {
    step: "04",
    title: "Decision & Onboarding",
    description: "Successful applicants receive grant terms, welcome package, and are matched with a dedicated program manager.",
  },
];

const eligibilityCriteria = [
  {
    icon: Target,
    title: "Early-Stage Projects",
    description: "Projects in MVP, beta, or early-mainnet stage with a working prototype or clear development roadmap.",
  },
  {
    icon: Users,
    title: "Strong Technical Team",
    description: "A team with solid blockchain development experience and demonstrated ability to ship quality products.",
  },
  {
    icon: Lightbulb,
    title: "Clear Product Vision",
    description: "A well-defined product vision with clear use cases, target users, and a realistic path to adoption.",
  },
  {
    icon: Rocket,
    title: "TRON Alignment",
    description: "Projects building on TRON or planning to integrate TRON as a core part of their infrastructure.",
  },
];

const featuredProjects = [
  {
    name: "SunPump",
    category: "Meme Coin Launchpad",
    description: "The leading meme coin launchpad on TRON with billions in trading volume and thousands of active traders.",
    gradient: "from-amber-500/20 to-orange-500/20",
    accentColor: "text-amber-400",
    icon: Lightning,
  },
  {
    name: "Justify",
    category: "AI Trading Agent",
    description: "AI-powered trading agent platform enabling automated, intelligent DeFi strategies on TRON.",
    gradient: "from-blue-500/20 to-purple-500/20",
    accentColor: "text-blue-400",
    icon: GraduationCap,
  },
  {
    name: "SUN.io",
    category: "DeFi Aggregator",
    description: "Multi-chain DeFi aggregator bringing yield optimization and cross-chain liquidity to TRON users.",
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-emerald-400",
    icon: Trophy,
  },
];

export default function MVBPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-5 rounded-full blur-[120px]" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              <span className="text-sm text-[var(--color-text-secondary)]">Applications Open — Q3 2026 Cohort</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
              MVB Program
            </h1>
            <p className="text-2xl text-[var(--color-primary)] font-semibold mb-6">
              Build the future of TRON ecosystem
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
              The Most Valuable Builder program is TRON&apos;s official acceleration initiative designed to discover, fund, and accelerate the most promising early-stage projects in the ecosystem.
            </p>
            <div className="flex items-center justify-center gap-8 mt-10 text-sm text-[var(--color-text-tertiary)]">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} weight="fill" className="text-[var(--color-success)]" />
                <span>$50,000 no-equity grant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} weight="fill" className="text-[var(--color-success)]" />
                <span>Quarterly cohorts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} weight="fill" className="text-[var(--color-success)]" />
                <span>3-month intensive program</span>
              </div>
            </div>
          </div>
        </section>

        {/* What is MVB Section */}
        <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 mb-6">
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">About the Program</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                  What is MVB?
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  MVB (Most Valuable Builder) is TRON&apos;s official acceleration program, designed to discover and nurture promising early-stage projects that have the potential to become ecosystem leaders.
                </p>
                <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                  Each quarterly cohort brings together 10-15 selected projects that receive intensive mentorship, strategic guidance, and $50,000 in no-equity grant funding — along with direct access to TRON&apos;s global network of investors, partners, and users.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                    <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">4</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Cohorts / Year</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                    <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">10-15</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Projects / Cohort</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                    <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">3 Mo</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Program Duration</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border)]">
                    <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">100%</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Grant (No Equity)</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-[var(--color-bg-surface)] rounded-3xl p-8 border border-[var(--color-border)]">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold text-[var(--color-text-primary)] mb-2">$50K</div>
                    <div className="text-[var(--color-text-secondary)]">No-equity grant per project</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-bg-primary)]">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
                        <Code size={20} weight="duotone" className="text-orange-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[var(--color-text-primary)]">Technical Support</div>
                        <div className="text-xs text-[var(--color-text-tertiary)]">Core team & expert mentorship</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-bg-primary)]">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <Globe size={20} weight="duotone" className="text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[var(--color-text-primary)]">Global Exposure</div>
                        <div className="text-xs text-[var(--color-text-tertiary)]">1M+ reach across TRON channels</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-bg-primary)]">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                        <Handshake size={20} weight="duotone" className="text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[var(--color-text-primary)]">Investor Access</div>
                        <div className="text-xs text-[var(--color-text-tertiary)]">Top-tier VC & angel network</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--color-primary)] rounded-full blur-[40px] opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                Program Benefits
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                Everything you need to accelerate from idea to product-market fit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className={cn(
                    "p-6 rounded-2xl border border-[var(--color-border)]",
                    "bg-[var(--color-bg-primary)]",
                    "hover:border-[var(--color-border-hover)] transition-all duration-300",
                    "shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
                    "hover:shadow-[0_8px_32px_rgba(255,59,48,0.1)]"
                  )}
                >
                  <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br from-orange-500/10 to-red-500/10">
                    <benefit.icon size={28} weight="duotone" className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                Application Process
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Four steps from application to program acceptance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {applicationSteps.map((s, idx) => (
                <div key={s.step} className="relative">
                  <div className="bg-[var(--color-bg-primary)] rounded-2xl p-6 border border-[var(--color-border)] h-full">
                    <div className="text-5xl font-bold text-[var(--color-text-tertiary)] mb-4 opacity-30">
                      {s.step}
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">{s.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{s.description}</p>
                  </div>
                  {idx < applicationSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight size={20} weight="bold" className="text-[var(--color-text-tertiary)]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                Eligibility Criteria
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                We&apos;re looking for projects that demonstrate potential to become the next ecosystem leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eligibilityCriteria.map((criteria) => (
                <div
                  key={criteria.title}
                  className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] text-center hover:border-[var(--color-border-hover)] transition-all duration-300"
                >
                  <div className="inline-flex p-4 rounded-xl mb-4 bg-gradient-to-br from-orange-500/10 to-red-500/10">
                    <criteria.icon size={32} weight="duotone" className="text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2">
                    {criteria.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {criteria.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                Featured Alumni Projects
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                Projects that have gone through the MVB program and are now leading the TRON ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <div
                  key={project.name}
                  className={cn(
                    "p-6 rounded-2xl border border-[var(--color-border)]",
                    "bg-[var(--color-bg-primary)]",
                    "hover:border-[var(--color-border-hover)] transition-all duration-300",
                    "shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
                    "hover:shadow-[0_8px_32px_rgba(255,59,48,0.1)]"
                  )}
                >
                  <div className={cn("inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br", project.gradient)}>
                    <project.icon size={28} weight="duotone" className={project.accentColor} />
                  </div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--color-bg-surface)] to-[var(--color-bg-secondary)] rounded-3xl p-12 border border-[var(--color-border)] text-center">
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                Ready to Build the Future of TRON?
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
                Join the next MVB cohort and get the funding, mentorship, and network you need to build the next breakthrough project on TRON.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] transition-colors duration-200 shadow-[0_0_20px_var(--color-primary-glow)]"
                >
                  Apply Now
                  <ArrowRight size={16} weight="bold" />
                </a>
                <button className="inline-flex items-center gap-2 py-3 px-8 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-surface)] transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
