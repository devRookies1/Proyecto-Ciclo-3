module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'fondo-login': "url('/media/fondologin.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
