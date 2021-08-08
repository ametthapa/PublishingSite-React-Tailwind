module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height : {
        showcase: '640px',
      },
      colors : {
        primary : '#818cf8',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
