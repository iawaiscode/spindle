/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        light: "Lato_300Light",
        regular: "Lato_400Regular",
        bold: "Lato_700Bold",
        black: "Lato_900Black",
      },
    },
  },
  plugins: [],
};
