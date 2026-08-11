'use client';

import React from 'react';
import { CheckCircle2, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

export const LiveProofSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = i18n[lang].liveProof;

  return (
    <section className="py-16 relative bg-gradient-to-b from-[#07080D] via-slate-900/60 to-[#07080D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 glass-card-accent text-center space-y-6 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="mb-2">
            <Badge variant="accent">
              <Eye className="w-3.5 h-3.5 text-indigo-400" />
              <span>{t.eyebrow}</span>
            </Badge>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            {t.headline}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-sky-300">
              {t.headlineHighlight}
            </span>
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            {t.subtitle}
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-semibold">
            {t.bullets.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
