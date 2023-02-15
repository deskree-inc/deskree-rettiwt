/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0075FF",
        "primary-hover": "#0061d5",
        secondary: "rgba(255, 255, 255, 0.1)",
        background: "#161616",
        "background-secondary": "#292929",
        text: "#FFFFFF",
        "color-secondary": "#B0B0B0",
        "color-tertiary": "#888888",
        "small-divider": "rgba(255, 255, 255, 0.05)",
        "container-primary": "rgba(41, 41, 41, 0.43)",
        "container-secondary": "rgba(41, 41, 41, 0.3)",
        "container-tertiary": "rgba(41, 41, 41, 0.2)",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        xxs: "0.625rem",
      },
      screens: {
        mobile: { max: "1110px" },
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
