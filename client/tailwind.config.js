/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#0a0a29",
        "secondary":"#ff4d4d",
        "tertiary":" #00b359"
      }
    },
    screens: {
      'lg': {'max': '2023px'},

      'sm': {'max': '1000px'},

    }
  },
  plugins: [],
}

