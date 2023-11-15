import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-1': '#DAFFFB',
        'light-2': '#64CCC5',
        'dark-1': '#176B87',
        'dark-2': '#0F0F0F',
        
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
