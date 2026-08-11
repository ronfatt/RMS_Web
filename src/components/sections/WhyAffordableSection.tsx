'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { CheckCircle2, XCircle } from 'lucide-react';

export const WhyAffordableSection: React.FC = () => {
  return (
    <section id="why-affordable" className="py-20 md:py-28 relative bg-[#060709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="STRATEGIC TRANSPARENCY"
          title={siteConfig.whyAffordable.title}
          subtitle={siteConfig.whyAffordable.subtitle}
        />

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {siteConfig.whyAffordable.points.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-slate-600">{point.step}</span>
                <span className="text-[10px] font-bold tracking-wider text-indigo-400 uppercase bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/40">
                  {point.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">{point.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Core Statement Banner */}
        <div className="mb-16 p-6 rounded-xl bg-slate-950 border border-slate-800 text-center max-w-3xl mx-auto space-y-2">
          <p className="text-base sm:text-lg font-bold text-white">
            “ AI 帮我们减少制作时间，不是减少对设计的要求。”
          </p>
          <p className="text-xs text-slate-400">
            我们利用现代提效工具，将原本需要 30 小时的开发周期压缩至 5 小时内，因此能以更公道的价格交付高品质官网。
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
              TRADITIONAL AGENCY
            </span>
            <h4 className="text-base font-bold text-slate-200">
              {siteConfig.whyAffordable.comparison.traditionalTitle}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              {siteConfig.whyAffordable.comparison.traditionalSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RMS Modern Workflow */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-700 space-y-4 shadow-xl">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">
              RMS MODERN WORKFLOW
            </span>
            <h4 className="text-base font-bold text-white">
              {siteConfig.whyAffordable.comparison.rmsTitle}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              {siteConfig.whyAffordable.comparison.rmsSteps.map((step, i) => (
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
