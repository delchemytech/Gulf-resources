// tailwind.config.js
module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          // Use meaningful names, not the hex code itself
          'brand-primary': '#B5004C', 
          'brand-accent': '#C50040',
          'error-red': '#C00000',
          // Optional: Create a scale around your main color for flexibility
          'primary-scale': {
            DEFAULT: '#B5004C',
            900: '#7A0033', // A darker shade for hovers/borders
            100: '#FDEFF4', // A lighter shade for backgrounds
          }
        },
      },
    },
    // ...
  }