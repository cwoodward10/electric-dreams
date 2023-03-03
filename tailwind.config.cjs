module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: '#060D16',
      surface: '#FFFFFF0D',
      'surface-elevated': '#FFFFFF17',
      'accent-yellow': '#FBFAA6',
      'accent-red': '#D35269',
      'accent-blue': '#06C3C6',
      'white': '#FAFAFF',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'max': '1514px',
    },
    extend: {
      fontFamily: {
        'Changa': ['Changa', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        'Orbitron': ['Orbitron', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}