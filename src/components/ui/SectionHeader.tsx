import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  center = true,
}) => {
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
        {title}{' '}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-indigo-200 to-indigo-400">
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
