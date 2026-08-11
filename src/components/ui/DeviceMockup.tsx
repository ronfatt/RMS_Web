'use client';

import React, { useState } from 'react';
import { Globe, Lock, ArrowLeft, ArrowRight, RotateCw, Star, MessageCircle, ExternalLink } from 'lucide-react';

interface CustomPreviewData {
  badge: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  navItems: string[];
  gradient: string;
  accentColor: string;
}

interface DeviceMockupProps {
  type?: 'laptop' | 'desktop' | 'mobile';
  url?: string;
  title?: string;
  category?: string;
  previewType?: string;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  type = 'laptop',
  url = 'laura-bistro.com.my',
  title = "L'Aura Fine Dining & Bistro",
  category = "高级餐饮 / Bistro",
  previewType = 'restaurant',
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [useLiveIframe, setUseLiveIframe] = useState(false);

  // Tailored client preview dictionary matching real client branding & content
  const getClientPreviewData = (): CustomPreviewData => {
    const cleanUrl = (url || '').toLowerCase();

    if (cleanUrl.includes('sinbanhock') || title.includes('Sin Ban Hock')) {
      return {
        badge: 'SIN BAN HOCK TRADING · 建筑五金与建材工程',
        headline: 'Sin Ban Hock Trading (新万福建材)',
        subheadline: '马来西亚专业建筑五金、施工材料、水暖器材与工程供应一站式批发展示。质量保证，快速供货。',
        ctaPrimary: '询价 WhatsApp 了解',
        ctaSecondary: '浏览建材目录',
        navItems: ['首页', '建材分类', '工程案例', '联系我们'],
        gradient: 'from-slate-950 via-blue-950/70 to-slate-950',
        accentColor: 'bg-blue-500 text-slate-950 shadow-blue-500/30',
      };
    }

    if (cleanUrl.includes('enhancefengshui') || title.includes('Enhance Feng Shui')) {
      return {
        badge: 'ENHANCE FENG SHUI · 益风水命理咨询学堂',
        headline: 'Enhance Feng Shui Academy (益风水)',
        subheadline: '传承正统风水命理与阴阳五行学说。提供住宅风水、商业风水布局、择日与八字深度咨询。',
        ctaPrimary: '预约风水勘测',
        ctaSecondary: '了解课程详情',
        navItems: ['首页', '风水服务', '学院课程', '关于导师'],
        gradient: 'from-amber-950/70 via-slate-900 to-slate-950',
        accentColor: 'bg-amber-400 text-slate-950 shadow-amber-400/30',
      };
    }

    if (cleanUrl.includes('bicc') || title.includes('BICC')) {
      return {
        badge: 'BICC · 国际会议与展览大厅',
        headline: 'Borneo International Convention Centre',
        subheadline: 'World-class convention & exhibition venue hosting international summits, corporate galas, and trade expos in Malaysia.',
        ctaPrimary: 'Book Convention Hall',
        ctaSecondary: 'View Floor Plans',
        navItems: ['Home', 'Halls & Spaces', 'Services', 'Contact'],
        gradient: 'from-slate-950 via-indigo-950/70 to-slate-950',
        accentColor: 'bg-indigo-400 text-slate-950 shadow-indigo-400/30',
      };
    }

    if (cleanUrl.includes('treastband') || title.includes('Treast Band')) {
      return {
        badge: 'TREAST BAND · 现场音乐与婚宴乐队',
        headline: 'Treast Band Live Music Performance',
        subheadline: 'Premium live music band for luxury weddings, corporate dinners, and high-profile brand events across Malaysia.',
        ctaPrimary: 'Book Band Performance',
        ctaSecondary: 'Watch Performance Demos',
        navItems: ['Home', 'Band Members', 'Repertoire', 'Bookings'],
        gradient: 'from-purple-950/70 via-slate-900 to-slate-950',
        accentColor: 'bg-purple-400 text-slate-950 shadow-purple-400/30',
      };
    }

    if (cleanUrl.includes('ronmeraki') || title.includes('Ron Meraki')) {
      return {
        badge: 'RON MERAKI STUDIO · 商业摄影与品牌视觉',
        headline: 'Ron Meraki Studio Commercial Visuals',
        subheadline: 'High-end commercial product photography, brand portraits, architecture visual storytelling, and creative direction.',
        ctaPrimary: 'Inquire Photography Booking',
        ctaSecondary: 'View Commercial Portfolio',
        navItems: ['Home', 'Portfolio', 'About Studio', 'Inquiries'],
        gradient: 'from-emerald-950/70 via-slate-900 to-slate-950',
        accentColor: 'bg-emerald-400 text-slate-950 shadow-emerald-400/30',
      };
    }

    if (cleanUrl.includes('kingdomhigh') || title.includes('Kingdom High')) {
      return {
        badge: 'KINGDOM HIGH · 领袖培训与教育平台',
        headline: 'Kingdom High Leadership Academy',
        subheadline: 'Empowering next-generation entrepreneurs and leaders through structured academy courses and executive coaching.',
        ctaPrimary: 'Explore Academy Courses',
        ctaSecondary: 'Register for Seminar',
        navItems: ['Home', 'Programs', 'Leadership', 'Enroll'],
        gradient: 'from-indigo-950/70 via-slate-900 to-slate-950',
        accentColor: 'bg-indigo-400 text-slate-950 shadow-indigo-400/30',
      };
    }

    if (cleanUrl.includes('batiknxt') || title.includes('Batik NXT')) {
      return {
        badge: 'BATIK NXT · 传统艺术与现代时装',
        headline: 'Batik NXT Heritage Fashion Showcase',
        subheadline: 'Fusing traditional Malaysian batik craftsmanship with contemporary luxury fashion aesthetics and handcrafted wear.',
        ctaPrimary: 'View Fashion Collection',
        ctaSecondary: 'Learn Craftsmanship Story',
        navItems: ['Home', 'Collections', 'Heritage', 'Shop'],
        gradient: 'from-purple-950/70 via-slate-900 to-slate-950',
        accentColor: 'bg-purple-400 text-slate-950 shadow-purple-400/30',
      };
    }

    if (cleanUrl.includes('aifashion') || title.includes('AI Fashion')) {
      return {
        badge: 'AI FASHION · 智能零售与快闪店',
        headline: 'AI-Powered Fashion & Retail Aesthetics',
        subheadline: 'Virtual styling, interactive digital lookbooks, and high-conversion e-commerce fashion funnels.',
        ctaPrimary: 'Try Virtual Styling',
        ctaSecondary: 'Browse Lookbook',
        navItems: ['Home', 'Lookbook', 'AI Styling', 'Store'],
        gradient: 'from-rose-950/70 via-slate-900 to-slate-950',
        accentColor: 'bg-rose-400 text-slate-950 shadow-rose-400/30',
      };
    }

    if (cleanUrl.includes('duck-plum') || cleanUrl.includes('duckplum') || title.includes('Duck')) {
      return {
        badge: 'DUCK & PLUM · 精致法式与亚洲 Bistro',
        headline: 'Duck & Plum Artisan Gastronomy',
        subheadline: 'Curated culinary experience, seasonal wine pairings, artisanal recipes, and online WhatsApp reservations.',
        ctaPrimary: 'Reserve a Table',
        ctaSecondary: 'View Chef Menu',
        navItems: ['Home', 'Menu', 'Wine List', 'Reservations'],
        gradient: 'from-amber-950/70 via-slate-900 to-slate-950',
        accentColor: 'bg-amber-400 text-slate-950 shadow-amber-400/30',
      };
    }

    if (cleanUrl.includes('sgdt') || title.includes('SGDT')) {
      return {
        badge: 'SGDT · 科技企业与软件顾问',
        headline: 'SGDT Digital Technology & Advisory',
        subheadline: 'Enterprise cloud solutions, custom software engineering, strategic IT consulting, and digital transformation.',
        ctaPrimary: 'Schedule IT Consultation',
        ctaSecondary: 'Explore Tech Services',
        navItems: ['Home', 'Services', 'Solutions', 'Contact'],
        gradient: 'from-sky-950/70 via-slate-900 to-slate-950',
        accentColor: 'bg-sky-400 text-slate-950 shadow-sky-400/30',
      };
    }

    if (cleanUrl.includes('winsgarden') || title.includes('Wins Garden')) {
      return {
        badge: 'WINS GARDEN · 绿意咖啡馆与休闲餐饮',
        headline: 'Wins Garden Specialty Coffee & Cafe',
        subheadline: 'Artisanal single-origin coffee, garden dining ambiance, brunch menus, and private event venue rental.',
        ctaPrimary: 'View Cafe Menu',
        ctaSecondary: 'Book Event Space',
        navItems: ['Home', 'Coffee & Menu', 'Garden Venue', 'Location'],
        gradient: 'from-teal-950/70 via-slate-900 to-slate-950',
        accentColor: 'bg-teal-400 text-slate-950 shadow-teal-400/30',
      };
    }

    if (cleanUrl.includes('wings') || title.includes('Wings')) {
      return {
        badge: 'WINGS CREATIVE · 品牌设计工作室',
        headline: 'Wings Creative Design Agency',
        subheadline: 'Brand strategy, visual identity design, digital campaign production, and creative direction.',
        ctaPrimary: 'Inquire Branding Project',
        ctaSecondary: 'View Design Portfolio',
        navItems: ['Home', 'Work', 'Agency', 'Contact'],
        gradient: 'from-cyan-950/70 via-slate-900 to-slate-950',
        accentColor: 'bg-cyan-400 text-slate-950 shadow-cyan-400/30',
      };
    }

    // Default Fallback
    return {
      badge: 'RMS STUDIO · PROFESSIONAL STARTER WEBSITE',
      headline: title,
      subheadline: '专为马来西亚商业打造的响应式官网。清晰呈现业务特色、权威信任背书与 WhatsApp 客户对接转化。',
      ctaPrimary: 'WhatsApp 快速了解',
      ctaSecondary: '浏览服务详情',
      navItems: ['首页', '关于我们', '服务示范', '联系我们'],
      gradient: 'from-slate-950 via-indigo-950/70 to-slate-950',
      accentColor: 'bg-indigo-400 text-slate-950 shadow-indigo-400/30',
    };
  };

