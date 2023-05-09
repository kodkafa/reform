/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}', 'node_modules/preline/dist/*.js'],
  safelist: ['bg-black', 'gap-*', 'm[trbl]+-*', 'animate-*'],
  // Toggle dark-mode based on class or data-mode=”dark”
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  // plugins: [require('@tailwindcss/forms'),require('preline/plugin')],
};
