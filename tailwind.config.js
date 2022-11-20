/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "index.html"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Arial", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
