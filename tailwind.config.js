/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#00291C', // Charleston Green
                accent: '#954130',    // Leather
                textPrimary: '#F0E7C2', // Starlight
                secondary: '#687451',   // Olive
                footer: '#3B0014',      // Wine
            },
            fontFamily: {
                heading: ['Playfair Display', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'glass': '0 0 20px rgba(96,165,250,0.15)',
            }
        },
    },
    plugins: [],
}
