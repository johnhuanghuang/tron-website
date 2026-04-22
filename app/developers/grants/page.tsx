"use client";

import { motion } from "framer-motion";
import { Rocket, ChartLine, Flask, CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { GrantAccordion } from "@/components/dev";
import { cn } from "@/lib/utils/cn";

const grantTypes = [
  {
    icon: Rocket,
    title: "MVP Grant",
    description: "Get up to $5,000 in TRX to build and launch your first TRON project.",
    features: ["Up to $5,000 TRX", "Technical mentorship", "Marketing support", "Priority listing"],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: ChartLine,
    title: "Growth Grant",
    description: "Scale your existing project with up to $50,000 in funding.",
    features: ["Up to $50,000 TRX", "Dedicated account manager", "Liquidity support", "Exchange listing assistance"],
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: Flask,
    title: "Research Grant",
    description: "Fund academic research and protocol-level innovations.",
    features: ["Flexible funding", "Academic collaboration", "Conference sponsorship", "Publication support"],
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const faqItems = [
  {
    question: "Who is eligible for TRON grants?",
    answer: "Any developer, team, or organization building on TRON can apply. Priority is given to projects with clear roadmaps, innovative use cases, and community potential.",
  },
  {
    question: "How long does the application process take?",
    answer: "Most applications are reviewed within 2-3 weeks. Growth and Research grants may take longer due to the complexity of proposals.",
  },
  {
    question: "Can I apply for multiple grants?",
    answer: "Yes, you can apply for multiple grant types. However, you cannot receive multiple active grants simultaneously.",
  },
  {
    question: "What happens after my project is funded?",
    answer: "Grant recipients are expected to deliver quarterly progress reports and maintain open communication with the TRON team.",
  },
];

export default function GrantsPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Grants & Funding
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Build on TRON with financial support, mentorship, and resources. From MVP to production, we&apos;ve got you covered.
          </p>
        </motion.div>

        {/* Grant Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {grantTypes.map((grant, idx) => (
            <motion.div
              key={grant.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "p-6 rounded-2xl border border-[var(--color-border)]",
                "bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]"
              )}
            >
              <div className={cn("inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br", grant.color)}>
                <grant.icon size={28} weight="duotone" className="text-[rgb(251,113,133)]" />
              </div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">{grant.title}</h2>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">{grant.description}</p>
              <ul className="space-y-2">
                {grant.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-text-tertiary)]">
                    <CheckCircle size={14} weight="fill" className="text-[var(--color-success)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-16">
          <Button size="lg">
            Apply Now
            <ArrowRight size={18} weight="bold" className="ml-2" />
          </Button>
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <GrantAccordion items={faqItems} />
        </div>
      </div>
    </main>
  );
}
