/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "laundry-room": "url('./src/assets/img/laundry_2.webp')",
      },
    },
  },
  plugins: [daisyui],
};
