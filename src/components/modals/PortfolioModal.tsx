'use client';

import React, { useState } from 'react';
import { X, Laptop, Smartphone, ExternalLink, MessageCircle } from 'lucide-react';
import { PortfolioItem } from '@/config/site';
import { DeviceMockup } from '@/components/ui/DeviceMockup';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectWhatsApp: (itemTitle: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onSelectWhatsApp,
}) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-lg animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/80 my-8 text-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="关闭"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Info */}
        <div className="mb-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-violet/10 text-brand-cyan mb-2">
            <span>{item.badgeText}</span>
            <span>·</span>
            <span>{item.categoryZh}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {item.title}
          </h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Device Switcher Controls */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'desktop'
                  ? 'bg-brand-violet text-white shadow-md'
                  : 'bg-slate-950/60 text-slate-400 hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" /> 桌面端视角 (Desktop)
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'mobile'
                  ? 'bg-brand-violet text-white shadow-md'
                  : 'bg-slate-950/60 text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" /> 手机端视角 (Mobile)
            </button>
          </div>

          <button
            onClick={() => onSelectWhatsApp(`关于案例《${item.title}》`)}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#25D366] text-slate-950 hover:bg-[#20bd5a] transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            询价类似设计
          </button>
        </div>

        {/* Device Viewport Preview */}
        <div className="py-4 flex justify-center bg-slate-950/50 rounded-2xl border border-white/5 p-4 sm:p-8">
          <DeviceMockup
            type={activeTab}
            title={item.title}
            category={item.categoryZh}
            url={`${item.id}.my`}
            previewType={item.category as any}
          />
        </div>

        {/* Modal Bottom CTA */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 text-xs text-slate-400">
            {item.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => onSelectWhatsApp(`关于案例《${item.title}》`)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-[#25D366] text-slate-950 hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            咨询制作类似质感的 RM899 网站
          </button>
        </div>
      </div>
    </div>
  );
};
