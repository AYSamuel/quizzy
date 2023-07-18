/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './screens/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ['Poppins', 'sans-serif'],
        bodyFont: ['Zen Kaku Gothic Antique', 'Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#272954',
        secondary: '#43456A',
        bgGrey: '#f5f5f5',
        textGrey: '#939393',
        textDark: '#20262E',
      },
      boxShadow: {
        navbarShadow: '10px 10px 35px -12px rgba(2,12,27,0.7)',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
