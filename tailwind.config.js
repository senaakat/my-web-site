/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        "type": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink": {
          "50%": { borderColor: "transparent" },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        typing: "type 3s steps(30, end) infinite",
        blink: "blink 0.7s step-end infinite",  
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}