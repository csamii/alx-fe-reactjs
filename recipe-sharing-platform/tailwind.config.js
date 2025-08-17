/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "media", // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {
      colors: {
        'myBlack': '#e89a24',
        'myBlack2': '#eba742ff',
        'primary': '#a1a1a1',
      }
    },
  },
  plugins: [],
};