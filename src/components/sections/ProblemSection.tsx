'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Share2, Globe2, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="MARKET INSIGHT"
          title="你的生意已经很专业，"
          titleHighlight="为什么网站还停留在“有就好”？"
          subtitle="许多商家依靠 Facebook、Instagram、TikTok 与 WhatsApp 拓展生意。社交媒体非常棒，但它们并不是您真正拥有的『数字资产』。"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Social Media Only Box */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-red-500/20 relative overflow-hidden space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">仅靠社交媒体 (FB / IG / TikTok / WhatsApp)</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">✕</span>
                <span>信息过于零散：客户想找菜单/价目表/案例，需要往下滑动几十条帖文。</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">✕</span>
                <span>平台规则限制：算法多变、封号风险，粉丝无法 100% 沉淀为自主客户。</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">✕</span>
                <span>缺少 Google 搜寻：客户在谷歌搜索您的行业或公司名时，搜不到官网信息。</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">✕</span>
                <span>商务信任感欠缺：在面对高单价客户或企业大单时，显得不够正式。</span>
              </li>
            </ul>
          </div>

          {/* Social Media + Professional Website Synergy Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border border-brand-violet/40 relative overflow-hidden space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-brand-violet/20 border border-brand-violet/30 flex items-center justify-center text-brand-cyan">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">社交媒体 + 专属专业官网（最佳策略）</h3>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">品牌权威背书 (Credibility)：</strong> 拥有专业 Domain 官网，瞬间提升客户信任与企业形象。</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">信息极速透明 (Clarity)：</strong> 价格、服务、项目案例一目了然，减少客服重复解释内耗。</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Google 搜寻捕获 (SEO)：</strong> 让有主动需求的客户在谷歌搜索时第一时间找到您。</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">广告引流终点站 (Conversion)：</strong> 将 FB/IG/TikTok 投放的广告流量直接导流到官网沉淀。</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-indigo-300">
            社交媒体负责曝光吸引眼球，官网负责打造信任并把流量转化为真正的订单。
          </p>
        </div>
      </div>
    </section>
  );
};
