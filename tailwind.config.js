/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        light: "Lato_300Light",
        regular: "Lato_400Regular",
        bold: "Lato_700Bold",
        black: "Lato_900Black",
      },
      colors: {
        background: "#1e1e1e",
        card: "#252525",
        primary: "#6e798c",
        border: "#2d2d2d",
        green: "#22c55e",
        blue: "#3b82f6",
      },
    },
  },
  plugins: [],
};
