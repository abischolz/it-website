/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    // backgroundPosition: {
    //   'main-mobile': 60% 0%, 
    // },
    colors: {
      mint: '#B4FFEF',
      pink: '#EA73A9',
      yellow: '#EDFA4B',
      blue: '#7DD3FF',
      black: '#000'
    },
    fontFamily: {
      display: ['Bebas Neue'],
      body: ['Montserrat']
    },

    extend: {},
  },
  plugins: [],
}

