/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Define custom container breakpoints
      container: {
        center: true,
        padding: '0.5rem',
        screens: { // Keep the container-specific breakpoints
          '2xl': '1536px',
          xl: '1280px',
          lg: '1024px',
          md: '768px', // Keep md as min-width 768px for container
          sm: '640px',
        },
      },
      // Global screen breakpoints for other utilities
      screens: {
        '2xl': {'max':'1536px'},
        xl: {'max':'1280px'},
        lg: {'max':'1024px'},
        md: { 'max': '1000px' }, // Max-width 1000px for non-container classes
        sm: {'max':'640px'},
        xs: {'max':'475px'},
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
