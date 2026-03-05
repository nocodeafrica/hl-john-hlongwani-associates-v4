import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#0B132B',
        'emerald-accent': '#10B981',
        'electric-blue': '#2563EB',
        'light-gray': '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 19, 43, 0.05)',
        'glass': '0 8px 32px 0 rgba(11, 19, 43, 0.07)',
      }
    },
  },
  plugins: [],
};

export default config;
