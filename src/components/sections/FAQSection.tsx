'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { Accordion } from '@/components/ui/Accordion';
import { useLanguage } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

export const FAQSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = i18n[lang].faq;

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
        />

        <Accordion items={siteConfig.faqItems} defaultOpenId="faq-1" />
      </div>
    </section>
  );
};
