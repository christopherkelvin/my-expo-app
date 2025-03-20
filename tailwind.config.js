/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito_400Regular'],
        'nunito-bold': ['Nunito_700Bold'],
      },
      colors: {
        secondary: '#F4F7F9',
        primary: '#3A3D40',
        main: '#026a75',
      },
    },
  },
  plugins: [],
};
