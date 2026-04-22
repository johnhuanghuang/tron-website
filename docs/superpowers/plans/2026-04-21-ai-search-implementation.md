# AI Search Feature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an AI Search modal to the TRON website header that allows users to get intelligent answers about TRON blockchain, developer docs, ecosystem products, and news.

**Architecture:** Full-screen modal with chat interface. User messages are sent to `/api/ai-search` (POST) which calls MiniMax M2.7 API. Responses include markdown text and source links. State managed with React useState/useReducer.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS v4, framer-motion, @phosphor-icons/react, react-markdown

---

## File Structure

```
app/
├── api/
│   └── ai-search/
│       └── route.ts              # API Route - POST handler, MiniMax call
├── components/
│   ├── layout/
│   │   └── Header.tsx             # MODIFY - Add AI Search button
│   └── ai/
│       ├── AISearchModal.tsx      # CREATE - Main modal component
│       ├── ChatMessage.tsx        # CREATE - Individual message bubble
│       └── index.ts               # CREATE - Export barrel
└── lib/
    └── prompts/
        └── tron-assistant.ts      # CREATE - System prompt configuration

.env.local                        # MODIFY - Add MINIMAX_API_KEY
```

---

## Task 1: Create System Prompt Configuration

**Files:**
- Create: `lib/prompts/tron-assistant.ts`

```typescript
// lib/prompts/tron-assistant.ts

export interface Source {
  title: string;
  url: string;
  type: "doc" | "product" | "news" | "data";
}

export const SYSTEM_PROMPT = `You are a TRON blockchain intelligent assistant. Your role is to help users with:

1. TRON chain data questions (TVL, TPS, Gas fee, node count, block height)
2. Developer documentation and API usage
3. Ecosystem product recommendations
4. News and events information
5. Troubleshooting and problem solving

Guidelines:
- Use Markdown format for responses
- Use lists and tables for important information
- Provide clickable links using markdown format: [text](url)
- If a question is outside TRON scope, guide users to appropriate resources

Context:
- Website: https://tron.network
- Developer Docs: https://developers.tron.network
- Ecosystem products available in the knowledge base
- Latest news from tron.network
- Chain data: TVL $12.3B, TPS 2,627, Block time 0.3s, Gas fee $0.001
`;

export function buildMessages(
  userMessage: string,
  history: Array<{ role: "user" | "assistant"; content: string }>
) {
  const messages: Array<{ role: "user" | "assistant"; content: string }> = [
    { role: "system", content: SYSTEM_PROMPT },
  ];

  // Add history (last 10 messages to stay within token limits)
  const recentHistory = history.slice(-10);
  for (const msg of recentHistory) {
    messages.push({ role: msg.role, content: msg.content });
  }

  // Add current user message
  messages.push({ role: "user", content: userMessage });

  return messages;
}
```

- [ ] **Step 1: Create directory structure**

Run: `mkdir -p lib/prompts components/ai`

- [ ] **Step 2: Create lib/prompts/tron-assistant.ts with the code above**

- [ ] **Step 3: Verify file was created correctly**

Run: `head -20 lib/prompts/tron-assistant.ts`

---

## Task 2: Create API Route

**Files:**
- Create: `app/api/ai-search/route.ts`

