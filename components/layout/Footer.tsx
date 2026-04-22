"use client";

import { XLogo, DiscordLogo, TelegramLogo, YoutubeLogo, GithubLogo, RedditLogo, LinkedinLogo } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "About TRON", href: "#about" },
      { label: "TRON DAO", href: "#dao" },
      { label: "TRON Token", href: "#token" },
      { label: "TRON Grid", href: "#grid" },
      { label: "TRON Arcade", href: "#arcade" },
    ],
  },
  {
    title: "Start",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "Tutorials", href: "#tutorials" },
      { label: "Developer Portal", href: "#dev-portal" },
      { label: "Sandbox", href: "#sandbox" },
    ],
  },
  {
    title: "Build",
    links: [
      { label: "Smart Contracts", href: "#contracts" },
      { label: "dApp Store", href: "#dapp-store" },
      { label: "APIs & SDKs", href: "#apis" },
      { label: "Migration Guide", href: "#migration" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "TRON DAO Reserve", href: "#reserve" },
      { label: "TRON Ventures", href: "#ventures" },
      { label: "TRON Energy", href: "#energy" },
      { label: "TRON STAY", href: "#stay" },
    ],
  },
  {
    title: "Participate",
    links: [
      { label: "Community", href: "#community" },
      { label: "Bug Bounty", href: "#bounty" },
      { label: "Governance", href: "#governance" },
      { label: "Grants Program", href: "#grants" },
    ],
  },
];

const socialLinks = [
  { icon: XLogo, label: "X (Twitter)", href: "https://x.com/Tronfoundation" },
  { icon: DiscordLogo, label: "Discord", href: "https://discord.gg/trondao" },
  { icon: TelegramLogo, label: "Telegram", href: "https://t.me/tronnetworkEN" },
  { icon: YoutubeLogo, label: "YouTube", href: "https://www.youtube.com/channel/UC4qOctJ9hZJQzN9g0jdGG6w" },
  { icon: GithubLogo, label: "GitHub", href: "https://github.com/tronprotocol" },
  { icon: RedditLogo, label: "Reddit", href: "https://www.reddit.com/r/Tronix" },
  { icon: LinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/company/tron-foundation" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {footerColumns.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4 uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={cn(
                        "text-sm text-[var(--color-text-tertiary)]",
                        "hover:text-[var(--color-text-primary)] transition-colors duration-200"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-[var(--color-text-tertiary)]">
                &copy; {new Date().getFullYear()} TRON Foundation. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2 rounded-lg text-[var(--color-text-tertiary)]",
                    "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]",
                    "transition-colors duration-200"
                  )}
                  aria-label={social.label}
                >
                  <social.icon size={20} weight="fill" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}