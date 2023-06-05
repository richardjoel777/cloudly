/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgBlue: '#71f2eb',
        textPrimary: '#333760',
        textSecondary: '#3e929c',
        bgBox: '#96f5f5',
      },
      fontFamily: {
        primary: ['MorebiRounded-Regular'],
      },
    },
  },
  plugins: [],
};
