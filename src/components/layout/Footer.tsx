'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, Globe, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-violet to-brand-cyan flex items-center justify-center text-white font-black text-base shadow-md">
                R
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              为中小企业、创业者与个人品牌打造真正能够拿出去见客户的专业官网。清楚配套，专业设计，高效制作。
            </p>
            <div className="flex items-center gap-2 text-xs text-indigo-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>透明报价 · 明确范围 · 无隐形续费圈套</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">快捷导航</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">案例展示</a>
              </li>
              <li>
                <a href="#package" className="hover:text-white transition-colors">RM899 配套</a>
              </li>
              <li>
                <a href="#why-affordable" className="hover:text-white transition-colors">优势解密</a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">制作流程</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">常见问题</a>
              </li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wider uppercase">服务条款与隐私</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  服务范围与条款 (Terms & Scope)
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  隐私权政策 (Privacy Policy)
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                服务咨询: {siteConfig.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          <p className="text-center sm:text-right text-[11px]">
            Domain & Cloud Hosting 为第三方独立服务，可依项目需求代办购买或自备绑定。
          </p>
        </div>
      </div>
    </footer>
  );
};
