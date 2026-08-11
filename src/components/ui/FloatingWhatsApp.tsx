'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface FloatingWhatsAppProps {
  onOpenLeadModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenLeadModal,
}) => {
  const handleClick = () => {
    trackEvent('floating_whatsapp_click');
    onOpenLeadModal();
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip badge on hover */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-900/90 text-slate-200 border border-white/10 shadow-xl backdrop-blur-md animate-pulse-slow">
        了解 RM899 方案
      </span>

      <button
        onClick={handleClick}
        aria-label="WhatsApp 咨询"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-slate-950 shadow-xl shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950 stroke-none group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 -z-10"></span>
      </button>
    </div>
  );
};
