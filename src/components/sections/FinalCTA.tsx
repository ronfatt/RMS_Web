'use client';

import React from 'react';
import { MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';
import { Badge } from '@/components/ui/Badge';

interface FinalCTAProps {
  onOpenLeadModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenLeadModal }) => {
  const handleWhatsApp = () => {
    trackEvent('final_whatsapp_click');
    onOpenLeadModal();
  };

  return (
    <section className="py-20 md:py-32 relative bg-[#07080D] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-16 glass-card-accent border-2 border-indigo-500/40 text-center space-y-6 shadow-2xl overflow-hidden">
          <div className="mb-2">
            <Badge variant="accent">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>RMS STUDIO STARTER PACKAGE</span>
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            你的生意已经开始了。
            <br />
            现在，给它一个<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-sky-300">真正属于自己的网上门面</span>。
          </h2>

          <div className="flex items-center justify-center gap-3 text-sm font-bold text-slate-300">
            <span className="text-white text-2xl font-black text-gradient-white">RM899</span>
            <span>·</span>
            <span className="text-indigo-300 font-extrabold">Professional Starter Website</span>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              variant="whatsapp"
              size="lg"
              fullWidth
              onClick={handleWhatsApp}
              icon={<MessageCircle className="w-5 h-5 fill-slate-950" />}
              className="text-base font-black shadow-2xl"
            >
              开始制作我的网站
            </Button>
          </div>

          <div className="pt-4 border-t border-white/10 max-w-xl mx-auto space-y-2">
            <p className="text-xs text-slate-300 font-medium">
              💡 没有压力销售。先告诉我们你的行业，我们会客观评估这个配套是否适合你。
            </p>
            <div className="flex items-center justify-center gap-2 text-[11px] text-emerald-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>制作前确认完整费用 · 3–7 个工作日交付初稿</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
