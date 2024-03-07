/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '#166aea': '#166aea',
        '#2F40AD': '#2F40AD',
        '#2A3BA9': '#2A3BA9',
        '#354AB5': '#354AB5',
        '#dac4fb': '#dac4fb',
        '#f3efe5':'#f3efe5',
        '#6B5DCF':'#6B5DCF',
       ' #C19BF8':'#C19BF8',

      },
      fontFamily: {
        'font-wix': ['"Wix Madefor Display"'],
      }
    },
  },
  plugins: [],
}

