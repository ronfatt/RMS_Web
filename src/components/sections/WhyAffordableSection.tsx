'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { Cpu, Layers, Workflow, CheckCircle, Clock, Zap } from 'lucide-react';

export const WhyAffordableSection: React.FC = () => {
  const icons = [Layers, Cpu, Workflow];

  return (
    <section id="why-affordable" className="py-20 md:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="STRATEGIC TRANSPARENCY"
          title={siteConfig.whyAffordable.title}
          subtitle={siteConfig.whyAffordable.subtitle}
        />

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {siteConfig.whyAffordable.points.map((point, idx) => {
            const Icon = icons[idx] || Zap;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-brand-violet/40 transition-all space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-white/20 group-hover:text-brand-cyan transition-colors">
                    {point.step}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-brand-violet/10 text-brand-cyan uppercase">
                    {point.tag}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-cyan">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{point.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Strong Copy Banner */}
        <div className="mb-16 p-6 rounded-2xl bg-gradient-to-r from-brand-violet/20 via-slate-900 to-brand-purple/20 border border-brand-violet/30 text-center max-w-3xl mx-auto">
          <p className="text-base sm:text-lg font-bold text-white">
            “ AI 帮我们减少制作时间，不是减少对设计的要求。”
          </p>
          <p className="text-xs text-slate-300 mt-1">
            我们利用最新的现代化提效工具，把原本需要 30 个小时的开发时间压缩至 5 小时以内，因此能以更平易近人的价格交付高品质官网。
          </p>
        </div>

        {/* Traditional vs RMS Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>{siteConfig.whyAffordable.comparison.traditionalTitle}</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              {siteConfig.whyAffordable.comparison.traditionalSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-slate-500 font-bold">✕</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RMS Studio */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-950/40 to-slate-900 border-2 border-brand-violet/50 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-brand-cyan font-bold text-sm">
              <Zap className="w-4 h-4 text-brand-cyan" />
              <span>{siteConfig.whyAffordable.comparison.rmsTitle}</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
              {siteConfig.whyAffordable.comparison.rmsSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
