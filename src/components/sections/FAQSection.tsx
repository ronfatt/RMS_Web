'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { Accordion } from '@/components/ui/Accordion';

export const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="常见问题答疑"
          titleHighlight="(FAQ)"
          subtitle="坦诚透明，不玩任何套路。以下是客户在合作前最关心的问题与解答。"
        />

        <Accordion items={siteConfig.faqItems} defaultOpenId="faq-1" />
      </div>
    </section>
  );
};
