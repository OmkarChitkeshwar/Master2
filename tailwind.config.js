/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Inter", "sans-serif"],
      },
      backgroundImage: {
        'hero': "url('/hero.jpg')",
      },
      colors: {
        brand: {
          50: '#eef7ff',
          500: '#0ea5e9'
        }
      }
    },
  },
  plugins: [],
}
