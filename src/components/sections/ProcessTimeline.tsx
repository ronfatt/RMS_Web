'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { MessageSquare, UploadCloud, Layout, Rocket, Clock } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const stepIcons = [MessageSquare, UploadCloud, Layout, Rocket];

  return (
    <section id="workflow" className="py-20 md:py-28 relative bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="4-STEP WORKFLOW"
          title="高效制作流程"
          titleHighlight="最快 3 天正式上线"
          subtitle="无需复杂的线下面谈与冗长的沟通流程。我们通过模块化协作，让您省时省心建立专业官网。"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {siteConfig.workflowSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Rocket;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl glass-card-premium space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black text-indigo-400">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-extrabold text-white tracking-tight">{step.title}</h3>
                  <span className="text-[11px] font-bold text-indigo-300 block mb-2">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 font-medium">
                  💡 {step.details}
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-300 font-medium">
          <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>{siteConfig.deliveryNotice}</span>
        </div>
      </div>
    </section>
  );
};
