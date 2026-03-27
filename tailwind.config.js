/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'motor-black': '#0a0a0a',
        'motor-gray': '#1a1a1a',
        'motor-light-gray': '#f5f5f5',
        'motor-white': '#ffffff',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      }
    },
  },
  plugins: [],
}
