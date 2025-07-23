/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glow: {
          'from': {
            textShadow: '0 0 20px #9333ea, 0 0 30px #9333ea, 0 0 40px #9333ea',
          },
          'to': {
            textShadow: '0 0 30px #3b82f6, 0 0 40px #3b82f6, 0 0 50px #3b82f6',
          },
        },
      },
    },
  },
  plugins: [],
}

