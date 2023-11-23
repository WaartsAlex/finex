/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      "klu-blue": "#005187",
      "klu-orange": "#e17000",
      "white": "#FFF",
      "red": "#F00",
      "gray": "#DDD",
      "dark-gray": "#555",
      "light-blue": "#59C"
    },
    extend: {},
  },
  plugins: [],
}

