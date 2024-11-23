/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyan-12": "#f1f5ff", // Add this to the `colors` object
        "brown-12":"#9e948a"
      },
      width:{
        "160":"60rem"
      }
    },
  },
  plugins: [],
}

