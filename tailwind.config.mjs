/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    {
      pattern: /(text|bg|border)-(aurora|nordic)-(blue|green|purple|pink|night|deep|dark|mist|fog)/,
      variants: ['hover', 'focus', 'group-hover'],
    },
  ],
  theme: {
    extend: {
      colors: {
        'nordic-night': '#0a0e17',
        'nordic-deep': '#141821',
        'nordic-dark': '#1a1f2e',
        'nordic-mist': '#e8edf5',
        'nordic-fog': '#c5cbd6',
        'aurora-green': '#4ade80',
        'aurora-blue': '#60a5fa',
        'aurora-purple': '#a78bfa',
        'aurora-pink': '#f472b6',
        'fjord-blue': '#1e3a5f',
        'nordic-gray': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Crimson Pro', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out',
        'fade-in-slow': 'fadeIn 2s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'slide-up-slow': 'slideUp 1.5s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'aurora': 'aurora 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(20px)' },
          '50%': { opacity: '0.8', filter: 'blur(30px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.3' },
          '50%': { transform: 'translateY(-20px) translateX(20px)', opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

