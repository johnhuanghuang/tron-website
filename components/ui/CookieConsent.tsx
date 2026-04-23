'use client';

import { useState } from 'react';
import { X, Cookie } from '@phosphor-icons/react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 p-4',
        'bg-[var(--color-bg-surface)] border-t border-[var(--color-border)]',
        'shadow-[0_-4px_20px_rgba(0,0,0,0.3)]'
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
            <Cookie size={20} className="text-[var(--color-primary)]" />
          </div>
          <p className="text-sm text-[var(--color-text-secondary)]">
            We use cookies to enhance your experience. By continuing, you agree to our{' '}
            <a href="/privacy" className="text-[var(--color-primary)] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
          >
            Accept
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsVisible(false)}
          >
            Customize
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 hover:bg-[var(--color-bg-tertiary)] rounded-lg transition-colors"
          >
            <X size={18} className="text-[var(--color-text-tertiary)]" />
          </button>
        </div>
      </div>
    </div>
  );
}
