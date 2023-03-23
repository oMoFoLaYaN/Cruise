/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '340px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
