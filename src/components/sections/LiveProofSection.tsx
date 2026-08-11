'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const LiveProofSection: React.FC = () => {
  return (
    <section className="py-16 relative bg-slate-950 border-y border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
          VISUAL STANDARD PROOF
        </p>

        <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
          你现在看到的这个网页，
          <br />
          就是我们交付给你的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-indigo-200 to-indigo-300">最低质感</span>。
        </h3>

        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed font-normal">
          没有廉价的模板痕迹，没有乱套的调色。干净干练的排版气场、流畅的手机端适配与清晰的转化逻辑，这就是 RM899 应该有的专业表现。
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 高端极简暗黑排版
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 流畅微交互与过场
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Mobile 移动端优化
          </span>
        </div>
      </div>
    </section>
  );
};
