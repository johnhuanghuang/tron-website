import { XLogo, DiscordLogo, TelegramLogo, YoutubeLogo, GithubLogo, RedditLogo, LinkedinLogo } from "@phosphor-icons/react";

const socialLinks = [
  { icon: XLogo, label: "X (Twitter)", href: "https://x.com/Tronfoundation" },
  { icon: DiscordLogo, label: "Discord", href: "https://discord.gg/trondao" },
  { icon: TelegramLogo, label: "Telegram", href: "https://t.me/tronnetworkEN" },
  { icon: YoutubeLogo, label: "YouTube", href: "https://www.youtube.com/channel/UC4qOctJ9hZJQzN9g0jdGG6w" },
  { icon: GithubLogo, label: "GitHub", href: "https://github.com/tronprotocol" },
  { icon: RedditLogo, label: "Reddit", href: "https://www.reddit.com/r/Tronix" },
  { icon: LinkedinLogo, label: "LinkedIn", href: "https://www.linkedin.com/company/tron-foundation" },
];

export function StaticFooter() {
  return (
    <footer className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-[var(--color-text-tertiary)]">
            &copy; {new Date().getFullYear()} TRON Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)] transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} weight="fill" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
