'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2, XCircle, Share2, Globe2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

export const ProblemSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = i18n[lang].problem;

  return (
    <section className="py-20 md:py-28 relative bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Social Media Only Box */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  STATUS QUO
                </span>
                <h3 className="text-xl font-extrabold text-slate-200">{t.statusQuoTitle}</h3>
              </div>
            </div>
            
            <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
              {t.statusQuoItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">{item.bold}</strong>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media + Owned Website */}
          <div className="p-8 rounded-3xl glass-card-accent space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-300 block">
                  RECOMMENDED STRATEGY
                </span>
                <h3 className="text-xl font-extrabold text-white">{t.recommendedTitle}</h3>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
              {t.recommendedItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">{item.bold}</strong>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
