module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height : {
        showcase: '640px',
      },
      color : {
        primary : 'rgba(59, 130, 246, 0.5)',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
