import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      icon,
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] border border-indigo-400/30',
      secondary:
        'bg-slate-900/90 text-white hover:bg-slate-800 border border-white/15 backdrop-blur-md shadow-lg',
      whatsapp:
        'bg-gradient-to-r from-[#25D366] to-[#128C7E] text-slate-950 font-black shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-[1.02] border border-emerald-300/40',
      outline:
        'border border-white/20 text-slate-200 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm',
      ghost:
        'text-slate-300 hover:text-white hover:bg-white/5',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs font-semibold gap-1.5',
      md: 'px-6 py-3 text-sm font-bold gap-2',
      lg: 'px-8 py-4 text-base font-extrabold gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
