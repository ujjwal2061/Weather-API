/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
        'itim': ['Itim', 'cursive'],  
         'carter': ['"Carter One"', 'cursive'],
      }
    },
  },
  plugins: [],
}

