"use client";

import { Rocket, ChartLine, Coins, CheckCircle, ArrowRight, Users, Lightbulb, Money, Handshake, Globe, Code } from "@phosphor-icons/react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQAccordion } from "@/components/programs/FAQAccordion";
import { cn } from "@/lib/utils/cn";

const fundingPrograms = [
  {
    icon: Rocket,
    title: "TVL Incentive",
    amount: "Up to $100,000",
    description: "Incentivize liquidity provision and TVL growth on your TRON-based protocol.",
    conditions: [
      "DeFi protocols with active TVL > $5M",
      "Security audits completed",
      "Real user activity and retention",
      "Transparent tokenomics",
    ],
    color: "from-orange-500/20 to-red-500/20",
    accentColor: "text-[rgb(251,113,133)]",
  },
  {
    icon: ChartLine,
    title: "Gas Grants",
    amount: "100% Gas Rebates",
    description: "Cover transaction costs for users and developers building on TRON.",
    conditions: [
      "DApps with significant daily transactions",
      "Community-focused projects",
      "Developer tooling and infrastructure",
      "Educational content and tutorials",
    ],
    color: "from-blue-500/20 to-purple-500/20",
    accentColor: "text-blue-400",
  },
  {
    icon: Coins,
    title: "Ecosystem Fund",
    amount: "Up to $500,000",
    description: "Strategic investments in projects that expand the TRON ecosystem.",
    conditions: [
      "Strong founding team with proven track record",
      "Clear product-market fit",
      "Alignment with TRON ecosystem goals",
      "Token or equity structure",
    ],
    color: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-emerald-400",
  },
];

const mvbBenefits = [
  { icon: Code, text: "Technical mentorship & dedicated support" },
  { icon: Globe, text: "Marketing exposure across TRON channels" },
  { icon: Money, text: "$50,000 no-equity grant" },
  { icon: Handshake, text: "VC and investor networking" },
  { icon: Lightbulb, text: "Priority listing on TRON ecosystem" },
  { icon: Users, text: "Quarterly cohort with peer network" },
];

const applicationSteps = [
  {
    step: "01",
    title: "Submit Application",
    description: "Fill out the online application form with your project details, roadmap, and funding request.",
  },
  {
    step: "02",
    title: "Review & Evaluation",
    description: "Our team reviews your application within 5-7 business days and may request additional information.",
  },
  {
    step: "03",
    title: "Interview",
    description: "Shortlisted projects are invited for a video call to discuss your vision and plan in detail.",
  },
  {
    step: "04",
    title: "Decision & Onboarding",
    description: "Successful applicants receive funding terms, contract, and dedicated account manager.",
  },
];

const faqItems = [
  {
    question: "Who is eligible to apply for TRON funding programs?",
    answer: "Any developer, team, or organization building on TRON can apply. We welcome projects at all stages — from early-stage MVPs to established protocols looking to migrate or expand.",
  },
  {
    question: "What is the difference between TVL Incentive and Ecosystem Fund?",
    answer: "TVL Incentive is designed for DeFi protocols to incentivize liquidity and reward TVL growth with direct financial support. Ecosystem Fund is for strategic investments that expand the TRON ecosystem, potentially including equity or token investments.",
  },
  {
    question: "How long does the application process take?",
    answer: "Most applications are reviewed within 5-7 business days. The complete process from application to funding typically takes 2-4 weeks depending on the program type and complexity of your project.",
  },
  {
    question: "Is there a deadline to apply?",
    answer: "No. TRON funding programs are always open — we review applications on a rolling basis. For MVB Program, cohorts are selected quarterly, so apply early to be considered for the next cohort.",
  },
  {
    question: "Can I apply for multiple programs simultaneously?",
    answer: "Yes, you can apply for multiple programs. However, you cannot receive overlapping benefits from the same program type. Our team will help you find the best fit for your needs.",
  },
  {
    question: "What reporting is required after receiving funding?",
    answer: "Grant recipients are expected to provide monthly progress reports and quarterly business updates. We value transparency and open communication throughout the partnership.",
  },
];

