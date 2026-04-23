import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}
