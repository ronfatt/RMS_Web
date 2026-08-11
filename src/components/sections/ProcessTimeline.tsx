'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="workflow" className="py-20 md:py-28 relative bg-[#060709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="4-STEP WORKFLOW"
          title="高效制作流程"
          titleHighlight="最快 3 天正式上线"
          subtitle="无需复杂的线下面谈与冗长的沟通流程。我们通过模块化协作，让您省时省心建立专业官网。"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {siteConfig.workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black text-slate-700 block mb-1">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-white tracking-tight">{step.title}</h3>
                <span className="text-[11px] font-medium text-indigo-400 block mb-2">
                  {step.subtitle}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                {step.details}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 font-normal">
          {siteConfig.deliveryNotice}
        </p>
      </div>
    </section>
  );
};
