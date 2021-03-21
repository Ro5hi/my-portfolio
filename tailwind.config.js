module.exports = {
  purge: [],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      }
    },
  },
  fontFamily: {
    Roboto: ['Roboto', 'sans-serif'],
    Montserrat: ['Montserrat', 'serif']
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-childrenn')
  ],
}
