/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'irish-grover': ['"Irish Grover"', 'sans-serif']
      },
      width: {
        '90vw': '90vw'
      },
      fontWeight: {
        cursive: '500'
      }
    }
  },
  plugins: []
}
