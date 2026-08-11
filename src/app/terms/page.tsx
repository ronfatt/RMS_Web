'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import { LeadQualificationModal } from '@/components/modals/LeadQualificationModal';

export default function TermsPage() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar onOpenLeadModal={() => setIsLeadModalOpen(true)} />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <h1 className="text-3xl font-extrabold text-white mb-6">服务范围与条款 (Terms & Scope)</h1>
        
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-6">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. 配套服务范围 (Package Scope)</h2>
            <p>
              {siteConfig.brandName} 的 RM899 Starter Package 指单页式（Single-Page Landing Funnel）响应式网站制作，包含最多 5 个核心内容板块、WhatsApp 按键对接、联络表单、基础 On-Page SEO 及上线协助。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. 修改与交付标准 (Revisions & Delivery)</h2>
            <p>
              配套包含上线前的 1 次完整设计修改（1 Revision Round）。初稿交付后，客户需将所有调整意见集中整理提供。制作周期一般为自客户完整资料提交起算 3–7 个工作日。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. 资料提供责任 (Client Materials)</h2>
            <p>
              客户需负责提供项目所需的合法 Logo、文案、图片与合法产品材料。若因客户延迟提供素材，上线交付日期将顺延。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. 域名与主机服务 (Domain & Hosting)</h2>
            <p>
              RM899 为网页设计与代码制作服务费，不包含第三方域名（Domain）与云托管（Hosting）的年度续费成本。客户可自行提供相关账号或由我们代为按实报实销报价配置。
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">5. 所有权与知识产权 (Ownership)</h2>
            <p>
              项目尾款结清并正式上线后，网页的所有最终源代码及媒体素材产权完全归客户所有，无需捆绑任何强制年费与限制。
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
