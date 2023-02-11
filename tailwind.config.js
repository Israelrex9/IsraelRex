/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'GT': ['GTWalsheimPro', 'sans-serif'],
        'GT1': ['GTWalsheimPro1', 'sans-serif'],
        'GT2': ['GTWalsheimPro2', 'sans-serif'],
        'GT3': ['GTWalsheimPro3', 'sans-serif'],
      },
      colors: {
        'black':'#1E1E1E',
        'black1': '#27272A',
        'blue': '#01A4FF',
      }
    },
  },
  plugins: [],
};
