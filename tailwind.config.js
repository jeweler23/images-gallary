module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        main: '15px',
      },
      colors: {
        blue: '#3E97FF',
        main: '#F1F1F2',
        spare: '#A1A5B7',
      },
      borderRadius: {
        main: '20px',
      },
  },
},
  variants: {
    extend: {},
  },
  plugins: [],
};
