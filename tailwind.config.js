/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainGreen: "#14433D",
        lightGreen: "#D3E8E3",
        hoverLightGreen: "#c8d8d4",
        darkGreen: "#006954",
        hoverDarkGreen: "#004d40",
      },
    },
  },
  plugins: [],
};