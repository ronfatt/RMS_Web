'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { Utensils, Sparkles, Hammer, Briefcase, UserCheck, Camera, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface IndustryGridProps {
  onOpenLeadModal: () => void;
}

export const IndustryGrid: React.FC<IndustryGridProps> = ({ onOpenLeadModal }) => {
  const iconMap: Record<string, any> = {
    Utensils,
    Sparkles,
    Hammer,
    Briefcase,
    UserCheck,
    Camera,
  };

  return (
    <section className="py-20 md:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="TARGET AUDIENCE"
          title="什么生意适合"
          titleHighlight="RM899 专业官网配套？"
          subtitle="只要您的客户会在 Google 或社交媒体上搜索您的公司或品牌，您就需要一个清楚、专业、属于自己的网上门面。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
          {siteConfig.industries.map((ind) => {
            const Icon = iconMap[ind.iconName] || Briefcase;
            return (
              <div
                key={ind.id}
                className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-brand-violet/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-cyan mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{ind.name}</h3>
                  <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mb-2">
                    {ind.nameEn}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{ind.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-violet/15 via-slate-900 to-brand-purple/15 border border-brand-violet/30 text-center max-w-4xl mx-auto space-y-4">
          <h4 className="text-lg sm:text-xl font-bold text-white">
            没在列表中看到你的行业？
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            只要您有产品服务需要展示，并希望通过 WhatsApp 获取客户咨询，RM899 单页官网配套就能完全覆盖您的需求。
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
