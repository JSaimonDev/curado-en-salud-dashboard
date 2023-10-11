import aspectRation from "@tailwindcss/aspect-ratio";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "720px",
      lg: "920px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      main: "#29becf",
      mainark: "#0b98a8",
      mainLight1: "#a4d9df",
      mainLight2: "#bee9ee",
      yellow: "#ffd621",
      yellowLight: "#ffeb93",
      green: "#34a810",
      greenLight: "#a9e298",
      red: "#e40d0d",
      redLight: "#ffabab",
      grey: "#7c7c7c",
      greyBg: "#f8f8f8",
      greyDark1: "#616161",
      greyDark2: "#262626",
      greyLight1: "#a7a7a7",
      greyLight2: "#f6f6f6",
    },
    fontFamily: {
      sans: ["Josefin", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        josefineSans: ["Josefin Sans", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },

  plugins: [aspectRation],
};
