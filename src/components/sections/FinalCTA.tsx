'use client';

import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';

interface FinalCTAProps {
  onOpenLeadModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const handleWhatsApp = () => {
    trackEvent('final_whatsapp_click');
    onOpenLeadModal();
  };

  return (
    <section className="py-20 md:py-32 relative bg-[#060709] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-16 bg-slate-950 border border-slate-800 text-center space-y-6 shadow-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            RMS STUDIO STARTER PACKAGE
          </p>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            你的生意已经开始了。
            <br />
            现在，给它一个<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-indigo-200 to-indigo-300">真正属于自己的网上门面</span>。
          </h2>

          <div className="flex items-center justify-center gap-3 text-sm font-bold text-slate-400">
            <span className="text-white text-lg font-black">RM899</span>
            <span>·</span>
            <span className="text-slate-300">Professional Starter Website</span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              variant="whatsapp"
              size="lg"
              fullWidth
              onClick={handleWhatsApp}
              icon={<MessageCircle className="w-5 h-5 fill-slate-950" />}
              className="text-base font-extrabold"
            >
              开始制作我的网站
            </Button>
          </div>

          <div className="pt-4 border-t border-slate-800 max-w-xl mx-auto space-y-2">
            <p className="text-xs text-slate-400">
              💡 没有压力销售。先告诉我们你的行业，我们会客观评估这个配套是否适合你。
            </p>
            <div className="flex items-center justify-center gap-2 text-[11px] text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>制作前确认完整费用 · 3–7 个工作日交付初稿</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
