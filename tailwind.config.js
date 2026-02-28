/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#0087ff',
          600: '#0066cc',
          700: '#004c99',
          800: '#003366',
          900: '#001933'
        },
        secondary: {
          50: '#e6fff2',
          100: '#ccffe6',
          200: '#99ffcc',
          300: '#66ffb3',
          400: '#33ff99',
          500: '#00ff80',
          600: '#00cc66',
          700: '#00994d',
          800: '#006633',
          900: '#00331a'
        },
        accent: {
          50: '#fff5ee',
          100: '#ffe8d6',
          200: '#ffd0ad',
          300: '#ffb07a',
          400: '#ff8547',
          500: '#ff6b35',
          600: '#e8522a',
          700: '#c43d1e',
          800: '#9a3119',
          900: '#7c2a16'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
