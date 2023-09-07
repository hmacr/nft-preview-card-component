import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    colors: {
      cyan: 'hsl(178, 100%, 50%)',
      'soft-blue': 'hsl(215, 51%, 70%)',
      'dark-blue': {
        600: 'hsl(215, 32%, 27%)',
        700: 'hsl(216, 50%, 16%)',
        800: 'hsl(217, 54%, 11%)',
      },
    },
    fontFamily: {
      outfit: ['Outfit', ...defaultTheme.fontFamily.serif],
    },
  },
};
