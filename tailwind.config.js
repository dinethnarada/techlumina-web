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
        'navy': '#141c33',
        'blue-gray': '#2f456f',
        'medium-blue': '#5374ac',
        'light-gray': '#eff5fa',
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'shine': 'shine 4s linear infinite',
        'shine-delayed': 'shine 4s linear 0.5s infinite',
        'glow-line': 'glow-line 2s ease-in-out infinite',
        'glow-line-delayed': 'glow-line 2s ease-in-out 0.5s infinite',
        'letter-glow': 'letter-glow 5s ease-in-out infinite',
        'letter-glow-delayed': 'letter-glow 5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'gradient-shift-delayed': 'gradient-shift 8s ease-in-out infinite 4s',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        },
        'glow-line': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%) skewX(-20deg)',
            width: '80%',
            background: 'linear-gradient(90deg, transparent, rgba(47,69,111,0.2), rgba(83,116,172,0.4), rgba(239,245,250,0.6), rgba(83,116,172,0.4), rgba(47,69,111,0.2), transparent)'
          },
          '25%': {
            opacity: '0.9',
            transform: 'translateX(-50%) skewX(-20deg)',
            width: '80%',
            background: 'linear-gradient(90deg, transparent, rgba(47,69,111,0.3), rgba(83,116,172,0.5), rgba(239,245,250,0.7), rgba(83,116,172,0.5), rgba(47,69,111,0.3), transparent)'
          },
          '50%': {
            opacity: '1',
            transform: 'translateX(0%) skewX(-20deg)',
            width: '80%',
            background: 'linear-gradient(90deg, transparent, rgba(47,69,111,0.4), rgba(83,116,172,0.6), rgba(239,245,250,0.8), rgba(83,116,172,0.6), rgba(47,69,111,0.4), transparent)'
          },
          '75%': {
            opacity: '0.9',
            transform: 'translateX(50%) skewX(-20deg)',
            width: '80%',
            background: 'linear-gradient(90deg, transparent, rgba(47,69,111,0.3), rgba(83,116,172,0.5), rgba(239,245,250,0.7), rgba(83,116,172,0.5), rgba(47,69,111,0.3), transparent)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(100%) skewX(-20deg)',
            width: '80%',
            background: 'linear-gradient(90deg, transparent, rgba(47,69,111,0.2), rgba(83,116,172,0.4), rgba(239,245,250,0.6), rgba(83,116,172,0.4), rgba(47,69,111,0.2), transparent)'
          }
        },
        'letter-glow': {
          '0%, 100%': {
            opacity: '0.2',
            filter: 'blur(0px)',
            textShadow: '0 0 4px rgba(47,69,111,0.3), 0 0 8px rgba(83,116,172,0.3), 0 0 12px rgba(239,245,250,0.2)'
          },
          '20%, 80%': {
            opacity: '0.6',
            filter: 'blur(0.5px)',
            textShadow: '0 0 8px rgba(47,69,111,0.5), 0 0 12px rgba(83,116,172,0.5), 0 0 16px rgba(239,245,250,0.3)'
          },
          '40%, 60%': {
            opacity: '0.8',
            filter: 'blur(0.75px)',
            textShadow: '0 0 12px rgba(47,69,111,0.7), 0 0 16px rgba(83,116,172,0.7), 0 0 20px rgba(239,245,250,0.4)'
          },
          '50%': {
            opacity: '1',
            filter: 'blur(1px)',
            textShadow: '0 0 16px rgba(47,69,111,0.9), 0 0 20px rgba(83,116,172,0.9), 0 0 24px rgba(239,245,250,0.5)'
          }
        },
        'gradient-shift': {
          '0%, 100%': {
            transform: 'translate(0%, 0%) rotate(0deg)',
            opacity: '0.5'
          },
          '25%': {
            transform: 'translate(10%, -10%) rotate(90deg)',
            opacity: '0.75'
          },
          '50%': {
            transform: 'translate(0%, 0%) rotate(180deg)',
            opacity: '1'
          },
          '75%': {
            transform: 'translate(-10%, 10%) rotate(270deg)',
            opacity: '0.75'
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
