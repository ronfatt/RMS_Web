'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2, XCircle, Layers, Cpu, Workflow } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

export const WhyAffordableSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = i18n[lang].whyAffordable;
  const stepIcons = [Layers, Cpu, Workflow];

  return (
    <section id="why-affordable" className="py-20 md:py-28 relative bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {t.pillars.map((point, idx) => {
            const Icon = stepIcons[idx] || Layers;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl glass-card-premium space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-indigo-400/40 group-hover:text-indigo-300 transition-colors">
                    {point.step}
                  </span>
                  <span className="text-[10px] font-extrabold tracking-wider text-indigo-300 uppercase bg-indigo-500/20 px-2.5 py-1 rounded-full border border-indigo-500/30">
                    {point.tag}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-extrabold text-white tracking-tight">{point.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Core Quote Banner */}
        <div className="mb-16 p-8 rounded-3xl bg-gradient-to-r from-indigo-950/50 via-slate-900 to-purple-950/50 border border-indigo-500/30 text-center max-w-3xl mx-auto space-y-3 shadow-xl">
          <p className="text-lg sm:text-xl font-black text-white">
            {t.quote}
          </p>
          <p className="text-xs sm:text-sm text-slate-300">
            {t.quoteSub}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 space-y-4">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">
              TRADITIONAL AGENCY
            </span>
            <h4 className="text-base font-bold text-slate-200">
              {t.tradTitle}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              {t.tradSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RMS Modern Workflow */}
          <div className="p-8 rounded-3xl glass-card-accent space-y-4 shadow-2xl">
            <span className="text-[10px] font-extrabold text-indigo-300 uppercase tracking-widest block">
              RMS MODERN WORKFLOW
            </span>
            <h4 className="text-base font-bold text-white">
              {t.rmsTitle}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              {t.rmsSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-medium text-white">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
