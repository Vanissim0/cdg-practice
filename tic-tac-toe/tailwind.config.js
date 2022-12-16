/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blue': '#00a1e0',
        'milk': '#fffafa',
        'pink': '#ff8a7a'
      }
    },
  },
  plugins: [],
}

