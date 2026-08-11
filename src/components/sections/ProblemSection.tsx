'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CheckCircle2, XCircle, Share2, Globe2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative bg-[#07080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="MARKET INSIGHT"
          title="生意做得很好，为什么网上门面"
          titleHighlight="还停留在“随便就好”？"
          subtitle="许多马来西亚老板靠 FB、IG 和 WhatsApp 就能接到生意。社交平台很好，但它们是借来的阵地。要让高单价客户真正信任你，你需要一个属于自己的官网。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Social Media Only Box */}
          <div className="p-8 rounded-3xl bg-slate-900/60 border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                <Share2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  STATUS QUO
                </span>
                <h3 className="text-xl font-extrabold text-slate-200">仅靠社交媒体 (FB / IG / TikTok)</h3>
              </div>
            </div>
            
            <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">信息分散难以查找：</strong> 客户想找菜单、价目或案例，要在几十条帖文中下滑。</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">算法规则多变：</strong> 无法 100% 沉淀自己的独立客户流量资产。</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Google 搜寻不到：</strong> 客户在谷歌搜索您的行业或公司名时，查不到正式官网。</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">单价无法拉高：</strong> 缺乏商务信任背书，面对大单客户容易处于被动。</span>
              </li>
            </ul>
          </div>

          {/* Social Media + Owned Website */}
          <div className="p-8 rounded-3xl glass-card-accent space-y-6 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-300 block">
                  RECOMMENDED STRATEGY
                </span>
                <h3 className="text-xl font-extrabold text-white">社交媒体 + 专属专业官网</h3>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">品牌权威背书 (Credibility)：</strong> 拥有专业 Domain 官网，大幅提升客户第一印象与成交率。</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">服务价格清晰 (Clarity)：</strong> 核心优势与作品集一目了然，减少无意义客服询问。</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Google 主动搜寻 (Search)：</strong> 让在谷歌寻找您服务的客户第一时间找到您。</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">广告导流终点站 (Conversion)：</strong> 社交媒体广告流量引流至官网直接转化为 WhatsApp 咨询。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
