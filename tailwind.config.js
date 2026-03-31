/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        cream: 'var(--color-cream)',
        taupe: 'var(--color-taupe)',
        grey: 'var(--color-grey)',
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        sans: ['var(--font-f-aeonik-pro)', 'sans-serif'],
        mono: ['var(--font-f-aeonik-mono)', 'monospace']
      },
      transitionTimingFunction: {
        'in-out-quart': 'var(--ease-in-out-quart)',
        'in-out-cubic': 'var(--ease-in-out-cubic)',
        'in-out-quad': 'var(--ease-in-out-quad)',
        'out-quart': 'var(--ease-out-quart)',
        'out-cubic': 'var(--ease-out-cubic)',
        'out-quad': 'var(--ease-out-quad)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}