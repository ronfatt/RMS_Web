'use client';

import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
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
    <section className="py-20 md:py-32 relative bg-slate-950 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-violet/20 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-16 bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-950 border-2 border-brand-violet/40 shadow-2xl shadow-indigo-950/80 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-violet/20 text-brand-cyan border border-brand-violet/30">
            <Sparkles className="w-4 h-4" /> RMS STUDIO STARTER PACKAGE
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            你的生意已经开始了。
            <br />
            现在，给它一个<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-indigo-300 to-purple-300">真正属于自己的网上门面</span>。
          </h2>

          <div className="pt-2 flex items-center justify-center gap-3 text-lg font-bold text-slate-300">
            <span>RM899</span>
            <span>·</span>
            <span className="text-brand-cyan">Professional Starter Website</span>
          </div>

          {/* Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
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

          <div className="pt-4 border-t border-white/10 max-w-xl mx-auto space-y-2">
            <p className="text-xs text-slate-400">
              💡 没有压力销售。先告诉我们你的行业，我们会先客观判断这个配套是否适合你。
            </p>
            <div className="flex items-center justify-center gap-2 text-[11px] text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>制作前确认完整报价 · 3–7 个工作日精细交付</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
