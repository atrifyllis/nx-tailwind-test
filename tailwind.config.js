const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  prefix: '',
  purge: {
    enabled: true,
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
