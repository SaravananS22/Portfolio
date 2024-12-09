/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        html: '#E44D26',
        js:'#F7DF1E'
      }
    },
  },
  plugins: [],
}