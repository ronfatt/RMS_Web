'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface IndustryGridProps {
  onOpenLeadModal: () => void;
}

export const IndustryGrid: React.FC<IndustryGridProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="py-20 md:py-28 relative bg-[#060709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="TARGET AUDIENCE"
          title="什么生意适合"
          titleHighlight="RM899 专业官网配套？"
          subtitle="只要您的客户会在 Google 或社交平台上搜索您的服务或公司，您就需要一个清楚、专业、属于自己的网上门面。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
          {siteConfig.industries.map((ind) => (
            <div
              key={ind.id}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">
                  {ind.nameEn}
                </span>
                <h3 className="text-lg font-bold text-white">{ind.name}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{ind.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center max-w-4xl mx-auto space-y-3">
          <h4 className="text-lg font-bold text-white">
            未在列表中找到你的行业？
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            只要您有产品服务需要展示，并希望通过 WhatsApp 获取客户咨询，RM899 配套就能完全覆盖您的需求。
          </p>
          <div className="pt-2">
            <Button variant="outline" size="md" onClick={onOpenLeadModal} icon={<ArrowRight className="w-4 h-4" />}>
              告诉我你的行业，立即评估是否适合
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
