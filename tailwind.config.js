/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      "dark",
      {
        light: {
          "primary": "#2563eb",   
          "secondary": "#bae6fd",
          "accent": "#c084fc",
          "neutral": "#e7e5e4",
          "base-100": "#FFFFFF",
          "info": "#93c5fd",
          "success": "#22c55e",
          "warning": "#facc15",
          "error": "#dc2626",
        },
      }
    ],
  },
}

