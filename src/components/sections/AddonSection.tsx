'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { PlusCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

interface AddonSectionProps {
  onOpenLeadModal: () => void;
}

export const AddonSection: React.FC<AddonSectionProps> = ({ onOpenLeadModal }) => {
  const { lang } = useLanguage();
  const t = i18n[lang].addon;

  return (
    <section className="py-20 md:py-28 relative bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {siteConfig.addons.map((addon) => (
            <div
              key={addon.id}
              className={`relative p-6 rounded-3xl glass-card-premium ${
                addon.popular ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/20' : ''
              } flex flex-col justify-between space-y-4`}
            >
              {addon.popular && (
                <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-black bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                  POPULAR CHOICE
                </span>
              )}

              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-3">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-white">{addon.title}</h3>
                <span className="text-[10px] font-bold text-slate-400 block mb-2">{addon.titleEn}</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {addon.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Inquiry</span>
                <span className="font-bold text-indigo-300 px-2.5 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30">
                  {addon.priceText}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="md"
            onClick={onOpenLeadModal}
            icon={<MessageCircle className="w-4 h-4" />}
          >
            {t.quoteCta}
          </Button>
        </div>
      </div>
    </section>
  );
};
