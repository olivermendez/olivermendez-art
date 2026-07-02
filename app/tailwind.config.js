/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4F7F5',
        surface: '#FFFFFF',
        'text-primary': '#0F1F17',
        'text-secondary': '#4A6357',
        'accent-teal': '#0D9488',
        'accent-emerald': '#059669',
        'accent-light': '#34D399',
        'accent-coral': '#FF6B4A',
        'accent-coral-hover': '#E55A3A',
        'warm-amber': '#D97706',
        'deep-forest': '#064E3B',
        'deep-navy': '#1A1A2E',
        'gold-accent': '#B45309',
        'border-light': 'rgba(0,0,0,0.06)',
        'border-medium': 'rgba(0,0,0,0.1)',
      },
      fontFamily: {
        display: ['"DM Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '0.92', letterSpacing: '-0.03em', fontWeight: '500' }],
        'hero-md': ['56px', { lineHeight: '0.95', letterSpacing: '-0.025em', fontWeight: '500' }],
        'hero-sm': ['40px', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'section': ['56px', { lineHeight: '0.95', letterSpacing: '-0.025em', fontWeight: '500' }],
        'section-md': ['44px', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'section-sm': ['32px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '500' }],
        'subsection': ['32px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '500' }],
        'card-title': ['22px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '500' }],
        'body-lg': ['20px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'label': ['12px', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },
      spacing: {
        'section': '120px',
        'section-mobile': '64px',
      },
      maxWidth: {
        'content': '1280px',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'pill': '9999px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.06)',
        'elevated': '0 8px 24px rgba(0,0,0,0.12)',
      },
      keyframes: {
        gradientShimmer: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '1' },
        },
        bounceChevron: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'gradient-shimmer': 'gradientShimmer 3s ease-in-out infinite',
        'bounce-chevron': 'bounceChevron 1.2s ease-in-out infinite',
        'scroll-left': 'scrollLeft 20s linear infinite',
      },
    },
  },
  plugins: [],
}
