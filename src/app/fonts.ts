import localFont from 'next/font/local'

export const norwester = localFont({
  src: './fonts/norwester.otf',
  display: 'swap',
  variable: '--font-norwester'
})

export const eightgon = localFont({
  src: [
    {
      path: './fonts/SuperchargeStraightCondensed.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-eightgon'
})
