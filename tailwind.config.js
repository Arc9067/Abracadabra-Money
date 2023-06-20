/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#2F2853",
        black: "#181818",
        blaclb: "#1D1F1F",
      },
      fontFamily: {
        Mango: ["Mangogrotesque"],
        MangoMed: ["MangogrotesqueMed"],
        sans: ["Chicola Smoothy", "sans-serif"],
        Akira: ["Akira Expanded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
