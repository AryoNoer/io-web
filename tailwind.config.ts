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
        'dark-1': '#031517',
        'dark-2': '#092A31',
        'dark-3': '#284E61',
        'light-1': '#0D6E74',
        'light-2': '#11969D',
        'light-3': '#6CA5C0',
        
      },
      fontFamily: {
        sans: ['var(--font-satoshi)', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "cyberpunk", "bumblebee", "emerald", "corporate", "synthwave", "retro", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
}
export default config
