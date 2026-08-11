'use client';

import React from 'react';
import { Globe, Lock, ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';

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
        return 'from-rose-950 via-slate-900 to-pink-950';
      case 'renovation':
        return 'from-blue-950 via-slate-900 to-indigo-950';
      case 'consultant':
        return 'from-emerald-950 via-slate-900 to-teal-950';
      case 'personal':
        return 'from-purple-950 via-slate-900 to-indigo-950';
      case 'creative':
        return 'from-cyan-950 via-slate-900 to-sky-950';
      default:
        return 'from-amber-950 via-slate-900 to-orange-950';
    }
  };

  const getAccentBg = () => {
    switch (previewType) {
      case 'beauty':
        return 'bg-pink-500';
      case 'renovation':
        return 'bg-blue-500';
      case 'consultant':
        return 'bg-emerald-500';
      case 'personal':
        return 'bg-purple-500';
      case 'creative':
        return 'bg-cyan-500';
      default:
        return 'bg-amber-500';
    }
  };

  if (type === 'mobile') {
    return (
      <div className="relative mx-auto w-[240px] h-[480px] sm:w-[260px] sm:h-[520px] bg-slate-900 rounded-[38px] p-3 border-4 border-slate-700/80 shadow-2xl shadow-indigo-950/40">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-slate-800 rounded-full mr-2"></div>
          <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
        </div>

        {/* Screen */}
        <div className={`relative w-full h-full bg-gradient-to-b ${getGradient()} rounded-[28px] overflow-hidden pt-8 px-3 text-slate-100 flex flex-col justify-between text-xs`}>
          {/* Top Navigation */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
            <span className="font-bold tracking-wide text-white text-[11px] truncate max-w-[120px]">{title}</span>
            <span className="px-2 py-0.5 rounded text-[9px] font-semibold bg-emerald-500/20 text-emerald-300">WhatsApp</span>
          </div>

          {/* Body Content simulation */}
          <div className="space-y-2.5 my-auto">
            <div className="inline-block px-2 py-0.5 rounded-full text-[9px] bg-white/10 text-slate-300">
              RM899 专业官网设计
            </div>
            <h4 className="text-sm font-bold leading-snug text-white">
              {title}
            </h4>
            <p className="text-[10px] text-slate-300 line-clamp-2 leading-relaxed">
              为您的品牌打造高端网上形象，清晰呈现业务特色与 WhatsApp 转化入口。
            </p>
            <div className="pt-1 flex gap-2">
              <button className={`px-2.5 py-1 text-[10px] font-bold rounded-lg text-slate-950 ${getAccentBg()}`}>
                立即咨询
              </button>
              <button className="px-2.5 py-1 text-[10px] rounded-lg bg-white/10 text-white">
                查看服务
              </button>
            </div>
          </div>

          {/* Bottom Nav Bar */}
          <div className="mt-auto border-t border-white/10 pt-2 pb-1 flex justify-around text-[9px] text-slate-400">
            <span className="text-white font-medium">首页</span>
            <span>关于我们</span>
            <span>核心服务</span>
            <span>联系我们</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-white/15 bg-slate-950/90 shadow-2xl shadow-indigo-950/50 overflow-hidden backdrop-blur-xl">
      {/* Browser Bar */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-white/10 flex items-center justify-between gap-3 text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <div className="hidden sm:flex items-center gap-2 ml-3 text-slate-500 text-xs">
            <ArrowLeft className="w-3.5 h-3.5" />
            <ArrowRight className="w-3.5 h-3.5" />
            <RotateCw className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md bg-slate-950/80 border border-white/10 rounded-lg px-3 py-1 text-xs text-slate-300 flex items-center justify-center gap-1.5 truncate">
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate text-[11px] text-slate-300">https://{url}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Globe className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px] font-medium text-indigo-300">{category}</span>
        </div>
      </div>

      {/* Browser Web Content Viewport */}
      <div className={`relative min-h-[320px] sm:min-h-[380px] p-6 sm:p-10 bg-gradient-to-br ${getGradient()} flex flex-col justify-between text-slate-100 overflow-hidden`}>
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Floating Top Header inside website */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${getAccentBg()}`}></div>
            <span className="font-bold text-sm tracking-wider text-white uppercase">{title}</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-xs text-slate-300 font-medium">
            <span className="text-white hover:text-indigo-400">首页</span>
            <span className="hover:text-indigo-400">关于我们</span>
            <span className="hover:text-indigo-400">服务展示</span>
            <span className="hover:text-indigo-400">项目案例</span>
            <button className="px-3 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs">
              WhatsApp 联络
            </button>
          </div>
        </div>

        {/* Hero Banner simulation inside mock browser */}
        <div className="relative z-10 my-8 max-w-xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-indigo-300 mb-3 border border-white/10">
            DEMO CONCEPT · RMS STUDIO RM899 DESIGN
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
            专为商业转型打造的响应式官网。清楚展示您的核心服务价值、企业信任背书以及一键客户沟通系统。
          </p>
          <div className="flex flex-wrap gap-3">
            <button className={`px-4 py-2 rounded-xl text-xs font-bold text-slate-950 shadow-lg ${getAccentBg()}`}>
              立即沟通需求
            </button>
            <button className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 border border-white/15 text-white hover:bg-white/15">
              浏览业务详情
            </button>
          </div>
        </div>

        {/* Footer info bar inside website */}
        <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>✓ 移动端 / 桌面端高精适配</span>
          <span>✓ WhatsApp 订单无缝对接</span>
          <span>✓ Google Maps 商家地址整合</span>
        </div>
      </div>
    </div>
  );
};
