/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      keyframes: {
        animateFontSize: {
          "0%": { fontSize: "1.3rem" },
          "25%": { fontSize: "1.5rem" },
          "50%": { fontSize: "1.7rem" },
          "75%": { fontSize: "1.9rem" },
          "100%": { fontSize: "2rem" },
        },
      },
      animation: {
        animateFontSize: "animateFontSize 0.2s linear",
      },
    },
  },
  plugins: [],
};
