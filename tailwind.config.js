/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: "450px",
      },
      colors: {
        primary: "#13111C",
        secondary: "#aaa6c3",
      }
    },
  },
  plugins: [],
};