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
      },
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px)' },
          '40%': { transform: 'translateX(2px)' },
          '60%': { transform: 'translateX(-2px)' },
          '80%': { transform: 'translateX(2px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.2)' },
          '50%': { transform: 'scale(0.9)' },
          '75%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        vibrate: 'vibrate 0.3s linear infinite',
        rotate: 'rotate 2s linear infinite',
        heartbeat: 'heartbeat 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};