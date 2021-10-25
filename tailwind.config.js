module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        theme: {
          base: 'var(--color-text-base)'
        }
      },
      backgroundColor: {
        theme: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
