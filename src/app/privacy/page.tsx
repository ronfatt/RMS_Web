'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import { LeadQualificationModal } from '@/components/modals/LeadQualificationModal';

export default function PrivacyPage() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar onOpenLeadModal={() => setIsLeadModalOpen(true)} />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <h1 className="text-3xl font-extrabold text-white mb-6">隐私权政策 (Privacy Policy)</h1>
        
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-6">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. 信息收集</h2>
            <p>
              {siteConfig.brandName} 尊重您的个人隐私。我们仅收集您在提交需求表单或通过 WhatsApp 联系我们时主动提供的必要个人与商业信息（如姓名、联系电话、电子邮箱、品牌名称及行业需求）。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. 信息使用</h2>
            <p>
              我们收集的信息仅用于：
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>评估并回复您的网页制作咨询需求；</li>
              <li>在项目制作过程中与您沟通设计细节及交付事宜；</li>
              <li>提供必要的售后维护与技术支持。</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. 数据安全与第三方共享</h2>
            <p>
              我们绝不会将您的个人或商业数据出售、出租或转让给任何无关第三方。在网站部署与域名注册过程中，相关公开注册信息将依国际域名注册规范（ICANN）及云服务商要求妥善处理。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. 统计分析工具 (Analytics)</h2>
            <p>
              本网站可能使用 Google Analytics 及 Meta Pixel 收集匿名访问流量与用户交互事件，用于优化网站交互体验。这些数据不包含任何个人身份可识别信息（PII）。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">5. 联系我们</h2>
            <p>
              若您对本隐私政策有任何疑问，请通过电子邮箱联系我们：{siteConfig.email}。
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <Link href="/" className="text-xs font-semibold text-brand-cyan hover:underline">
            ← 返回 RMS Studio 首页
          </Link>
        </div>
      </main>

      <Footer />

      <LeadQualificationModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />
    </div>
  );
}
