'use client';

import React from 'react';
import { MessageCircle, ArrowDownRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
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
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-mesh-dark overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/15 blur-[110px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow Badge */}
          <div className="mb-2">
            <Badge variant="accent">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>{siteConfig.heroEyebrow}</span>
            </Badge>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            {siteConfig.heroHeadlinePrefix}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-sky-300">
              {siteConfig.heroHeadlineHighlight}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            {siteConfig.heroSubheadline}
          </p>

          {/* Price Offer Anchor Tag */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <span className="text-slate-400 font-semibold tracking-wider uppercase">STARTER PACKAGE</span>
            <div className="inline-flex items-baseline gap-2 px-4 py-1.5 rounded-2xl bg-indigo-500/15 border border-indigo-500/40 glow-indigo">
              <span className="text-2xl sm:text-3xl font-black text-white">{siteConfig.price}</span>
              <span className="text-xs text-slate-400 font-semibold">/ NETT</span>
            </div>
          </div>

          {/* Dual CTAs */}
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

          {/* Value Bullet Points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300 font-medium">
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

        {/* Hero Interactive Laptop Frame */}
        <div className="mt-14 md:mt-20 relative max-w-5xl mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-sky-500/20 rounded-3xl blur-xl opacity-75"></div>
          <div className="relative">
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
