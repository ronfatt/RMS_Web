'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2, MessageCircle, Info, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';

interface PackageSectionProps {
  onOpenLeadModal: () => void;
}

export const PackageSection: React.FC<PackageSectionProps> = ({ onOpenLeadModal }) => {
  const handleWhatsApp = () => {
    trackEvent('package_whatsapp_click');
    onOpenLeadModal();
  };

  return (
    <section id="package" className="py-20 md:py-28 relative bg-[#060709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CLEAR SCOPE & PRICING"
          title="RM899 Starter Website"
          titleHighlight="完整配套范围"
          subtitle="适合需要快速建立专业网上门面的中小企业、个人品牌与服务型生意。范围清楚透明，打造高效的询价入口。"
        />

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl space-y-8">
            {/* Header / Price summary */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  ENTRY PACKAGE FOR SME
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  RM899 专业官网定制配套
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  目标交付周期：{siteConfig.deliveryEstimate} （资料齐全后）
                </p>
              </div>

              <div className="text-left md:text-right">
                <span className="text-xs text-slate-400 block font-medium">全套一次性开发费用</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">{siteConfig.price}</span>
                  <span className="text-xs text-slate-400 font-semibold">/ NETT</span>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                配套包含的 12 项具体交付内容 (12 Core Deliverables)：
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {siteConfig.packageFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-200 text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-medium leading-snug">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparency Note */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-slate-200">
                <Info className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>诚信透明提示 (Transparency Statement)：</span>
              </div>
              <p className="leading-relaxed text-slate-400 pl-6">
                {siteConfig.transparencyNotice}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>包含 {siteConfig.revisionLimit} · 100% 源代码产权归您所有</span>
              </div>

              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsApp}
                icon={<MessageCircle className="w-5 h-5 fill-slate-950" />}
                className="w-full sm:w-auto font-bold text-base"
              >
                我要 RM899 配套
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
