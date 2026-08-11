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
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              'rounded-xl border transition-all duration-200 overflow-hidden',
              isOpen
                ? 'bg-slate-900 border-slate-700'
                : 'bg-slate-950 border-slate-800 hover:border-slate-700'
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-100 hover:text-white focus:outline-none transition-colors"
            >
              <span className="text-sm md:text-base leading-snug">{item.question}</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200',
                  isOpen && 'transform rotate-180 text-white'
                )}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
