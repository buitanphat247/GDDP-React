/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "576px",
        lg: "768px",
        xl: "1024px",
        "2xl": "1680px",
      },
    },
  },
  plugins: [],
};
