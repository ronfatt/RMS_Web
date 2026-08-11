'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { LeadFormData } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

interface LeadQualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadQualificationModal: React.FC<LeadQualificationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { lang } = useLanguage();
  const t = i18n[lang].modal;

  const [formData, setFormData] = useState<LeadFormData>({
    industry: 'F&B / Restaurant',
    brandName: '',
    hasWebsite: 'No Website / 暂无网页',
    websiteType: 'Single-Page Starter Funnel',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('lead_form_complete', formData);
    
    const url = buildWhatsAppUrl(undefined, formData);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 block mb-1">
            {t.eyebrow}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {t.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            {t.subtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Industry Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.field1}
            </label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
            >
              <option value="F&B / Restaurant">F&B / Restaurant (餐饮食品)</option>
              <option value="Beauty / SPA / Aesthetics">Beauty / SPA / Aesthetics (美容医美)</option>
              <option value="Renovation / Interior Design">Renovation / Interior Design (装修工程)</option>
              <option value="Professional Advisory / Finance">Professional Advisory / Finance (专业顾问)</option>
              <option value="Personal Brand / Coach">Personal Brand / Coach (个人品牌)</option>
              <option value="Creative Studio / Photography">Creative Studio / Photography (摄影工作室)</option>
              <option value="Local SME / Retail">Local SME / Retail (本地 SME)</option>
              <option value="Other Industry">Other Industry (其他行业)</option>
            </select>
          </div>

          {/* Brand Name Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.field2}
            </label>
            <input
              type="text"
              placeholder={t.field2Placeholder}
              value={formData.brandName}
              onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Current Site Status */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.field3}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['No Site', 'Only FB/IG', 'Re-design'].map((status) => (
                <button
                  type="button"
                  key={status}
                  onClick={() => setFormData({ ...formData, hasWebsite: status })}
                  className={`py-2 px-2 text-xs font-medium rounded-xl border transition-all ${
                    formData.hasWebsite === status
                      ? 'bg-indigo-600 border-indigo-500 text-white font-bold shadow-md'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Need */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.field4}
            </label>
            <select
              value={formData.websiteType}
              onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
            >
              <option value="Single-Page Starter Funnel">Single-Page Starter Funnel (公司官网)</option>
              <option value="Product Showcase">Product Showcase (产品/菜单展示)</option>
              <option value="Personal Brand Site">Personal Brand Site (个人品牌)</option>
              <option value="Ad Landing Page">Ad Landing Page (广告落地页)</option>
              <option value="Online Booking System">Online Booking System (服务预约)</option>
            </select>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-[#25D366] to-[#128C7E] text-slate-950 hover:bg-[#20bd5a] transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              {t.button}
            </button>
          </div>

          <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {t.note}
          </p>
        </form>
      </div>
    </div>
  );
};
