/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  safelist: [
    'bg-black',
    'gap-*',
    'm[trbl]+-*',
  ],
  // Toggle dark-mode based on class or data-mode=”dark”
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
}
