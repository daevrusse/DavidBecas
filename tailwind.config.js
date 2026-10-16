/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'varela-round': ['Varela Round', 'sans-serif'],
        // Option 1: Override default sans-serif font
        sans: ['Cairo', 'sans-serif'], 
        // Option 2: Create a custom font class
        cairo: ['Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

