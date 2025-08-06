// frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"  ],
theme: {
    extend: {
        colors: {
        primary: "#5C4033",     // Dark Brown
        secondary: "#D6A77A",   // Warm Beige
        background: "#F5F5F5",  // Light Cream
        accent: "#8B5E3C",      // Medium Brown
        text: "#2D2D2D"         // Deep Gray
    },
    fontFamily: {
        sans: ["Poppins", "sans-serif"]
    }
    }
},
plugins: [require('tailwind-scrollbar-hide')],

}
