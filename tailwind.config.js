/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: { max: "480px" },

      sm: { min: "481px", max: "800px" },

      md: { min: "800px", max: "1200px" },

      lg: { min: "1201px", max: "2000px" },
    },
    extend: {},
  },
  plugins: [],
};

