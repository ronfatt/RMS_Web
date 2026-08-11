import { Language } from '@/context/LanguageContext';

export interface Translations {
  nav: {
    portfolio: string;
    package: string;
    whyAffordable: string;
    workflow: string;
    faq: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headlinePrefix: string;
    headlineHighlight: string;
    subheadline: string;
    priceTag: string;
    priceNett: string;
    cta1: string;
    cta2: string;
    bullets: string[];
  };
  positioning: {
    benefits: { title: string; desc: string }[];
  };
  problem: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    statusQuoTitle: string;
    statusQuoItems: { bold: string; text: string }[];
    recommendedTitle: string;
    recommendedItems: { bold: string; text: string }[];
  };
  liveProof: {
    eyebrow: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    bullets: string[];
  };
  package: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    badge: string;
    cardTag: string;
    cardTitle: string;
    delivery: string;
    priceLabel: string;
    deliverablesTitle: string;
    features: string[];
    transparencyTitle: string;
    transparencyNotice: string;
    guaranteeText: string;
    cta: string;
  };
  whyAffordable: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: { step: string; tag: string; title: string; desc: string }[];
    quote: string;
    quoteSub: string;
    tradTitle: string;
    tradSteps: string[];
    rmsTitle: string;
    rmsSteps: string[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    categories: { id: string; label: string }[];
    note: string;
    clickPreview: string;
    desktop: string;
    mobile: string;
  };
  industry: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    bannerTitle: string;
    bannerSub: string;
    bannerCta: string;
  };
  workflow: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    notice: string;
  };
  preStart: {
    title: string;
    subtitle: string;
  };
  addon: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    quoteCta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  finalCta: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    button: string;
    note: string;
    guarantee: string;
  };
  modal: {
    eyebrow: string;
    title: string;
    subtitle: string;
    field1: string;
    field2: string;
    field2Placeholder: string;
    field3: string;
    field4: string;
    button: string;
    note: string;
  };
  footer: {
    desc: string;
    badge: string;
    navTitle: string;
    legalTitle: string;
    termsLink: string;
    privacyLink: string;
    disclaimer: string;
  };
}

