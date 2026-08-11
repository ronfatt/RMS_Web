'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { Button } from '@/components/ui/Button';
import { useLanguage, Language } from '@/context/LanguageContext';
import { i18n } from '@/config/i18n';

interface NavbarProps {
  onOpenLeadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const { lang, setLang } = useLanguage();
  const t = i18n[lang].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    setMobileMenuOpen(false);
    trackEvent('nav_whatsapp_click');
    onOpenLeadModal();
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'bm', label: 'B. Melayu', flag: '🇲🇾' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              {siteConfig.brandName}
            </span>
            <span className="text-[9px] tracking-widest text-slate-400 uppercase -mt-1 font-bold">
              DIGITAL STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
          <button
            onClick={() => handleNavClick('portfolio')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.portfolio}
          </button>
          <button
            onClick={() => handleNavClick('package')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.package}
          </button>
          <button
            onClick={() => handleNavClick('why-affordable')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.whyAffordable}
          </button>
          <button
            onClick={() => handleNavClick('workflow')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.workflow}
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            {t.faq}
          </button>
        </nav>

        {/* Right Action: Language Switcher & WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-xs font-bold text-slate-200 hover:border-white/20 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>{languages.find((l) => l.code === lang)?.flag}</span>
              <span className="uppercase">{lang}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-slate-900 border border-white/15 rounded-xl shadow-2xl overflow-hidden py-1 z-50 animate-fadeIn">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-xs font-bold flex items-center gap-2 hover:bg-white/10 transition-colors ${
                      lang === l.code ? 'text-indigo-400 bg-indigo-500/10' : 'text-slate-300'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            variant="whatsapp"
            size="sm"
            onClick={handleWhatsAppClick}
            icon={<MessageCircle className="w-4 h-4 fill-slate-950" />}
          >
            {t.cta}
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Quick Language Toggle */}
          <div className="flex items-center gap-1 bg-slate-900 border border-white/10 p-1 rounded-xl text-xs font-bold">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-1.5 py-0.5 rounded-md uppercase text-[10px] ${
                  lang === l.code ? 'bg-indigo-500 text-white' : 'text-slate-400'
                }`}
              >
                {l.code}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
            aria-label="菜单开关"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 border-b border-white/10 backdrop-blur-2xl p-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-bold text-slate-200">
            <button
              onClick={() => handleNavClick('portfolio')}
              className="text-left py-2 hover:text-indigo-400 transition-colors"
            >
              {t.portfolio}
            </button>
            <button
              onClick={() => handleNavClick('package')}
              className="text-left py-2 hover:text-indigo-400 transition-colors"
            >
              {t.package}
            </button>
            <button
              onClick={() => handleNavClick('why-affordable')}
              className="text-left py-2 hover:text-indigo-400 transition-colors"
            >
              {t.whyAffordable}
            </button>
            <button
              onClick={() => handleNavClick('workflow')}
              className="text-left py-2 hover:text-indigo-400 transition-colors"
            >
              {t.workflow}
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left py-2 hover:text-indigo-400 transition-colors"
            >
              {t.faq}
            </button>
          </nav>

          <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
            <Button
              variant="whatsapp"
              size="lg"
              fullWidth
              onClick={handleWhatsAppClick}
              icon={<MessageCircle className="w-5 h-5 fill-slate-950" />}
            >
              {t.cta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
