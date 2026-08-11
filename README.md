# RMS Studio - RM899 Professional Website Sales Funnel

> **专业的网站，不一定要 RM5,000。**
> High-converting, conversion-focused dark mode landing page & sales funnel for Malaysian SMEs, entrepreneurs, freelancers, local businesses, and personal brands.

---

## 🎯 Business Positioning Strategy

This web application positions **RMS Studio** as a modern, high-tech agency that uses **streamlined design systems and AI-assisted workflows** to deliver premium RM3,000–RM8,000 quality websites at an accessible RM899 entry price for Malaysian businesses.

### Key Funnel Elements Included:
- **Hero Section**: Premium typography, subheadline, price anchor, laptop browser mockup.
- **Positioning Strip**: Reinforces 5 core benefits (Custom design, Mobile responsive, WhatsApp integration, Basic SEO, Fast delivery).
- **Problem / Market Insight**: Explains why relying *only* on FB/IG/TikTok is insufficient and how an owned website acts as the central conversion property.
- **Visual Proof Banner**: Demonstrates visual authority ("The page you are reading right now is our visual standard").
- **RM899 Package Details**: Transparent breakdown of 12 deliverables, scope, and no hidden fees disclosure.
- **Why RM899 is Possible**: Explains production leverage (AI automation + reusable component systems).
- **Interactive Portfolio Showcase**: Filterable SME demo concepts (Restaurant, Beauty, Renovation, Financial Consultant, Personal Brand, Creative Studio) with responsive device preview modal.
- **Suitable Industries**: Cards for top Malaysian SME sectors.
- **4-Step Timeline Workflow**: Clear, low-friction production timeline (3–7 working days target).
- **Pre-Start Guarantee Checklist**: Builds high trust before initial deposit.
- **Add-on / Upsell Grid**: Modular expansion options as businesses grow.
- **13 Comprehensive FAQs**: Addresses pricing, domain/hosting, revisions, SEO, and ownership transparently.
- **Lead Qualification Modal**: Pre-WhatsApp interactive form that pre-populates customized, encoded WhatsApp messages.
- **Floating WhatsApp CTA**: Accessible quick contact widget for mobile and desktop.
- **Legal Routes**: Included Privacy Policy (`/privacy`) and Service Scope & Terms (`/terms`).

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Dark Theme Utilities (`src/app/globals.css`)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Config-Driven**: `src/config/site.ts`

---

## 📁 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout, metadata & JSON-LD schema
│   │   ├── page.tsx               # Primary Sales Landing Page
│   │   ├── globals.css            # Dark theme, glassmorphism & gradients
│   │   ├── privacy/page.tsx       # Privacy Policy Page
│   │   └── terms/page.tsx         # Terms of Service Page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # Sticky Header & Mobile Menu
│   │   │   └── Footer.tsx         # Footer Links & Scope Disclaimers
│   │   ├── sections/              # 13 Conversion Funnel Sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PositioningStrip.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── LiveProofSection.tsx
│   │   │   ├── PackageSection.tsx
│   │   │   ├── WhyAffordableSection.tsx
│   │   │   ├── PortfolioShowcase.tsx
│   │   │   ├── IndustryGrid.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   ├── PreStartTrust.tsx
│   │   │   ├── AddonSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── ui/                    # Reusable UI Elements
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── DeviceMockup.tsx   # Simulated browser/mobile preview frames
│   │   │   ├── Accordion.tsx      # Accessible FAQ Accordion
│   │   │   └── FloatingWhatsApp.tsx
│   │   └── modals/
│   │       ├── LeadQualificationModal.tsx
│   │       └── PortfolioModal.tsx
│   ├── config/
│   │   └── site.ts                # CENTRAL COMMERCIAL CONFIG FILE
│   ├── lib/
│   │   ├── whatsapp.ts            # WhatsApp URL & message encoder
│   │   ├── analytics.ts           # GA4 & Meta Pixel tracker
│   │   └── utils.ts               # Tailwind class merger
│   └── types/
│       └── index.ts               # Type definitions
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚡ Quick Start & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Check Types & Build
```bash
# Type check
npx tsc --noEmit

# Production build
npm run build
```

---

## ⚙️ How to Update Business Information (`src/config/site.ts`)

All commercial data is centralized in **`src/config/site.ts`**. You do **not** need to edit component files to change prices, phone numbers, or copy.

### Configurable Fields in `src/config/site.ts`:
- **`brandName`**: "RMS Studio"
- **`whatsappNumber`**: `"60123456789"` (Change to your actual WhatsApp phone number with country code, e.g., `60123456789`)
- **`price`**: `"RM899"`
- **`email`**: `"hello@rmsstudio.my"`
- **`socialLinks`**: Facebook & Instagram URLs
- **`packageFeatures`**: List of package inclusions
- **`portfolioItems`**: Demo concepts list
- **`addons`**: Upgrade items & pricing text
- **`faqItems`**: Questions and answers list

---

## 📊 Analytics Setup (Optional)

To enable Google Analytics 4 or Meta (Facebook) Pixel tracking, create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

The site automatically tracks:
- `hero_whatsapp_click`
- `package_whatsapp_click`
- `portfolio_whatsapp_click`
- `final_whatsapp_click`
- `floating_whatsapp_click`
- `lead_form_complete`
- `view_portfolio`

---

## 🚀 Deploy to Vercel

1. Push code to your GitHub / GitLab repository.
2. Import project into [Vercel](https://vercel.com).
3. Set Framework Preset: **Next.js**.
4. Add Environment Variables (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`) if applicable.
5. Click **Deploy**.

---

## 🔒 Verification & Quality Control Standard

- ✅ **TypeScript Check**: `npx tsc --noEmit` (0 errors)
- ✅ **Production Build**: `npm run build` (Passed - static export ready)
- ✅ **Mobile Responsive**: Tested across 375px, 430px, 768px, 1024px, 1440px break points.
- ✅ **Clean Code**: No hardcoded WhatsApp URLs scattered in components.
