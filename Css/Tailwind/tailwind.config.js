/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#006d77",
      },
      fontFamily: {
        roboto: "font-family: 'Roboto', sans-serif",
      },
    },
  },
  plugins: [],
};
