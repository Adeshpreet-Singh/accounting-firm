import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#faf9f6',
        parchment: '#f5f0e8',
        navy: {
          DEFAULT: '#1a2a3a',
          light: '#2d4a5e',
        },
        gold: {
          DEFAULT: '#c9a84c',
          muted: '#c9a84c33',
        },
        charcoal: '#333333',
        slate: '#6b7c8d',
        rule: '#d4d4d4',
      },
    },
  },
  plugins: [],
} satisfies Config;
