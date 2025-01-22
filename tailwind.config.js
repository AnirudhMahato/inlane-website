/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "w-16": 16,
        "h-9": 9,
      },
      screens: {
        "xs": "420px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
