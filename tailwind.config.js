/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f8fe',
          100: '#ddeffc',
          200: '#c2e5fb',
          300: '#98d5f8',
          400: '#67bef3',
          500: '#44a0ed',
          600: '#2e84e2',
          700: '#266ecf',
          800: '#2862b8',
          900: '#234c85',
          950: '#1a3051',
        },
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};