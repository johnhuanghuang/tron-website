"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { User, Robot } from "@phosphor-icons/react";
import { cn } from "@/lib/utils/cn";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

interface Source {
  title: string;
  url: string;
  type: "doc" | "product" | "news" | "data";
}

interface ChatMessageProps {
  message: Message;
  sources?: Source[];
}

export function ChatMessage({ message, sources = [] }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex gap-3", isUser ? "flex-row-reverse" : "flex-row")}
    >
      {/* Avatar */}
      <div
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center",
          isUser
            ? "bg-[var(--color-primary)]"
            : "bg-[var(--color-bg-surface)] border border-[var(--color-border)]"
        )}
      >
        {isUser ? (
          <User size={20} weight="fill" className="text-white" />
        ) : (
          <Robot size={20} weight="fill" className="text-[var(--color-primary)]" />
        )}
      </div>

      {/* Message Bubble */}
      <div
        className={cn(
          "flex-1 max-w-[75%] min-w-0",
          isUser ? "items-end" : "items-start"
        )}
      >
        <div
          className={cn(
            "rounded-2xl px-4 py-3",
            isUser
              ? "bg-[var(--color-primary)] text-white rounded-tr-md"
              : "bg-[var(--color-bg-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] rounded-tl-md"
          )}
        >
          {isUser ? (
            <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
              {message.content}
            </p>
          ) : (
            <div className="prose prose-invert prose-sm max-w-none">
              <ReactMarkdown
                components={{
                  // Custom link handling
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-primary)] hover:underline"
                    >
                      {children}
                    </a>
                  ),
                  // Custom heading styles
                  h1: ({ children }) => (
                    <h1 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-base font-semibold text-[var(--color-text-primary)] mb-2">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">
                      {children}
                    </h3>
                  ),
                  // Custom list styles
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-1 my-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-1 my-2">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-sm leading-relaxed">{children}</li>
                  ),
                  // Custom paragraph
                  p: ({ children }) => (
                    <p className="text-sm leading-relaxed mb-2 last:mb-0">
                      {children}
                    </p>
                  ),
                  // Custom table
                  table: ({ children }) => (
                    <div className="overflow-x-auto my-3">
                      <table className="w-full text-xs border border-[var(--color-border)] rounded-lg overflow-hidden">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-[var(--color-bg-secondary)]">
                      {children}
                    </thead>
                  ),
                  th: ({ children }) => (
                    <th className="px-3 py-2 text-left font-medium text-[var(--color-text-secondary)] border-b border-[var(--color-border)]">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-3 py-2 text-[var(--color-text-primary)] border-b border-[var(--color-border)]">
                      {children}
                    </td>
                  ),
                  // Custom code
                  code: ({ children }) => (
                    <code className="bg-[var(--color-bg-secondary)] px-1.5 py-0.5 rounded text-xs font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-[var(--color-bg-secondary)] p-3 rounded-lg overflow-x-auto my-2">
                      {children}
                    </pre>
                  ),
                  // Custom blockquote
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-2 border-[var(--color-primary)] pl-3 my-2 italic">
                      {children}
                    </blockquote>
                  ),
                  // Custom strong
                  strong: ({ children }) => (
                    <strong className="font-semibold text-[var(--color-text-primary)]">
                      {children}
                    </strong>
                  ),
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* Sources for AI messages */}
        {!isUser && sources.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 flex flex-wrap gap-2"
          >
            {sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs",
                  "bg-[var(--color-bg-secondary)] border border-[var(--color-border)]",
                  "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
                  "hover:border-[var(--color-border-hover)] transition-colors"
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    source.type === "doc" && "bg-blue-400",
                    source.type === "product" && "bg-green-400",
                    source.type === "news" && "bg-purple-400",
                    source.type === "data" && "bg-orange-400"
                  )}
                />
                {source.title}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}