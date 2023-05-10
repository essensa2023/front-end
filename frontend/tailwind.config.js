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
        'custom-light-green2':'#B2ECA1',
        'custom-light-green3':'#15B779',
        'custom-light-green4' :'#ECF2EA',
        'custom-light-green5' : '#E4F3E0',
        'custom-black1':'#433520',
        'custom-black2':'#0C1E11',
        'custom-peach' : '#FDE8CD'
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

