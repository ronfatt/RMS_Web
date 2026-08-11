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
          <Badge variant="primary">{eyebrow}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}{' '}
        {titleHighlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400">
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
