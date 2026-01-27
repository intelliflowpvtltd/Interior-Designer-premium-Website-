import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Rose Gold Palette
        'rose-gold': '#B76E79',
        'rose-gold-light': '#D4A5A5',
        'rose-gold-dark': '#9A5B64',
        'rose-gold-muted': '#C99A9A',
        
        // Backgrounds - Off White & Cream
        'off-white': '#FAF9F6',
        'ivory': '#FFFEF9',
        'cream': '#F8F6F3',
        'pearl': '#F5F3EF',
        'warm-white': '#FEFDFB',
        'blush': '#FDF8F7',
        
        // Text & Dark Accents
        'deep-charcoal': '#2C3E50',
        'charcoal': '#3D4F5F',
        'slate': '#5A6C7D',
        'warm-gray': '#6B7B8A',
        
        // Neutral Grays
        'silver': '#A0AEC0',
        'platinum': '#E2E8F0',
        'soft-gray': '#E8E6E3',
        'light-gray': '#F0EEEB',
      },
      fontFamily: {
        display: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'Lato', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-rose': 'linear-gradient(135deg, #B76E79 0%, #D4A5A5 50%, #B76E79 100%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(183,110,121,0.1) 50%, transparent 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'rose-glow': '0 0 30px rgba(183, 110, 121, 0.15)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'golden-pulse': 'goldenPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        goldenPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
