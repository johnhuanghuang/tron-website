"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Copy, Check } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

interface DocRendererProps {
  content: string;
  className?: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// Code block component with copy button
function CodeBlock({ children, className }: { children: React.ReactNode; className?: string }) {
  const [copied, setCopied] = useState(false);
  const language = className?.replace("language-", "") || "text";

  // Extract text content for clipboard
  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(getTextContent).join("");
    if (node && typeof node === "object" && "props" in (node as object)) {
      return getTextContent((node as { props: { children?: React.ReactNode } }).props.children);
    }
    return "";
  };

  const codeText = getTextContent(children).trim();

  const copy = async () => {
    if (typeof window !== "undefined") {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
          h2: ({ children }) => {
            const text = String(children);
            const id = slugify(text);
            return (
              <h2 id={id} className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 mt-8 pb-2 border-b border-[var(--color-border)]">
                {children}
              </h2>
            );
          },
          h3: ({ children }) => {
            const text = String(children);
            const id = slugify(text);
            return (
              <h3 id={id} className="text-xl font-semibold text-[var(--color-text-primary)] mb-3 mt-6">
                {children}
              </h3>
            );
          },
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
          code: ({ className, children }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="px-1.5 py-0.5 rounded bg-[var(--color-bg-surface)] text-[rgb(251,113,133)] text-sm font-mono">
                  {children}
                </code>
              );
            }
            return <CodeBlock className={className}>{children}</CodeBlock>;
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
