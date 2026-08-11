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
  description: string;
  badgeText: string;
  tags: string[];
  desktopImage: string;
  mobileImage: string;
  demoUrl?: string;
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
  whatsappNumber: string; // e.g. "60123456789"
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
  tagline: "专业的网站，不一定要 RM5,000。",
  heroEyebrow: "PROFESSIONAL WEBSITE FOR BUSINESS",
  heroHeadlinePrefix: "一个专业网站，",
  heroHeadlineHighlight: "不一定要 RM5,000。",
  heroSubheadline: "为中小企业、创业者与个人品牌打造真正能够拿出去见客户的专业官网。",
  price: "RM899",
  originalPriceReference: "RM5,000",
  currency: "RM",
  
  // EDITABLE BUSINESS CONTACTS
  whatsappNumber: "601158917029", // USER'S WHATSAPP NUMBER: +601158917029
  whatsappDefaultMessage: "你好！我在网站看到 RM899 专业网站配套。我想了解是否适合我的生意。",
  email: "hello@rmsstudio.my",
  deliveryEstimate: "3–7 个工作日",
  deliveryNotice: "一般项目目标制作周期约 3–7 个工作日，实际时间视资料完整度及项目需求而定。",
  revisionLimit: "1 次完整设计修改",

  // RM899 PACKAGE INCLUSIONS
  packageFeatures: [
    { text: "100% 专属定制高端视觉视觉设计（非廉价模板）", included: true, highlight: true },
    { text: "单页式精美企业官网（Single-Page Landing Funnel）", included: true, highlight: true },
    { text: "最多包含 5 大核心内容板块（Hero / 关于 / 服务 / 优势 / 联络）", included: true },
    { text: "桌面 / 平板 / 手机三端响应式适配（Mobile-First Responsive）", included: true, highlight: true },
    { text: "直接连接 WhatsApp 快速询价按键", included: true, highlight: true },
    { text: "在线客户留言 / 需求收集表单（Contact Form）", included: true },
    { text: "社交媒体一键链接（FB / IG / TikTok / Xiaohongshu）", included: true },
    { text: "Google Maps 商家地址地图嵌入", included: true },
    { text: "基础 SEO 网页优化（Title / Description / H1 结构）", included: true },
    { text: "基础 Open Graph 社交媒体分享卡片设定", included: true },
    { text: "提供 1 次上线前完整设计修改（1 Revision Round）", included: true },
    { text: "全程协助域名绑定与正式上线发布", included: true },
  ],

  transparencyNotice: "Domain、Hosting 及第三方付费服务如有需要，将另外报价。制作前确认完整报价，不临时增加未经确认的收费。",
  
  transparencyGuarantees: [
    "确认所有范围与设计需求后再支付全额或定金",
    "明确告知所需自备的域名/主机费用（无隐藏加价）",
    "无绑定长期高昂维护月费，网站上线后完全归您所有",
    "清晰制作交付周期，按约定时程推进项目",
    "支持未来随时随着业务扩张增加更多功能板块",
  ],

  // WHY RM899 REASONING
  whyAffordable: {
    title: "为什么 RM899 也能做到专业？",
    subtitle: "不是减少专业，而是减少重复劳动。我们通过现代化工作流与 AI 生产力杠杆，把省下的成本直接回馈给您。",
    points: [
      {
        step: "01",
        title: "结构化设计系统 (Design Systems)",
        description: "预先构建高质感、高复用度的现代化组件库，无需每次从零绘制重复的页面框架。",
        tag: "高效规范",
      },
      {
        step: "02",
        title: "AI 辅助代码与排版 (AI Automation)",
        description: "利用 AI 提效代码生成与基础内容生成，减少 60% 重复性代码编写时间。",
        tag: "技术杠杆",
      },
      {
        step: "03",
        title: "标准化交付流程 (Standardized Operations)",
        description: "从资料收集到部署上线高度标准化，杜绝无限期沟通内耗，大幅提升产出效率。",
        tag: "快速上线",
      },
    ],
    comparison: {
      traditionalTitle: "传统网页制作流程 (RM3,000 - RM8,000)",
      traditionalSteps: [
        "多次线下开会沟通需求",
        "设计师从零绘制所有细节草图",
        "前端工程师逐字逐句重头敲代码",
        "长达 3 - 6 周的反复修改内耗",
        "人工部署配置服务器",
      ],
      rmsTitle: "RMS Studio 现代化流程 (RM899 起)",
      rmsSteps: [
        "模块化快速确认框架与设计风格",
        "成熟的高端视觉设计系统支撑",
        "AI 辅助前端高效组件化开发",
        "3–7 个工作日精准落地交付",
        "一键自动化云端部署",
      ],
    },
  },

  // DEMO PORTFOLIO SHOWCASE (HONEST DEMO CONCEPTS)
  portfolioItems: [
    {
      id: "demo-gastronomy",
      title: "L'Aura Fine Dining & Bistro",
      category: "restaurant",
      categoryZh: "高级餐饮 / Bistro",
      description: "专为高端餐厅打造的形象官网，突出招牌菜色、沉浸式氛围与 WhatsApp 快速订位系统。",
      badgeText: "DEMO CONCEPT",
      tags: ["餐饮业", "在线菜单", "WhatsApp 订位"],
      desktopImage: "/mockups/restaurant-desktop.jpg",
      mobileImage: "/mockups/restaurant-mobile.jpg",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      id: "demo-aesthetics",
      title: "SkinVerse Aesthetic Clinic",
      category: "beauty",
      categoryZh: "医美 / 皮肤管理",
      description: "现代极简风医美诊所网页，呈现专业医师团队、疗程项目展示与咨询预定入口。",
      badgeText: "DEMO CONCEPT",
      tags: ["美容医美", "疗程展示", "咨询预约"],
      desktopImage: "/mockups/beauty-desktop.jpg",
      mobileImage: "/mockups/beauty-mobile.jpg",
      color: "from-rose-500/20 to-pink-500/20",
    },
    {
      id: "demo-renovation",
      title: "Artisan Build & Design",
      category: "renovation",
      categoryZh: "室内设计 / 装修工程",
      description: "展现高质感施工案例的家具与室内设计官网，清晰展示项目流程与报价咨询。",
      badgeText: "DEMO CONCEPT",
      tags: ["装修工程", "案例画廊", "免费报价"],
      desktopImage: "/mockups/renovation-desktop.jpg",
      mobileImage: "/mockups/renovation-mobile.jpg",
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      id: "demo-advisory",
      title: "Apex Horizon Financial Advisory",
      category: "consultant",
      categoryZh: "企业顾问 / 金融保险",
      description: "传递权威信赖感的金融顾问与理财服务官网，强化品牌背书与方案对比。",
      badgeText: "DEMO CONCEPT",
      tags: ["专业顾问", "品牌背书", "在线表单"],
      desktopImage: "/mockups/consultant-desktop.jpg",
      mobileImage: "/mockups/consultant-mobile.jpg",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      id: "demo-personal",
      title: "Dr. Julian Tan | Business Coach",
      category: "personal",
      categoryZh: "个人品牌 / 导师顾问",
      description: "展示个人实力履历、导师课程介绍与个人媒体背书，建立无不可替代的专家形象。",
      badgeText: "DEMO CONCEPT",
      tags: ["个人品牌", "课程介绍", "媒体背书"],
      desktopImage: "/mockups/personal-desktop.jpg",
      mobileImage: "/mockups/personal-mobile.jpg",
      color: "from-violet-500/20 to-purple-500/20",
    },
    {
      id: "demo-studio",
      title: "Vivid Lens Creative Studio",
      category: "creative",
      categoryZh: "商业摄影 / 创意工作室",
      description: "视觉优先的摄影工作室展示网，极简暗黑排版，将作品集完美聚焦给潜在客户。",
      badgeText: "DEMO CONCEPT",
      tags: ["创意摄影", "作品集", "商业询价"],
      desktopImage: "/mockups/creative-desktop.jpg",
      mobileImage: "/mockups/creative-mobile.jpg",
      color: "from-cyan-500/20 to-blue-500/20",
    },
  ],

  // SUITABLE INDUSTRIES
  industries: [
    {
      id: "ind-1",
      name: "餐饮与食品",
      nameEn: "F&B & Restaurants",
      iconName: "Utensils",
      description: "餐厅、Bistro、咖啡馆、烘焙坊、私房菜与连锁餐饮",
      highlight: "提供在线菜单展示与一键 WhatsApp 订位",
    },
    {
      id: "ind-2",
      name: "美容与健美",
      nameEn: "Beauty & Wellness",
      iconName: "Sparkles",
      description: "美发沙龙、美甲美睫、皮肤管理诊所、SPA 养生会馆",
      highlight: "清晰呈现价目表与专业团队形象",
    },
    {
      id: "ind-3",
      name: "装修与工程",
      nameEn: "Renovation & Hardware",
      iconName: "Hammer",
      description: "室内设计、房屋翻新、冷气维修、电工水暖、铝业铁艺",
      highlight: "展示实际竣工案例集，建立专业信任感",
    },
    {
      id: "ind-4",
      name: "专业顾问服务",
      nameEn: "Professional Services",
      iconName: "Briefcase",
      description: "会计事务、法律咨询、保险理财、房产中介、企业顾问",
      highlight: "突出资质认证与专业服务方案",
    },
    {
      id: "ind-5",
      name: "个人品牌与导师",
      nameEn: "Personal Brand & Trainers",
      iconName: "UserCheck",
      description: "健身教练、培训导师、知识创作者、独立咨询师、自媒体",
      highlight: "打造个人专属权威门面，提升溢价能力",
    },
    {
      id: "ind-6",
      name: "创意与工作室",
      nameEn: "Creative & Studios",
      iconName: "Camera",
      description: "婚礼摄影、商业设计、活动策划、视频剪辑、独立工作室",
      highlight: "高质感视觉作品集展示与服务流程",
    },
  ],

  // 4-STEP WORKFLOW
  workflowSteps: [
    {
      number: "01",
      title: "告诉我们你的生意",
      subtitle: "需求确认与方向锁定",
      description: "通过 WhatsApp 告诉我们您的行业、品牌名称以及您希望呈现的核心服务与联系方式。",
      details: "我们可以根据您的行业提供专业的页面架构建议，无需复杂开会。",
    },
    {
      number: "02",
      title: "提交 Logo、资料与照片",
      subtitle: "轻松打包自备文案素材",
      description: "将您的品牌 Logo、产品/项目照片、联系信息及文字简介发送给我们即可。",
      details: "若没有现成文案，我们可以根据行业惯例协助优化基础排版内容。",
    },
    {
      number: "03",
      title: "我们完成设计与制作",
      subtitle: "全效开发与响应式适配",
      description: "我们将在约定的工作日内完成完整的桌面端与移动端网页设计，并生成预览链接给您审核。",
      details: "包含 1 次完整的设计细节修改与确认。",
    },
    {
      number: "04",
      title: "确认后正式上线",
      subtitle: "绑定域名与全网发布",
      description: "设计确认无误后，我们将协助您绑定自定义域名（Domain），并将网站发布至高速云端服务器。",
      details: "立即开始在 Facebook、Instagram、WhatsApp 与客户共享您的全新官网！",
    },
  ],

  // PRE-START CONFIRMATION
  preStartConfirmations: [
    "制作范围：单页式精美官网（含最多 5 大核心板块）",
    "所需资料：品牌 Logo、产品照片、公司简介与联系方式",
    "额外费用说明：域名（Domain ~$12-15/年）及主机服务按需自备或实报实销",
    "制作周期：资料齐备后约 3–7 个工作日交付初稿",
    "所有权归属：网站制作完成后无任何隐形限制，完全属于您",
  ],

  // UPGRADES & ADDONS
  addons: [
    {
      id: "addon-multipage",
      title: "多页面扩充 (Sub-pages)",
      titleEn: "Additional Pages",
      description: "如需增加单独的关于我们、团队介绍、独立案例页或服务详情页。",
      priceText: "询价",
      category: "structure",
    },
    {
      id: "addon-domain-hosting",
      title: "代办 Domain & 高速云主机",
      titleEn: "Domain & Cloud Hosting",
      description: "代为购买 .com / .com.my 域名，配置具备 SSL 安全证书的高速云端 CDN 主机。",
      priceText: "询价",
      popular: true,
      category: "infrastructure",
    },
    {
      id: "addon-copywriting",
      title: "文案润色与撰写",
      titleEn: "Professional Copywriting",
      description: "由转化型文案师协助撰写高吸引力的标语、公司简介与转化引导文案。",
      priceText: "询价",
      category: "content",
    },
    {
      id: "addon-catalogue",
      title: "产品 / 菜单排版录入",
      titleEn: "Catalog / Menu Upload",
      description: "协助批量上架录入 10-30 个产品照片、说明与价格目表。",
      priceText: "询价",
      category: "content",
    },
    {
      id: "addon-booking",
      title: "在线预约 / 日历系统",
      titleEn: "Online Booking System",
      description: "整合 Cal.com / Calendly 或自定义日历，让客户可直接在网页选择时间预约。",
      priceText: "询价",
      popular: true,
      category: "feature",
    },
    {
      id: "addon-ecommerce",
      title: "轻量电子商务 / 收款",
      titleEn: "E-Commerce & Payment",
      description: "集成 ToyyibPay / FPX / Stripe 在线付款按键与简易购物车系统。",
      priceText: "询价",
      category: "feature",
    },
    {
      id: "addon-chatbot",
      title: "AI 智能客服助手",
      titleEn: "AI Chatbot Integration",
      description: "训练专属 AI 客服挂载在网页右下角，24小时自动回答客户的常见问题与引导留单。",
      priceText: "询价",
      category: "feature",
    },
    {
      id: "addon-seo-advanced",
      title: "进阶 Local SEO 优化",
      titleEn: "Advanced Local SEO",
      description: "包含 Google My Business 优化、关键词结构映射与 Google Search Console 提交。",
      priceText: "询价",
      category: "marketing",
    },
  ],

  // FREQUENTLY ASKED QUESTIONS (13 COMPREHENSIVE FAQS)
  faqItems: [
    {
      id: "faq-1",
      question: "RM899 包含什么？会有隐藏收费吗？",
      answer: "RM899 包含完整的单页响应式官网设计、最多 5 个核心内容板块（如 Hero、关于我们、服务项目、优势特点、联系表单）、WhatsApp 快速对接、Google 地图嵌入、基础 SEO 优化以及 1 次上线前修改。我们绝不使用虚假标价，在制作前会清晰确认完整报价，未经确认绝对不会临时增加额外费用。",
    },
    {
      id: "faq-2",
      question: "RM899 是一次性收费吗？每年需要再付 RM899 吗？",
      answer: "是的，RM899 为设计与制作的一次性费用（One-time design fee）。上线后您无需每年再向我们支付 RM899 的设计维护费。您只需要每年自行续费自身的 Domain 域名（约 RM50-RM70/年）及托管主机环境（视云服务商而定）即可。",
    },
    {
      id: "faq-3",
      question: "域名（Domain）和主机（Hosting）包括在 RM899 里吗？",
      answer: "不包含。为了保持绝对透明，我们不将昂贵的代理主机成本打包硬塞给客户。如果您已有自己的 Domain 和 Hosting，我们可以直接帮您绑定部署；如果您还没有，我们也可以协助您以公道的价格（实报实销）代办购买与配置。",
    },
    {
      id: "faq-4",
      question: "我需要提供什么资料给你们？",
      answer: "您只需要提供：1. 品牌 Logo（如有）；2. 您的生意简介与产品/服务照片；3. 您的联系方式（WhatsApp 号码、地址、社交媒体链接）。如果您没有文案思路，我们会提供一份简单的排版模板指南，协助您快速准备。",
    },
    {
      id: "faq-5",
      question: "制作需要多久可以完成？",
      answer: "一般项目目标制作周期约 3–7 个工作日。具体时间主要取决于您自备资料的完整程度以及反馈修改的速度。资料越齐全，上线速度越快！",
    },
    {
      id: "faq-6",
      question: "网站做好后，我自己可以更新内容吗？",
      answer: "RM899 配套使用高效且高性能的静态源码架构打造，以保证最佳的加载速度与极致安全性。若日后有小范围的文字或联系方式修改，制作后 30 天内我们免费提供小修改服务；若需配置后台自管理系统（CMS），可在制作前作为扩充功能加入。",
    },
    {
      id: "faq-7",
      question: "以后如果生意扩大，可以增加更多页面或功能吗？",
      answer: "完全可以！我们的代码架构具备非常高的扩展性。未来随着您的业务成长，您可以随时联系我们扩充独立的子页面、接入在线预约、电商付款或 AI 客服等系统，无需废弃原有网页重新制作。",
    },
    {
      id: "faq-8",
      question: "RM899 可以做购物网站（E-commerce）吗？",
      answer: "RM899 配套主要定位为『企业展示与客户转化官网（Landing Page / Business Website）』。如果您需要购物车、多商品结算及在线 FPX/信用卡支付功能，这属于电商配套，我们可以根据您的商品数量提供单独的扩展报价。",
    },
    {
      id: "faq-9",
      question: "网站有包括 SEO 吗？谷歌搜得到我吗？",
      answer: "RM899 配套包含『基础 On-Page SEO 设置』，包括规范的 H1/H2 标题层级、Meta Title、Meta Description、图片 Alt 属性与 Open Graph 社交卡片。这能确保搜索引擎能够正确抓取与索引您的网页。若需要竞争激烈的特定搜索关键词排名，可另外选购进阶 SEO 优化服务。",
    },
    {
      id: "faq-10",
      question: "网站可以连接 WhatsApp 吗？客户留言会去哪里？",
      answer: "可以！网页上会有醒目的 WhatsApp 咨询按键。当客户点击按键时，会自动打开 WhatsApp 并带入预先设置好的讯息（例如：“你好，我想了解关于 XX 服务的报价”）。此外，网页上的 Contact Form 留言也可配置直发到您的电子邮箱。",
    },
    {
      id: "faq-11",
      question: "修改次数怎么算？",
      answer: "配套包含 1 次完整的设计修改机会（1 Revision Round）。在交付初稿预览后，您可以将所有希望调整的细节（如文字更改、图片更换、颜色微调等）打包一次性列出给我们，我们将集中为您修正调整。",
    },
    {
      id: "faq-12",
      question: "网站做好后产权归谁？",
      answer: "网站完全属于您！我们绝不搞捆绑条款或扣押客户网站资产。制作完成后，网站的所有源代码及部署环境完全归您企业所有。",
    },
    {
      id: "faq-13",
      question: "你们的设计会看起来像 cheap 的现成模板吗？",
      answer: "绝对不会！您现在正在浏览的这个网页，就是我们对 RM899 网站质感的基本要求。我们坚持使用极简高端的深色模式、苹果级别的排版气场与精致的动态过渡。您可以先查看我们的 Demo 案例，确认喜欢这种高端视觉品质后再付款合作。",
    },
  ],

  // SOCIAL LINKS
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/601158917029",
  },

  // SEO METADATA
  seo: {
    defaultTitle: "RM899 专业网站制作 | 高端设计 · 快速上线 | RMS Studio",
    titleTemplate: "%s | RMS Studio",
    defaultDescription: "专业的网站，不一定要 RM5,000。RMS Studio 为马来西亚中小企业、创业者与个人品牌打造高质感官网。清楚配套，专业设计，直接连接 WhatsApp 转化客户。",
    siteUrl: "https://rmsstudio.my",
    ogImage: "/og-image.jpg",
    keywords: [
      "网页设计",
      "马来西亚网页设计",
      "Website Design Malaysia",
      "SME Website Malaysia",
      "企业网站设计",
      "专业网站制作",
      "RM899 网站设计",
      "Landing Page 制作",
      "WhatsApp 询价网站",
    ],
  },
};
