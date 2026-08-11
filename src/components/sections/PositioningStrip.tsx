'use client';

import React from 'react';

export const PositioningStrip: React.FC = () => {
  const benefits = [
    { title: '专业排版设计', desc: '根据品牌色调与行业高精排版' },
    { title: 'Mobile Responsive', desc: '完美适配手机、平板与桌面端' },
    { title: 'WhatsApp Integration', desc: '点击按键直接引导客户询价' },
    { title: 'Basic SEO Setup', desc: '基础 On-Page 架构与谷歌抓取' },
    { title: '高效快速上线', desc: '标准化流程 3–7 天交付审核' },
  ];

  return (
    <section className="py-8 bg-slate-950 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-800/60 text-center">
          {benefits.map((item, idx) => (
            <div key={idx} className="p-4 flex flex-col justify-center">
              <h3 className="text-sm font-bold text-slate-100">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
