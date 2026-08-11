'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig, PortfolioItem } from '@/config/site';
import { Badge } from '@/components/ui/Badge';
import { Laptop, Smartphone, Eye, ExternalLink, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface PortfolioShowcaseProps {
  onSelectPortfolioItem: (item: PortfolioItem) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onSelectPortfolioItem,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '全部案例 (All Demos)' },
    { id: 'restaurant', label: '高级餐饮 / Bistro' },
    { id: 'beauty', label: '医美 / 美容养生' },
    { id: 'renovation', label: '装修 / 建筑工程' },
    { id: 'consultant', label: '企业顾问 / 金融' },
    { id: 'personal', label: '个人品牌 / 导师' },
    { id: 'creative', label: '摄影创意工作室' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? siteConfig.portfolioItems
      : siteConfig.portfolioItems.filter((item) => item.category === activeCategory);

  const handleCardClick = (item: PortfolioItem) => {
    trackEvent('view_portfolio', { item_id: item.id, item_title: item.title });
    onSelectPortfolioItem(item);
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="HIGH-END DEMO CONCEPTS"
          title="RM899 真实质感案例"
          titleHighlight="概念演示"
          subtitle="以下为您呈现 RMS Studio 为各个不同行业打造的 Demo 概念设计。所有排版与组件均符合我们对 RM899 高端网站的品质要求。"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-violet text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group cursor-pointer rounded-3xl bg-slate-900 border border-white/10 overflow-hidden hover:border-brand-violet/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Top Preview Banner Simulation */}
              <div className={`relative h-56 p-6 bg-gradient-to-br ${item.color} flex flex-col justify-between overflow-hidden`}>
                <div className="flex items-center justify-between z-10">
                  <Badge variant="accent">{item.badgeText}</Badge>
                  <span className="text-[11px] font-semibold text-white/80 px-2.5 py-0.5 rounded-full bg-slate-950/60 backdrop-blur-md">
                    {item.categoryZh}
                  </span>
                </div>

                {/* Card Title simulated mockup preview */}
                <div className="z-10 my-auto">
                  <h4 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Device Icon Indicators */}
                <div className="z-10 flex items-center justify-between text-[11px] text-slate-300 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Laptop className="w-3.5 h-3.5 text-brand-cyan" /> 桌面端
                    </span>
                    <span className="flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-brand-cyan" /> 手机端
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-brand-cyan font-bold group-hover:translate-x-1 transition-transform">
                    点击预览 <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Bottom Info Footer */}
              <div className="p-5 bg-slate-950 flex flex-wrap gap-1.5 border-t border-white/5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-400 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500">
          注：以上展示的网站作品均为 RMS Studio 设计的概念 Demo，旨在展示系统组件、色彩美学与转化排版规范。
        </div>
      </div>
    </section>
  );
};
