/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050816',
        abyss: '#090b1a',
        electric: '#4de2ff',
        violet: '#6f5cff',
        haze: '#b6c2ff',
      },
      fontFamily: {
        body: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(77, 226, 255, 0.15), 0 24px 80px rgba(8, 18, 56, 0.65)',
        neon: '0 0 30px rgba(77, 226, 255, 0.22)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top, rgba(77,226,255,0.12), transparent 28%), radial-gradient(circle at 80% 0%, rgba(111,92,255,0.2), transparent 24%), linear-gradient(135deg, rgba(255,255,255,0.04), transparent 40%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseline: 'pulseline 3.5s ease-in-out infinite',
        drift: 'drift 14s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseline: {
          '0%, 100%': { opacity: '0.35', transform: 'scaleX(0.98)' },
          '50%': { opacity: '1', transform: 'scaleX(1.02)' },
        },
        drift: {
          '0%': { transform: 'translateX(-10%) translateY(0px)' },
          '50%': { transform: 'translateX(10%) translateY(16px)' },
          '100%': { transform: 'translateX(-10%) translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};
