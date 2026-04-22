"use client";

import { Calendar, MapPin, Trophy, Users, ArrowRight, Lightning, Globe, Medal, Code, Star } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

const upcomingEvents = [
  {
    type: "Hackathon",
    name: "TRON Grand Hackathon 2025",
    date: "May 15-17, 2025",
    location: "San Francisco, CA",
    prize: "$200,000",
    participants: "500+",
    description: "The biggest TRON hackathon yet. Build the next generation of DeFi, NFT, or gaming DApps.",
    tags: ["DeFi", "NFT", "Gaming", "Infrastructure"],
    color: "from-orange-500/20 to-red-500/20",
    accentColor: "text-[rgb(251,113,133)]",
  },
  {
    type: "Meetup",
    name: "TRON DeFi Summit — Singapore",
    date: "June 8, 2025",
    location: "Singapore",
    prize: null,
    participants: "200",
    description: "A gathering of DeFi builders and investors in Asia's financial hub.",
    tags: ["DeFi", "Networking", "Investors"],
    color: "from-blue-500/20 to-purple-500/20",
    accentColor: "text-blue-400",
  },
  {
    type: "Hackathon",
    name: "TRON x BNB Chain Joint Hackathon",
    date: "July 22-24, 2025",
    location: "Berlin, Germany",
    prize: "$150,000",
    participants: "300+",
    description: "Cross-chain innovation on TRON and BNB Chain. Build bridges, interoperability solutions.",
    tags: ["Cross-chain", "Infrastructure", "DeFi"],
    color: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-emerald-400",
  },
];

const pastEvents = [
  {
    name: "TRON DevCon 2024",
    location: "Los Angeles, CA",
    date: "October 2024",
    attendees: "1,200+",
    description: "The annual developer conference with workshops, keynote speeches, and networking.",
  },
  {
    name: "TRON Hackathon APAC",
    location: "Seoul, South Korea",
    date: "August 2024",
    attendees: "400+",
    description: "48-hour hackathon focused on real-world blockchain applications in APAC.",
  },
  {
    name: "TRON x DoraHacks Hackathon",
    location: "Online",
    date: "June 2024",
    attendees: "1,000+",
    description: "Global online hackathon with mentorship from TRON core team.",
  },
  {
    name: "TRON Builder Tour — Lagos",
    location: "Lagos, Nigeria",
    date: "April 2024",
    attendees: "300+",
    description: "First TRON developer meetup in Africa, sparking massive interest in West Africa.",
  },
];

const hackathonSeries = [
  {
    edition: "Season 4",
    name: "TRON Grand Hackathon 2025",
    prize: "$200,000",
    projects: "150+",
    participants: "500+",
    highlight: "Record-breaking participation with projects from 40+ countries.",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    edition: "Season 3",
    name: "TRON Hackathon APAC",
    prize: "$100,000",
    projects: "80+",
    participants: "300+",
    highlight: "Focused on DeFi and gaming, with 3 winning projects now live on mainnet.",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    edition: "Season 2",
    name: "TRON x DoraHacks Global",
    prize: "$80,000",
    projects: "100+",
    participants: "800+",
    highlight: "First joint hackathon, setting the template for cross-community events.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    edition: "Season 1",
    name: "TRON Genesis Hackathon",
    prize: "$50,000",
    projects: "40+",
    participants: "200+",
    highlight: "Where it all started. 5 winning teams received grants totaling $200,000.",
    color: "from-yellow-500/20 to-orange-500/20",
  },
];

