'use client';

import { useState } from 'react';
import { Globe, CaretDown } from '@phosphor-icons/react';
import { cn } from '@/lib/utils/cn';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
];

export function LanguageSwitcher({ currentLocale = 'en' }: { currentLocale?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLang = languages.find((l) => l.code === currentLocale) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg',
          'text-sm text-[var(--color-text-secondary)]',
          'hover:text-[var(--color-text-primary)]',
          'transition-colors duration-200'
        )}
      >
        <Globe size={18} />
        <span>{currentLang.label}</span>
        <CaretDown size={14} className={cn('transition-transform', isOpen && 'rotate-180')} />
      </button>
      
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className={cn(
            'absolute right-0 top-full mt-2 py-2 min-w-[120px]',
            'bg-[var(--color-bg-surface)] border border-[var(--color-border)]',
            'rounded-lg shadow-xl z-50'
          )}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setIsOpen(false);
                  // In production, would switch locale here
                }}
                className={cn(
                  'w-full px-4 py-2 text-left text-sm',
                  'hover:bg-[var(--color-bg-tertiary)]',
                  'transition-colors',
                  lang.code === currentLocale && 'text-[var(--color-primary)]'
                )}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
