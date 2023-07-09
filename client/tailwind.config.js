/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "montserrat": ["Montserrat", "sans-serif"],
    },
    colors: {
      "primary": "#FFF8E8",
      "theme": "#A58741",
      "danger": "#EF4444",
      "success": "#10B981",
      "background": ":#F2F2F2",
      "dark-background": "#131515",
    },
    extend: {},
  },
  plugins: [],
}

