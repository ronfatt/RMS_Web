'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              'rounded-2xl border transition-all duration-300 overflow-hidden',
              isOpen
                ? 'bg-slate-900/90 border-brand-violet/40 shadow-lg shadow-indigo-950/20'
                : 'bg-slate-900/40 border-white/10 hover:border-white/20'
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-100 hover:text-indigo-300 focus:outline-none transition-colors"
            >
              <span className="text-base md:text-lg leading-snug">{item.question}</span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300',
                  isOpen && 'transform rotate-180 text-brand-cyan'
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm md:text-base text-slate-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