const winners = [
  { name: "SunSwap", award: "Best DeFi Protocol", season: "S3" },
  { name: "TronGains", award: "Best Gaming DApp", season: "S3" },
  { name: "ChainBridge", award: "Best Cross-chain Solution", season: "S2" },
  { name: "DeFiHero", award: "Best NFT Platform", season: "S2" },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border)] mb-8">
            <Globe size={16} className="text-[var(--color-text-secondary)]" />
            <span className="text-sm text-[var(--color-text-secondary)]">Global Events</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight">
            TRON Events & Hackathons
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Join builders worldwide in hackathons, meetups, and conferences. Win funding, gain exposure, and shape the TRON ecosystem.
          </p>
          <div className="flex items-center justify-center gap-8 mt-10 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-text-primary)]">12+</div>
              <div className="text-[var(--color-text-tertiary)]">Events Hosted</div>
            </div>
            <div className="w-px h-8 bg-[var(--color-border)]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-text-primary)]">$500K+</div>
              <div className="text-[var(--color-text-tertiary)]">Prize Pool Awarded</div>
            </div>
            <div className="w-px h-8 bg-[var(--color-border)]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-[var(--color-text-primary)]">5,000+</div>
              <div className="text-[var(--color-text-tertiary)]">Builders Connected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                Upcoming Events
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Don&apos;t miss out — secure your spot today.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-[var(--color-text-tertiary)]">
              <Calendar size={16} />
              <span>{new Date().getFullYear()} Schedule</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.name}
                className={cn(
                  "rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-primary)] overflow-hidden",
                  "hover:border-[var(--color-border-hover)] transition-all duration-300",
                  "shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                )}
              >
                <div className={cn("h-2 bg-gradient-to-r", event.color)} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={cn(
                      "inline-flex px-3 py-1 rounded-full text-xs font-semibold",
                      event.type === "Hackathon"
                        ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        : "bg-blue-500/10 text-blue-400"
                    )}>
                      {event.type}
                    </span>
                    {event.prize && (
                      <div className="flex items-center gap-1 text-[var(--color-primary)]">
                        <Trophy size={14} weight="fill" />
                        <span className="text-sm font-bold">{event.prize}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
                    {event.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <Calendar size={14} className="text-[var(--color-text-tertiary)]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <MapPin size={14} className="text-[var(--color-text-tertiary)]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <Users size={14} className="text-[var(--color-text-tertiary)]" />
                      <span>{event.participants} expected</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs bg-[var(--color-bg-surface)] text-[var(--color-text-tertiary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className={cn(
                    "w-full py-3 rounded-xl font-semibold text-sm transition-colors duration-200",
                    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]",
                    "shadow-[0_0_20px_var(--color-primary-glow)]"
                  )}>
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              Past Events
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Explore what we&apos;ve hosted and the communities we&apos;ve built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.name}
                className="bg-[var(--color-bg-surface)] rounded-2xl p-5 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={14} className="text-[var(--color-text-tertiary)]" />
                  <span className="text-xs text-[var(--color-text-tertiary)]">{event.date}</span>
                </div>
                <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2">
                  {event.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] mb-3">
                  <MapPin size={12} />
                  <span>{event.location}</span>
                </div>
                <p className="text-sm text-[var(--color-text-tertiary)] mb-4 leading-relaxed">
                  {event.description}
                </p>
                <div className="pt-3 border-t border-[var(--color-border)]">
                  <span className="text-xs text-[var(--color-text-tertiary)]">
                    {event.attendees} attendees
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRON Hackathon Series */}
      <section className="py-20 px-4 bg-[var(--color-bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 mb-4">
              <Lightning size={14} className="text-orange-400" />
              <span className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Hackathon Series</span>
            </div>
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              TRON Hackathon Season
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              From humble beginnings to global movements — the TRON hackathon series has rewarded hundreds of builders with over $500K in prizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {hackathonSeries.map((season) => (
              <div
                key={season.edition}
                className="bg-[var(--color-bg-primary)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300"
              >
                <div className={cn("h-1.5 bg-gradient-to-r", season.color)} />
                <div className="p-5">
                  <span className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                    {season.edition}
                  </span>
                  <h3 className="text-base font-bold text-[var(--color-text-primary)] mt-1 mb-3">
                    {season.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-[var(--color-bg-surface)]">
                      <div className="text-lg font-bold text-[var(--color-primary)]">{season.prize}</div>
                      <div className="text-xs text-[var(--color-text-tertiary)]">Prize Pool</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[var(--color-bg-surface)]">
                      <div className="text-lg font-bold text-[var(--color-text-primary)]">{season.projects}</div>
                      <div className="text-xs text-[var(--color-text-tertiary)]">Projects</div>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {season.highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Prize Pool Banner */}
          <div className="bg-gradient-to-r from-[var(--color-bg-surface)] to-[var(--color-bg-primary)] rounded-3xl p-8 border border-[var(--color-border)] mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/20 flex items-center justify-center">
                  <Trophy size={32} weight="fill" className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-[var(--color-text-primary)] mb-1">$500K+</div>
                  <div className="text-[var(--color-text-secondary)]">Total prize pool awarded</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-text-primary)]">350+</div>
                  <div className="text-xs text-[var(--color-text-tertiary)]">Projects Submitted</div>
                </div>
                <div className="w-px h-10 bg-[var(--color-border)]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-text-primary)]">60+</div>
                  <div className="text-xs text-[var(--color-text-tertiary)]">Winners</div>
                </div>
                <div className="w-px h-10 bg-[var(--color-border)]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-text-primary)]">40+</div>
                  <div className="text-xs text-[var(--color-text-tertiary)]">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Winning Projects */}
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 text-center">
              Notable Winners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {winners.map((winner) => (
                <div
                  key={winner.name}
                  className="bg-[var(--color-bg-primary)] rounded-xl p-4 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-all duration-300 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Medal size={20} weight="fill" className="text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--color-text-primary)]">{winner.name}</div>
                    <div className="text-xs text-[var(--color-text-tertiary)]">{winner.award}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[var(--color-bg-surface)] to-[var(--color-bg-secondary)] rounded-3xl p-12 border border-[var(--color-border)] text-center">
            <Star size={48} weight="duotone" className="text-[var(--color-primary)] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
              Host a TRON Event
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
              Want to organize a TRON meetup or hackathon in your city? We provide funding, swag, and support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] transition-colors duration-200 shadow-[0_0_20px_var(--color-primary-glow)]">
                Apply to Host
                <ArrowRight size={16} weight="bold" />
              </button>
              <button className="inline-flex items-center gap-2 py-3 px-8 rounded-xl border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-surface)] transition-colors duration-200">
                View Event Calendar
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}