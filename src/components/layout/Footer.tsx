'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = i18n[lang].footer;

  return (
    <footer className="bg-[#05060A] border-t border-white/10 text-slate-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 flex items-center justify-center text-white font-black text-base shadow-md">
                R
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {t.desc}
            </p>
            <div className="flex items-center gap-2 text-xs text-indigo-300 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.badge}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">{t.navTitle}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#package" className="hover:text-white transition-colors">RM899 Package</a>
              </li>
              <li>
                <a href="#why-affordable" className="hover:text-white transition-colors">Why RM899</a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">Process</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white tracking-wider uppercase">{t.legalTitle}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {t.termsLink}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {t.privacyLink}
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-slate-500 font-mono">
                {siteConfig.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          <p className="text-center sm:text-right text-[11px]">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
