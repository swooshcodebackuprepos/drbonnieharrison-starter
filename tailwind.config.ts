import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6E1E2A',
        forest: '#1F4D3A',
        gold: '#C49A2C',
        charcoal: '#1A1A1A',
        cream: '#FAF7F2',
      },
      fontFamily: {
        heading: ['var(--font-playfair)'],
        body: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}
export default config
