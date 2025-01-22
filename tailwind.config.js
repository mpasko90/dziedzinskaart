import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ['Inter', ...defaultTheme.fontFamily.sans],
        header: ['Syne', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#08090A',
        secondary: '#A7A2A9',
        background: '#F4F7F5',
        text: '#575A5E',
        dark: '#222823',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [require('tailwindcss-motion')],
}