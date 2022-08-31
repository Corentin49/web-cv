/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        main: 'var(--main)',
        background: 'var(--background)',
        header: 'var(--header)',
        accent: 'var(--accent)',
        borderAnimation: 'var(--borderAnimation)',
      },
    },
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
