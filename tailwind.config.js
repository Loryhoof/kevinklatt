/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif', 'var(--font-quicksand)'],
      },
      fontVariationSettings: {
        'font-quicksand': "'wght' 400, 'slnt' 0",
      },
      colors: {
        'cuti-main-dark': '#121212',
        'cuti-main-light': '#FFF5F6',
        'cuti-input-dark': '#1E1E1E',
        'cuti-input-light': '#FFE7E9',
        'cuti-bubble-user': '#CDE6E8',
        'cuti-bubble-bot': '#E5A7DC'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
