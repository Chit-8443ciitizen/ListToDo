/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      color:{
        'bgbase': '#001140',
        'green': "#00CB14", 
        'red': "#DC3434",
      }
      
    },
  },
  plugins: [],
}

