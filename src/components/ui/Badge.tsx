import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className,
}) => {
  const variants = {
    primary: 'bg-brand-violet/10 text-brand-cyan border-brand-violet/20',
    secondary: 'bg-white/5 text-slate-300 border-white/10',
    outline: 'bg-transparent text-slate-300 border-white/15',
    accent: 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-purple-200 border-indigo-500/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide border transition-colors',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
