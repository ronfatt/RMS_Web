'use client';

import React from 'react';
import { Palette, Smartphone, MessageSquare, Search, Zap } from 'lucide-react';

export const PositioningStrip: React.FC = () => {
  const benefits = [
    { icon: Palette, title: '专业设计', desc: '根据品牌色调与行业高精定制' },
    { icon: Smartphone, title: 'Mobile Responsive', desc: '完美适配 100% 手机端与桌面端' },
    { icon: MessageSquare, title: 'WhatsApp Integration', desc: '点击按键直达 WhatsApp 快速转化' },
    { icon: Search, title: 'Basic SEO Setup', desc: '基础 On-Page SEO 结构与 Google 抓取' },
    { icon: Zap, title: '快速上线', desc: '高效工作流 3–7 个工作日精细交付' },
  ];

  return (
    <section className="py-10 bg-slate-950/80 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-cyan mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
