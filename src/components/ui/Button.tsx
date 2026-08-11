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
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400/30 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-slate-100 text-slate-950 font-bold hover:bg-white shadow-lg shadow-white/10 hover:shadow-white/20',
      secondary:
        'bg-slate-900 text-slate-200 hover:bg-slate-800 border border-slate-800',
      whatsapp:
        'bg-[#25D366] text-slate-950 font-bold shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/35 hover:bg-[#20bd5a]',
      outline:
        'border border-slate-800 text-slate-200 hover:bg-slate-900 hover:border-slate-700',
      ghost:
        'text-slate-400 hover:text-white hover:bg-slate-900',
    };

    const sizes = {
      sm: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5',
      md: 'px-5 py-2.5 text-sm font-semibold gap-2',
      lg: 'px-7 py-3.5 text-base font-semibold gap-2.5',
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
