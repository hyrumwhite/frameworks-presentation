/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "var(--border-color)",
      },
      keyframes: {
        scale: {
          "0%": {
            transform: "scale(1)",
          },
          "20%": {
            transform: "scale(1, 2.2)",
          },
          "40%": {
            transform: "scale(1)",
          },
        },
        translateandexpand: {
          "0%": {
            left: "-5%",
            width: "5%",
          },
          "50%": {
            width: "50%",
          },
          "100%": {
            left: "100%",
          },
        },
      },
      animation: {
        scale: "scale 1s cubic-bezier( 1, 0.33, 0, 0.71 ) infinite",
        translateandexpand: "translateandexpand 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
