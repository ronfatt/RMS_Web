'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2, MessageCircle, Info, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';
import { useLanguage } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

interface PackageSectionProps {
  onOpenLeadModal: () => void;
}

export const PackageSection: React.FC<PackageSectionProps> = ({ onOpenLeadModal }) => {
  const { lang } = useLanguage();
  const t = i18n[lang].package;

  const handleWhatsApp = () => {
    trackEvent('package_whatsapp_click');
    onOpenLeadModal();
  };

  return (
    <section id="package" className="py-20 md:py-28 relative bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl glass-card-premium p-8 sm:p-12 border-2 border-indigo-500/40 shadow-2xl space-y-8">
            {/* Top Recommended Tag */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-600 to-purple-600 text-white px-5 py-1.5 rounded-bl-2xl text-xs font-bold tracking-wider uppercase shadow-md">
              {t.badge}
            </div>

            {/* Price Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="text-xs font-extrabold text-indigo-400 tracking-wider uppercase block mb-1">
                  {t.cardTag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {t.cardTitle}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {t.delivery}
                </p>
              </div>

              <div className="text-left md:text-right">
                <span className="text-xs text-slate-400 block font-medium">{t.priceLabel}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">{siteConfig.price}</span>
                  <span className="text-xs text-slate-400 font-semibold">/ NETT</span>
                </div>
              </div>
            </div>

            {/* Inclusions */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                {t.deliverablesTitle}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {t.features.map((featureText, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl border bg-white/[0.03] border-white/10 text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium leading-snug">{featureText}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparency Note */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-300">
                <Info className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{t.transparencyTitle}</span>
              </div>
              <p className="leading-relaxed text-amber-200/90 pl-6">
                {t.transparencyNotice}
              </p>
            </div>

            {/* Bottom Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.guaranteeText}</span>
              </div>

              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleWhatsApp}
                icon={<MessageCircle className="w-5 h-5 fill-slate-950" />}
                className="w-full sm:w-auto font-black text-base"
              >
                {t.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
