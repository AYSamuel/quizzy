/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ['Poppins', 'sans-serif'],
        bodyFont: ['Zen Kaku Gothic Antique', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#e63018',
        bgGrey: '#f5f5f5',
        textGrey: '#939393',
      },
      boxShadow: {
        navbarShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
      },
    },
  },
  plugins: [],
};
