import React from 'react';
import { Badge } from './Badge';

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
        <div className="mb-4">
          <Badge variant="accent">{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
        {title}{' '}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-sky-300">
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
