import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'google-blue': '#4285F4',
        'google-red': '#EA4335',
        'google-yellow': '#FBBC05',
        'google-green': '#34A853',
        'brand-primary': '#4285F4',
        'brand-primary-light': '#6D9EFF',
        'brand-text': '#202124',
        'brand-subtle': '#5F6368',
        'brand-surface': '#F1F3F4',
        'glass-start': 'rgba(255, 255, 255, 0.2)',
        'glass-end': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'page-gradient': 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
        'welcome-gradient': 'linear-gradient(120deg, #4285F4 0%, #6D9EFF 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
};
