'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';
import { LeadFormData } from '@/types';

interface LeadQualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadQualificationModal: React.FC<LeadQualificationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    industry: '餐饮与食品',
    brandName: '',
    hasWebsite: '暂无网页',
    websiteType: '公司官网 (Single-Page Funnel)',
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
        className="relative w-full max-w-lg bg-slate-900 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/60 overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-violet/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="关闭"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-violet/10 text-brand-cyan mb-2">
            <Sparkles className="w-3.5 h-3.5" /> 快捷 WhatsApp 需求定位
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            先告诉我们你的需求
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            只需 15 秒，我们将为您准备最精准的 RM899 配套建议。
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Industry Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              1. 您的行业类型：
            </label>
            <select
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-slate-200 text-sm focus:outline-none focus:border-brand-violet"
            >
              <option value="餐饮与食品 (F&B / Restaurant)">餐饮与食品 (F&B / Restaurant)</option>
              <option value="美容美发 / 医美诊所 (Beauty / SPA)">美容美发 / 医美诊所 (Beauty / SPA)</option>
              <option value="室内设计 / 装修工程 (Renovation)">室内设计 / 装修工程 (Renovation)</option>
              <option value="专业顾问 / 金融保险 (Consultant)">专业顾问 / 金融保险 (Consultant)</option>
              <option value="个人品牌 / 导师教练 (Personal Brand)">个人品牌 / 导师教练 (Personal Brand)</option>
              <option value="摄影与创意工作室 (Creative Studio)">摄影与创意工作室 (Creative Studio)</option>
              <option value="零售与本地 SME (Local SME)">零售与本地 SME (Local SME)</option>
              <option value="其他行业 (Other)">其他行业 (Other)</option>
            </select>
          </div>

          {/* Brand Name Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              2. 品牌 / 公司名称（选填）：
            </label>
            <input
              type="text"
              placeholder="例如：L'Aura Bistro 或 铭记装修"
              value={formData.brandName}
              onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-brand-violet"
            />
          </div>

          {/* Current Site Status */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              3. 目前是否有网站？
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['暂无网页', '只有 FB/IG', '旧网站需重做'].map((status) => (
                <button
                  type="button"
                  key={status}
                  onClick={() => setFormData({ ...formData, hasWebsite: status })}
                  className={`py-2 px-2 text-xs font-medium rounded-xl border transition-all ${
                    formData.hasWebsite === status
                      ? 'bg-brand-violet/20 border-brand-violet text-white font-semibold'
                      : 'bg-slate-950/60 border-white/10 text-slate-400 hover:border-white/20'
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
              4. 希望达到的主要目的：
            </label>
            <select
              value={formData.websiteType}
              onChange={(e) => setFormData({ ...formData, websiteType: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-slate-200 text-sm focus:outline-none focus:border-brand-violet"
            >
              <option value="公司官网 (Single-Page Funnel)">公司官网 (Single-Page Funnel)</option>
              <option value="产品 / 菜单展示 (Product Showcase)">产品 / 菜单展示 (Product Showcase)</option>
              <option value="个人品牌形象网 (Personal Website)">个人品牌形象网 (Personal Website)</option>
              <option value="广告落地页 (Ad Landing Page)">广告落地页 (Ad Landing Page)</option>
              <option value="服务预约系统 (Booking / Appointment)">服务预约系统 (Booking / Appointment)</option>
            </select>
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-[#25D366] text-slate-950 hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              继续前往 WhatsApp 对接
            </button>
          </div>

          <p className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            无需注册账号 · 无压力销售咨询
          </p>
        </form>
      </div>
    </div>
  );
};
