import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './tailwind.css';
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#07080D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: 'RMS Studio', url: siteConfig.seo.siteUrl }],
  creator: 'RMS Studio',
  publisher: 'RMS Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.seo.siteUrl,
    languages: {
      'en': siteConfig.seo.siteUrl,
      'zh': `${siteConfig.seo.siteUrl}/?lang=zh`,
      'ms': `${siteConfig.seo.siteUrl}/?lang=bm`,
      'x-default': siteConfig.seo.siteUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.brandName,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: `${siteConfig.seo.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'RMS Studio - RM899 Professional Website Design Package Malaysia',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [`${siteConfig.seo.siteUrl}/og-image.jpg`],
    creator: '@rmsstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ProfessionalService & WebSite Schema
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.seo.siteUrl}/#organization`,
    name: siteConfig.brandName,
    url: siteConfig.seo.siteUrl,
    logo: `${siteConfig.seo.siteUrl}/og-image.jpg`,
    image: `${siteConfig.seo.siteUrl}/og-image.jpg`,
    description: siteConfig.seo.defaultDescription,
    telephone: '+601158917029',
    email: siteConfig.email,
    priceRange: 'RM899',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY',
      addressRegion: 'Kuala Lumpur',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 3.139,
      longitude: 101.6869,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '22:00',
      },
    ],
    offers: {
      '@type': 'Offer',
      name: 'RM899 Starter Website Package',
      price: '899',
      priceCurrency: 'MYR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
      url: siteConfig.seo.siteUrl,
      description: 'Single-page responsive landing funnel with WhatsApp lead integration.',
    },
  };

  // FAQPage Schema for Rich Snippets & AI Search (Perplexity, SearchGPT)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteConfig.faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // WebSite Schema for Sitelinks Search Box
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.seo.siteUrl}/#website`,
    url: siteConfig.seo.siteUrl,
    name: siteConfig.brandName,
    description: siteConfig.seo.defaultDescription,
    publisher: {
      '@id': `${siteConfig.seo.siteUrl}/#organization`,
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-[#07080D] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
