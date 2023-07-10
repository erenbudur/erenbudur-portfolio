/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'color1': '#0d1b2a',
        'color2': '#1b263b',
        'color3': '#415a77',
        'color4': '#9eb6db',
        'color5': '#e0e1dd',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'maven': ['Maven Pro', 'sans-serif']

      }
    },
  },
  plugins: [],
}

