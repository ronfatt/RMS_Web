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
  heroSubheadline: "为马来西亚中小企业、创业者与个人品牌打造拿得出手的专业官网。高效工作流交付，清楚明白，从 RM899 开始。",
  price: "RM899",
  originalPriceReference: "RM5,000",
  currency: "RM",
  
  // EDITABLE BUSINESS CONTACTS
  whatsappNumber: "601158917029",
  whatsappDefaultMessage: "你好！我在 RMS Studio 网站看到 RM899 专业官网配套，想了解是否适合我的生意。",
  email: "hello@rmsstudio.my",
  deliveryEstimate: "3–7 个工作日",
  deliveryNotice: "资料齐全后，目标制作周期约 3–7 个工作日交付初稿审核。",
  revisionLimit: "1 次完整设计细节微调",

  // RM899 PACKAGE INCLUSIONS
  packageFeatures: [
    { text: "专属高质感视觉排版（拒绝廉价套版）", included: true, highlight: true },
    { text: "单页式精美企业官网 (Single-Page Funnel)", included: true, highlight: true },
    { text: "最多包含 5 大核心内容板块", included: true },
    { text: "桌面 / 平板 / 手机三端响应式适配", included: true, highlight: true },
    { text: "一键直达 WhatsApp 快速询价按键", included: true, highlight: true },
    { text: "在线客户留言 / 需求收集表单", included: true },
    { text: "社交媒体链接一键集成 (FB / IG / TikTok / 小红书)", included: true },
    { text: "Google Maps 商家地址嵌入", included: true },
    { text: "基础 On-Page SEO 结构设置", included: true },
    { text: "Open Graph 社交媒体分享卡片配置", included: true },
    { text: "1 次上线前完整设计修改", included: true },
    { text: "全程协助绑定自定义域名与上线部署", included: true },
  ],

  transparencyNotice: "域名（Domain）与云主机（Hosting）如有需要可按实报实销报价代办或使用自备账号。制作前确认完整费用，不临时加价。",
  
  transparencyGuarantees: [
    "确认所有范围与设计需求后才付定金",
    "明确告知域名与主机第三方实报实销费用",
    "无强制绑定长期高昂维护月费，上线后所有权归您",
    "明确制作与交付周期，按约推进",
    "支持未来随着业务成长随时增加更多独立页面与功能",
  ],

  // WHY RM899 REASONING
  whyAffordable: {
    title: "为什么 RM899 也能做专业？",
    subtitle: "不是删减品质，而是淘汰重复人工。我们建立了自己的结构化设计系统与 AI 提效工作流，把省下的制作时间成本，直接回馈给本地商家。",
    points: [
      {
        step: "01",
        title: "结构化设计系统 (Design System)",
        description: "预先打磨高质感、高复用度的现代化组件库，无需每次从零做重复的基础绘制。",
        tag: "高效规范",
      },
      {
        step: "02",
        title: "AI 提效前端开发 (AI Automation)",
        description: "利用 AI 提效代码生成与排版处理，减少 60% 无意义的重复性代码编写。",
        tag: "技术杠杆",
      },
      {
        step: "03",
        title: "标准化交付流程 (Standard Workflow)",
        description: "从资料收集到部署上线高度标准化，杜绝无限期沟通内耗，大幅提升效率。",
        tag: "快速上线",
      },
    ],
    comparison: {
      traditionalTitle: "传统网页设计公司 (RM3,000 - RM8,000)",
      traditionalSteps: [
        "多次线下会议与漫长需求沟通",
        "设计师从零绘制每一个细微草图",
        "工程师逐字重头敲基础代码",
        "3 到 6 周的反复修改与推迟内耗",
        "手动配置繁琐服务器环境",
      ],
      rmsTitle: "RMS Studio 现代化工作流 (RM899)",
      rmsSteps: [
        "线上精准锁定框架与视觉风格",
        "成熟的高端视觉设计系统支撑",
        "AI 辅助前端高效组件化开发",
        "3–7 个工作日精准落地交付",
        "自动化云端极速部署上线",
      ],
    },
  },

  // DEMO PORTFOLIO SHOWCASE
  portfolioItems: [
    {
      id: "demo-gastronomy",
      title: "L'Aura Fine Dining & Bistro",
      category: "restaurant",
      categoryZh: "高级餐饮 / Bistro",
      description: "专为高端餐厅打造的形象官网，突出氛围感、招牌菜色与 WhatsApp 订位。",
      badgeText: "DEMO CONCEPT",
      tags: ["餐饮", "菜单展示", "WhatsApp 订位"],
      desktopImage: "/mockups/restaurant-desktop.jpg",
      mobileImage: "/mockups/restaurant-mobile.jpg",
      color: "from-amber-950/40 via-slate-900 to-slate-950",
    },
    {
      id: "demo-aesthetics",
      title: "SkinVerse Aesthetic Clinic",
      category: "beauty",
      categoryZh: "医美 / 皮肤管理",
      description: "极简风医美诊所网页，呈现专业医师团队、疗程项目与预约入口。",
      badgeText: "DEMO CONCEPT",
      tags: ["医美诊所", "疗程项目", "在线预约"],
      desktopImage: "/mockups/beauty-desktop.jpg",
      mobileImage: "/mockups/beauty-mobile.jpg",
      color: "from-rose-950/40 via-slate-900 to-slate-950",
    },
    {
      id: "demo-renovation",
      title: "Artisan Build & Design",
      category: "renovation",
      categoryZh: "室内设计 / 装修工程",
      description: "呈现施工案例与高质感作品集，清晰展示工程流程与报价咨询。",
      badgeText: "DEMO CONCEPT",
      tags: ["装修工程", "案例画廊", "免费报价"],
      desktopImage: "/mockups/renovation-desktop.jpg",
      mobileImage: "/mockups/renovation-mobile.jpg",
      color: "from-blue-950/40 via-slate-900 to-slate-950",
    },
    {
      id: "demo-advisory",
      title: "Apex Horizon Advisory",
      category: "consultant",
      categoryZh: "企业顾问 / 金融理财",
      description: "传递权威信赖感的金融顾问官网，强化品牌资质背书与服务方案。",
      badgeText: "DEMO CONCEPT",
      tags: ["专业顾问", "品牌背书", "需求表单"],
      desktopImage: "/mockups/consultant-desktop.jpg",
      mobileImage: "/mockups/consultant-mobile.jpg",
      color: "from-emerald-950/40 via-slate-900 to-slate-950",
    },
    {
      id: "demo-personal",
      title: "Julian Tan | Business Coach",
      category: "personal",
      categoryZh: "个人品牌 / 导师顾问",
      description: "展示个人履历、导师课程与媒体背书，建立无可替代的专业形象。",
      badgeText: "DEMO CONCEPT",
      tags: ["个人品牌", "课程介绍", "媒体背书"],
      desktopImage: "/mockups/personal-desktop.jpg",
      mobileImage: "/mockups/personal-mobile.jpg",
      color: "from-purple-950/40 via-slate-900 to-slate-950",
    },
    {
      id: "demo-studio",
      title: "Vivid Lens Creative Studio",
      category: "creative",
      categoryZh: "商业摄影 / 创意工作室",
      description: "视觉优先的摄影工作室网，极简暗黑排版，将作品集集中呈现给潜在客户。",
      badgeText: "DEMO CONCEPT",
      tags: ["商业摄影", "作品集", "在线询价"],
      desktopImage: "/mockups/creative-desktop.jpg",
      mobileImage: "/mockups/creative-mobile.jpg",
      color: "from-cyan-950/40 via-slate-900 to-slate-950",
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
      title: "告诉我们你的生意",
      subtitle: "需求沟通与定位",
      description: "通过 WhatsApp 告诉我们您的行业、品牌名称以及您希望呈现的核心服务与联系方式。",
      details: "我们将根据您的行业提供专业的单页结构建议。",
    },
    {
      number: "02",
      title: "提交 Logo、资料与照片",
      subtitle: "轻松打包自备素材",
      description: "将您的品牌 Logo、产品/服务照片与简介发送给我们。",
      details: "没有现成文案也不用担心，我们可以根据行业惯例协助优化基础文字排版。",
    },
    {
      number: "03",
      title: "我们完成设计与制作",
      subtitle: "响应式开发与适配",
      description: "我们在约定的工作日内完成桌面端与手机端设计，并生成在线链接供您审核。",
      details: "包含 1 次上线前完整设计微调。",
    },
    {
      number: "04",
      title: "确认后正式上线",
      subtitle: "域名绑定与云端部署",
      description: "确认无误后，协助您绑定自定义域名（Domain），发布至云端服务器。",
      details: "立即开始在 Facebook、Instagram、WhatsApp 向客户展示您的全新官网！",
    },
  ],

  // PRE-START CONFIRMATION
  preStartConfirmations: [
    "制作范围：单页式精美官网（含最多 5 大核心板块）",
    "所需资料：Logo、产品/服务照片、简介与联系方式",
    "额外费用说明：域名与主机按需自备或实报实销",
    "制作周期：资料齐备后约 3–7 个工作日交付初稿",
    "所有权归属：网站上线后 100% 完全属于您",
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
      description: "代为购买 .com / .com.my 域名，配置 SSL 安全证书的高速云端 CDN 主机。",
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
      title: "轻量电商 / 收款功能",
      titleEn: "E-Commerce & Payment",
      description: "集成 ToyyibPay / FPX / Stripe 在线付款按键与简易购物车系统。",
      priceText: "询价",
      category: "feature",
    },
    {
      id: "addon-chatbot",
      title: "AI 智能客服助手",
      titleEn: "AI Chatbot Integration",
      description: "挂载专属 AI 客服，24小时自动回答客户常见问题与引导留单。",
      priceText: "询价",
      category: "feature",
    },
    {
      id: "addon-seo-advanced",
      title: "进阶 Local SEO 优化",
      titleEn: "Advanced Local SEO",
      description: "包含 Google Business Profile 优化与 Search Console 架构提交。",
      priceText: "询价",
      category: "marketing",
    },
  ],

  // FREQUENTLY ASKED QUESTIONS
  faqItems: [
    {
      id: "faq-1",
      question: "RM899 包含什么？会有隐藏收费吗？",
      answer: "RM899 包含完整的单页响应式官网设计、最多 5 个核心内容板块（如 Hero、关于我们、服务项目、优势特点、联系表单）、WhatsApp 快速对接、Google 地图嵌入、基础 On-Page SEO 以及 1 次上线前修改。我们绝不搞隐形开销，制作前确认完整费用，绝不临时增加费用。",
    },
    {
      id: "faq-2",
      question: "RM899 是一次性收费吗？每年需要再付 RM899 吗？",
      answer: "是的，RM899 为设计与制作的一次性费用（One-time design fee）。上线后您无需每年再向我们支付设计维护费。您只需要每年自行续费自身的 Domain 域名（约 RM50-RM70/年）及云主机托管环境即可。",
    },
    {
      id: "faq-3",
      question: "域名（Domain）和主机（Hosting）包括在 RM899 里吗？",
      answer: "不包含。为了保持收费绝对透明，我们不将代理主机成本硬塞给客户。如果您已有自己的 Domain 和 Hosting，我们可以直接帮您绑定部署；如果还没有，我们可以协助您以公道的价格（实报实销）代办购买与配置。",
    },
    {
      id: "faq-4",
      question: "我需要提供什么资料？",
      answer: "您只需要提供：1. 品牌 Logo（如有）；2. 您的生意简介与产品/服务照片；3. 您的联系方式（WhatsApp 号码、地址、社交媒体链接）。如果您没有文案思路，我们会提供一份简单模板指南协助您准备。",
    },
    {
      id: "faq-5",
      question: "制作需要多久可以完成？",
      answer: "资料齐备后，目标制作周期约 3–7 个工作日交付初稿。具体时间主要取决于您素材提供与审核反馈的速度。",
    },
    {
      id: "faq-6",
      question: "网站做好后，我自己可以更新内容吗？",
      answer: "RM899 配套采用极速且高强度的静态源码架构打造，以保证最佳加载速度与极致安全性。若日后有小范围的文字或联系方式修改，制作后 30 天内我们免费提供调整；若需要配置后台自管理系统（CMS），可在制作前作为扩展功能加入。",
    },
    {
      id: "faq-7",
      question: "以后如果生意扩大，可以增加更多页面或功能吗？",
      answer: "完全可以！我们的代码架构具备非常高的扩展性。未来随着您的业务成长，您可以随时联系我们扩充独立的子页面、接入在线预约、电商付款或 AI 客服等系统，无需废弃原有网页重做。",
    },
    {
      id: "faq-8",
      question: "RM899 可以做购物网站（E-commerce）吗？",
      answer: "RM899 配套主要定位为『企业展示与客户转化官网』。如果您需要购物车、多商品结算及在线 FPX/信用卡支付功能，这属于电商配套，我们可以根据您的需求提供扩展报价。",
    },
    {
      id: "faq-9",
      question: "网站有包括 SEO 吗？谷歌搜得到我吗？",
      answer: "RM899 配套包含基础 On-Page SEO 设置，包括规范的 H1/H2 标题层级、Meta Title、Meta Description、图片 Alt 属性与 Open Graph 分享卡片，确保搜索引擎能正确抓取您的网页。若需要特定关键词在谷歌首页排名，可另外选购进阶 SEO 服务。",
    },
    {
      id: "faq-10",
      question: "网站可以连接 WhatsApp 吗？客户留言会去哪里？",
      answer: "可以！网页上会有醒目的 WhatsApp 咨询按键。当客户点击按键时，会自动打开 WhatsApp 并带入预先设置好的讯息。此外，网页上的 Contact Form 留言也可配置直发到您的电子邮箱。",
    },
    {
      id: "faq-11",
      question: "修改次数怎么算？",
      answer: "配套包含 1 次上线前的完整设计修改（1 Revision Round）。在交付初稿预览后，您可以将所有希望调整的细节打包一次性列出给我们，我们将集中为您修正调整。",
    },
    {
      id: "faq-12",
      question: "网站做好后产权归谁？",
      answer: "网站完全属于您！我们绝不搞捆绑条款或扣押客户资产。制作完成结清后，网站的所有源代码及部署环境完全归您企业所有。",
    },
    {
      id: "faq-13",
      question: "你们的设计会看起来像 cheap 的现成模板吗？",
      answer: "绝对不会！您现在正在浏览的这个网页，就是我们对 RM899 网站质感的基本要求。我们使用极简高端的暗黑排版与流畅的动态过渡。您可以先查看我们的 Demo 案例，确认喜欢这种视觉品质后再决定合作。",
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
      "网页设计",
      "马来西亚网页设计",
    ],
  },
};
