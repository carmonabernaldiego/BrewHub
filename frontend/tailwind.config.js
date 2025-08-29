/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#F7EFE5",
          100: "#EDE0D1",
          200: "#DAC2A8",
          300: "#C7A57F",
          400: "#A97855",
          500: "#8B5B39",
          600: "#7A4F2C",
          700: "#6A4426",
          800: "#53331B",
          900: "#2D1B11",
        },
      },
    },
  },
  plugins: [],
};
