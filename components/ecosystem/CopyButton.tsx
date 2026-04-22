"use client";

import { useState } from "react";
import { Copy, Check } from "@phosphor-icons/react";
import styles from "./CopyButton.module.css";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button onClick={handleCopy} className={styles.button} type="button">
      {copied ? (
        <>
          <Check size={18} weight="bold" />
          Copied!
        </>
      ) : (
        <>
          <Copy size={18} />
          Copy
        </>
      )}
    </button>
  );
}