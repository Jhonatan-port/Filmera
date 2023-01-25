/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
      },
    },
  },
  plugins: [],
}