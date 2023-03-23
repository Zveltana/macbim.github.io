const Encore = require('@symfony/webpack-encore');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.html',
  ],
  theme: {
    extend: {
      maxWidth: {
        'prose': '70ch',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-black': '#16161a',
        black: '#242629',
        white: '#fffffe',
        purple: '#7f5af0',
        green: '#2CDB7D',
        'dark-green': '#2cb67d',
        gray: '#94a1b2',
        'dark-gray': '#72757e',
      },
      screens: {
        'big-desktop': '2800px',
      }
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  purge: Encore.isProduction(),
}
