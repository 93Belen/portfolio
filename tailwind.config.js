/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': "#13141A",
      "yellow": "#FBF351",
      "purple": "#5544DC",
      "white": "#FFFFFF"
    },
    fontFamily: {
      'sans': ['var(--font-montserrat)']
    },
    fontWeight: {
      'medium': '400',
      'bold': '700'
    },
    fontSize: {
      "sm": '1.125rem',
      "md": "1.25rem",
      "lg": "2.25",
      "xl": '4rem'
    },
    extend: {},
  },
  plugins: [],
}