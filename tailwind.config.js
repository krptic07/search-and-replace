/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
        remix: ["remixicon"],
      },
    },
  },

  plugins: [],
};
