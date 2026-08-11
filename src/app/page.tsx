'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { PositioningStrip } from '@/components/sections/PositioningStrip';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { LiveProofSection } from '@/components/sections/LiveProofSection';
import { PackageSection } from '@/components/sections/PackageSection';
import { WhyAffordableSection } from '@/components/sections/WhyAffordableSection';
import { PortfolioShowcase } from '@/components/sections/PortfolioShowcase';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { PreStartTrust } from '@/components/sections/PreStartTrust';
import { AddonSection } from '@/components/sections/AddonSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { LeadQualificationModal } from '@/components/modals/LeadQualificationModal';
import { PortfolioModal } from '@/components/modals/PortfolioModal';
import { PortfolioItem } from '@/config/site';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function Home() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);

  const handleOpenLeadModal = () => {
    setIsLeadModalOpen(true);
  };

  const handleSelectPortfolioItem = (item: PortfolioItem) => {
    setSelectedPortfolioItem(item);
  };

  const handlePortfolioWhatsApp = (contextText: string) => {
    const url = buildWhatsAppUrl(`你好！我在 RMS Studio 网站看到 ${contextText}，想了解类似的 RM899 制作配套。`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#08090E] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenLeadModal={handleOpenLeadModal} />

      {/* Main Content Funnel */}
      <main className="flex-1">
        {/* 01 Hero Section */}
        <HeroSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 02 Trust & Benefits Strip */}
        <PositioningStrip />

        {/* 03 Problem & Insight Section */}
        <ProblemSection />

        {/* 04 Visual Standard Proof Section */}
        <LiveProofSection />

        {/* 05 RM899 Package Details Section */}
        <PackageSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 06 Strategic Reason: Why RM899 is Possible */}
        <WhyAffordableSection />

        {/* 07 Demo Concept Portfolio Showcase */}
        <PortfolioShowcase onSelectPortfolioItem={handleSelectPortfolioItem} />

        {/* 08 Suitable Industries */}
        <IndustryGrid onOpenLeadModal={handleOpenLeadModal} />

        {/* 09 4-Step Production Workflow Timeline */}
        <ProcessTimeline />

        {/* 10 Pre-start Transparency Guarantee */}
        <PreStartTrust />

        {/* 11 Addons / Upsells Section */}
        <AddonSection onOpenLeadModal={handleOpenLeadModal} />

        {/* 12 FAQ Accordion */}
        <FAQSection />

        {/* 13 Final High-Impact Conversion CTA */}
        <FinalCTA onOpenLeadModal={handleOpenLeadModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp onOpenLeadModal={handleOpenLeadModal} />

      {/* Interactive Modals */}
      <LeadQualificationModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
      />

      <PortfolioModal
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
        onSelectWhatsApp={handlePortfolioWhatsApp}
      />
    </div>
  );
}
