/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: {
          100: '#1E2028',
          200: '#252836',
          300: '#2E3444',
          400: '#3A4256',
        },
        neon: {
          blue: '#00F0FF',
          purple: '#8A2BE2',
          pink: '#FF00FF',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}