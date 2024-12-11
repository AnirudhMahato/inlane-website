/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesque': ['Bricolage Grotesque', 'sans-serif'],
      },
      aspectRatio: {
        '1': '1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}