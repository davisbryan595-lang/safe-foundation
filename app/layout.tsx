import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Safe Foundation | Environmental Monitoring & Safety Investigations | Washington DC',
  description: 'Expert environmental monitoring, climate investigations, and safety assessments nationwide. Protecting communities and businesses with data-driven insights.',
  generator: 'v0.app',
  openGraph: {
    title: 'Safe Foundation | Environmental Monitoring & Safety Investigations',
    description: 'Expert environmental monitoring, climate investigations, and safety assessments nationwide.',
    url: 'https://safefoundation.com',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Safe Foundation',
              description: 'Environmental consulting firm offering monitoring, climate investigations, and safety assessments',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '301 E Street NW Suite A210',
                addressLocality: 'Washington',
                addressRegion: 'DC',
                postalCode: '20037',
                addressCountry: 'US'
              },
              telephone: '202-670-4032',
              email: 'samchaterji@yahoo.com',
              areaServed: 'US',
              sameAs: ['https://linkedin.com', 'https://twitter.com']
            })
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
