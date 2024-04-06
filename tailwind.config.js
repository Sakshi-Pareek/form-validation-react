/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "./src/assets/images/herobg.jpg",
        'hero-pettern': "./src/assets/images/herobg.jpg"

      },
      fontFamily: {
        'Poppins': 'Poppins, sans-serif',
      }
    },
  },
  plugins: [],
}

