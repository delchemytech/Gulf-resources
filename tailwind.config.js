// tailwind.config.js
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
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
    // Optimize CSS output
    corePlugins: {
      preflight: true,
    },
    // Remove unused CSS
    purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
      ],
      options: {
        safelist: ['bg-red-600', 'text-white', 'font-bold'], // Keep critical classes
      }
    }
  }