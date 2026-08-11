'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { trackEvent } from '@/lib/analytics';
import { Button } from '@/components/ui/Button';

interface NavbarProps {
  onOpenLeadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-violet to-brand-cyan flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-brand-cyan transition-colors">
              {siteConfig.brandName}
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase -mt-1 font-medium">
              DIGITAL
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleNavClick('portfolio')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            案例展示
          </button>
          <button
            onClick={() => handleNavClick('package')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            RM899 配套
          </button>
          <button
            onClick={() => handleNavClick('why-affordable')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            优势解密
          </button>
          <button
            onClick={() => handleNavClick('workflow')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            制作流程
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            FAQ 答疑
          </button>
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="whatsapp"
            size="sm"
            onClick={handleWhatsAppClick}
            icon={<MessageCircle className="w-4 h-4 fill-slate-950" />}
          >
            WhatsApp 咨询
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
          aria-label="菜单开关"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 border-b border-white/10 backdrop-blur-2xl p-6 shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-semibold text-slate-200">
            <button
              onClick={() => handleNavClick('portfolio')}
              className="text-left py-2 hover:text-brand-cyan transition-colors"
            >
              案例展示 (Demo Showcase)
            </button>
            <button
              onClick={() => handleNavClick('package')}
              className="text-left py-2 hover:text-brand-cyan transition-colors"
            >
              RM899 配套包含 (Package Details)
            </button>
            <button
              onClick={() => handleNavClick('why-affordable')}
              className="text-left py-2 hover:text-brand-cyan transition-colors"
            >
              为什么 RM899 也能做专业？
            </button>
            <button
              onClick={() => handleNavClick('workflow')}
              className="text-left py-2 hover:text-brand-cyan transition-colors"
            >
              4步制作流程 (Process)
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left py-2 hover:text-brand-cyan transition-colors"
            >
              常见问题 (FAQ)
            </button>
          </nav>

          <div className="mt-6 pt-6 border-t border-white/10">
            <Button
              variant="whatsapp"
              size="lg"
              fullWidth
              onClick={handleWhatsAppClick}
              icon={<MessageCircle className="w-5 h-5 fill-slate-950" />}
            >
              WhatsApp 立即咨询
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
