/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",'./src/**/*.{html,js}',],
  theme: {
    theme: {
      container: {
        padding: {
          DEFAULT: '4rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
    extend: {},
  },
  plugins: [

  ],
}
