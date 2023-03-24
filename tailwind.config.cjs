/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '340px',
      },
      colors: {
        'water': {
          100: 'hsl(var(--hue-color), 24%, 97%)',
          200: 'hsl(var(--hue-color), 24%, 95%)',
          300: 'hsl(var(--hue-color), 8%, 75%)',
          400: 'hsl(var(--hue-color), 8%, 60%)',
          500: 'hsl(var(--hue-color), 24%, 35%)',
          600: 'hsl(var(--hue-color), 64%, 22%)',
          700: 'hsl(var(--hue-color), 64%, 18%)',
          800: 'hsl(var(--hue-color), 29%, 16%)',
          900: 'hsl(var(--hue-color), 29%, 12%)',
        },
      },
    },
},
  plugins: [],
  darkMode: 'class',
}
