/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkGreen: '#16851C',
          lightGreen: '#7BCB25',
          darkText: '#171717',
          darkCharcoal: '#171717',
          secondaryText: '#626B63',
          bg: '#FFFFFF',
          lightSection: '#F6F9F5',
          lightBg: '#F6F9F5',
          border: '#E5EBE3',
          borderLight: '#E5EBE3',
          deepForest: '#0B4710',
          emeraldTint: '#E8F5E9',
          mutedText: '#626B63',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(22, 133, 28, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'premium-hover': '0 25px 50px -12px rgba(22, 133, 28, 0.16), 0 0 1px 1px rgba(22, 133, 28, 0.15)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 80% 20%, rgba(123, 203, 37, 0.08) 0%, rgba(22, 133, 28, 0.04) 45%, rgba(246, 249, 245, 0) 70%)',
        'subtle-green': 'linear-gradient(135deg, rgba(22, 133, 28, 0.04) 0%, rgba(123, 203, 37, 0.08) 100%)',
        'badge-gradient': 'linear-gradient(135deg, #16851C 0%, #1a9c22 100%)',
      },
    },
  },
  plugins: [],
}
