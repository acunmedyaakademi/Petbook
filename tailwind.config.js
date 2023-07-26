/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neutral: {
          0: 'rgb(253, 253, 253)',
          1: 'rgb(235, 238, 239)',
          2: 'rgb(204, 209, 210)',
          4: 'rgb(153, 162, 165)',
          6: 'rgb(153, 162, 165)',
          8: 'rgb(36, 43, 51)',
          10: 'rgb(0, 23, 31)',
        },
        primary: {
          0: 'rgb(0, 120, 205)',
          1: 'rgb(0, 82, 140)',
          2: 'rgb(0, 52, 89)',
          3: 'rgb(0, 42, 72)',
        },
        secondary: {
          0: 'rgb(252, 238, 213)',
          1: 'rgb(247, 219, 167)',
          2: 'rgb(241, 208, 146)',
          3: 'rgb(238, 199, 126)',
        },
        state: {
          red: 'rgb(255, 86, 79)',
          green: 'rgb(52, 199, 89)',
          orange: 'rgb(255, 145, 44)',
          blue: 'rgb(0, 167, 231)',
        },
      },
      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, minmax(288px, 1fr))',
      },
    },
  },
  plugins: [],
}
