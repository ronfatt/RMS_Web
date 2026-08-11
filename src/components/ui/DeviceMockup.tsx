'use client';

import React from 'react';
import { Globe, Lock, ArrowLeft, ArrowRight, RotateCw, Star, MessageCircle } from 'lucide-react';

interface DeviceMockupProps {
  type?: 'laptop' | 'desktop' | 'mobile';
  url?: string;
  title?: string;
  category?: string;
  previewType?: 'restaurant' | 'beauty' | 'renovation' | 'consultant' | 'personal' | 'creative' | 'generic';
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  type = 'laptop',
  url = 'laura-bistro.com.my',
  title = "L'Aura Fine Dining & Bistro",
  category = "高级餐饮 / Bistro",
  previewType = 'restaurant',
}) => {
  const getGradient = () => {
    switch (previewType) {
      case 'beauty':
        return 'from-slate-950 via-rose-950/60 to-slate-950';
      case 'renovation':
        return 'from-slate-950 via-indigo-950/60 to-slate-950';
      case 'consultant':
        return 'from-slate-950 via-emerald-950/60 to-slate-950';
      case 'personal':
        return 'from-slate-950 via-purple-950/60 to-slate-950';
      case 'creative':
        return 'from-slate-950 via-cyan-950/60 to-slate-950';
      default:
        return 'from-slate-950 via-amber-950/60 to-slate-950';
    }
  };

  const getAccentColor = () => {
    switch (previewType) {
      case 'beauty':
        return 'bg-pink-500 text-slate-950 shadow-pink-500/30';
      case 'renovation':
        return 'bg-blue-500 text-slate-950 shadow-blue-500/30';
      case 'consultant':
        return 'bg-emerald-400 text-slate-950 shadow-emerald-400/30';
      case 'personal':
        return 'bg-purple-400 text-slate-950 shadow-purple-400/30';
      case 'creative':
        return 'bg-cyan-400 text-slate-950 shadow-cyan-400/30';
      default:
        return 'bg-amber-400 text-slate-950 shadow-amber-400/30';
    }
  };

  if (type === 'mobile') {
    return (
      <div className="relative mx-auto w-[250px] h-[500px] sm:w-[270px] sm:h-[540px] bg-slate-950 rounded-[40px] p-3 border-4 border-slate-700/80 shadow-2xl shadow-indigo-950/50">
        {/* Phone Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-slate-800 rounded-full mr-2"></div>
          <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
        </div>

        {/* Mobile Viewport Screen */}
        <div className={`relative w-full h-full bg-gradient-to-b ${getGradient()} rounded-[30px] overflow-hidden pt-8 px-3.5 text-slate-100 flex flex-col justify-between border border-white/10`}>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/15 pb-2.5 mb-2">
            <span className="font-extrabold tracking-wide text-white text-[11px] truncate max-w-[130px]">{title}</span>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#25D366] text-slate-950 shadow-sm flex items-center gap-1">
              <MessageCircle className="w-2.5 h-2.5 fill-slate-950" /> WhatsApp
            </span>
          </div>

          {/* Simulated Web Card Content */}
          <div className="space-y-2.5 my-auto">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-white/10 text-indigo-300 border border-white/10">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" /> RMS STUDIO STARTER
            </div>
            <h4 className="text-sm font-extrabold leading-snug text-white">
              {title}
            </h4>
            <p className="text-[10px] text-slate-300 line-clamp-2 leading-relaxed">
              打造高信任感马来西亚官网门面，一键连接 WhatsApp 快速询价。
            </p>
            <div className="pt-1 flex gap-2">
              <button className={`px-3 py-1.5 text-[10px] font-bold rounded-lg ${getAccentColor()} shadow-md`}>
                免费了解服务
              </button>
              <button className="px-3 py-1.5 text-[10px] font-semibold rounded-lg bg-white/10 text-white border border-white/15">
                作品集展示
              </button>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="mt-auto border-t border-white/10 pt-2 pb-1 flex justify-around text-[9px] text-slate-400 font-medium">
            <span className="text-white font-bold">首页</span>
            <span>核心服务</span>
            <span>项目案例</span>
            <span>联络我们</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-white/20 bg-slate-950 shadow-2xl shadow-indigo-950/60 overflow-hidden">
      {/* Laptop Top Browser Bar */}
      <div className="px-4 py-3 bg-slate-900 border-b border-white/15 flex items-center justify-between gap-3 text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <div className="hidden sm:flex items-center gap-2 ml-3 text-slate-500 text-xs">
            <ArrowLeft className="w-3.5 h-3.5" />
            <ArrowRight className="w-3.5 h-3.5" />
            <RotateCw className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md bg-slate-950 border border-white/15 rounded-lg px-3 py-1 text-xs text-slate-200 flex items-center justify-center gap-2 truncate shadow-inner">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate text-[11px] font-mono text-slate-200">https://{url}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Globe className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline text-[11px] font-bold text-indigo-300">{category}</span>
        </div>
      </div>

      {/* Browser Viewport */}
      <div className={`relative min-h-[340px] sm:min-h-[400px] p-6 sm:p-10 bg-gradient-to-br ${getGradient()} flex flex-col justify-between text-slate-100 overflow-hidden`}>
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Top Header inside website */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex items-center gap-2">
            <div className={`w-3.5 h-3.5 rounded-full ${getAccentColor()}`}></div>
            <span className="font-extrabold text-sm tracking-wider text-white uppercase">{title}</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-xs text-slate-200 font-semibold">
            <span className="text-white">首页</span>
            <span className="text-slate-300 hover:text-white">关于我们</span>
            <span className="text-slate-300 hover:text-white">服务示范</span>
            <span className="text-slate-300 hover:text-white">联系我们</span>
            <button className="px-3.5 py-1.5 rounded-lg bg-[#25D366] text-slate-950 font-extrabold text-xs shadow-md">
              WhatsApp 快速咨询
            </button>
          </div>
        </div>

        {/* Hero inside website */}
        <div className="relative z-10 my-6 max-w-xl space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-indigo-300 border border-white/15">
            DEMO CONCEPT · RMS STUDIO RM899 STARTER
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            专为马来西亚商业打造的响应式官网。清晰呈现业务特色、权威信任背书与 WhatsApp 客户对接转化。
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button className={`px-4 py-2 rounded-xl text-xs font-extrabold ${getAccentColor()} shadow-lg`}>
              立即 WhatsApp 了解
            </button>
            <button className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 border border-white/20 text-white hover:bg-white/20">
              浏览业务详情
            </button>
          </div>
        </div>

        {/* Footer info bar inside website */}
        <div className="relative z-10 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-2 font-medium">
          <span>✓ 移动端 / 桌面端高精适配</span>
          <span>✓ WhatsApp 订单无缝对接</span>
          <span>✓ Google Maps 商家地址整合</span>
        </div>
      </div>
    </div>
  );
};
