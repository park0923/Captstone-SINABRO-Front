module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'noto-sans': ['NotoSansKR'],
      'sebang-gothic': ['SebangGothic'],
    },
    theme: {
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover'
      }
    },
    extend: {
      backgroundImage: theme => ({
        'home-spotted-pattern': "url('./img/Spotted.svg')"
      }),
      colors: {
        'regal-blue': '#243c5a',
        'gray-yellow' : '#F1E6D9',
        'orange-600' : '#DB6938'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
