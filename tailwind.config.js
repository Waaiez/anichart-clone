const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens,
    },
    extend: {
      textColor: {
        theme: {
          base: 'var(--color-text-base)'
        }
      },
      backgroundColor: {
        theme: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)'
        }
      },
      lineClamp: {
        9: '9',
        10: '10',
        15: '15',
        20: '20',
      },
      fontFamily: {
        'overpass': ['Overpass']
      }
    },
  },
  variants: {
    extend: {
      lineClamp: ['hover']
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}
