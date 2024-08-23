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
        spare_blue: '#EEF6FF',
        main: '#F1F1F2',
        spare: '#A1A5B7',
      },
      borderRadius: {
        main: '10px',
        tag: '20px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        tableet: '801px',
        phone: '375px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
