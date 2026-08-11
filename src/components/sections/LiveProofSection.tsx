'use client';

import React from 'react';
import { Eye, CheckCircle2, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const LiveProofSection: React.FC = () => {
  return (
    <section className="py-16 relative bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-brand-violet/15 via-slate-900 to-brand-purple/15 border border-brand-violet/30 shadow-2xl shadow-indigo-950/50 overflow-hidden text-center">
          {/* Subtle animated light orb */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-violet/20 text-brand-cyan mb-4">
            <Eye className="w-3.5 h-3.5" /> 视觉实操承诺 · Visual Standard Proof
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            你现在正在看的这个网页，
            <br />
            就是我们对 <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-indigo-300 to-purple-300">RM899 网站质感</span> 的基本要求。
          </h3>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            没有廉价的模板痕迹，没有刺眼的配色混乱。苹果级别的排版气场、流畅的手机响应适配与清晰的转化逻辑，这就是您将收到的专业官网。
          </p>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 高端暗黑质感
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 极致流畅动画
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Mobile 移动适配
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
