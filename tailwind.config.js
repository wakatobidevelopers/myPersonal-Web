/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'primary': ['Titilum Web', ...defaultTheme.fontFamily.sans],
      'secondary': ['Montserrat', ...defaultTheme.fontFamily.sans]
    },

    colors: {
      'body': '#d9d9d9',
      'primary': '#6366f1',
      'secondary': '#7F7D84',
      'thirdty': '#03C988'
    },
    fontSize: {
      'lg': '3rem',
      'md': '1.375rem',
      'sm': '1.125rem'
    },

    extend: {
      height: {
        'nav-height': '9.375rem',
        'icon-height': '2.25rem'
      },

      padding: {
        '77.5' : '4.844rem'
      },

      maxWidth: {
        'md' : '56.25rem'
      },

      margin: {
        '184': '9.5rem',
        '15': '3.6rem'
      },

      lineHeight: {
        'extra-loose': '2.5',
        '45': '3.6rem'
      },

      dropShadow: {
        'lg': '0 35px 35px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}