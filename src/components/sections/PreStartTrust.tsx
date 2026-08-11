'use client';

import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const PreStartTrust: React.FC = () => {
  return (
    <section className="py-16 relative bg-slate-950 border-y border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white">
                合作承诺：开始之前，我们会先确认：
              </h3>
              <p className="text-xs text-slate-400">
                清楚明白 · 制作前确认完整费用 · 无未经许可的临时加价
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            {siteConfig.preStartConfirmations.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
