import { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  viewportFit: 'cover',
  themeColor: '#0066FF'
}

export const metadata: Metadata = {
  metadataBase: new URL('https://loanease.com'),
  title: {
    default: 'LoanEase | Smart Financial Solutions for Your Future',
    template: '%s | LoanEase'
  },
  description: 'LoanEase offers innovative financial solutions with quick approvals and competitive rates. Apply for personal and business loans easily with our transparent process.',
  keywords: [
    'loan application',
    'quick loans',
    'personal loans',
    'business loans',
    'financial services',
    'loan calculator',
    'competitive rates',
    'easy loan approval',
    'transparent lending',
    'secure loans'
  ],
  authors: [{ name: 'LoanEase Team' }],
  creator: 'LoanEase',
  publisher: 'LoanEase',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-us',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'LoanEase',
    title: 'LoanEase | Smart Financial Solutions',
    description: 'Transform your financial future with LoanEase. Quick approvals, competitive rates, and transparent process.',
    url: 'https://loanease.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LoanEase - Smart Financial Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LoanEase | Smart Financial Solutions',
    description: 'Transform your financial future with LoanEase. Quick approvals, competitive rates, and transparent process.',
    creator: '@loanease',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LoanEase',
              url: 'https://loanease.com',
              logo: 'https://loanease.com/images/logo.png',
              sameAs: [
                'https://www.facebook.com/loanease',
                'https://twitter.com/loanease',
                'https://www.linkedin.com/company/loanease',
              ],
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+1-800-LOANEASE',
                  contactType: 'customer service',
                  areaServed: 'US',
                  availableLanguage: ['English'],
                },
              ],
            })
          }}
        />
        <Script
          id="schema-webpage"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'LoanEase',
              url: 'https://loanease.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://loanease.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  )
}
