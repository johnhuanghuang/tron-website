# Phase 3: Developer Center Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the complete TRON Developer Center — 6 pages + shared components + content infrastructure.

**Architecture:** Developer Center at `/developers` with 6 sub-pages. Documentation rendered from static Markdown files. Shared components (DevSidebar, DocRenderer) used across docs/API pages. Header/Footer updated to include developer navigation.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS v4, Framer Motion, react-markdown, Prism/shiki for syntax highlighting, Phosphor Icons.

---

## Task 1: Project Setup & Directory Structure

**Files:**
- Create: `app/developers/` directory and layout
- Create: `components/dev/` directory
- Create: `content/docs/` directory with sample docs
- Modify: `tailwind.config.ts` (if needed for content styles)

- [ ] **Step 1: Create developer center directory structure**

```bash
mkdir -p app/developers/docs/\[...slug\]
mkdir -p app/developers/api
mkdir -p app/developers/cookbook
mkdir -p app/developers/grants
mkdir -p app/developers/office-hours
mkdir -p components/dev
mkdir -p content/docs
```

- [ ] **Step 2: Create developer center layout file**

Create `app/developers/layout.tsx`:
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Center | TRON",
  description: "Build on TRON with documentation, API reference, tutorials, and grants.",
};

export default function DevelopersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

- [ ] **Step 3: Create sample documentation content**

Create `content/docs/get-started.md`:
```markdown
---
title: Get Started with TRON
category: get-started
order: 1
---

# Get Started with TRON

Welcome to TRON development. This guide will help you set up your development environment and deploy your first smart contract.

## Prerequisites

- Node.js 18+
- A TRON wallet (TRX for gas)
- Basic knowledge of blockchain concepts

## Quick Start

```bash
# Install TRON development toolkit
npm install @tronweb3/tronweb
```

## Next Steps

- [Set up your wallet](/developers/docs/setup-wallet)
- [Deploy your first contract](/developers/docs/first-contract)
- [Explore API Reference](/developers/api)
```

Create `content/docs/smart-contracts.md`:
```markdown
---
title: Smart Contracts on TRON
category: smart-contracts
order: 2
---

# Smart Contracts on TRON

TRON supports Solidity-based smart contracts, compatible with Ethereum's EVM.

## Development Tools

- **TronIDE** - Online IDE for contract development
- **tronweb** - JavaScript SDK
- **TronBox** - Development framework

## Example: Hello World

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public greeting;
    
    constructor(string memory _greeting) {
        greeting = _greeting;
    }
    
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
    
    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
```
```

- [ ] **Step 4: Install additional dependencies**

```bash
cd /Users/john/.openclaw/workspace/projects/tron-website
npm install react-markdown prismjs @types/prismjs gray-matter reading-time
```

- [ ] **Step 5: Create content/docs index**

Create `content/docs/index.json`:
```json
{
  "categories": [
    {
      "id": "get-started",
      "label": "Get Started",
      "pages": [
        { "slug": "get-started", "title": "Get Started with TRON" }
      ]
    },
    {
      "id": "smart-contracts",
      "label": "Smart Contracts",
      "pages": [
        { "slug": "smart-contracts", "title": "Smart Contracts on TRON" }
      ]
    }
  ]
}
```

- [ ] **Step 6: Commit**

```bash
git add app/developers components/dev content/docs
git commit -m "feat(phase3): project setup and directory structure"
```

---

## Task 2: DevSidebar Component

**Files:**
- Create: `components/dev/DevSidebar.tsx`
- Create: `components/dev/DevSidebar.css` (if needed)

- [ ] **Step 1: Create DevSidebar component**

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, CaretRight, List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface DocPage {
  slug: string;
  title: string;
}

interface DocCategory {
  id: string;
  label: string;
  pages: DocPage[];
}

interface DevSidebarProps {
  categories: DocCategory[];
  currentSlug?: string;
  onNavigate?: (slug: string) => void;
}

export function DevSidebar({ categories, currentSlug, onNavigate }: DevSidebarProps) {
  const [expandedCats, setExpandedCats] = useState<Set<string>>(
    new Set(categories.map((c) => c.id))
  );
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleCat = (catId: string) => {
    setExpandedCats((prev) => {
      const next = new Set(prev);
      if (next.has(catId)) next.delete(catId);
      else next.add(catId);
      return next;
    });
  };

  const SidebarContent = () => (
    <nav className="flex flex-col gap-1">
      {categories.map((cat) => (
        <div key={cat.id}>
          <button
            onClick={() => toggleCat(cat.id)}
            className={cn(
              "flex items-center justify-between w-full px-3 py-2 text-sm font-semibold",
              "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
              "transition-colors rounded-lg hover:bg-[var(--color-bg-surface)]"
            )}
          >
            {cat.label}
            {expandedCats.has(cat.id) ? (
              <CaretDown size={14} weight="bold" />
            ) : (
              <CaretRight size={14} weight="bold" />
            )}
          </button>
          <AnimatePresence>
            {expandedCats.has(cat.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="ml-4 pl-2 border-l border-[var(--color-border)] flex flex-col gap-0.5 py-1">
                  {cat.pages.map((page) => (
                    <button
                      key={page.slug}
                      onClick={() => onNavigate?.(page.slug)}
                      className={cn(
                        "text-left px-3 py-1.5 text-sm rounded-md transition-colors",
                        currentSlug === page.slug
                          ? "bg-[var(--color-primary)] text-white"
                          : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]"
                      )}
                    >
                      {page.title}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className={cn(
          "lg:hidden fixed bottom-4 left-4 z-30 p-3 rounded-full",
          "bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
          "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        )}
      >
        <List size={24} weight="bold" />
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 z-40"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={cn(
                "lg:hidden fixed left-0 top-0 bottom-0 w-[280px] z-50",
                "bg-[var(--color-bg-primary)] border-r border-[var(--color-border)]",
                "p-4 pt-8 overflow-y-auto"
              )}
            >
              <button
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-4 right-4 p-1 text-[var(--color-text-secondary)]"
              >
                <X size={20} weight="bold" />
              </button>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
```

