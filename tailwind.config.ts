import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#faf8f3',
        navy: {
          DEFAULT: '#0b1120',
          mid: '#142038',
          light: '#1e3048',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#dfc477',
        },
        slate: '#6b7a8d',
        charcoal: '#1a1a2e',
      },
    },
  },
  plugins: [],
} satisfies Config;
