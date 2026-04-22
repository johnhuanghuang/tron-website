"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PaperPlaneTilt, Sparkle, Brain } from "@phosphor-icons/react";
import { ChatMessage, type Message } from "./ChatMessage";
import { cn } from "@/lib/utils/cn";

interface Source {
  title: string;
  url: string;
  type: "doc" | "product" | "news" | "data";
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
      content: `## Welcome to TRON AI Assistant! 👋

I'm here to help you with anything related to TRON blockchain. I can assist with:

- **Chain Data**: TVL, TPS, block stats, accounts
- **Ecosystem Products**: JustLend, SunSwap, BTTC, and more
- **Developer Resources**: Documentation, tools, guides
- **News & Updates**: Latest TRON developments

What would you like to know?`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<
    Array<{ role: "user" | "assistant"; content: string }>
  >([]);
  const [currentSources, setCurrentSources] = useState<Source[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = async () => {
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setConversationHistory((prev) => [
      ...prev,
      { role: "user", content: trimmedInput },
    ]);
    setInputValue("");
    setIsLoading(true);

    // Add loading message
    const loadingMessage: Message = {
      id: `loading-${Date.now()}`,
      role: "assistant",
      content: "Thinking...",
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      const response = await fetch("/api/ai-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedInput,
          history: conversationHistory,
        }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();

      // Remove loading message
      setMessages((prev) => prev.filter((m) => m.id !== loadingMessage.id));

      // Add AI response
      const aiMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.reply || "I couldn't process your request. Please try again.",
      };

      setMessages((prev) => [...prev, aiMessage]);
      setConversationHistory((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
      setCurrentSources(data.sources || []);
    } catch (error) {
      // Remove loading message and show error
      setMessages((prev) => prev.filter((m) => m.id !== loadingMessage.id));

      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content:
          "I'm having trouble connecting. Please try again or check your connection.",
      };
      setMessages((prev) => [...prev, errorMessage]);
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

  const handleClose = () => {
    onClose();
    // Reset after animation completes
    setTimeout(() => {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: `## Welcome to TRON AI Assistant! 👋

I'm here to help you with anything related to TRON blockchain. I can assist with:

- **Chain Data**: TVL, TPS, block stats, accounts
- **Ecosystem Products**: JustLend, SunSwap, BTTC, and more
- **Developer Resources**: Documentation, tools, guides
- **News & Updates**: Latest TRON developments

What would you like to know?`,
        },
      ]);
      setConversationHistory([]);
      setCurrentSources([]);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative w-full h-full max-w-4xl mx-4 my-4",
              "bg-[var(--color-bg-primary)] border border-[var(--color-border)]",
              "rounded-2xl shadow-2xl overflow-hidden flex flex-col",
              "max-h-[calc(100vh-2rem)]"
            )}
          >
            {/* Header */}
            <div
              className={cn(
                "flex items-center justify-between px-6 py-4",
                "border-b border-[var(--color-border)]",
                "bg-[var(--color-bg-secondary)]"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    "bg-gradient-to-br from-[var(--color-primary)] to-purple-600",
                    "shadow-lg"
                  )}
                >
                  <Brain size={22} weight="fill" className="text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[var(--color-text-primary)]">
                    AI Search
                  </h2>
                  <p className="text-xs text-[var(--color-text-tertiary)] flex items-center gap-1">
                    <Sparkle size={12} weight="fill" className="text-yellow-400" />
                    Powered by MiniMax M2.7
                  </p>
                </div>
              </div>

              <button
                onClick={handleClose}
                className={cn(
                  "p-2 rounded-xl text-[var(--color-text-secondary)]",
                  "hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-surface)]",
                  "transition-colors duration-200"
                )}
                aria-label="Close"
              >
                <X size={22} weight="bold" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  sources={
                    message.role === "assistant" && message.id !== "welcome"
                      ? currentSources
                      : []
                  }
                />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div
              className={cn(
                "px-6 py-4 border-t border-[var(--color-border)]",
                "bg-[var(--color-bg-secondary)]"
              )}
            >
              <div
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl",
                  "bg-[var(--color-bg-primary)] border border-[var(--color-border)]",
                  "focus-within:border-[var(--color-primary)]",
                  "transition-colors duration-200"
                )}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about TRON, ecosystem products, or developer docs..."
                  disabled={isLoading}
                  className={cn(
                    "flex-1 bg-transparent text-sm text-[var(--color-text-primary)]",
                    "placeholder:text-[var(--color-text-tertiary)]",
                    "focus:outline-none resize-none"
                  )}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className={cn(
                    "p-2.5 rounded-lg flex items-center justify-center",
                    "transition-all duration-200 ease-out",
                    inputValue.trim() && !isLoading
                      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]"
                      : "bg-[var(--color-bg-surface)] text-[var(--color-text-tertiary)] cursor-not-allowed"
                  )}
                  aria-label="Send"
                >
                  <PaperPlaneTilt size={20} weight="fill" />
                </button>
              </div>
              <p className="text-xs text-[var(--color-text-tertiary)] mt-2 text-center">
                Press Enter to send · Shift + Enter for new line
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}