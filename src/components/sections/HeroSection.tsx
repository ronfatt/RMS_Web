'use client';

import React from 'react';
import { MessageCircle, ArrowDownRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { DeviceMockup } from '@/components/ui/DeviceMockup';
import { trackEvent } from '@/lib/analytics';

interface HeroSectionProps {
  onOpenLeadModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLeadModal }) => {
  const handlePackageScroll = () => {
    const el = document.getElementById('package');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    trackEvent('hero_whatsapp_click');
    onOpenLeadModal();
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-[#060709] overflow-hidden">
      {/* Subtle background gradient grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Subtle Editorial Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 border border-slate-800 bg-slate-950">
            <span>{siteConfig.heroEyebrow}</span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.08]">
            {siteConfig.heroHeadlinePrefix}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-indigo-300">
              {siteConfig.heroHeadlineHighlight}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            {siteConfig.heroSubheadline}
          </p>

          {/* Price Anchor */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">STARTER PACKAGE</span>
            <div className="px-3.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-white font-extrabold text-lg sm:text-xl">
              {siteConfig.price} <span className="text-xs text-slate-400 font-normal">NETT</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handlePackageScroll}
              icon={<ArrowDownRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              看看 RM899 包什么
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsApp}
              icon={<MessageCircle className="w-5 h-5 fill-slate-950" />}
              className="w-full sm:w-auto"
            >
              WhatsApp 咨询需求
            </Button>
          </div>

          {/* Value Checklist */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 清楚配套无隐形收费
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 拿得出手的专业设计
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% 手机端响应式
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 3–7 天目标上线
            </span>
          </div>
        </div>

        {/* Hero Laptop Mockup */}
        <div className="mt-14 md:mt-20 relative max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-2 sm:p-3 shadow-2xl">
            <DeviceMockup
              type="laptop"
              url="laura-bistro.com.my"
              title="L'Aura Fine Dining & Bistro"
              category="高级餐饮 / Bistro"
              previewType="restaurant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
