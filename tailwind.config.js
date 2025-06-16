/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        variable: ['"Roboto Flex"', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

