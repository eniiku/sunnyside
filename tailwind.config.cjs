/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        softRed: 'hsl(7, 99%, 70%)',
        yellow: 'hsl(51, 100%, 49%)',
        darkBlue: 'hsl(198, 62%, 26%)',
        darkDesturatedCyan: 'hsl(167, 40%, 24%)',
        darkModerateCyan: 'hsl(168, 34%, 41%)',
        veryDarkBlue: 'hsl(212, 27%, 19%)',
        darkGrayishBlue: 'hsl(213, 9%, 39%)',
        grayishBlue: 'hsl(210, 4%, 67%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
