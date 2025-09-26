 module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {
      colors: {
        'destructive': '#d4183d',
        'primary': '#a1a1a1',
      }
    },
  },
  plugins: [],
};