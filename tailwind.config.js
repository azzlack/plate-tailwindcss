/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      primary: {
        100: "#D2DCE2",
        200: "#B6C4CD",
        300: "#99ACB9",
        500: "#6C8799",
        700: "#4F6370",
      },
      secondary: {
        200: "#FFC982",
        400: "#FFA130",
        600: "#FF851A",
        800: "#F26419",
        900: "#E84918",
      },
      blue: {
        100: "#CFEBF4",
        200: "#B8E2EE",
        400: "#84CCE2",
        600: "#5CAEC7",
        800: "#386978",
      },
      yellow: {
        100: "#fef9c3",
        200: "#fef08a",
        400: "#facc15",
        600: "#ca8a04",
        800: "#854d0e",
      },
      green: {
        100: "#C7F0CE",
        200: "#A1E7AF",
        400: "#50D574",
        600: "#0BBC4E",
        800: "#009736",
      },
      orange: {
        100: "#FEEDBB",
        400: "#FCCC4E",
        600: "#F9B73E",
        800: "#F59537",
        900: "#F17B32",
      },
      red: {
        100: "#FBD1D2",
        200: "#E9A29C",
        400: "#E56754",
        600: "#DA543B",
        800: "#BB452F",
      },
      neutral: {
        50: "#f8f8f8",
        100: "#efefef",
        200: "#e4e4e4",
        300: "#d3d3d3",
        400: "#aeaeae",
        500: "#8e8e8e",
        600: "#666666",
        700: "#535353",
        800: "#353535",
        900: "#151515",
      },
    },
  },
};
