/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'custom-orange': '#229BCE',
        'black-paragraphs': '#191815'
      },
      spacing:{
        '-10%': '-10%'
      },screens:{
        'xs':'320px'
      }
    },
  },
  plugins: [],
}

