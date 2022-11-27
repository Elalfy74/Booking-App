/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        dm_sans: ["DM Sans", "sans-serif"],
      },
      padding: {
        section: "60px",
        4.5: "1.125rem",
      },
      gridTemplateColumns: {
        "4-auto": "repeat(auto-fill, minmax(250px, 1fr))",
        "3-auto": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        9: "repeat(9,minmax(0,1fr))",
      },
      backgroundImage: {
        hero: "url('/images/hero.jpg')",
        big: "url('https://placeimg.com/600/150/arch')",
        medium: "url('https://placeimg.com/270/280/arch')",
        small: "url('https://placeimg.com/150/150/arch')",
        300: "url('https://placeimg.com/300/300/arch')",
        400: "url('https://placeimg.com/400/400/arch')",
      },
      transitionDuration: {
        main: "300ms",
        long: "500ms",
      },
      colors: {
        primary: {
          DEFAULT: "#316bff",
          hover: colors.blue["600"],
          focus: colors.blue["300"],
          80: "#316bff",
          300: colors.blue["300"],
        },
        mainBlack: "#141416",
        secondBlack: "#22252a",
        thirdBlack: "#3b3e45",
        mainGray: "#9ca3af",
      },
    },
  },
  plugins: [
    // Initialize with default values (see options below)
    require("tailwindcss-radix")(),
  ],
};
