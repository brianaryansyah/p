/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050507',
          900: '#09090b',
          800: '#121215',
          700: '#18181c',
          600: '#27272a'
        },
        artfolio: {
          card: '#131316',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.2)',
          accent: '#10b981',
          purple: '#a855f7',
          cyan: '#06b6d4',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'artfolio': '0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'artfolio-glow': '0 0 50px -10px rgba(16, 185, 129, 0.25), 0 20px 40px -10px rgba(0, 0, 0, 0.8)',
        'glow-emerald': '0 0 40px -8px rgba(16, 185, 129, 0.35)',
        'glow-cyan': '0 0 40px -8px rgba(6, 182, 212, 0.35)',
        'glow-purple': '0 0 40px -8px rgba(168, 85, 247, 0.35)',
        'glow-amber': '0 0 40px -8px rgba(245, 158, 11, 0.35)',
        'card-hover': '0 35px 70px -20px rgba(0, 0, 0, 0.95), 0 0 40px -10px rgba(255, 255, 255, 0.08)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      animation: {
        'spin-slow': 'spin-slow 22s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee 35s linear infinite reverse',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px -5px rgba(16, 185, 129, 0.3)' },
          '50%': { boxShadow: '0 0 40px -5px rgba(16, 185, 129, 0.5)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
