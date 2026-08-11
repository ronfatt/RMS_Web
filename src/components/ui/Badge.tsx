import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'green';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className,
}) => {
  const variants = {
    primary: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    secondary: 'bg-white/5 text-slate-300 border-white/10',
    outline: 'bg-transparent text-slate-300 border-white/15',
    accent: 'bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-sky-500/20 text-purple-200 border-indigo-500/40 shadow-sm',
    green: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md transition-colors',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
