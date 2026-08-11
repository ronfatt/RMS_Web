'use client';

import React, { useState } from 'react';
import { X, Laptop, Smartphone, ExternalLink, MessageCircle, Globe } from 'lucide-react';
import { PortfolioItem } from '@/config/site';
import { DeviceMockup } from '@/components/ui/DeviceMockup';
import { useLanguage } from '@/context/LanguageContext';

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
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');

  if (!item) return null;

  const getCategoryText = () => {
    if (lang === 'bm') return item.categoryBm || item.categoryZh;
    if (lang === 'en') return item.categoryEn || item.categoryZh;
    return item.categoryZh;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-lg animate-fadeIn overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-slate-950 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/80 my-8 text-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Info */}
        <div className="mb-6 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 mb-3">
            <span>{item.badgeText}</span>
            <span>·</span>
            <span>{getCategoryText()}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {item.title}
          </h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed font-normal">
            {item.description}
          </p>
        </div>

        {/* Device Switcher & Live Link */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 mb-6 gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'desktop'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              <Laptop className="w-4 h-4" /> Desktop Preview
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'mobile'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              <Smartphone className="w-4 h-4" /> Mobile Preview
            </button>
          </div>

          {/* Live Link Button */}
          {item.demoUrl && (
            <a
              href={item.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
            >
              <Globe className="w-4 h-4 text-sky-400" />
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          )}
        </div>

        {/* Device Viewport Preview */}
        <div className="py-4 flex justify-center bg-slate-900/50 rounded-2xl border border-white/10 p-4 sm:p-8">
          <DeviceMockup
            type={activeTab}
            title={item.title}
            category={getCategoryText()}
            url={item.demoUrl ? item.demoUrl.replace(/^https?:\/\//, '') : `${item.id}.my`}
            previewType={item.category as any}
          />
        </div>

        {/* Modal Bottom Action */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 text-xs text-slate-400 font-medium">
            {item.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => onSelectWhatsApp(`regarding client project "${item.title}"`)}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#25D366] to-[#128C7E] text-slate-950 hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            Inquire Similar RM899 Website
          </button>
        </div>
      </div>
    </div>
  );
};
