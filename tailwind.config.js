/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f2f5f6',
          100: '#e5eaed',
          200: '#cbd5db',
          300: '#b1c0c9',
          400: '#97abb7',
          500: '#7d96a5',
          600: '#638193',
          700: '#496c81',
          800: '#2f576f',
          900: '#264653', // base color
          950: '#1c3440',
        },
        persian: {
          50: '#f0f7f6',
          100: '#e1efed',
          200: '#c3dfdb',
          300: '#a5cfc9',
          400: '#87bfb7',
          500: '#69afa5',
          600: '#4b9f93',
          700: '#2d8f81',
          800: '#2a9d8f', // base color
          900: '#227d72',
          950: '#1a5d55',
        },
        saffron: {
          50: '#fdf8ed',
          100: '#fbf1db',
          200: '#f7e3b7',
          300: '#f3d593',
          400: '#efc76f',
          500: '#ebb94b',
          600: '#e7ab27',
          700: '#e9c46a', // base color
          800: '#c49d3f',
          900: '#9e7d32',
          950: '#785e26',
        },
        sandy: {
          50: '#fef6f0',
          100: '#fdede1',
          200: '#fbdbc3',
          300: '#f9c9a5',
          400: '#f7b787',
          500: '#f5a569',
          600: '#f4a261', // base color
          700: '#d88a4a',
          800: '#bc7239',
          900: '#a05a28',
          950: '#844217',
        },
        burnt: {
          50: '#fdf2f0',
          100: '#fbe5e1',
          200: '#f7cbc3',
          300: '#f3b1a5',
          400: '#ef9787',
          500: '#eb7d69',
          600: '#e76f51', // base color
          700: '#c95a3d',
          800: '#ab4529',
          900: '#8d3015',
          950: '#6f1b01',
        },
      },
    },
  },
  plugins: [],
} 