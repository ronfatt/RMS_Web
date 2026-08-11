'use client';

import React from 'react';
import { CheckCircle2, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const LiveProofSection: React.FC = () => {
  return (
    <section className="py-16 relative bg-gradient-to-b from-[#07080D] via-slate-900/60 to-[#07080D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 glass-card-accent text-center space-y-6 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="mb-2">
            <Badge variant="accent">
              <Eye className="w-3.5 h-3.5 text-indigo-400" />
              <span>VISUAL STANDARD PROOF</span>
            </Badge>
          </div>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto">
            你现在看到的这个网页，
            <br />
            就是我们交付给你的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-sky-300">最低质感</span>。
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
            没有廉价的模板痕迹，没有乱套的调色。干净干练的排版气场、流畅的手机端适配与清晰的转化逻辑，这就是 RM899 应该有的专业表现。
          </p>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-semibold">
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
      </div>
    </section>
  );
};
