'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const PreStartTrust: React.FC = () => {
  return (
    <section className="py-16 relative bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-emerald-500/30 shadow-2xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                合作承诺：开始之前，我们会先确认：
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                零隐形条款 · 无未经确认的任何额外临时收费
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
            {siteConfig.preStartConfirmations.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-indigo-300 font-medium">
              <Lock className="w-3.5 h-3.5" /> 制作完成后提供完整源码与账号交接
            </span>
            <span className="font-semibold text-slate-300">RMS Studio 诚信服务守则</span>
          </div>
        </div>
      </div>
    </section>
  );
};
