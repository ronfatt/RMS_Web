export interface PackageFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  categoryZh: string;
  categoryEn: string;
  categoryBm: string;
  description: string;
  badgeText: string;
  tags: string[];
  desktopImage: string;
  mobileImage: string;
  demoUrl: string;
  color: string;
}

export interface AddonItem {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  priceText: string;
  popular?: boolean;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  nameEn: string;
  iconName: string;
  description: string;
  highlight: string;
}

export interface SiteConfig {
  brandName: string;
  brandDescriptor: string;
  tagline: string;
  heroEyebrow: string;
  heroHeadlinePrefix: string;
  heroHeadlineHighlight: string;
  heroSubheadline: string;
  price: string;
  originalPriceReference: string;
  currency: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  email: string;
  deliveryEstimate: string;
  deliveryNotice: string;
  revisionLimit: string;
  packageFeatures: PackageFeature[];
  transparencyNotice: string;
  transparencyGuarantees: string[];
  whyAffordable: {
    title: string;
    subtitle: string;
    points: {
      step: string;
      title: string;
      description: string;
      tag: string;
    }[];
    comparison: {
      traditionalTitle: string;
      traditionalSteps: string[];
      rmsTitle: string;
      rmsSteps: string[];
    };
  };
  portfolioItems: PortfolioItem[];
  industries: IndustryItem[];
  workflowSteps: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    details: string;
  }[];
  preStartConfirmations: string[];
  addons: AddonItem[];
  faqItems: FAQItem[];
  socialLinks: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    siteUrl: string;
    ogImage: string;
    keywords: string[];
  };
}

