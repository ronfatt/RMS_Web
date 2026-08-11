'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2, MessageCircle, Info, Sparkles, ShieldCheck } from 'lucide-react';
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
    <section id="package" className="py-20 md:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CLEAR SCOPE & PRICING"
          title="RM899 Starter Website"
          titleHighlight="完整配套范围"
          subtitle="适合需要快速建立专业网上门面的中小企业、个人品牌与服务型生意。范围透明无坑，打造高效率的转化入口。"
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative rounded-3xl bg-slate-900 border-2 border-brand-violet/50 p-8 sm:p-12 shadow-2xl shadow-indigo-950/60 overflow-hidden">
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-violet to-brand-purple text-white px-6 py-2 rounded-bl-2xl text-xs font-bold tracking-wider uppercase">
              RECOMMENDED FOR SME
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-bold text-brand-cyan tracking-wider uppercase">
                  COMPLETE BUSINESS STARTER
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  RM899 专业官网定制配套
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  目标交付周期：{siteConfig.deliveryEstimate} （资料齐备后）
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

            {/* Inclusions Grid */}
            <div className="py-8">
              <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-cyan" />
                配套包含的具体服务清单 (12 Core Deliverables)：
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {siteConfig.packageFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border ${
                      feature.highlight
                        ? 'bg-brand-violet/10 border-brand-violet/30 text-white'
                        : 'bg-white/[0.02] border-white/5 text-slate-300'
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium leading-snug">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparency Note */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm space-y-2 mb-8">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <Info className="w-4 h-4 shrink-0" />
                <span>诚信透明提示 (Transparency Statement)：</span>
              </div>
              <p className="leading-relaxed pl-6">
                {siteConfig.transparencyNotice}
              </p>
            </div>

            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>包含 {siteConfig.revisionLimit} · 交付完成后提供源代码与管理使用</span>
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