  const preview = getClientPreviewData();
  const fullHttpUrl = url.startsWith('http') ? url : `https://${url}`;

  if (type === 'mobile') {
    return (
      <div className="relative mx-auto w-[250px] h-[500px] sm:w-[270px] sm:h-[540px] bg-slate-950 rounded-[40px] p-3 border-4 border-slate-700/80 shadow-2xl shadow-indigo-950/50">
        {/* Phone Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-slate-800 rounded-full mr-2"></div>
          <div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div>
        </div>

        {/* Mobile Viewport Screen */}
        <div className={`relative w-full h-full bg-gradient-to-b ${preview.gradient} rounded-[30px] overflow-hidden pt-8 px-3.5 text-slate-100 flex flex-col justify-between border border-white/10`}>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/15 pb-2.5 mb-2">
            <span className="font-extrabold tracking-wide text-white text-[11px] truncate max-w-[130px]">{title}</span>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#25D366] text-slate-950 shadow-sm flex items-center gap-1">
              <MessageCircle className="w-2.5 h-2.5 fill-slate-950" /> WhatsApp
            </span>
          </div>

          {/* Simulated Web Card Content */}
          <div className="space-y-2.5 my-auto">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[8px] font-semibold bg-white/10 text-indigo-300 border border-white/10 truncate max-w-full">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400 shrink-0" />
              <span className="truncate">{preview.badge}</span>
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold leading-snug text-white">
              {preview.headline}
            </h4>
            <p className="text-[10px] text-slate-300 line-clamp-3 leading-relaxed font-normal">
              {preview.subheadline}
            </p>
            <div className="pt-1 flex flex-col gap-1.5">
              <button className={`w-full py-1.5 text-[10px] font-bold rounded-lg ${preview.accentColor} shadow-md`}>
                {preview.ctaPrimary}
              </button>
              <a
                href={fullHttpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-1 text-center text-[10px] font-semibold rounded-lg bg-white/10 text-white border border-white/15 hover:bg-white/20"
              >
                Visit Live Site ↗
              </a>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="mt-auto border-t border-white/10 pt-2 pb-1 flex justify-around text-[9px] text-slate-400 font-medium">
            <span className="text-white font-bold">{preview.navItems[0]}</span>
            <span>{preview.navItems[1]}</span>
            <span>{preview.navItems[2]}</span>
            <span>{preview.navItems[3]}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-white/20 bg-slate-950 shadow-2xl shadow-indigo-950/60 overflow-hidden">
      {/* Laptop Top Browser Bar */}
      <div className="px-4 py-3 bg-slate-900 border-b border-white/15 flex items-center justify-between gap-3 text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
          <div className="hidden sm:flex items-center gap-2 ml-3 text-slate-500 text-xs">
            <ArrowLeft className="w-3.5 h-3.5" />
            <ArrowRight className="w-3.5 h-3.5" />
            <RotateCw className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Address Bar */}
        <div className="flex-1 max-w-md bg-slate-950 border border-white/15 rounded-lg px-3 py-1 text-xs text-slate-200 flex items-center justify-between gap-2 truncate shadow-inner">
          <div className="flex items-center gap-2 truncate">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate text-[11px] font-mono text-slate-200">{fullHttpUrl}</span>
          </div>
          <a
            href={fullHttpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold text-sky-400 hover:text-sky-300 shrink-0 flex items-center gap-1"
          >
            <span>Open</span> <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-300">
          <Globe className="w-3.5 h-3.5 text-indigo-400" />
          <span className="hidden sm:inline text-[11px] font-bold text-indigo-300">{category}</span>
        </div>
      </div>

      {/* Browser Viewport Screen */}
      <div className={`relative min-h-[340px] sm:min-h-[420px] p-6 sm:p-10 bg-gradient-to-br ${preview.gradient} flex flex-col justify-between text-slate-100 overflow-hidden`}>
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Top Navigation Bar inside website */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex items-center gap-2">
            <div className={`w-3.5 h-3.5 rounded-full ${preview.accentColor}`}></div>
            <span className="font-extrabold text-sm tracking-wider text-white uppercase">{title}</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-xs text-slate-200 font-semibold">
            {preview.navItems.map((nav, i) => (
              <span key={i} className={i === 0 ? 'text-white font-bold' : 'text-slate-300 hover:text-white'}>
                {nav}
              </span>
            ))}
            <a
              href={fullHttpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#25D366] text-slate-950 font-extrabold text-xs shadow-md flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3 fill-slate-950" /> WhatsApp Direct
            </a>
          </div>
        </div>

        {/* Tailored Hero Content matching real client branding */}
        <div className="relative z-10 my-6 max-w-2xl space-y-3.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-indigo-200 border border-white/20 shadow-sm">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            {preview.badge}
          </span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {preview.headline}
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
            {preview.subheadline}
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={fullHttpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold ${preview.accentColor} shadow-xl flex items-center gap-2`}
            >
              <span>{preview.ctaPrimary}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={fullHttpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              {preview.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Footer info bar inside website */}
        <div className="relative z-10 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-2 font-medium">
          <span>✓ 100% Mobile & Desktop Responsive</span>
          <span>✓ WhatsApp Lead Direct Integration</span>
          <span>✓ Google Maps & Official Branding</span>
        </div>
      </div>
    </div>
  );
};
