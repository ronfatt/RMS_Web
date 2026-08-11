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
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-hero-glow">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-violet/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-indigo-300 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{siteConfig.heroEyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
            {siteConfig.heroHeadlinePrefix}
            <br className="hidden sm:inline" />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-slate-400">
              {siteConfig.heroHeadlineHighlight}
              {/* Subtle strike / glow decoration under RM5,000 */}
              <span className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-violet to-brand-cyan opacity-40 rounded-full"></span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            {siteConfig.heroSubheadline}
          </p>

          {/* Price Offer Tag */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <span className="text-slate-400 tracking-wider font-semibold uppercase">专业网站制作 STARTING FROM</span>
            <div className="inline-flex items-baseline gap-1.5 px-4 py-1.5 rounded-2xl bg-gradient-to-r from-brand-violet/20 to-brand-purple/20 border border-brand-violet/30 shadow-lg">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">{siteConfig.price}</span>
              <span className="text-xs text-slate-400 line-through">原价 {siteConfig.originalPriceReference}</span>
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
              WhatsApp 咨询
            </Button>
          </div>

          {/* Value Bullet Points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 清楚配套无坑
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 高端专业设计
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Mobile Responsive
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 目标 3–7 天上线
            </span>
          </div>
        </div>

        {/* Hero Interactive Browser Mockup */}
        <div className="mt-14 md:mt-20 relative max-w-5xl mx-auto">
          {/* Decorative glow behind browser */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-violet via-brand-purple to-brand-cyan opacity-20 blur-2xl rounded-3xl"></div>
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