export const siteConfig: SiteConfig = {
  brandName: "RMS Studio",
  brandDescriptor: "Professional Website Solutions",
  tagline: "专业，不代表一定昂贵。",
  heroEyebrow: "MALAYSIA SME DIGITAL STUDIO",
  heroHeadlinePrefix: "专业官网，",
  heroHeadlineHighlight: "不一定需要 RM5,000。",
  heroSubheadline: "为马来西亚中小企业、创业者与个人品牌打造拿得出手的专业官网。不清不楚不收费，从 RM899 开始。",
  price: "RM899",
  originalPriceReference: "RM5,000",
  currency: "RM",
  
  // EDITABLE BUSINESS CONTACTS
  whatsappNumber: "601158917029",
  whatsappDefaultMessage: "Hi RMS Studio! I saw your RM899 professional website package. I'd like to check if it suits my business.",
  email: "hello@rmsstudio.my",
  deliveryEstimate: "3–7 Working Days",
  deliveryNotice: "Target delivery is 3–7 working days upon receipt of complete materials.",
  revisionLimit: "1 Round of Pre-Launch Revision",

  // RM899 PACKAGE INCLUSIONS
  packageFeatures: [
    { text: "100% Custom Visual Design (No Cheap Templates)", included: true, highlight: true },
    { text: "Single-Page Funnel Architecture (官网落地页)", included: true, highlight: true },
    { text: "Up to 5 Core Content Sections (5大核心板块)", included: true },
    { text: "Desktop / Tablet / Mobile Responsive (三端响应式)", included: true, highlight: true },
    { text: "1-Click WhatsApp Direct Integration (一键询价)", included: true, highlight: true },
    { text: "Online Lead Contact Form (在线留言表单)", included: true },
    { text: "Social Media Links Integration (FB / IG / TikTok / RED)", included: true },
    { text: "Google Maps Address Embedding (地图嵌入)", included: true },
    { text: "Basic On-Page SEO Structure Setup (基础 SEO)", included: true },
    { text: "Open Graph Social Card Metadata (社交卡片配置)", included: true },
    { text: "1 Round of Pre-Launch Revision (1次修改)", included: true },
    { text: "Domain Binding & Cloud Deployment Support (上线协助)", included: true },
  ],

  transparencyNotice: "Domain & Cloud Hosting can be purchased at cost price or linked to your existing provider. Clear quote confirmed beforehand with no hidden fees.",
  
  transparencyGuarantees: [
    "Confirm full scope & requirements before initial payment",
    "Transparent cost-price domain & hosting breakdown",
    "No lock-in monthly maintenance fee, 100% source code ownership",
    "Clear production schedule & target delivery timeline",
    "Expandable anytime as your business grows",
  ],

  // WHY RM899 REASONING
  whyAffordable: {
    title: "Why Can RM899 Still Be Professional?",
    subtitle: "We don't cut quality — we eliminate redundant manual labor. By leveraging structured design systems and AI development, we pass the saved time directly back to local businesses.",
    points: [
      {
        step: "01",
        title: "Structured Design System (设计系统)",
        description: "Pre-refined component libraries remove repetitive baseline drafting.",
        tag: "EFFICIENCY",
      },
      {
        step: "02",
        title: "AI Automation Development (AI 提效)",
        description: "AI code generation cuts redundant coding time by 60%.",
        tag: "LEVERAGE",
      },
      {
        step: "03",
        title: "Standardized Workflow (标准化流程)",
        description: "Streamlined intake to deployment eliminates endless meeting friction.",
        tag: "FAST LAUNCH",
      },
    ],
    comparison: {
      traditionalTitle: "Traditional Digital Agencies (RM3,000 - RM8,000)",
      traditionalSteps: [
        "Multiple offline meetings & tedious briefings",
        "Designers draft every element from scratch",
        "Engineers write boilerplate code manually",
        "3 to 6 weeks of delay and revision friction",
        "Manual server environment setup",
      ],
      rmsTitle: "RMS Studio Modern Workflow (RM899)",
      rmsSteps: [
        "Online precision structure & style selection",
        "High-end design system architecture",
        "AI-assisted rapid component development",
        "3–7 working days targeted delivery",
        "Automated instant cloud deployment",
      ],
    },
  },

  // AUTHENTIC CLIENT WORK & DEMO TEMPLATE PORTFOLIO
  portfolioItems: [
    // --- LIVE CLIENT PROJECTS (5 ITEMS) ---
    {
      id: "client-sinbanhock",
      title: "Sin Ban Hock Trading",
      category: "renovation",
      categoryZh: "建筑材料 / 硬件工程",
      categoryEn: "Hardware & Construction Materials",
      categoryBm: "Bahan Binaan & Kejuruteraan",
      description: "Official website for Sin Ban Hock, showcasing building materials, hardware supplies, and B2B trade inquiries.",
      badgeText: "CLIENT WORK",
      tags: ["Building Materials", "Hardware Trade", "B2B Website"],
      desktopImage: "/mockups/sinbanhock-desktop.jpg",
      mobileImage: "/mockups/sinbanhock-mobile.jpg",
      demoUrl: "https://www.sinbanhock.com/",
      color: "from-blue-950/60 via-slate-900 to-slate-950",
    },
    {
      id: "client-enhancefengshui",
      title: "Enhance Feng Shui Academy",
      category: "consultant",
      categoryZh: "风水命理 / 专业顾问",
      categoryEn: "Feng Shui & Consultation",
      categoryBm: "Penasihat Geomansi & Feng Shui",
      description: "Official consultation platform for Enhance Feng Shui, presenting metaphysics expertise and appointment booking.",
      badgeText: "CLIENT WORK",
      tags: ["Feng Shui", "Professional Advisory", "Appointment"],
      desktopImage: "/mockups/enhance-desktop.jpg",
      mobileImage: "/mockups/enhance-mobile.jpg",
      demoUrl: "https://www.enhancefengshui.com/",
      color: "from-amber-950/60 via-slate-900 to-slate-950",
    },
    {
      id: "client-bicc",
      title: "Borneo International Convention Centre (BICC)",
      category: "creative",
      categoryZh: "国际会议中心 / 活动场馆",
      categoryEn: "Convention & Event Venue",
      categoryBm: "Pusat Konvensyen & Acara",
      description: "Corporate site for BICC, presenting hall capacities, international conference services, and venue bookings.",
      badgeText: "CLIENT WORK",
      tags: ["Convention Center", "Corporate Events", "Venue Booking"],
      desktopImage: "/mockups/bicc-desktop.jpg",
      mobileImage: "/mockups/bicc-mobile.jpg",
      demoUrl: "https://www.bicc.my/",
      color: "from-slate-950 via-indigo-950/60 to-slate-950",
    },
    {
      id: "client-treastband",
      title: "Treast Band Live Music",
      category: "creative",
      categoryZh: "娱乐活动 / 现场乐队",
      categoryEn: "Entertainment & Live Music",
      categoryBm: "Hiburan & Band Muzik",
      description: "High-impact music platform for Treast Band, highlighting live wedding performances and event entertainment booking.",
      badgeText: "CLIENT WORK",
      tags: ["Live Band", "Wedding Music", "Event Entertainment"],
      desktopImage: "/mockups/treastband-desktop.jpg",
      mobileImage: "/mockups/treastband-mobile.jpg",
      demoUrl: "https://www.treastband.com/",
      color: "from-purple-950/60 via-slate-900 to-slate-950",
    },
    {
      id: "client-ronmeraki",
      title: "Ron Meraki Studio",
      category: "creative",
      categoryZh: "商业摄影 / 视觉工作室",
      categoryEn: "Photography & Creative Studio",
      categoryBm: "Studio Fotografi & Kreatif",
      description: "Visual-first portfolio website for Ron Meraki Studio, showcasing commercial photography and studio inquiries.",
      badgeText: "CLIENT WORK",
      tags: ["Commercial Photography", "Visual Studio", "Portfolio Showcase"],
      desktopImage: "/mockups/ronmeraki-desktop.jpg",
      mobileImage: "/mockups/ronmeraki-mobile.jpg",
      demoUrl: "https://www.ronmerakistudio.my/",
      color: "from-emerald-950/60 via-slate-900 to-slate-950",
    },

    // --- DEMO SHOWCASE TEMPLATES (7 ITEMS) ---
    {
      id: "demo-kingdomhigh",
      title: "Kingdom High Academy",
      category: "personal",
      categoryZh: "高端教育 / 个人品牌",
      categoryEn: "Luxury Education & Academy",
      categoryBm: "Pendidikan Mewah & Akademi",
      description: "High-end educational platform demo featuring leadership training, academy programs, and student registration.",
      badgeText: "DEMO TEMPLATE",
      tags: ["Education", "Academy", "Lead Funnel"],
      desktopImage: "/mockups/kingdomhigh-desktop.jpg",
      mobileImage: "/mockups/kingdomhigh-mobile.jpg",
      demoUrl: "https://kingdomhigh.vercel.app/",
      color: "from-indigo-950/60 via-slate-900 to-slate-950",
    },
    {
      id: "demo-batiknxt",
      title: "Batik NXT Fashion",
      category: "creative",
      categoryZh: "传统艺术 / 现代时尚",
      categoryEn: "Heritage Art & Fashion",
      categoryBm: "Fesyen & Warisan",
      description: "Modern heritage fashion showcase site highlighting traditional Batik craftsmanship and online ordering.",
      badgeText: "DEMO TEMPLATE",
      tags: ["Batik Fashion", "Heritage Art", "E-Commerce Concept"],
      desktopImage: "/mockups/batiknxt-desktop.jpg",
      mobileImage: "/mockups/batiknxt-mobile.jpg",
      demoUrl: "https://batiknxt.vercel.app/",
      color: "from-purple-950/60 via-slate-900 to-slate-950",
    },
    {
      id: "demo-aifashion",
      title: "AI Fashion Studio",
      category: "beauty",
      categoryZh: "智能时尚 / 零售美学",
      categoryEn: "AI Fashion & Retail",
      categoryBm: "Fesyen AI & Runcit",
      description: "Futuristic fashion retail landing page with AI-assisted styling showcase and product inquiry funnels.",
      badgeText: "DEMO TEMPLATE",
      tags: ["AI Fashion", "Retail Aesthetics", "Product Showcase"],
      desktopImage: "/mockups/aifashion-desktop.jpg",
      mobileImage: "/mockups/aifashion-mobile.jpg",
      demoUrl: "https://aifashion-nu.vercel.app/",
      color: "from-rose-950/60 via-slate-900 to-slate-950",
    },
    {
      id: "demo-duckplum",
      title: "Duck & Plum Gastronomy",
      category: "restaurant",
      categoryZh: "精致餐饮 / 私房菜 Bistro",
      categoryEn: "Fine Dining & Gastronomy",
      categoryBm: "Sajian Makanan & Bistro",
      description: "Elegant restaurant landing page featuring signature dishes, online digital menu, and WhatsApp reservation.",
      badgeText: "DEMO TEMPLATE",
      tags: ["F&B Restaurant", "Digital Menu", "WhatsApp Booking"],
      desktopImage: "/mockups/duckplum-desktop.jpg",
      mobileImage: "/mockups/duckplum-mobile.jpg",
      demoUrl: "https://duck-plum.vercel.app/",
      color: "from-amber-950/60 via-slate-900 to-slate-950",
    },
    {
      id: "demo-sgdt",
      title: "SGDT Tech & Advisory",
      category: "consultant",
      categoryZh: "科技创业 / 企业顾问",
      categoryEn: "Tech Startup & Corporate Advisory",
      categoryBm: "Teknologi & Penasihat Syarikat",
      description: "Sleek corporate tech site highlighting enterprise advisory, software solutions, and B2B client inquiries.",
      badgeText: "DEMO TEMPLATE",
      tags: ["Tech Corporate", "B2B Advisory", "Software Services"],
      desktopImage: "/mockups/sgdt-desktop.jpg",
      mobileImage: "/mockups/sgdt-mobile.jpg",
      demoUrl: "https://sgdt-sigma.vercel.app/",
      color: "from-sky-950/60 via-slate-900 to-slate-950",
    },
    {
      id: "demo-winsgarden",
      title: "Wins Garden Cafe",
      category: "restaurant",
      categoryZh: "园林咖啡馆 / 餐饮休闲",
      categoryEn: "Garden Cafe & Leisure F&B",
      categoryBm: "Kafe Taman & Santapan",
      description: "Lush garden cafe site showcasing artisanal coffee, breakfast menus, location maps, and event space rental.",
      badgeText: "DEMO TEMPLATE",
      tags: ["Garden Cafe", "Artisanal Coffee", "Event Venue"],
      desktopImage: "/mockups/winsgarden-desktop.jpg",
      mobileImage: "/mockups/winsgarden-mobile.jpg",
      demoUrl: "https://winsgarden.vercel.app/",
      color: "from-teal-950/60 via-slate-900 to-slate-950",
    },
    {
      id: "demo-wings",
      title: "Wings Creative Agency",
      category: "creative",
      categoryZh: "创意设计 / 品牌策划",
      categoryEn: "Creative & Brand Agency",
      categoryBm: "Kreatif & Reka Bentuk Jenama",
      description: "Creative design studio showcase presenting brand identity projects, video production, and agency inquiries.",
      badgeText: "DEMO TEMPLATE",
      tags: ["Creative Agency", "Brand Identity", "Design Portfolio"],
      desktopImage: "/mockups/wings-desktop.jpg",
      mobileImage: "/mockups/wings-mobile.jpg",
      demoUrl: "https://wings-tau.vercel.app/",
      color: "from-cyan-950/60 via-slate-900 to-slate-950",
    },
  ],

  // SUITABLE INDUSTRIES
  industries: [
    {
      id: "ind-1",
      name: "餐饮与食品",
      nameEn: "F&B & Restaurants",
      iconName: "Utensils",
      description: "餐厅、Bistro、咖啡馆、私房菜与连锁餐饮",
      highlight: "在线菜单与一键 WhatsApp 订位",
    },
    {
      id: "ind-2",
      name: "美容与健美",
      nameEn: "Beauty & Wellness",
      iconName: "Sparkles",
      description: "美发沙龙、美甲美睫、医美诊所、SPA 养生馆",
      highlight: "清晰呈现价目表与项目特色",
    },
    {
      id: "ind-3",
      name: "装修与工程",
      nameEn: "Renovation & Contractors",
      iconName: "Hammer",
      description: "室内设计、房屋翻新、冷气维修、电工水暖、铝业铁艺",
      highlight: "展示实际竣工案例，建立专业信任",
    },
    {
      id: "ind-4",
      name: "专业顾问服务",
      nameEn: "Professional Services",
      iconName: "Briefcase",
      description: "会计事务、法律咨询、保险理财、房产中介、企业顾问",
      highlight: "突出资质背书与服务价值",
    },
    {
      id: "ind-5",
      name: "个人品牌与导师",
      nameEn: "Personal Brand & Trainers",
      iconName: "UserCheck",
      description: "健身教练、培训导师、知识创作者、独立咨询师",
      highlight: "打造专属门面，提升服务溢价",
    },
    {
      id: "ind-6",
      name: "创意与工作室",
      nameEn: "Creative & Studios",
      iconName: "Camera",
      description: "婚礼摄影、商业设计、活动策划、视频剪辑工作室",
      highlight: "高质感作品集展示与快速询价",
    },
  ],

  // 4-STEP WORKFLOW
  workflowSteps: [
    {
      number: "01",
      title: "Tell Us Your Business",
      subtitle: "Share Your Requirements",
      description: "Send us your industry, brand name, and core services via WhatsApp.",
      details: "We will recommend a tailored single-page structure for your business.",
    },
    {
      number: "02",
      title: "Submit Logo & Content",
      subtitle: "Easy Material Intake",
      description: "Provide your logo, product/service photos, and basic company details.",
      details: "No copywriting ready? We help format standard industry copy for you.",
    },
    {
      number: "03",
      title: "We Design & Build",
      subtitle: "Responsive Development",
      description: "We build your desktop and mobile responsive website within target working days.",
      details: "Includes 1 round of pre-launch design adjustments.",
    },
    {
      number: "04",
      title: "Review & Launch",
      subtitle: "Domain Binding & Live Deployment",
      description: "Upon approval, we assist in linking your domain and deploying live to cloud hosting.",
      details: "Instantly start sharing your official website on FB, IG, and WhatsApp!",
    },
  ],

  // PRE-START CONFIRMATION
  preStartConfirmations: [
    "Package Scope: Single-page landing funnel (up to 5 core sections)",
    "Materials Needed: Logo, photos, business intro & contact info",
    "Third-party Fees: Domain & hosting purchased at cost or linked to your existing account",
    "Production Timeline: 3–7 working days target upon complete materials",
    "100% Ownership: Source code and site ownership belong entirely to you",
  ],

  // UPGRADES & ADDONS
  addons: [
    {
      id: "addon-multipage",
      title: "多页面扩充 (Sub-pages)",
      titleEn: "Additional Pages",
      description: "如需增加单独的关于我们、团队介绍、独立案例页或服务详情页。",
      priceText: "Inquiry",
      category: "structure",
    },
    {
      id: "addon-domain-hosting",
      title: "代办 Domain & 高速云主机",
      titleEn: "Domain & Cloud Hosting",
      description: "代为购买 .com / .com.my 域名，配置 SSL 安全证书的高速云端 CDN 主机。",
      priceText: "Inquiry",
      popular: true,
      category: "infrastructure",
    },
    {
      id: "addon-copywriting",
      title: "文案润色与撰写",
      titleEn: "Professional Copywriting",
      description: "由转化型文案师协助撰写高吸引力的标语、公司简介与转化引导文案。",
      priceText: "Inquiry",
      category: "content",
    },
    {
      id: "addon-catalogue",
      title: "产品 / 菜单排版录入",
      titleEn: "Catalog / Menu Upload",
      description: "协助批量上架录入 10-30 个产品照片、说明与价格目表。",
      priceText: "Inquiry",
      category: "content",
    },
    {
      id: "addon-booking",
      title: "在线预约 / 日历系统",
      titleEn: "Online Booking System",
      description: "整合 Cal.com / Calendly 或自定义日历，让客户可直接在网页选择时间预约。",
      priceText: "Inquiry",
      popular: true,
      category: "feature",
    },
    {
      id: "addon-ecommerce",
      title: "轻量电商 / 收款功能",
      titleEn: "E-Commerce & Payment",
      description: "集成 ToyyibPay / FPX / Stripe 在线付款按键与简易购物车系统。",
      priceText: "Inquiry",
      category: "feature",
    },
    {
      id: "addon-chatbot",
      title: "AI 智能客服助手",
      titleEn: "AI Chatbot Integration",
      description: "挂载专属 AI 客服，24小时自动回答客户常见问题与引导留单。",
      priceText: "Inquiry",
      category: "feature",
    },
    {
      id: "addon-seo-advanced",
      title: "进阶 Local SEO 优化",
      titleEn: "Advanced Local SEO",
      description: "包含 Google Business Profile 优化与 Search Console 架构提交。",
      priceText: "Inquiry",
      category: "marketing",
    },
  ],

  // FREQUENTLY ASKED QUESTIONS
  faqItems: [
    {
      id: "faq-1",
      question: "What does RM899 include? Are there hidden costs?",
      answer: "RM899 includes a complete single-page responsive website with up to 5 content sections, WhatsApp lead integration, contact form, Google Maps embedding, basic On-Page SEO, and 1 round of revisions. We confirm all costs upfront before starting — no hidden fees.",
    },
    {
      id: "faq-2",
      question: "Is RM899 a one-time fee or annual?",
      answer: "RM899 is a one-time design and build fee. You do NOT pay RM899 annually. After launch, you only maintain your own domain name (~RM50-RM70/year) and cloud hosting environment.",
    },
    {
      id: "faq-3",
      question: "Are domain and hosting included in RM899?",
      answer: "Domain and hosting are independent third-party services. If you already have existing accounts, we link them for free. If not, we can purchase them on your behalf at exact cost price.",
    },
    {
      id: "faq-4",
      question: "What materials do I need to prepare?",
      answer: "You only need to provide: 1. Your brand logo (if available); 2. Photos of your products/services & brief intro; 3. Contact info (WhatsApp, address, social media links).",
    },
    {
      id: "faq-5",
      question: "How long does production take?",
      answer: "Target delivery is 3–7 working days upon receipt of complete materials and content.",
    },
    {
      id: "faq-6",
      question: "Can I update website content myself after launch?",
      answer: "RM899 websites are built on ultra-fast static code architecture for maximum speed and security. Minor text updates within 30 days are free. If you require a full CMS backend, it can be added as a custom upgrade.",
    },
    {
      id: "faq-7",
      question: "Can I add more pages or features in the future?",
      answer: "Yes! Our code architecture is modular. As your business grows, you can add sub-pages, online booking, e-commerce payment, or AI chatbots anytime without rebuilding from scratch.",
    },
    {
      id: "faq-8",
      question: "Can RM899 be an E-commerce website?",
      answer: "RM899 is focused on corporate landing funnels and service showcases. If you require a shopping cart, multi-product checkout, and online FPX/credit card payments, we provide a custom e-commerce upgrade quote.",
    },
    {
      id: "faq-9",
      question: "Is SEO included?",
      answer: "RM899 includes On-Page SEO setup (H1/H2 hierarchy, Meta Title, Description, Alt text, Open Graph). If you need competitive keyword ranking on Google Page 1, advanced local SEO is available.",
    },
    {
      id: "faq-10",
      question: "How does the WhatsApp button work?",
      answer: "Clicking the WhatsApp button opens WhatsApp directly with a pre-filled message (e.g. 'Hi! I saw your site and want to inquire about XX service'). Form submissions can also be routed to your email.",
    },
    {
      id: "faq-11",
      question: "How are design revisions handled?",
      answer: "The package includes 1 round of pre-launch revisions. After reviewing the initial draft, simply list all minor text/image adjustments for us to execute in one batch.",
    },
    {
      id: "faq-12",
      question: "Who owns the website after launch?",
      answer: "You own 100% of the website! All final source code and cloud deployment assets belong entirely to your business with zero lock-in contracts.",
    },
    {
      id: "faq-13",
      question: "Will the design look cheap like a template?",
      answer: "Absolutely not! Check out our featured live client projects (Sin Ban Hock, Treast Band, Enhance Feng Shui, BICC, Ron Meraki Studio) and live interactive demos. We adhere to high-end minimalist agency standards for all projects.",
    },
  ],

  // SOCIAL LINKS
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/601158917029",
  },

  // SEO METADATA (DEFAULT: ENGLISH)
  seo: {
    defaultTitle: "RM899 Professional Website Design | High-Impact Studio | RMS Studio",
    titleTemplate: "%s | RMS Studio",
    defaultDescription: "A professional website doesn't have to cost RM5,000. RMS Studio builds high-impact websites for SMEs, entrepreneurs, and personal brands in Malaysia starting from RM899.",
    siteUrl: "https://rmsstudio.my",
    ogImage: "/og-image.jpg",
    keywords: [
      "Website Design Malaysia",
      "SME Website Design Malaysia",
      "RM899 Website Package",
      "Professional Web Studio Malaysia",
      "Landing Page Design Malaysia",
      "WhatsApp Website Design",
      "Kingdom High",
      "Batik NXT",
      "AI Fashion",
      "Duck Plum",
      "SGDT",
      "Wins Garden",
      "Wings Creative",
    ],
  },
};
