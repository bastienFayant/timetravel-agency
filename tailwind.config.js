/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#f5d78e',
          400: '#e8b84b',
          500: '#c9951a',
          600: '#a67a0e',
        },
        obsidian: {
          900: '#070709',
          800: '#0d0d12',
          700: '#13131a',
          600: '#1a1a24',
          500: '#22222f',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Josefin Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9951a 0%, #f5d78e 50%, #c9951a 100%)',
      },
    },
  },
  plugins: [],
}
