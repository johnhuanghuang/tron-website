import type { Metadata } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { FloatingAIWidget } from "@/components/ui/FloatingAIWidget";

export const metadata: Metadata = {
  title: "TRON | Decentralize the Internet",
  description:
    "TRON is an ecosystem for decentralized applications built on blockchain technology. Start building, deploying, and scaling dApps on TRON.",
  keywords: [
    "TRON",
    "blockchain",
    "decentralized",
    "dApp",
    "cryptocurrency",
    "smart contract",
  ],
  alternates: {
    canonical: "https://tron.network",
  },
  openGraph: {
    title: "TRON | Decentralize the Internet",
    description: "TRON is the world's leading high-performance public chain",
    url: "https://tron.network",
    siteName: "TRON",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRON | Decentralize the Internet",
    description: "TRON is the world's leading high-performance public chain",
    site: "@tronfoundation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <CookieConsent />
        <FloatingAIWidget />
      </body>
    </html>
  );
}
