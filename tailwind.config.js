/* eslint-disable */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  presets: [require('@slipmatio/tailwind-config')],
  variants: {
    // The 'active' variant will be generated in addition to the defaults
    extend: {
      backgroundColor: ['active'],
      display: ['group-hover'],
      opacity: ['disabled'],
    },
  },
}
