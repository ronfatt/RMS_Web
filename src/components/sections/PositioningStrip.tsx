'use client';

import React from 'react';
import { Palette, Smartphone, MessageSquare, Search, Zap } from 'lucide-react';

export const PositioningStrip: React.FC = () => {
  const benefits = [
    { icon: Palette, title: '专业视觉排版', desc: '根据品牌色调高精排版' },
    { icon: Smartphone, title: 'Mobile Responsive', desc: '完美适配手机与桌面端' },
    { icon: MessageSquare, title: 'WhatsApp Integration', desc: '点击按键直达快速询价' },
    { icon: Search, title: 'Basic SEO Setup', desc: '基础 On-Page 与谷歌抓取' },
    { icon: Zap, title: '高效快速上线', desc: '标准化流程 3–7 天交付' },
  ];

  return (
    <section className="py-10 bg-slate-950/80 border-y border-white/10 relative z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.07] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-3 group-hover:scale-110 transition-transform">
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
