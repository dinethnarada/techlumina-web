/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-gray': '#eff5fa',
        'navy': '#141c33',
        'blue-gray': '#2f456f',
        'medium-blue': '#5374ac',
        'mint': '#8afdd0',
      },
      fontFamily: {
        'norwester': ['var(--font-norwester)', 'sans-serif'],
        'eightgon': ['var(--font-eightgon)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
      },
      animation: {
        'shine': 'shine 4s linear infinite',
        'shine-delayed': 'shine 4s linear 0.5s infinite',
        'glow-line': 'glow-line 3s ease-in-out infinite',
        'glow-line-delayed': 'glow-line 3s ease-in-out 0.5s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        },
        'glow-line': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%) skewX(-15deg)',
            width: '50%'
          },
          '30%': {
            opacity: '0.5',
            transform: 'translateX(-30%) skewX(-15deg)',
            width: '50%'
          },
          '50%': {
            opacity: '0.7',
            transform: 'translateX(0%) skewX(-15deg)',
            width: '50%'
          },
          '70%': {
            opacity: '0.5',
            transform: 'translateX(30%) skewX(-15deg)',
            width: '50%'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(100%) skewX(-15deg)',
            width: '50%'
          }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
    },
  },
  plugins: [],
  safelist: [
    'text-deep-blue',
    'text-vibrant-purple',
    'text-electric-teal',
    'bg-deep-blue',
    'bg-vibrant-purple',
    'bg-electric-teal',
    'border-deep-blue',
    'border-vibrant-purple',
    'border-electric-teal',
    'font-norwester',
  ],
}