- [ ] **Step 2: Export from index**

Create `components/dev/index.ts`:
```ts
export { DevSidebar } from "./DevSidebar";
```

- [ ] **Step 3: Commit**

```bash
git add components/dev/DevSidebar.tsx components/dev/index.ts content/docs/
git commit -m "feat(phase3): create DevSidebar component with mobile drawer"
```

---

## Task 3: DocRenderer Component

**Files:**
- Create: `components/dev/DocRenderer.tsx`

- [ ] **Step 1: Create DocRenderer component**

```tsx
"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Copy, Check } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface DocRendererProps {
  content: string;
  className?: string;
}

// Code block component with copy button
function CodeBlock({ children, className }: { children: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const language = className?.replace("language-", "") || "text";

  const copy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden bg-[#1a1a1d] my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-[#111113] border-b border-[var(--color-border)]">
        <span className="text-xs text-[var(--color-text-tertiary)] font-mono">{language}</span>
        <button
          onClick={copy}
          className={cn(
            "p-1.5 rounded transition-colors",
            copied
              ? "text-[var(--color-success)]"
              : "text-[var(--color-text-tertiary)] opacity-0 group-hover:opacity-100 hover:text-[var(--color-text-primary)]"
          )}
        >
          {copied ? <Check size={14} weight="bold" /> : <Copy size={14} weight="bold" />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className={cn("text-sm font-mono text-[var(--color-text-primary)]", className)}>
          {children}
        </code>
      </pre>
    </div>
  );
}

// Callout box component
function Callout({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" | "success" }) {
  const colors = {
    info: "border-[var(--color-info)] bg-[var(--color-info)]/10",
    warning: "border-[var(--color-warning)] bg-[var(--color-warning)]/10",
    success: "border-[var(--color-success)] bg-[var(--color-success)]/10",
  };

  return (
    <div className={cn("border-l-4 px-4 py-3 rounded-r-lg my-4", colors[type])}>
      {children}
    </div>
  );
}

export function DocRenderer({ content, className }: DocRendererProps) {
  return (
    <div className={cn("doc-content prose prose-invert max-w-none", className)}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-6 mt-8 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 mt-8 pb-2 border-b border-[var(--color-border)]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3 mt-6">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-[var(--color-text-secondary)] mb-4 space-y-1">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-[var(--color-text-secondary)] mb-4 space-y-1">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-[var(--color-text-secondary)]">{children}</li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-[rgb(251,113,133)] hover:underline"
            >
              {children}
            </a>
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="px-1.5 py-0.5 rounded bg-[var(--color-bg-surface)] text-[rgb(251,113,133)] text-sm font-mono">
                  {children}
                </code>
              );
            }
            return <CodeBlock className={className}>{String(children).replace(/\n$/, "")}</CodeBlock>;
          },
          blockquote: ({ children }) => (
            <Callout>{children}</Callout>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="w-full border-collapse border border-[var(--color-border)] rounded-lg overflow-hidden">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="px-4 py-2 bg-[var(--color-bg-surface)] text-left text-sm font-semibold text-[var(--color-text-primary)] border-b border-[var(--color-border)]">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-4 py-2 text-sm text-[var(--color-text-secondary)] border-b border-[var(--color-border)]">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
```

