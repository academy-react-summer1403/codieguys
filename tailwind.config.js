/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'custom-gray' : '#FBF6F6',
        'magic-mint' : '#A4F6DE',
        'lightGreen' : '#5BE1B9',
        'darkGreen' : '#12926C', 
        

      }
    },
  },
  plugins: [],
}

