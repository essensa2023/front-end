/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-green': '#004346',
        'custom-dark-green2':'#02220B',
        'custom-grey': '#879791',
        'custom-light-green1':'#B5C4BE',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

