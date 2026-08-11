import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090E',
        surface: {
          DEFAULT: '#0E1017',
          hover: '#141722',
          card: '#11131F',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        brand: {
          blue: '#3B82F6',
          cyan: '#38BDF8',
          violet: '#6366F1',
          purple: '#8B5CF6',
          accent: '#4F46E5',
          glow: 'rgba(99, 102, 241, 0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.18) 0%, rgba(139, 92, 246, 0.08) 35%, rgba(8, 9, 14, 0) 70%)',
        'card-glow': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08) 0%, rgba(8, 9, 14, 0) 60%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
