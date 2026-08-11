'use client';

import React from 'react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteConfig } from '@/config/site';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface AddonSectionProps {
  onOpenLeadModal: () => void;
}

export const AddonSection: React.FC<AddonSectionProps> = ({ onOpenLeadModal }) => {
  return (
    <section className="py-20 md:py-28 relative bg-[#060709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="MODULAR UPGRADES"
          title="需要更多功能？"
          titleHighlight="之后再升级也可以。"
          subtitle="RM899 是建立高品质数字门面的起点。随着业务成长，您可以随时按需增加扩展功能，无缝衔接。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {siteConfig.addons.map((addon) => (
            <div
              key={addon.id}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">
                  {addon.titleEn}
                </span>
                <h3 className="text-base font-bold text-white">{addon.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {addon.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">扩展报价</span>
                <span className="font-bold text-slate-200 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  {addon.priceText}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="md"
            onClick={onOpenLeadModal}
            icon={<MessageCircle className="w-4 h-4" />}
          >
            询问特殊定制需求或功能扩展
          </Button>
        </div>
      </div>
    </section>
  );
};
