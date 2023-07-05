/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: 
      {
        pageColor: '#5CDB95',
        borderColor: '#8ee4af',
        whiteText: '#edf5e1',
        containerBlue: '#094B8C',
        textSelectColor: '#05386B',

        projectDarkSlate: '#3F4652',
        projectGreySlate: '#9AACB8',
        greyContact: '#c7d2cc',

      },
      fontFamily:
      {
        ubuntu: ['ubuntu', 'sans-serif'],
        kanit: ['kanit', 'sans-serif'],
      },
      width:
      {
        92: '23rem',
        90: '21rem',
        480: '30rem',
        topWave : '320px',
      },
      height:
      {
        92: '23rem',
        90: '21rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

