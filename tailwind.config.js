/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ejs,js,ts}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        primary: {
          DEFAULT: '#4dc0b5', // A shade of teal
          // You can also add shades if needed
          '50': '#f0fdfa',
          '100': '#ccfbf1',
          '200': '#99f6e4',
          '300': '#5eead4',
          '400': '#2dd4bf',
          '500': '#14b8a6', // Another shade of teal
          '600': '#0d9488',
          '700': '#0f766e',
          '800': '#115e59',
          '900': '#134e4a',
        },
      },
    },
  },
  plugins: [],
}