- [ ] **Step 2: Add DocRenderer to exports**

Update `components/dev/index.ts`:
```ts
export { DevSidebar } from "./DevSidebar";
export { DocRenderer } from "./DocRenderer";
```

- [ ] **Step 3: Commit**

```bash
git add components/dev/DocRenderer.tsx components/dev/index.ts
git commit -m "feat(phase3): create DocRenderer with syntax highlighting and copy"
```

---

## Task 4: Developer Center Homepage

**Files:**
- Create: `app/developers/page.tsx`

- [ ] **Step 1: Create the Developer Center homepage**

```tsx
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Book,
  Code,
  CurrencyDollar,
  Handshake,
  Bug,
  Calendar,
  GithubLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/Badge";

const entrances = [
  {
    href: "/developers/docs",
    icon: Book,
    title: "Documentation",
    description: "Comprehensive guides, tutorials, and API references for building on TRON.",
    color: "from-orange-500/20 to-red-500/20",
    badge: null,
  },
  {
    href: "/developers/api",
    icon: Code,
    title: "API Reference",
    description: "Explore TRON network APIs with detailed documentation and code examples.",
    color: "from-blue-500/20 to-purple-500/20",
    badge: null,
  },
  {
    href: "/developers/cookbook",
    icon: CurrencyDollar,
    title: "Cookbook",
    description: "Step-by-step tutorials for DeFi, NFT, gaming, and infrastructure projects.",
    color: "from-green-500/20 to-emerald-500/20",
    badge: "Coming Soon",
  },
  {
    href: "/developers/grants",
    icon: Handshake,
    title: "Grants & Funding",
    description: "Apply for MVP, growth, and research grants to build your TRON project.",
    color: "from-yellow-500/20 to-orange-500/20",
    badge: null,
  },
];

const quickLinks = [
  { href: "/developers/office-hours", icon: Calendar, label: "Office Hours" },
  { href: "https://github.com.com", icon: GithubLogo, label: "GitHub", external: true },
];

export default function DevelopersPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)] mb-4">
            Developer Center
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-6">
            Everything you need to build on TRON. From quick-start guides to advanced smart contract development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-8 text-sm text-[var(--color-text-tertiary)]">
              <span>50+ Docs</span>
              <span>•</span>
              <span>20+ API Methods</span>
              <span>•</span>
              <span>24/7 Network</span>
            </div>
          </div>
        </motion.div>

        {/* Entrance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {entrances.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="group block h-full p-6 rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] hover:border-[var(--color-border-hover)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={cn(
                    "p-3 rounded-xl bg-gradient-to-br bg-[var(--color-bg-surface)]",
                    `bg-gradient-to-br ${item.color}`
                  )}>
                    <item.icon size={28} weight="duotone" className="text-[rgb(251,113,133)]" />
                  </div>
                  {item.badge && <Badge variant="subtle">{item.badge}</Badge>}
                </div>
                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                  {item.title}
                  <ArrowRight
                    size={18}
                    weight="bold"
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </h2>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-[var(--color-border)]"
        >
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)] transition-colors"
            >
              <link.icon size={16} weight="bold" />
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
```

