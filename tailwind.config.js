/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    darkMode: false, // or 'media' or 'class'
    extend: {
      gridColumn: {
        'span-2': 'span 2 / span 2',
      }
    },
  },
  plugins: [],
}

