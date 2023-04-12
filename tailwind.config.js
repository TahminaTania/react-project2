/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': '600px',
        'md': '900px',
        'lg': '1280px',
        'xl': '1920px',
        'xsm':'370px'
      },
    },
  },
  plugins: [],
}