```typescript
// app/api/ai-search/route.ts

import { NextRequest, NextResponse } from "next/server";
import { buildMessages, type Source } from "@/lib/prompts/tron-assistant";

const MINIMAX_API_URL = "https://api.minimax.chat/v1/text/chatcompletion_v2";
const MODEL = "MiniMax-Text-01";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface RequestBody {
  message: string;
  history?: ChatMessage[];
}

interface MiniMaxChoice {
  index: number;
  messages: Array<{
    sender_type: "user" | "bot";
    text: string;
  }>;
  finish_reason: "stop" | "unknown";
}

interface MiniMaxResponse {
  base_resp: {
    status_code: number;
    status_msg: string;
  };
  choices: MiniMaxChoice[];
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json();
    const { message, history = [] } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.MINIMAX_API_KEY;
    if (!apiKey) {
      console.error("MINIMAX_API_KEY is not set");
      return NextResponse.json(
        { error: "AI service not configured" },
        { status: 500 }
      );
    }

    const messages = buildMessages(message, history);

    const response = await fetch(MINIMAX_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("MiniMax API error:", response.status, errorText);
      return NextResponse.json(
        { error: "AI service temporarily unavailable" },
        { status: 502 }
      );
    }

    const data: MiniMaxResponse = await response.json();

    if (data.base_resp.status_code !== 0) {
      console.error("MiniMax API error:", data.base_resp.status_msg);
      return NextResponse.json(
        { error: "AI service error" },
        { status: 502 }
      );
    }

    const choice = data.choices?.[0];
    if (!choice || !choice.messages || choice.messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid response from AI service" },
        { status: 502 }
      );
    }

    // Get the last assistant message
    const assistantMessages = choice.messages.filter(
      (m) => m.sender_type === "bot"
    );
    const reply = assistantMessages[assistantMessages.length - 1]?.text || "";

    // Generate mock sources based on keywords in the reply
    const sources: Source[] = generateSources(reply);

    return NextResponse.json({
      reply,
      sources,
    });
  } catch (error) {
    console.error("AI Search API error:", error);
    return NextResponse.json(
      { error: "Request timeout, please try again later" },
      { status: 504 }
    );
  }
}

function generateSources(reply: string): Source[] {
  const sources: Source[] = [];
  const lowerReply = reply.toLowerCase();

  // Add relevant sources based on content
  if (
    lowerReply.includes("document") ||
    lowerReply.includes("api") ||
    lowerReply.includes("sdk")
  ) {
    sources.push({
      title: "TRON Developer Documentation",
      url: "https://developers.tron.network",
      type: "doc",
    });
  }

  if (
    lowerReply.includes("defi") ||
    lowerReply.includes("lending") ||
    lowerReply.includes("swap")
  ) {
    sources.push({
      title: "JustLend - DeFi Protocol",
      url: "https://justlend.org",
      type: "product",
    });
  }

  if (lowerReply.includes("stablecoin") || lowerReply.includes("usdd")) {
    sources.push({
      title: "USDD - Decentralized Stablecoin",
      url: "https://usdd.io",
      type: "product",
    });
  }

  if (lowerReply.includes("news") || lowerReply.includes("update")) {
    sources.push({
      title: "Latest TRON News",
      url: "https://tron.network/news",
      type: "news",
    });
  }

  // Default sources if none matched
  if (sources.length === 0) {
    sources.push(
      {
        title: "TRON Official Website",
        url: "https://tron.network",
        type: "doc",
      },
      {
        title: "Developer Documentation",
        url: "https://developers.tron.network",
        type: "doc",
      }
    );
  }

  return sources;
}
```

- [ ] **Step 1: Create directory structure**

Run: `mkdir -p app/api/ai-search`

- [ ] **Step 2: Create app/api/ai-search/route.ts with the code above**

- [ ] **Step 3: Verify the file was created correctly**

Run: `head -30 app/api/ai-search/route.ts`

---

## Task 3: Create ChatMessage Component

**Files:**
- Create: `app/components/ai/ChatMessage.tsx`