export default function ProgramsPage() {
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
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            <span className="text-sm text-[var(--color-text-secondary)]">Always Open — Rolling Applications</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
            TRON Ecosystem Funding
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            From MVP to market leader — get the financial support, technical mentorship, and global exposure you need to win on TRON.
          </p>
          <div className="flex items-center justify-center gap-8 mt-10 text-sm text-[var(--color-text-tertiary)]">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} weight="fill" className="text-[var(--color-success)]" />
              <span>No equity taken</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} weight="fill" className="text-[var(--color-success)]" />
              <span>Rolling applications</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} weight="fill" className="text-[var(--color-success)]" />
              <span>Dedicated support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Programs */}
      <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              Funding Programs
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Choose the program that fits your project stage and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fundingPrograms.map((program) => (
              <div
                key={program.title}
                className={cn(
                  "p-6 rounded-2xl border border-[var(--color-border)]",
                  "bg-[var(--color-bg-primary)]",
                  "hover:border-[var(--color-border-hover)] transition-all duration-300",
                  "shadow-[0_4px_24px_rgba(0,0,0,0.4)]",
                  "hover:shadow-[0_8px_32px_rgba(255,59,48,0.1)]"
                )}
              >
                <div className={cn("inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br", program.color)}>
                  <program.icon size={28} weight="duotone" className={program.accentColor} />
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-bold text-[var(--color-text-primary)]">{program.title}</span>
                </div>
                <div className="mb-4">
                  <span className="text-lg font-semibold text-[var(--color-primary)]">{program.amount}</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-3">
                    Eligibility
                  </h4>
                  <ul className="space-y-2">
                    {program.conditions.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle size={14} weight="fill" className="text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold text-sm hover:border-[var(--color-border-hover)] transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MVB Program */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 mb-6">
                <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Quarterly Program</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                MVB — Most Valuable Builders
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                The most promising builders in each quarterly cohort receive intensive support to accelerate their growth. MVB is not just funding — it&apos;s a comprehensive acceleration program designed to turn promising projects into ecosystem leaders.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {mvbBenefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-surface)] flex items-center justify-center">
                      <benefit.icon size={16} weight="duotone" className="text-[var(--color-primary)]" />
                    </div>
                    <span className="text-sm text-[var(--color-text-secondary)]">{benefit.text}</span>
                  </div>
                ))}
              </div>
              <button className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] transition-colors duration-200 shadow-[0_0_20px_var(--color-primary-glow)]">
                Apply for MVB
                <ArrowRight size={16} weight="bold" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-[var(--color-bg-surface)] rounded-3xl p-8 border border-[var(--color-border)]">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-[var(--color-text-primary)] mb-2">$50K</div>
                  <div className="text-[var(--color-text-secondary)]">No-equity grant per cohort</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-2xl bg-[var(--color-bg-primary)]">
                    <div className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">4</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Cohorts / Year</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-[var(--color-bg-primary)]">
                    <div className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">10-15</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Projects / Cohort</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-[var(--color-bg-primary)]">
                    <div className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">3 Mo</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Program Duration</div>
                  </div>
                  <div className="text-center p-4 rounded-2xl bg-[var(--color-bg-primary)]">
                    <div className="text-2xl font-bold text-[var(--color-text-primary)] mb-1">100%</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">Funding Rate</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[var(--color-primary)] rounded-full blur-[40px] opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              How to Apply
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Four simple steps from application to funding.
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

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[var(--color-bg-surface)] to-[var(--color-bg-secondary)] rounded-3xl p-12 border border-[var(--color-border)] text-center">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              Ready to Build on TRON?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
              Whether you&apos;re launching your first DApp or scaling an established protocol, TRON has the funding program for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] transition-colors duration-200 shadow-[0_0_20px_var(--color-primary-glow)]">
                Apply for Funding
                <ArrowRight size={16} weight="bold" />
              </button>
              <button className="inline-flex items-center gap-2 py-3 px-8 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-surface)] transition-colors duration-200">
                Contact Us
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