/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({addBase, theme}) {
      addBase({
        h1: {fontSize: theme('fontSize.xs')},
        h2: {fontSize: theme('fontSize.xl')},
        h3: {fontSize: theme('fontSize.lg')},
      });
    }),
  ],
};
