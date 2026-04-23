'use client';

import { useState } from 'react';
import { ChatCircle, X } from '@phosphor-icons/react';
import { AISearchModal } from '@/app/components/ai/AISearchModal';
import { cn } from '@/lib/utils/cn';

export function FloatingAIWidget() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className={cn(
          'fixed bottom-6 right-6 z-40',
          'w-14 h-14 rounded-full',
          'bg-[var(--color-primary)] text-white',
          'shadow-lg shadow-[var(--color-primary)]/30',
          'hover:scale-110 hover:shadow-xl hover:shadow-[var(--color-primary)]/40',
          'transition-all duration-300',
          'flex items-center justify-center',
          'group'
        )}
        aria-label="Open TRON AI Assistant"
      >
        <ChatCircle
          size={28}
          weight="fill"
          className="group-hover:scale-110 transition-transform"
        />
        {/* Pulse ring */}
        <span
          className={cn(
            'absolute inset-0 rounded-full',
            'border-2 border-[var(--color-primary)]',
            'animate-ping opacity-30'
          )}
        />
      </button>

      {/* AI Modal */}
      <AISearchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
