'use client';

import React from 'react';
import { Palette, Smartphone, MessageSquare, Search, Zap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

export const PositioningStrip: React.FC = () => {
  const { lang } = useLanguage();
  const benefits = i18n[lang].positioning.benefits;
  const icons = [Palette, Smartphone, MessageSquare, Search, Zap];

  return (
    <section className="py-10 bg-slate-950/80 border-y border-white/10 relative z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {benefits.map((item, idx) => {
            const Icon = icons[idx] || Palette;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
