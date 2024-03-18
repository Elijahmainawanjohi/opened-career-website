/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#017C6E',
        primary: '#00008B',
        // primary: '#000033',
        secondary: '#363753',
        white: '#FFFFFF',
        whity: '#FEFEFE',
        darky: '#262626',
        cream: '#DFE3EE',
        gold: '#B38B59'
      },
    },
  },
  plugins: [require("daisyui")],
}