```tsx
// app/components/ai/ChatMessage.tsx

"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { type Source } from "@/lib/prompts/tron-assistant";

interface ChatMessageProps {
  content: string;
  role: "user" | "assistant";
  sources?: Source[];
}

export function ChatMessage({ content, role, sources }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-[var(--color-primary)] text-white rounded-br-md"
            : "bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] rounded-bl-md"
        }`}
        style={{
          border: isUser
            ? "none"
            : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="prose prose-sm prose-invert max-w-none">
          <ReactMarkdown
            components={{
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
              p: ({ children }) => (
                <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>
              ),
              code: ({ children }) => (
                <code className="px-1.5 py-0.5 rounded bg-white/10 text-xs font-mono">
                  {children}
                </code>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-white">{children}</strong>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Sources for assistant messages */}
        {!isUser && sources && sources.length > 0 && (
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-xs text-[var(--color-text-tertiary)] mb-2 font-medium uppercase tracking-wider">
              Sources
            </p>
            <div className="flex flex-wrap gap-2">
              {sources.map((source, idx) => (
                <a
                  key={idx}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
                  style={{
                    background: "rgba(255,59,48,0.1)",
                    border: "1px solid rgba(255,59,48,0.2)",
                    color: "var(--color-primary)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                  {source.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
```

- [ ] **Step 1: Create app/components/ai directory**

Run: `mkdir -p app/components/ai`

- [ ] **Step 2: Create app/components/ai/ChatMessage.tsx with the code above**

- [ ] **Step 3: Install react-markdown**

Run: `cd /Users/john/.openclaw/workspace/projects/tron-website && npm install react-markdown`

---

## Task 4: Create AISearchModal Component

**Files:**
- Create: `app/components/ai/AISearchModal.tsx`

```tsx
// app/components/ai/AISearchModal.tsx

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PaperPlaneTilt, Sparkle, CircleNotch } from "@phosphor-icons/react";
import { ChatMessage } from "./ChatMessage";
import { type Source } from "@/lib/prompts/tron-assistant";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
}

interface AISearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AISearchModal({ isOpen, onClose }: AISearchModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Welcome to TRON AI Search! I can help you with:\n\n- **Chain Data**: TVL, TPS, Gas fees, nodes, block height\n- **Developer Docs**: API references, SDK usage, tutorials\n- **Ecosystem Products**: DeFi protocols, DApps, tools\n- **News & Updates**: Latest announcements and events\n\nWhat would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: userMessage,
    };
    setMessages((prev) => [...prev, userMsg]);

    try {
      // Build history for API (exclude welcome message)
      const history = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        }));

      const response = await fetch("/api/ai-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Request failed");
      }

      const data = await response.json();

      // Add assistant response
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply,
        sources: data.sources,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      // Add error message
      const errorMsg: Message = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content: `Sorry, I encountered an error: ${
          error instanceof Error ? error.message : "Please try again"
        }`,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-4 z-[101] flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #1a1a1d 0%, #111113 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,59,48,0.2) 0%, rgba(255,59,48,0.05) 100%)",
                    border: "1px solid rgba(255,59,48,0.3)",
                  }}
                >
                  <Sparkle size={20} weight="fill" className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    AI Search
                  </h2>
                  <p className="text-xs text-[var(--color-text-tertiary)]">
                    TRON Blockchain Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)] transition-colors"
                aria-label="Close"
              >
                <X size={20} weight="bold" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <ChatMessage
                    key={message.id}
                    content={message.content}
                    role={message.role}
                    sources={message.sources}
                  />
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div
                      className="flex items-center gap-2 px-4 py-3 rounded-2xl rounded-bl-md"
                      style={{
                        background: "var(--color-bg-surface)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <CircleNotch
                        size={18}
                        weight="bold"
                        className="text-[var(--color-primary)] animate-spin"
                      />
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        Thinking...
                      </span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div
              className="px-6 py-4"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="flex items-end gap-3 p-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about TRON..."
                  rows={1}
                  className="flex-1 bg-transparent text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] resize-none outline-none text-sm"
                  style={{ maxHeight: "120px" }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={`p-2.5 rounded-lg transition-all ${
                    input.trim() && !isLoading
                      ? "bg-[var(--color-primary)] text-white hover:opacity-90"
                      : "bg-white/10 text-white/40 cursor-not-allowed"
                  }`}
                  aria-label="Send"
                >
                  {isLoading ? (
                    <CircleNotch size={18} weight="bold" className="animate-spin" />
                  ) : (
                    <PaperPlaneTilt size={18} weight="fill" />
                  )}
                </button>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mt-2 text-center">
                Press Enter to send, Shift+Enter for new line
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 1: Create app/components/ai/AISearchModal.tsx with the code above**

- [ ] **Step 2: Verify file was created**

Run: `ls -la app/components/ai/`

---

## Task 5: Create AI Components Index

**Files:**
- Create: `app/components/ai/index.ts`

```typescript
// app/components/ai/index.ts

export { AISearchModal } from "./AISearchModal";
export { ChatMessage } from "./ChatMessage";
```

- [ ] **Step 1: Create app/components/ai/index.ts with the code above**

---

## Task 6: Modify Header Component

**Files:**
- Modify: `components/layout/Header.tsx:1-185`

Changes needed:
1. Add `useState` import for AI modal state
2. Import `AISearchModal` component
3. Add state for modal open/close
4. Replace the AI Chat button click handler to open modal
5. Update mobile menu AI Chat button similarly

**Specific edit locations:**
- Line 1: Add `"use client"` (already present)
- Line 1-2: Already imports `useState` - good
- Add import for `AISearchModal` near other imports
- Add `useState` for `isAIModalOpen`
- The existing ChatCircle button (around line 85-92) needs `onClick={() => setIsAIModalOpen(true)}`
- The mobile menu ChatCircle button (around line 157-164) needs same
- Add `<AISearchModal isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />` before the closing `</>`

```tsx
// Add to imports section:
import { AISearchModal } from "@/components/ai";

// Add after existing useState declarations:
const [isAIModalOpen, setIsAIModalOpen] = useState(false);

// Replace the desktop AI Chat button (around line 87-92):
<button
  onClick={() => setIsAIModalOpen(true)}
  className={cn(
    "p-2 rounded-lg text-[var(--color-text-secondary)]",
    "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]",
    "transition-colors duration-200"
  )}
  aria-label="AI Search"
>
  <ChatCircle size={20} weight="bold" />
</button>

// Replace the mobile menu AI Chat button (around line 159-164):
<button
  onClick={() => {
    setIsMobileMenuOpen(false);
    setIsAIModalOpen(true);
  }}
  className={cn(
    "p-3 rounded-xl text-[var(--color-text-secondary)]",
    "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]",
    "transition-colors duration-200"
  )}
  aria-label="AI Search"
>
  <ChatCircle size={22} weight="bold" />
</button>

// Add before final </> (around line 184):
<AISearchModal
  isOpen={isAIModalOpen}
  onClose={() => setIsAIModalOpen(false)}
/>
```

- [ ] **Step 1: Edit Header.tsx to add AISearchModal import**

- [ ] **Step 2: Add isAIModalOpen state**

- [ ] **Step 3: Update desktop AI Chat button to open modal**

- [ ] **Step 4: Update mobile AI Chat button to open modal**

- [ ] **Step 5: Add AISearchModal component before closing fragment**

---

## Task 7: Add Environment Variable

**Files:**
- Create/Modify: `.env.local`

```
MINIMAX_API_KEY=your_api_key_here
```

- [ ] **Step 1: Create .env.local with MINIMAX_API_KEY placeholder**

---

## Task 8: Final Verification

- [ ] **Step 1: Run build to check for errors**

Run: `cd /Users/john/.openclaw/workspace/projects/tron-website && npm run build 2>&1 | head -50`

- [ ] **Step 2: Check lint**

Run: `cd /Users/john/.openclaw/workspace/projects/tron-website && npm run lint 2>&1 | head -30`

---

## Execution Order

1. Task 1 → Task 2 → Task 3 → Task 4 → Task 5 → Task 6 → Task 7 → Task 8

## Verification Checklist

- [ ] AI Search button appears in header
- [ ] Clicking AI Search opens the modal
- [ ] Modal displays welcome message
- [ ] User can type and send messages
- [ ] Messages display in chat interface
- [ ] User messages are right-aligned, assistant left-aligned
- [ ] Assistant messages show loading state during API call
- [ ] Assistant responses render markdown
- [ ] Sources appear below assistant messages
- [ ] Clicking outside modal closes it
- [ ] X button closes modal
- [ ] Mobile responsive layout works
- [ ] No console errors
- [ ] Build succeeds