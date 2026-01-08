import type {Metadata} from 'next'
import {Cormorant_Garamond, Great_Vibes, Allura, Public_Sans, EB_Garamond} from 'next/font/google'

import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes'
})

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura'
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-public-sans',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-garamond'
})

export const metadata: Metadata = {
  title: 'Jordan & Alanna',
  description: 'Jordan & Alanna wedding rsvp'
}

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`
      ${cormorant.variable} 
      ${greatVibes.variable} 
      ${allura.variable} 
      ${publicSans.variable}
      ${ebGaramond.variable}
      `}
    >
      <body>
        <link
          rel="preload"
          href="https://online-fonts.com/fonts/snell-roundhand.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {children}
      </body>
    </html>
  )
}
