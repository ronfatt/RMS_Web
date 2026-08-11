'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { MessageSquare, UploadCloud, Layout, Rocket, Clock } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const stepIcons = [MessageSquare, UploadCloud, Layout, Rocket];

  return (
    <section id="workflow" className="py-20 md:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="SIMPLE 4-STEP WORKFLOW"
          title="高效制作流程"
          titleHighlight="最快 3 天正式上线"
          subtitle="无需复杂的开会与冗长的流程。我们通过模块化合作，让您省时省心建立专业官网。"
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12 relative">
          {siteConfig.workflowSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Rocket;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-slate-900 border border-white/10 hover:border-brand-violet/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-brand-cyan">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{step.title}</h3>
                  <span className="text-[11px] font-semibold text-indigo-300 block mb-2">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400">
                  💡 {step.details}
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery Estimate Notice */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-400">
          <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
          <span>{siteConfig.deliveryNotice}</span>
        </div>
      </div>
    </section>
  );
};
