/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6B00',
          hover: '#E05E00',
          light: '#FFF0E6',
        },
        black: {
          DEFAULT: '#111111',
          rich: '#0B0B0B',
          muted: '#222222',
        },
        gold: {
          DEFAULT: '#D4A017',
          light: '#F3E5AB',
        },
        lightgray: {
          DEFAULT: '#F8F8F8',
          border: '#EAEAEA',
        }
      },
      fontFamily: {
        poppins: ['Inter', 'sans-serif'],
        montserrat: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        'button': '14px',
      },
      spacing: {
        '120': '120px',
      },
      maxWidth: {
        'site': '1400px',
        'content': '1200px',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(255, 107, 0, 0.15)',
        'gold-glow': '0 0 20px rgba(212, 160, 23, 0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in': 'slideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [],
}
