/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crt-green': '#00ff00',
        'crt-dark-green': '#003300',
        'crt-bg': '#0a0a0a',
      },
      fontFamily: {
        'mono': ['VT323', 'Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'flicker': 'flicker 0.15s ease-in-out',
        'scanline': 'scanline 8s linear infinite',
        'crt-glow': 'crt-glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '41.99%': { opacity: '1' },
          '42%': { opacity: '0' },
          '43%': { opacity: '0' },
          '43.01%': { opacity: '1' },
          '47.99%': { opacity: '1' },
          '48%': { opacity: '0' },
          '49%': { opacity: '0' },
          '49.01%': { opacity: '1' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'crt-glow': {
          '0%': {
            textShadow: '0 0 5px #00ff00, 0 0 10px #00ff00',
          },
          '100%': {
            textShadow: '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
          },
        },
      },
    },
  },
  plugins: [],
}