Import `cn` utility:
```ts
// The cn utility should already exist at lib/utils/cn.ts
// If not, create it:
import { clsx } from "clsx";
export function cn(...inputs: any[]) {
  return clsx(inputs);
}
```

- [ ] **Step 2: Add to homepage CTA**

Modify `app/page.tsx` - find the Developer Section in the homepage and update the CTA to link to `/developers`.

- [ ] **Step 3: Commit**

```bash
git add app/developers/page.tsx
git commit -m "feat(phase3): create Developer Center homepage with 4 entrance cards"
```

---

## Task 5: Documentation Pages

**Files:**
- Create: `app/developers/docs/page.tsx` (docs index)
- Create: `app/developers/docs/[...slug]/page.tsx` (dynamic doc page)

- [ ] **Step 1: Create docs index page**

```tsx
import Link from "next/link";
import { Book, ArrowRight } from "@phosphor-icons/react";
import { DevSidebar } from "@/components/dev";
import docIndex from "@/content/docs/index.json";

const categories = docIndex.categories.map((cat) => ({
  id: cat.id,
  label: cat.label,
  pages: cat.pages.map((p) => ({ slug: p.slug, title: p.title })),
}));

export default function DocsPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          <DevSidebar categories={categories} />
          <div className="flex-1 min-w-0">
            <div className="text-center py-20">
              <div className="inline-flex p-4 rounded-2xl bg-[var(--color-bg-surface)] mb-6">
                <Book size={48} weight="duotone" className="text-[rgb(251,113,133)]" />
              </div>
              <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                TRON Documentation
              </h1>
              <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto mb-8">
                Select a topic from the sidebar to start reading, or browse all topics below.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) =>
                  cat.pages.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/developers/docs/${page.slug}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)] border border-transparent transition-all text-sm"
                    >
                      {page.title}
                      <ArrowRight size={14} weight="bold" />
                    </Link>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Create dynamic doc page**

```tsx
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { DevSidebar } from "@/components/dev";
import { DocRenderer } from "@/components/dev/DocRenderer";
import docIndex from "@/content/docs/index.json";

interface Props {
  params: { slug: string[] };
}

function findDoc(slugParts: string[]) {
  const slug = slugParts.join("/");
  const docPath = path.join(process.cwd(), "content/docs", `${slug}.md`);
  if (!fs.existsSync(docPath)) return null;
  const file = fs.readFileSync(docPath, "utf-8");
  const { data, content } = matter(file);
  return { ...data, content };
}

