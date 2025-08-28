/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          600: "#7A4F2C",
          700: "#6A4426",
        },
      },
    },
  },
  plugins: [],
};
