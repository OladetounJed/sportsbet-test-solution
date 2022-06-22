/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Inter", "sans-serif"],
    },
    colors: {
      piccolo: "#49b356",
      gohan: "#1a212a",
      goku: "#232a33",
      trunks: "#8697a2",
      white: "#ffff",
      black: "#0000",
      plank: "#393e47",
      danger: "#ef4444"
      
    },
    extend: {
      
    },
  },
};
