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
        'deep-blue': '#0A0F5E',
        'vibrant-purple': '#4B0082',
        'electric-teal': '#00D4C0',
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
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
  ],
}
