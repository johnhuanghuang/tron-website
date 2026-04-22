"use client";

import { useState } from "react";
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

      {expanded && (
        <div className="border-t border-[var(--color-border)]">
          <div className="p-4 space-y-4">
            {/* Parameters */}
            {method.parameters.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-2">Parameters</h4>
                <div className="space-y-1">
                  {method.parameters.map((param) => (
                    <div key={param.name} className="flex gap-2 text-sm flex-wrap">
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
        </div>
      )}
    </div>
  );
}
