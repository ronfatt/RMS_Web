'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig, PortfolioItem } from '@/config/site';
import { Laptop, Smartphone, ArrowRight } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface PortfolioShowcaseProps {
  onSelectPortfolioItem: (item: PortfolioItem) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onSelectPortfolioItem,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '全部案例 (All)' },
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
    <section id="portfolio" className="py-20 md:py-28 relative bg-[#060709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="HIGH-END DEMO CONCEPTS"
          title="RM899 真实质感案例"
          titleHighlight="概念演示"
          subtitle="以下为 RMS Studio 为各个不同行业打造的 Demo 概念设计。所有组件与排版均符合我们对 RM899 高端网站的品质要求。"
        />

        {/* Category Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-slate-100 text-slate-950 font-bold'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group cursor-pointer rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Demo Canvas Banner */}
              <div className={`relative h-52 p-6 bg-gradient-to-br ${item.color} flex flex-col justify-between`}>
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-extrabold tracking-widest text-slate-300 uppercase px-2 py-0.5 rounded bg-slate-950/80">
                    {item.badgeText}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-300 px-2 py-0.5 rounded bg-slate-950/60">
                    {item.categoryZh}
                  </span>
                </div>

                <div className="z-10">
                  <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="flex items-center gap-1">
                    <Laptop className="w-3.5 h-3.5 text-slate-400" /> 桌面
                  </span>
                  <span className="flex items-center gap-1">
                    <Smartphone className="w-3.5 h-3.5 text-slate-400" /> 手机
                  </span>
                </div>

                <span className="flex items-center gap-1 text-slate-200 font-bold text-xs group-hover:translate-x-1 transition-transform">
                  点击预览 <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          注：以上展示均为 RMS Studio 设计的 Demo 概念，旨在展现系统排版、美学与转化逻辑。
        </p>
      </div>
    </section>
  );
};
