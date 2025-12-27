/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#734AE2',
          muted: '#A68BFA',
        },
        secondary: '#B9FD33',
        black: {
          primary: '#1F2937',
          DEFAULT: '#000000',
          gray: '#A9A9A9',
          light: '#E8E8E8',
        },
        white: {
          DEFAULT: '#FFFFFF',
          light: '#EDEDED',
        },
        fair: '#FFD035',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'body-14': ['14px', { lineHeight: '22px', letterSpacing: '-0.28px' }],
        'button-16': ['16px', { lineHeight: '20.3px', letterSpacing: '-0.32px' }],
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(-47deg, rgba(203, 186, 255, 1) 0%, rgba(200, 159, 243, 1) 54%, rgba(114, 72, 241, 1) 100%)',
      },
      borderColor: {
        'border': '#E5E7EB',
      },
    },
  },
  plugins: [],
}
