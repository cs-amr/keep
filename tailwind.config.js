/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "opensans":['Open Sans', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors:{
        'light-bg':'#ffffff',
        "light-border":"#e0e0e0",
        "light-sec":"#f1f3f4",
        "light-text":"##202124",
        "light-btn":"#feefc3",
        'dark-bg':'#202124',
        "dark-border":"#5f6368",
        "dark-sec":"#525356",
        "dark-text":"#e8eaed",
        'dark-btn':"#41331c",
        },
    },
  },
  plugins: [],
}