export const i18n: Record<Language, Translations> = {
  zh: {
    nav: {
      portfolio: '案例展示',
      package: 'RM899 配套',
      whyAffordable: '优势解密',
      workflow: '制作流程',
      faq: 'FAQ 答疑',
      cta: 'WhatsApp 咨询',
    },
    hero: {
      eyebrow: 'MALAYSIA SME DIGITAL STUDIO',
      headlinePrefix: '专业官网，',
      headlineHighlight: '不一定需要 RM5,000。',
      subheadline: '为马来西亚中小企业、创业者与个人品牌打造拿得出手的专业官网。不清不楚不收费，从 RM899 开始。',
      priceTag: 'STARTER PACKAGE',
      priceNett: '/ NETT',
      cta1: '看看 RM899 包什么',
      cta2: 'WhatsApp 咨询需求',
      bullets: [
        '清楚配套无隐形收费',
        '拿得出手的专业设计',
        '100% 手机端响应式',
        '3–7 天目标上线',
      ],
    },
    positioning: {
      benefits: [
        { title: '专业视觉排版', desc: '根据品牌色调高精排版' },
        { title: 'Mobile Responsive', desc: '完美适配手机与桌面端' },
        { title: 'WhatsApp Integration', desc: '点击按键直达快速询价' },
        { title: 'Basic SEO Setup', desc: '基础 On-Page 与谷歌抓取' },
        { title: '高效快速上线', desc: '标准化流程 3–7 天交付' },
      ],
    },
    problem: {
      eyebrow: 'MARKET INSIGHT',
      title: '生意做得很好，为什么网上门面',
      titleHighlight: '还停留在“随便就好”？',
      subtitle: '许多马来西亚老板靠 FB、IG 和 WhatsApp 就能接到生意。社交平台很好，但它们是借来的阵地。要让高单价客户真正信任你，你需要一个属于自己的官网。',
      statusQuoTitle: '仅靠社交媒体 (FB / IG / TikTok)',
      statusQuoItems: [
        { bold: '信息分散难以查找：', text: '客户想找菜单、价目或案例，要在几十条帖文中下滑。' },
        { bold: '算法规则多变：', text: '无法 100% 沉淀自己的独立客户流量资产。' },
        { bold: 'Google 搜寻不到：', text: '客户在谷歌搜索您的行业或公司名时，查不到正式官网。' },
        { bold: '单价无法拉高：', text: '缺乏商务信任背书，面对大单客户容易处于被动。' },
      ],
      recommendedTitle: '社交媒体 + 专属专业官网',
      recommendedItems: [
        { bold: '品牌权威背书 (Credibility)：', text: '拥有专业 Domain 官网，大幅提升客户第一印象与成交率。' },
        { bold: '服务价格清晰 (Clarity)：', text: '核心优势与作品集一目了然，减少无意义客服询问。' },
        { bold: 'Google 主动搜寻 (Search)：', text: '让在谷歌寻找您服务的客户第一时间找到您。' },
        { bold: '广告导流终点站 (Conversion)：', text: '社交媒体广告流量引流至官网直接转化为 WhatsApp 咨询。' },
      ],
    },
    liveProof: {
      eyebrow: 'VISUAL STANDARD PROOF',
      headline: '你现在看到的这个网页，',
      headlineHighlight: '就是我们交付给你的最低质感。',
      subtitle: '没有廉价的模板痕迹，没有乱套的调色。干净干练的排版气场、流畅的手机端适配与清晰的转化逻辑，这就是 RM899 应该有的专业表现。',
      bullets: ['高端极简暗黑排版', '流畅微交互与过场', '100% Mobile 移动端优化'],
    },
    package: {
      eyebrow: 'CLEAR SCOPE & PRICING',
      title: 'RM899 Starter Website',
      titleHighlight: '完整配套范围',
      subtitle: '适合需要快速建立专业网上门面的中小企业、个人品牌与服务型生意。范围清楚透明，打造高效的询价入口。',
      badge: 'RECOMMENDED FOR SME',
      cardTag: 'COMPLETE STARTER PACKAGE',
      cardTitle: 'RM899 专业官网定制配套',
      delivery: '目标交付周期：3–7 个工作日（资料齐全后）',
      priceLabel: '全套一次性开发费用',
      deliverablesTitle: '配套包含的 12 项具体交付内容 (12 Core Deliverables)：',
      features: [
        '专属高质感视觉排版（拒绝廉价套版）',
        '单页式精美企业官网 (Single-Page Funnel)',
        '最多包含 5 大核心内容板块',
        '桌面 / 平板 / 手机三端响应式适配',
        '一键直达 WhatsApp 快速询价按键',
        '在线客户留言 / 需求收集表单',
        '社交媒体链接一键集成 (FB / IG / TikTok / 小红书)',
        'Google Maps 商家地址嵌入',
        '基础 On-Page SEO 结构设置',
        'Open Graph 社交媒体分享卡片配置',
        '1 次上线前完整设计修改',
        '全程协助绑定自定义域名与上线部署',
      ],
      transparencyTitle: '诚信透明提示 (Transparency Statement)：',
      transparencyNotice: '域名（Domain）与云主机（Hosting）如有需要可按实报实销报价代办或使用自备账号。制作前确认完整费用，不临时加价。',
      guaranteeText: '包含 1 次完整设计修改 · 100% 源代码产权归您所有',
      cta: '我要 RM899 配套',
    },
    whyAffordable: {
      eyebrow: 'STRATEGIC TRANSPARENCY',
      title: '为什么 RM899 也能做专业？',
      subtitle: '不是删减品质，而是淘汰重复人工。我们建立了自己的结构化设计系统与 AI 提效工作流，把省下的制作时间成本，直接回馈给本地商家。',
      pillars: [
        { step: '01', tag: '高效规范', title: '结构化设计系统 (Design System)', desc: '预先打磨高质感组件库，无需每次从零做重复的基础绘制。' },
        { step: '02', tag: '技术杠杆', title: 'AI 提效前端开发 (AI Automation)', desc: '利用 AI 提效代码生成，减少 60% 无意义的重复性编写。' },
        { step: '03', tag: '快速上线', title: '标准化交付流程 (Standard Workflow)', desc: '从资料收集到部署高度标准化，杜绝无限期沟通内耗。' },
      ],
      quote: '“ AI 帮我们减少制作时间，不是减少对设计的要求。”',
      quoteSub: '我们利用现代提效工具，将原本需要 30 小时的开发周期压缩至 5 小时内，因此能以更公道的价格交付高品质官网。',
      tradTitle: '传统网页设计公司 (RM3,000 - RM8,000)',
      tradSteps: [
        '多次线下会议与漫长需求沟通',
        '设计师从零绘制每一个细微草图',
        '工程师逐字重头敲基础代码',
        '3 到 6 周的反复修改与推迟内耗',
        '手动配置繁琐服务器环境',
      ],
      rmsTitle: 'RMS Studio 现代化工作流 (RM899)',
      rmsSteps: [
        '线上精准锁定框架与视觉风格',
        '成熟的高端视觉设计系统支撑',
        'AI 辅助前端高效组件化开发',
        '3–7 个工作日精准落地交付',
        '自动化云端极速部署上线',
      ],
    },
    portfolio: {
      eyebrow: 'HIGH-END DEMO CONCEPTS',
      title: 'RM899 真实质感案例',
      titleHighlight: '概念演示',
      subtitle: '以下为 RMS Studio 为各个不同行业打造的 Demo 概念设计。所有组件与排版均符合我们对 RM899 高端网站的品质要求。',
      categories: [
        { id: 'all', label: '全部案例 (All Demos & Work)' },
        { id: 'automotive', label: '摩托车 / 汽车经销' },
        { id: 'restaurant', label: '高级餐饮 / Bistro' },
        { id: 'beauty', label: '医美 / 美容养生' },
        { id: 'renovation', label: '装修 / 建筑工程' },
        { id: 'consultant', label: '企业顾问 / 金融' },
        { id: 'personal', label: '个人品牌 / 导师' },
        { id: 'creative', label: '摄影创意工作室' },
      ],
      note: '注：以上展示均为 RMS Studio 设计的 Demo 概念，旨在展现系统排版、美学与转化逻辑。',
      clickPreview: '点击预览',
      desktop: '桌面端',
      mobile: '手机端',
    },
    industry: {
      eyebrow: 'TARGET AUDIENCE',
      title: '什么生意适合',
      titleHighlight: 'RM899 专业官网配套？',
      subtitle: '只要您的客户会在 Google 或社交平台上搜索您的服务或公司，您就需要一个清楚、专业、属于自己的网上门面。',
      bannerTitle: '未在列表中找到你的行业？',
      bannerSub: '只要您有产品服务需要展示，并希望通过 WhatsApp 获取客户咨询，RM899 配套就能完全覆盖您的需求。',
      bannerCta: '告诉我你的行业，立即评估是否适合',
    },
    workflow: {
      eyebrow: '4-STEP WORKFLOW',
      title: '高效制作流程',
      titleHighlight: '最快 3 天正式上线',
      subtitle: '无需复杂的线下面谈与冗长的沟通流程。我们通过模块化协作，让您省时省心建立专业官网。',
      notice: '资料齐全后，目标制作周期约 3–7 个工作日交付初稿审核。',
    },
    preStart: {
      title: '合作承诺：开始之前，我们会先确认：',
      subtitle: '清楚明白 · 制作前确认完整费用 · 无未经许可的临时加价',
    },
    addon: {
      eyebrow: 'MODULAR UPGRADES',
      title: '需要更多功能？',
      titleHighlight: '之后再升级也可以。',
      subtitle: 'RM899 是建立高品质数字门面的起点。随着业务成长，您可以随时按需增加扩展功能，无缝衔接。',
      quoteCta: '询问特殊定制需求或功能扩展',
    },
    faq: {
      eyebrow: 'FREQUENTLY ASKED QUESTIONS',
      title: '常见问题答疑',
      titleHighlight: '(FAQ)',
      subtitle: '坦诚透明，不玩任何套路。以下是客户在合作前最关心的问题与解答。',
    },
    finalCta: {
      badge: 'RMS STUDIO STARTER PACKAGE',
      headline: '你的生意已经开始了。',
      headlineHighlight: '现在，给它一个真正属于自己的网上门面。',
      button: '开始制作我的网站',
      note: '💡 没有压力销售。先告诉我们你的行业，我们会客观评估这个配套是否适合你。',
      guarantee: '制作前确认完整费用 · 3–7 个工作日交付初稿',
    },
    modal: {
      eyebrow: 'QUICK WHATSAPP INQUIRY',
      title: '先告诉我你的需求',
      subtitle: '只需 15 秒填选，为您匹配最合适的 RM899 建议方案。',
      field1: '1. 您的行业类型：',
      field2: '2. 品牌 / 公司名称（选填）：',
      field2Placeholder: '例如：L\'Aura Bistro 或 铭记装修',
      field3: '3. 目前是否有网站？',
      field4: '4. 希望达到的主要目的：',
      button: '前往 WhatsApp 直接沟通',
      note: '无需注册账号 · 无压力销售',
    },
    footer: {
      desc: '为中小企业、创业者与个人品牌打造真正能够拿出去见客户的专业官网。清楚配套，专业设计，高效制作。',
      badge: '透明报价 · 明确范围 · 无隐形续费圈套',
      navTitle: '快捷导航',
      legalTitle: '服务条款与隐私',
      termsLink: '服务范围与条款 (Terms & Scope)',
      privacyLink: '隐私权政策 (Privacy Policy)',
      disclaimer: 'Domain & Cloud Hosting 为第三方独立服务，可依项目需求代办购买或自备绑定。',
    },
  },
  en: {
    nav: {
      portfolio: 'Portfolio',
      package: 'RM899 Package',
      whyAffordable: 'Why RM899',
      workflow: 'Process',
      faq: 'FAQ',
      cta: 'WhatsApp Inquiry',
    },
    hero: {
      eyebrow: 'MALAYSIA SME DIGITAL STUDIO',
      headlinePrefix: 'A Professional Website ',
      headlineHighlight: 'Doesn\'t Have to Cost RM5,000.',
      subheadline: 'Crafted for Malaysian SMEs, entrepreneurs, and personal brands. High-impact design, clear scope, starting from RM899.',
      priceTag: 'STARTER PACKAGE',
      priceNett: '/ NETT',
      cta1: 'See RM899 Scope',
      cta2: 'WhatsApp Inquiry',
      bullets: [
        'Transparent Package & No Hidden Fees',
        'High-End Professional Visual Design',
        '100% Mobile Responsive',
        'Fast 3–7 Days Delivery',
      ],
    },
    positioning: {
      benefits: [
        { title: 'Custom Visual Design', desc: 'Tailored typography & brand aesthetics' },
        { title: 'Mobile Responsive', desc: 'Perfectly adapted for phone & desktop' },
        { title: 'WhatsApp Integration', desc: 'Instant 1-click lead generation' },
        { title: 'Basic SEO Setup', desc: 'Google Search structure & indexing' },
        { title: 'Fast Delivery', desc: 'Standardized 3–7 days turnaround' },
      ],
    },
    problem: {
      eyebrow: 'MARKET INSIGHT',
      title: 'Your Business is Professional.',
      titleHighlight: 'Why is Your Website Still "Just Okay"?',
      subtitle: 'Many Malaysian SMEs rely solely on FB, IG, TikTok, and WhatsApp. Social media is great, but it is rented space. To win high-paying clients, you need an owned digital property.',
      statusQuoTitle: 'Relying Only on Social Media (FB / IG / TikTok)',
      statusQuoItems: [
        { bold: 'Scattered Information: ', text: 'Clients must scroll through dozens of posts to find menus, pricing, or portfolios.' },
        { bold: 'Unpredictable Algorithms: ', text: 'You cannot 100% own or convert your audience assets.' },
        { bold: 'Invisible on Google: ', text: 'When potential clients search your brand on Google, no official site appears.' },
        { bold: 'Stuck at Low Rates: ', text: 'Lacks official credibility, putting you at a disadvantage when closing big deals.' },
      ],
      recommendedTitle: 'Social Media + Owned Professional Website',
      recommendedItems: [
        { bold: 'Brand Credibility: ', text: 'Having an official domain website instantly boosts trust and closing rates.' },
        { bold: 'Information Clarity: ', text: 'Key services and portfolio displayed clearly, reducing repetitive inquiries.' },
        { bold: 'Google Search Presence: ', text: 'Capture active customers searching for your services on Google.' },
        { bold: 'Ad Conversion Destination: ', text: 'Convert paid social traffic directly into qualified WhatsApp leads.' },
      ],
    },
    liveProof: {
      eyebrow: 'VISUAL STANDARD PROOF',
      headline: 'The Website You Are Looking At Right Now ',
      headlineHighlight: 'Is Our Minimum Quality Standard.',
      subtitle: 'No cheap templates, no messy colors. Apple-level typography, seamless mobile responsiveness, and clear conversion logic — this is what RM899 should look like.',
      bullets: ['Minimalist Dark Mode Aesthetics', 'Smooth Micro-Interactions', '100% Mobile Optimized'],
    },
    package: {
      eyebrow: 'CLEAR SCOPE & PRICING',
      title: 'RM899 Starter Website',
      titleHighlight: 'Full Scope Breakdown',
      subtitle: 'Designed for SMEs, personal brands, and local services in Malaysia needing a quick, high-converting digital storefront.',
      badge: 'RECOMMENDED FOR SME',
      cardTag: 'COMPLETE STARTER PACKAGE',
      cardTitle: 'RM899 Professional Starter Website',
      delivery: 'Target Delivery: 3–7 Working Days (upon full materials)',
      priceLabel: 'One-Time Complete Design Fee',
      deliverablesTitle: '12 Core Deliverables Included:',
      features: [
        '100% Custom Visual Design (No Cheap Templates)',
        'Single-Page Landing Funnel Architecture',
        'Up to 5 Core Content Sections',
        'Desktop / Tablet / Mobile Responsive',
        '1-Click WhatsApp Direct Integration',
        'Online Lead Contact Form',
        'Social Media Links Integration (FB / IG / TikTok / RED)',
        'Google Maps Address Embedding',
        'Basic On-Page SEO Setup',
        'Open Graph Social Card Metadata',
        '1 Round of Pre-Launch Design Revision',
        'Full Domain Binding & Cloud Deployment Support',
      ],
      transparencyTitle: 'Transparency Guarantee:',
      transparencyNotice: 'Domain & Cloud Hosting can be purchased at cost price or linked to your existing provider. Clear quote confirmed beforehand with no hidden fees.',
      guaranteeText: 'Includes 1 Revision Round · 100% Source Code Ownership',
      cta: 'Get RM899 Package',
    },
    whyAffordable: {
      eyebrow: 'STRATEGIC TRANSPARENCY',
      title: 'Why Can RM899 Still Be Professional?',
      subtitle: 'We don\'t cut quality — we eliminate redundant manual labor. By leveraging structured design systems and AI development, we pass the saved time directly back to local businesses.',
      pillars: [
        { step: '01', tag: 'EFFICIENCY', title: 'Structured Design System', desc: 'Pre-refined component libraries remove repetitive baseline drafting.' },
        { step: '02', tag: 'LEVERAGE', title: 'AI Automation Development', desc: 'AI code generation cuts redundant coding time by 60%.' },
        { step: '03', tag: 'FAST LAUNCH', title: 'Standardized Workflow', desc: 'Streamlined intake to deployment eliminates endless meeting friction.' },
      ],
      quote: '“ AI reduces our production time, not our design standards. ”',
      quoteSub: 'By compressing a 30-hour development cycle into under 5 hours, we deliver high-end websites at an accessible price.',
      tradTitle: 'Traditional Digital Agencies (RM3,000 - RM8,000)',
      tradSteps: [
        'Multiple offline meetings & tedious briefings',
        'Designers draft every element from scratch',
        'Engineers write boilerplate code manually',
        '3 to 6 weeks of delay and revision friction',
        'Manual server environment setup',
      ],
      rmsTitle: 'RMS Studio Modern Workflow (RM899)',
      rmsSteps: [
        'Online precision structure & style selection',
        'High-end design system architecture',
        'AI-assisted rapid component development',
        '3–7 working days targeted delivery',
        'Automated instant cloud deployment',
      ],
    },
    portfolio: {
      eyebrow: 'FEATURED CLIENT PROJECTS',
      title: 'Real Work & Client Showcase',
      titleHighlight: '',
      subtitle: 'Explore live websites and interactive demos crafted by RMS Studio for real Malaysian businesses, corporate clients, and personal brands.',
      categories: [
        { id: 'all', label: 'All Projects' },
        { id: 'automotive', label: 'Motorcycle & Automotive' },
        { id: 'restaurant', label: 'Fine Dining & Bistro' },
        { id: 'beauty', label: 'Beauty & Aesthetics' },
        { id: 'renovation', label: 'Renovation & Interior' },
        { id: 'consultant', label: 'Advisory & Finance' },
        { id: 'personal', label: 'Personal Brand & Coach' },
        { id: 'creative', label: 'Creative & Media' },
      ],
      note: 'Authentic client work & interactive demos crafted by RMS Studio.',
      clickPreview: 'Click to Preview',
      desktop: 'Desktop',
      mobile: 'Mobile',
    },
    industry: {
      eyebrow: 'TARGET AUDIENCE',
      title: 'Which Businesses Benefit Most From ',
      titleHighlight: 'RM899 Package?',
      subtitle: 'If customers search for your company or services on Google or social media, you need a clear, professional website.',
      bannerTitle: 'Don\'t See Your Industry Listed?',
      bannerSub: 'As long as you have products/services to showcase and want WhatsApp leads, our RM899 funnel covers your needs.',
      bannerCta: 'Tell Us Your Industry for Instant Assessment',
    },
    workflow: {
      eyebrow: '4-STEP WORKFLOW',
      title: 'Efficient 4-Step Process',
      titleHighlight: 'Launch in 3–7 Days',
      subtitle: 'No complicated meetings. Our modular workflow ensures a smooth, hassle-free website launch.',
      notice: 'Target delivery is 3–7 working days upon receipt of complete materials.',
    },
    preStart: {
      title: 'Pre-Start Commitment: Before We Begin, We Confirm:',
      subtitle: 'Clear Scope · Upfront Pricing · Zero Unexpected Charges',
    },
    addon: {
      eyebrow: 'MODULAR UPGRADES',
      title: 'Need More Features?',
      titleHighlight: 'Upgrade Anytime as You Grow.',
      subtitle: 'RM899 is your starter foundation. As your business grows, add sub-pages, e-commerce, or booking seamlessly.',
      quoteCta: 'Inquire Custom Add-ons & Upgrades',
    },
    faq: {
      eyebrow: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Frequently Asked Questions',
      titleHighlight: '(FAQ)',
      subtitle: '100% transparent. Here are direct answers to the most common questions before working with us.',
    },
    finalCta: {
      badge: 'RMS STUDIO STARTER PACKAGE',
      headline: 'Your Business Has Started.',
      headlineHighlight: 'Now Give It a Digital Home It Deserves.',
      button: 'Start Building My Website',
      note: '💡 Zero pressure sales. Tell us your industry and we will give an honest assessment first.',
      guarantee: 'Confirmed Quote Pre-Start · 3–7 Working Days Delivery',
    },
    modal: {
      eyebrow: 'QUICK WHATSAPP INQUIRY',
      title: 'Tell Us Your Requirements',
      subtitle: 'Takes only 15 seconds to match your business with the best RM899 setup.',
      field1: '1. Select Your Industry:',
      field2: '2. Brand / Company Name (Optional):',
      field2Placeholder: 'e.g. L\'Aura Bistro or Artisan Build',
      field3: '3. Do You Currently Have a Website?',
      field4: '4. Primary Goal:',
      button: 'Continue to WhatsApp',
      note: 'No Registration Required · Zero Pressure',
    },
    footer: {
      desc: 'Crafting high-impact professional websites for SMEs, entrepreneurs, and personal brands in Malaysia.',
      badge: 'Transparent Quote · Clear Scope · No Lock-in Trap',
      navTitle: 'Quick Links',
      legalTitle: 'Legal & Terms',
      termsLink: 'Terms & Scope of Service',
      privacyLink: 'Privacy Policy',
      disclaimer: 'Domain & Cloud Hosting are independent third-party services, purchased at cost or linked to your existing account.',
    },
  },
  bm: {
    nav: {
      portfolio: 'Portfolio',
      package: 'Pakej RM899',
      whyAffordable: 'Mengapa RM899',
      workflow: 'Proses',
      faq: 'Soalan Lazim',
      cta: 'Pertanyaan WhatsApp',
    },
    hero: {
      eyebrow: 'STUDIO DIGITAL SME MALAYSIA',
      headlinePrefix: 'Laman Web Profesional ',
      headlineHighlight: 'Tidak Semestinya RM5,000.',
      subheadline: 'Direka khas untuk SME, usahawan, dan jenama peribadi di Malaysia. Reka bentuk berkualiti tinggi, skop jelas, bermula dari RM899.',
      priceTag: 'PAKEJ PERMULAAN',
      priceNett: '/ NETT',
      cta1: 'Lihat Skop RM899',
      cta2: 'Pertanyaan WhatsApp',
      bullets: [
        'Skop Jelas & Tiada Cas Tersembunyi',
        'Reka Bentuk Visual Profesional',
        '100% Responsif Telefon Pintar',
        'Sasaran Siap 3–7 Hari',
      ],
    },
    positioning: {
      benefits: [
        { title: 'Reka Bentuk Khas', desc: 'Estetika visual jenama profesional' },
        { title: 'Responsif Mudah Alih', desc: 'Sempurna di telefon & komputer' },
        { title: 'Integrasi WhatsApp', desc: '1-klikjana pelanggan sepantas kilat' },
        { title: 'Struktur SEO Asas', desc: 'Struktur On-Page & indeks Google' },
        { title: 'Siap Pantas', desc: 'Proses piawai siap dalam 3–7 hari' },
      ],
    },
    problem: {
      eyebrow: 'ANALISIS PASARAN',
      title: 'Perniagaan Anda Sudah Profesional.',
      titleHighlight: 'Mengapa Laman Web Masih "Biasa-Biasa"?',
      subtitle: 'Ramai pemilik perniagaan di Malaysia hanya bergantung pada FB, IG, TikTok, dan WhatsApp. Media sosial bagus, tetapi ia tapak sewaan. Untuk keyakinan pelanggan berprestij tinggi, anda perlukan laman web sendiri.',
      statusQuoTitle: 'Bergantung Hanya Pada Media Sosial (FB / IG / TikTok)',
      statusQuoItems: [
        { bold: 'Maklumat Berselerak: ', text: 'Pelanggan perlu skrol puluhan posting untuk cari menu, harga, atau portfolio.' },
        { bold: 'Algoritma Berubah-Ubah: ', text: 'Aset pengikut tidak 100% milik penuh perniagaan anda.' },
        { bold: 'Tidak Wujud Di Google: ', text: 'Apabila pelanggan cari nama perniagaan anda di Google, tiada laman rasmi keluar.' },
        { bold: 'Sukar Menaikkan Harga: ', text: 'Kurang keyakinan korporat apabila berdepan dengan pelanggan projek besar.' },
      ],
      recommendedTitle: 'Media Sosial + Laman Web Rasmi Profesional',
      recommendedItems: [
        { bold: 'Kredibiliti Jenama: ', text: 'Laman web berdomain rasmi meningkatkan persepsi dan kadar jualan.' },
        { bold: 'Kejelasan Maklumat: ', text: 'Perkhidmatan & portfolio dipapar jelas, mengurangkan soalan berulang.' },
        { bold: 'Carian Google (SEO): ', text: 'Dapatkan pelanggan yang aktif mencari perkhidmatan anda di Google.' },
        { bold: 'Destinasi Iklan: ', text: 'Tukarkan trafik iklan media sosial secara terus ke pautan WhatsApp.' },
      ],
    },
    liveProof: {
      eyebrow: 'BUKTI KUALITI VISUAL',
      headline: 'Laman Web Yang Anda Lihat Sekarang ',
      headlineHighlight: 'Adalah Standard Kualiti Minimum Kami.',
      subtitle: 'Tiada templat murah, tiada warna serabut. Tipografi gaya Apple, responsif telefon pintar yang lancar — ini adalah kualiti sepatutnya untuk RM899.',
      bullets: ['Estetika Minimalis Mode Gelap', 'Interaksi Mikro Lancar', '100% Dioptimumkan Untuk Telefon'],
    },
    package: {
      eyebrow: 'SKOP & HARGA JELAS',
      title: 'Pakej Permulaan RM899',
      titleHighlight: 'Pecahan Skop Lengkap',
      subtitle: 'Sesuai untuk SME, jenama peribadi, dan perkhidmatan tempatan di Malaysia yang perlukan laman web rasmi dengan pantas.',
      badge: 'DISYORKAN UNTUK SME',
      cardTag: 'PAKEJ LENGKAP PERMULAAN',
      cardTitle: 'Laman Web Permulaan RM899',
      delivery: 'Sasaran Siap: 3–7 Hari Bekerja (setelah maklumat lengkap)',
      priceLabel: 'Yuran Pembangunan Sekali Sahaja',
      deliverablesTitle: '12 Perkara Utama Yang Disediakan:',
      features: [
        'Reka Bentuk Visual Khas (Bukan Templat Murah)',
        'Seni Bina Laman Web Satu Muka Surat (Single-Page Funnel)',
        'Sehingga 5 Bahagian Kandungan Utama',
        'Responsif Komputer / Tablet / Telefon',
        'Integrasi 1-Klik Ke WhatsApp',
        'Borang Hubungi & Pertanyaan Dalam Talian',
        'Pautan Media Sosial (FB / IG / TikTok / Xiaohongshu)',
        'Peta Lokasi Google Maps',
        'Tetapan Asas SEO On-Page',
        'Tetapan Metadata Kad Media Sosial Open Graph',
        '1 Semakan Reka Bentuk Sebelum Pelancaran',
        'Bantuan Penambatan Domain & Pelancaran Awan',
      ],
      transparencyTitle: 'Jaminan Ketelusan:',
      transparencyNotice: 'Domain & Hosting Awan boleh dibeli mengikut harga kos sebenar atau disambungkan ke akaun sedia ada anda. Tiada cas tersembunyi.',
      guaranteeText: 'Termasuk 1 Kali Semakan · 100% Hak Milik Kod Sumber',
      cta: 'Saya Mahu Pakej RM899',
    },
    whyAffordable: {
      eyebrow: 'KETELUSAN STRATEGIK',
      title: 'Mengapa RM899 Masih Boleh Jadi Profesional?',
      subtitle: 'Kami tidak mengurangkan kualiti — kami mengurangkan kerja manual berulang dengan sistem reka bentuk berstruktur & AI.',
      pillars: [
        { step: '01', tag: 'CEKAP', title: 'Sistem Reka Bentuk Berstruktur', desc: 'Komponen sedia ada mengelakkan lukisan asas secara berulang.' },
        { step: '02', tag: 'TEKNOLOGI', title: 'Pembangunan AI Automasi', desc: 'Automasi AI mengurangkan masa penulisan kod sehingga 60%.' },
        { step: '03', tag: 'PANTAS', title: 'Aliran Kerja Piawai', desc: 'Proses teratur dari pengumpulan maklumat hingga pelancaran.' },
      ],
      quote: '“ AI mengurangkan masa pembuatan kami, bukan mengurangkan mutu reka bentuk. ”',
      quoteSub: 'Dengan memampatkan masa pembangunan 30 jam kepada bawah 5 jam, kami mampu menawarkan harga lebih munasabah.',
      tradTitle: 'Agensi Reka Bentuk Tradisional (RM3,000 - RM8,000)',
      tradSteps: [
        'Mesyuarat berulang & perbincangan panjang',
        'Pereka melukis setiap elemen dari awal',
        'Jurutera menulis kod asas secara manual',
        'Proses 3 hingga 6 minggu yang lambat',
        'Persediaan pelayan secara manual',
      ],
      rmsTitle: 'Aliran Kerja Moden RMS Studio (RM899)',
      rmsSteps: [
        'Pemilihan struktur & gaya secara dalam talian',
        'Seni bina sistem reka bentuk korporat',
        'Pembangunan komponen pantas berpandukan AI',
        'Sasaran penyerahan 3–7 hari bekerja',
        'Pelancaran awan automatik pantas',
      ],
    },
    portfolio: {
      eyebrow: 'KONSEP DEMO BERKUALITI',
      title: 'Portfolio Konsep RM899',
      titleHighlight: 'Demo Konsep',
      subtitle: 'Lihat konsep demo yang direka untuk pelbagai industri di Malaysia. Semua reka bentuk memenuhi standard visual RM899.',
      categories: [
        { id: 'all', label: 'Semua Projek' },
        { id: 'automotive', label: 'Motosikal & Automotif' },
        { id: 'restaurant', label: 'Restoran & Bistro' },
        { id: 'beauty', label: 'Kecantikan & Estetik' },
        { id: 'renovation', label: 'Hiasan Dalaman & Bina' },
        { id: 'consultant', label: 'Penasihat & Kewangan' },
        { id: 'personal', label: 'Jenama Peribadi & Jurulatih' },
        { id: 'creative', label: 'Kreatif & Media' },
      ],
      note: 'Nota: Semua item di atas adalah demo konsep yang dihasilkan oleh RMS Studio.',
      clickPreview: 'Klik Untuk Pratinjau',
      desktop: 'Komputer',
      mobile: 'Telefon',
    },
    industry: {
      eyebrow: 'SASARAN PERNIAGAAN',
      title: 'Perniagaan Mana Yang Sesuai Untuk ',
      titleHighlight: 'Pakej RM899?',
      subtitle: 'Sekiranya pelanggan anda mencari perkhidmatan anda di Google atau media sosial, anda memerlukan laman web rasmi.',
      bannerTitle: 'Tidak Jumpa Industri Anda Dalam Senarai?',
      bannerSub: 'Selagi anda mempunyai produk/perkhidmatan dan mahukan pertanyaan WhatsApp, pakej RM899 kami memenuhi keperluan anda.',
      bannerCta: 'Beritahu Industri Anda Untuk Penilaian Segera',
    },
    workflow: {
      eyebrow: 'ALIRAN KERJA 4 LANGKAH',
      title: 'Proses Cekap 4 Langkah',
      titleHighlight: 'Pelancaran 3–7 Hari',
      subtitle: 'Tanpa perbincangan rumit. Aliran kerja modular kami memastikan pelancaran laman web berjalan lancar.',
      notice: 'Sasaran penyerahan adalah 3–7 hari bekerja setelah maklumat lengkap diterima.',
    },
    preStart: {
      title: 'Komitmen Sebelum Bermula: Kami Sahkan:',
      subtitle: 'Skop Jelas · Harga Disahkan Awal · Tiada Cas Tersembunyi',
    },
    addon: {
      eyebrow: 'NAIK TARAF MODULAR',
      title: 'Perlukan Lebih Banyak Fungsi?',
      titleHighlight: 'Naik Taraf Bila-Bila Masa.',
      subtitle: 'RM899 adalah asas permulaan anda. Tambah muka surat, e-dagang, atau sistem tempahan apabila perniagaan anda berkembang.',
      quoteCta: 'Tanya Penambahan & Naik Taraf Khas',
    },
    faq: {
      eyebrow: 'SOALAN LAZIM',
      title: 'Soalan-Soalan Lazim',
      titleHighlight: '(FAQ)',
      subtitle: '100% telus. Berikut adalah jawapan terus bagi soalan utama sebelum bekerjasama dengan kami.',
    },
    finalCta: {
      badge: 'PAKEJ PERMULAAN RMS STUDIO',
      headline: 'Perniagaan Anda Telah Bermula.',
      headlineHighlight: 'Sekarang, Berikannya Laman Web Rasmi Yang Layak.',
      button: 'Mula Bina Laman Web Saya',
      note: '💡 Tiada jualan paksaan. Beritahu industri anda dan kami berikan penilaian ikhlas terlebih dahulu.',
      guarantee: 'Sahkan Harga Sebelum Mula · Penyerahan 3–7 Hari Bekerja',
    },
    modal: {
      eyebrow: 'PERTANYAAN WHATSAPP PANTAS',
      title: 'Beritahu Keperluan Anda',
      subtitle: 'Hanya 15 saat untuk padankan perniagaan anda dengan persediaan RM899 terbaik.',
      field1: '1. Pilih Jenis Industri Anda:',
      field2: '2. Nama Jenama / Syarikat (Pilihan):',
      field2Placeholder: 'contoh: L\'Aura Bistro atau Artisan Build',
      field3: '3. Adakah Anda Mempunyai Laman Web Sekarang?',
      field4: '4. Tujuan Utama:',
      button: 'Teruskan Ke WhatsApp',
      note: 'Tanpa Pendaftaran · Tiada Paksaan',
    },
    footer: {
      desc: 'Membina laman web profesional berimpak tinggi untuk SME, usahawan, dan jenama peribadi di Malaysia.',
      badge: 'Harga Telus · Skop Jelas · Tiada Perangkap Kontrak',
      navTitle: 'Pautan Pantas',
      legalTitle: 'Syarat & Undang-Undang',
      termsLink: 'Skop & Syarat Perkhidmatan (Terms)',
      privacyLink: 'Dasar Privasi (Privacy Policy)',
      disclaimer: 'Domain & Hosting Awan adalah perkhidmatan pihak ketiga bebas, dibeli mengikut kos atau dihubungkan ke akaun anda.',
    },
  },
};