export async function generateStaticParams() {
  const params: { slug: string[] }[] = [];
  docIndex.categories.forEach((cat) => {
    cat.pages.forEach((page) => {
      params.push({ slug: [page.slug] });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props) {
  const doc = findDoc(params.slug);
  if (!doc) return { title: "Not Found" };
  return { title: `${doc.title} | TRON Developers` };
}

export default function DocPage({ params }: Props) {
  const doc = findDoc(params.slug);
  if (!doc) notFound();

  const categories = docIndex.categories.map((cat) => ({
    id: cat.id,
    label: cat.label,
    pages: cat.pages.map((p) => ({ slug: p.slug, title: p.title })),
  }));

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          <DevSidebar categories={categories} currentSlug={params.slug.join("/")} />
          <article className="flex-1 min-w-0 max-w-3xl">
            <DocRenderer content={doc.content} />
          </article>
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/developers/docs/page.tsx "app/developers/docs/[...slug]/page.tsx"
git commit -m "feat(phase3): create docs index and dynamic doc pages"
```

---

## Task 6: API Reference Page

**Files:**
- Create: `app/developers/api/page.tsx`
- Create: `components/dev/ApiMethodCard.tsx`

- [ ] **Step 1: Create API sample data**

Create `content/api-refs.json`:
```json
{
  "categories": [
    {
      "id": "account",
      "label": "Account",
      "methods": [
        {
          "name": "getAccount",
          "description": "Query account information by address",
          "parameters": [
            { "name": "address", "type": "string", "required": true, "description": "TRON address (base58)" }
          ],
          "response": "{ address: string, balance: number, create_time: number }",
          "example": "const account = await tronWeb.trx.getAccount('TX123...');"
        },
        {
          "name": "getBalance",
          "description": "Get TRX balance for an address",
          "parameters": [
            { "name": "address", "type": "string", "required": true, "description": "TRON address" }
          ],
          "response": "number (sun)",
          "example": "const balance = await tronWeb.trx.getBalance('TX123...');"
        }
      ]
    },
    {
      "id": "transaction",
      "label": "Transaction",
      "methods": [
        {
          "name": "sendTrx",
          "description": "Send TRX to another address",
          "parameters": [
            { "name": "to", "type": "string", "required": true, "description": "Recipient address" },
            { "name": "amount", "type": "number", "required": true, "description": "Amount in sun (1 TRX = 1,000,000 sun)" }
          ],
          "response": "{ txid: string, transaction: object }",
          "example": "const result = await tronWeb.trx.sendTrx('TX456...', 1000000);"
        }
      ]
    },
    {
      "id": "trc20",
      "label": "TRC-20 Token",
      "methods": [
        {
          "name": "transfer",
          "description": "Transfer TRC-20 tokens",
          "parameters": [
            { "name": "contractAddress", "type": "string", "required": true, "description": "Token contract address" },
            { "name": "to", "type": "string", "required": true, "description": "Recipient address" },
            { "name": "amount", "type": "string", "required": true, "description": "Token amount (with decimals)" }
          ],
          "response": "{ txid: string }",
          "example": "const tx = await contract.methods.transfer(to, amount).send();"
        }
      ]
    }
  ]
}
```

- [ ] **Step 2: Create ApiMethodCard component**

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, Copy, Check, ArrowSquareOut } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface ApiMethod {
  name: string;
  description: string;
  parameters: { name: string; type: string; required: boolean; description: string }[];
  response: string;
  example: string;
}

interface ApiMethodCardProps {
  method: ApiMethod;
}

export function ApiMethodCard({ method }: ApiMethodCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(method.example);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg-secondary)]">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-[var(--color-bg-surface)] transition-colors"
      >
        <div>
          <code className="text-[rgb(251,113,133)] font-mono font-semibold">{method.name}</code>
          <p className="text-sm text-[var(--color-text-tertiary)] mt-0.5">{method.description}</p>
        </div>
        <CaretDown
          size={16}
          weight="bold"
          className={cn(
            "text-[var(--color-text-tertiary)] transition-transform flex-shrink-0 ml-4",
            expanded ? "rotate-180" : ""
          )}
        />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[var(--color-border)]"
          >
            <div className="p-4 space-y-4">
              {/* Parameters */}
              {method.parameters.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Parameters</h4>
                  <div className="space-y-1">
                    {method.parameters.map((param) => (
                      <div key={param.name} className="flex gap-2 text-sm">
                        <code className="text-[rgb(251,113,133)] font-mono">{param.name}</code>
                        <span className="text-[var(--color-text-tertiary)]">:</span>
                        <span className="text-[var(--color-text-secondary)] font-mono">{param.type}</span>
                        {param.required && (
                          <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--color-error)]/20 text-[var(--color-error)]">required</span>
                        )}
                        <span className="text-[var(--color-text-tertiary)]">— {param.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Response */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Response</h4>
                <code className="block text-sm text-[var(--color-text-secondary)] bg-[var(--color-bg-surface)] p-2 rounded">
                  {method.response}
                </code>
              </div>

              {/* Example */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">Example</h4>
                  <button
                    onClick={copy}
                    className={cn(
                      "flex items-center gap-1.5 text-xs px-2 py-1 rounded transition-colors",
                      copied
                        ? "text-[var(--color-success)]"
                        : "text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
                    )}
                  >
                    {copied ? <Check size={12} weight="bold" /> : <Copy size={12} weight="bold" />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <pre className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-bg-surface)] p-3 rounded-lg overflow-x-auto font-mono">
                  {method.example}
                </pre>
              </div>

              {/* External Link */}
              <a
                href="https://developers.tron.network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[rgb(251,113,133)] hover:underline"
              >
                View full docs
                <ArrowSquareOut size={12} weight="bold" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
```

- [ ] **Step 3: Create API Reference page**

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ApiMethodCard } from "@/components/dev";
import apiRefs from "@/content/api-refs.json";
import { cn } from "@/lib/utils/cn";

export default function ApiPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = apiRefs.categories
    .map((cat) => ({
      ...cat,
      methods: cat.methods.filter(
        (m) =>
          (activeCategory === "all" || cat.id === activeCategory) &&
          (search === "" ||
            m.name.toLowerCase().includes(search.toLowerCase()) ||
            m.description.toLowerCase().includes(search.toLowerCase()))
      ),
    }))
    .filter((cat) => cat.methods.length > 0);

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">API Reference</h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            Explore TRON network API methods. All methods support both HTTP and WebSocket connections.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <MagnifyingGlass size={18} weight="bold" className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-tertiary)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search methods..."
              className={cn(
                "w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
                "focus:outline-none focus:border-[var(--color-border-hover)] transition-colors"
              )}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                activeCategory === "all"
                  ? "bg-[rgb(251,113,133)] text-white"
                  : "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              )}
            >
              All
            </button>
            {apiRefs.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  activeCategory === cat.id
                    ? "bg-[rgb(251,113,133)] text-white"
                    : "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Method Groups */}
        <div className="space-y-8">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 capitalize">
                {cat.label}
              </h2>
              <div className="space-y-3">
                {cat.methods.map((method) => (
                  <ApiMethodCard key={method.name} method={method} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-20 text-[var(--color-text-tertiary)]">
            No methods found matching your search.
          </div>
        )}
      </div>
    </main>
  );
}
```

- [ ] **Step 4: Add ApiMethodCard to exports**

Update `components/dev/index.ts`.

- [ ] **Step 5: Commit**

```bash
git add app/developers/api/page.tsx components/dev/ApiMethodCard.tsx content/api-refs.json
git commit -m "feat(phase3): create API Reference page with search and method cards"
```

---

## Task 7: Cookbook Page

**Files:**
- Create: `app/developers/cookbook/page.tsx`
- Create: `components/dev/CookbookCard.tsx`

- [ ] **Step 1: Create CookbookCard component**

```tsx
import { Clock, Star } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils/cn";

interface CookbookCardProps {
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  time: string;
  href?: string;
}

const difficultyColors = {
  Beginner: "bg-green-500/20 text-green-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
  Advanced: "bg-red-500/20 text-red-400",
};

export function CookbookCard({ title, description, category, difficulty, time, href = "#" }: CookbookCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group block p-5 rounded-2xl border border-[var(--color-border)]",
        "bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-surface)]",
        "hover:border-[var(--color-border-hover)] transition-all duration-300"
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <Badge variant="subtle" className="text-xs">{category}</Badge>
        <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", difficultyColors[difficulty])}>
          {difficulty}
        </span>
      </div>
      <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-[rgb(251,113,133)] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-tertiary)] mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
        <Clock size={12} weight="bold" />
        {time}
      </div>
    </a>
  );
}
```

- [ ] **Step 2: Create Cookbook page**

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CookbookCard } from "@/components/dev";
import { cn } from "@/lib/utils/cn";

const tabs = ["All", "DeFi", "NFT", "Gaming", "Infrastructure"];

const recipes = [
  {
    title: "Build a DeFi Lending Protocol",
    description: "Create a lending pool with interest rates using TRON's smart contract standards.",
    category: "DeFi",
    difficulty: "Advanced" as const,
    time: "2-3 hours",
  },
  {
    title: "Deploy Your First TRC-20 Token",
    description: "Step-by-step guide to creating and deploying a meme token on TRON network.",
    category: "DeFi",
    difficulty: "Beginner" as const,
    time: "30 min",
  },
  {
    title: "Build an NFT Marketplace",
    description: "Create a full NFT marketplace with minting, buying, and bidding functionality.",
    category: "NFT",
    difficulty: "Advanced" as const,
    time: "4-5 hours",
  },
  {
    title: "Create a Gaming NFT Collection",
    description: "Design and deploy a generative art NFT collection with on-chain metadata.",
    category: "NFT",
    difficulty: "Intermediate" as const,
    time: "1-2 hours",
  },
  {
    title: "Set Up a TRON Validator Node",
    description: "Configure and run a TRON full node or witness node from scratch.",
    category: "Infrastructure",
    difficulty: "Advanced" as const,
    time: "3-4 hours",
  },
  {
    title: "Build a Cross-Chain Bridge",
    description: "Connect TRON to Ethereum and BSC using bridge protocols.",
    category: "Infrastructure",
    difficulty: "Advanced" as const,
    time: "5+ hours",
  },
];

export default function CookbookPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? recipes : recipes.filter((r) => r.category === activeTab);

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Cookbook</h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            Step-by-step tutorials and example projects. Learn by building real applications on TRON.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                activeTab === tab
                  ? "bg-[rgb(251,113,133)] text-white"
                  : "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((recipe, idx) => (
            <motion.div
              key={recipe.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <CookbookCard {...recipe} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--color-text-tertiary)]">
            No recipes found for this category.
          </div>
        )}
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Update exports**

- [ ] **Step 4: Commit**

```bash
git add app/developers/cookbook/page.tsx components/dev/CookbookCard.tsx
git commit -m "feat(phase3): create Cookbook page with recipe cards and filters"
```

---

## Task 8: Grants Page

**Files:**
- Create: `app/developers/grants/page.tsx`
- Create: `components/dev/GrantAccordion.tsx`

- [ ] **Step 1: Create GrantAccordion component**

```tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface AccordionItem {
  question: string;
  answer: string;
}

interface GrantAccordionProps {
  items: AccordionItem[];
}

export function GrantAccordion({ items }: GrantAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[var(--color-border)]">
      {items.map((item, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex items-center justify-between py-4 text-left"
          >
            <span className="text-[var(--color-text-primary)] font-medium pr-4">{item.question}</span>
            <CaretDown
              size={16}
              weight="bold"
              className={cn(
                "text-[var(--color-text-tertiary)] flex-shrink-0 transition-transform",
                open === idx ? "rotate-180" : ""
              )}
            />
          </button>
          <AnimatePresence>
            {open === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="pb-4 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create Grants page**

```tsx
import { motion } from "framer-motion";
import { Rocket, ChartLine, Research, CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { GrantAccordion } from "@/components/dev";

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
    icon: Research,
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
            Build on TRON with financial support, mentorship, and resources. From MVP to production, we've got you covered.
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
```

- [ ] **Step 3: Commit**

```bash
git add app/developers/grants/page.tsx components/dev/GrantAccordion.tsx
git commit -m "feat(phase3): create Grants page with accordion FAQ"
```

---

## Task 9: Office Hours Page

**Files:**
- Create: `app/developers/office-hours/page.tsx`
- Create: `components/dev/BookingCalendar.tsx`

- [ ] **Step 1: Create BookingCalendar component**

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Calendar as CalendarIcon } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface TimeSlot {
  time: string;
  available: boolean;
}

const defaultSlots: TimeSlot[] = [
  { time: "09:00 UTC", available: false },
  { time: "10:00 UTC", available: true },
  { time: "11:00 UTC", available: true },
  { time: "14:00 UTC", available: true },
  { time: "15:00 UTC", available: false },
  { time: "16:00 UTC", available: true },
];

export function BookingCalendar() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [slots] = useState(defaultSlots);

  return (
    <div className="bg-[var(--color-bg-secondary)] rounded-2xl border border-[var(--color-border)] p-6">
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon size={18} weight="bold" className="text-[rgb(251,113,133)]" />
        <span className="text-sm font-semibold text-[var(--color-text-primary)]">Available Slots</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {slots.map((slot) => (
          <button
            key={slot.time}
            disabled={!slot.available}
            onClick={() => setSelectedSlot(slot.time)}
            className={cn(
              "py-2 px-3 rounded-lg text-sm font-mono transition-all",
              slot.available
                ? selectedSlot === slot.time
                  ? "bg-[rgb(251,113,133)] text-white"
                  : "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] border border-transparent hover:text-[var(--color-text-primary)]"
                : "bg-[var(--color-bg-surface)]/50 text-[var(--color-text-muted)] line-through cursor-not-allowed"
            )}
          >
            {slot.time}
          </button>
        ))}
      </div>
      <p className="text-xs text-[var(--color-text-muted)] mt-3">
        All times in UTC. Sessions are 30 minutes.
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Create Office Hours page**

```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, ChatCircle, Video } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { BookingCalendar } from "@/components/dev";
import { cn } from "@/lib/utils/cn";

const contactMethods = [
  { icon: ChatCircle, label: "Discord Community", desc: "Get help from the TRON community", href: "#" },
  { icon: Video, label: "Video Call", desc: "Face-to-face 1:1 session", href: "#" },
];

export default function OfficeHoursPage() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Office Hours
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Book a 1:1 session with the TRON team. Get technical guidance, project feedback, and direct support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Booking */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">
              Book a Session
            </h2>
            <BookingCalendar />

            <div className="mt-6 space-y-3">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)]",
                    "bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-surface)]",
                    "hover:border-[var(--color-border-hover)] transition-all group"
                  )}
                >
                  <method.icon size={24} weight="duotone" className="text-[rgb(251,113,133)]" />
                  <div>
                    <div className="text-sm font-semibold text-[var(--color-text-primary)]">{method.label}</div>
                    <div className="text-xs text-[var(--color-text-tertiary)]">{method.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">
              Or fill out the form
            </h2>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CalendarCheck size={64} weight="duotone" className="text-[var(--color-success)] mb-4" />
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">Request Submitted!</h3>
                <p className="text-[var(--color-text-secondary)]">
                  We'll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                      "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
                      "focus:outline-none focus:border-[var(--color-border-hover)]"
                    )}
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                      "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
                      "focus:outline-none focus:border-[var(--color-border-hover)]"
                    )}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Project name / URL"
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                    "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
                    "focus:outline-none focus:border-[var(--color-border-hover)]"
                  )}
                />
                <textarea
                  placeholder="What would you like to discuss?"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-[var(--color-bg-surface)] border border-[var(--color-border)]",
                    "text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)]",
                    "focus:outline-none focus:border-[var(--color-border-hover)] resize-none"
                  )}
                />
                <Button type="submit" size="lg" className="w-full">
                  Submit Request
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/developers/office-hours/page.tsx components/dev/BookingCalendar.tsx
git commit -m "feat(phase3): create Office Hours page with booking calendar and form"
```

---

## Task 10: Header & Footer Navigation Updates

**Files:**
- Modify: `components/layout/Header.tsx`
- Modify: `components/layout/Footer.tsx` (if exists)

- [ ] **Step 1: Add Developer nav item to Header**

Find the `navItems` array in Header.tsx and add:
```ts
{ label: "Developers", href: "/developers" },
```

Also add "AI Search" dropdown in nav (if not already there).

- [ ] **Step 2: Commit**

```bash
git add components/layout/Header.tsx
git commit -m "feat(phase3): add Developers link to Header navigation"
```

---

## Task 11: Build Verification

- [ ] **Step 1: Run build**

```bash
cd /Users/john/.openclaw/workspace/projects/tron-website
npm run build 2>&1
```

- [ ] **Step 2: Fix any TypeScript or build errors**

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "feat(phase3): complete Developer Center - all 6 pages and components"
```

---

## Self-Review Checklist

- [ ] All 6 pages render at correct routes
- [ ] DevSidebar works on docs + API pages, mobile drawer functional
- [ ] DocRenderer shows Markdown with syntax highlighting and copy button
- [ ] API Reference has search and category filter
- [ ] Cookbook has category filter tabs
- [ ] Grants page has 3 grant cards + FAQ accordion
- [ ] Office Hours has calendar slots + contact form
- [ ] `npm run build` succeeds without errors
- [ ] No TypeScript errors (check with `npx tsc --noEmit`)
