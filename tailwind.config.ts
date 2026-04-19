import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#faf9f6',
        parchment: '#f5f0e8',
        navy: {
          DEFAULT: '#0f1729',
          light: '#1e3048',
        },
        gold: {
          DEFAULT: '#b8941f',
          muted: '#b8941f33',
        },
        charcoal: '#1a1a1a',
        slate: '#475569',
        rule: '#c8d0db',
      },
    },
  },
  plugins: [],
} satisfies Config;
