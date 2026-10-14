/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F8FBFD',
        ice: '#EAF3F9',
        mist: '#D5E8F3',
        ink: '#0E2A47',
        inkSoft: '#4A6580',
        steel: '#1F6E99',
        gold: {
          DEFAULT: '#C39A45',
          deep: '#8A6516',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(14, 42, 71, 0.08)',
        lift: '0 18px 48px rgba(14, 42, 71, 0.14)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          '0%': { transform: 'translateX(0) skewX(-12deg)' },
          '100%': { transform: 'translateX(450%) skewX(-12deg)' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        shine: 'shine 0.9s ease-out',
      },
    },
  },
  plugins: [],
}
