'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig, PortfolioItem } from '@/config/site';
import { Laptop, Smartphone, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

interface PortfolioShowcaseProps {
  onSelectPortfolioItem: (item: PortfolioItem) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onSelectPortfolioItem,
}) => {
  const { lang } = useLanguage();
  const t = i18n[lang].portfolio;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems =
    activeCategory === 'all'
      ? siteConfig.portfolioItems
      : siteConfig.portfolioItems.filter((item) => item.category === activeCategory);

  const handleCardClick = (item: PortfolioItem) => {
    trackEvent('view_portfolio', { item_id: item.id, item_title: item.title });
    onSelectPortfolioItem(item);
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 relative bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.eyebrow}
          title={t.title}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
        />

        {/* Category Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {t.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                  : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group cursor-pointer rounded-3xl glass-card-premium overflow-hidden flex flex-col justify-between"
            >
              {/* Demo Header Banner Simulation */}
              <div className={`relative h-56 p-6 bg-gradient-to-br ${item.color} flex flex-col justify-between overflow-hidden border-b border-white/10`}>
                <div className="flex items-center justify-between z-10">
                  <Badge variant="accent">{item.badgeText}</Badge>
                  <span className="text-[11px] font-bold text-white px-2.5 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10">
                    {item.categoryZh}
                  </span>
                </div>

                <div className="z-10 my-auto">
                  <h4 className="text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="z-10 flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-white/10 font-medium">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Laptop className="w-3.5 h-3.5 text-indigo-400" /> {t.desktop}
                    </span>
                    <span className="flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-indigo-400" /> {t.mobile}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-indigo-300 font-bold group-hover:translate-x-1 transition-transform">
                    {t.clickPreview} <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="p-5 bg-slate-950/80 flex flex-wrap gap-1.5 border-t border-white/5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400 font-medium">
          {t.note}
        </p>
      </div>
    </section>
  );
};
