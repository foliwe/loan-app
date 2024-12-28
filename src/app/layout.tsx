import { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#0066FF'
}

export const metadata: Metadata = {
  metadataBase: new URL('https://loanease.com'), // Replace with your actual domain when deployed
  title: {
    default: 'LoanEase | Smart Financial Solutions',
    template: '%s | LoanEase'
  },
  description: 'LoanEase provides smart, transparent, and accessible financial solutions. Apply for loans easily and get quick approvals with competitive rates.',
  keywords: ['loans', 'financial services', 'personal loans', 'business loans', 'loan application'],
  authors: [{ name: 'LoanEase Team' }],
  creator: 'LoanEase',
  publisher: 'LoanEase',
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/favicon.svg',
        color: '#0066FF'
      }
    ]
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'LoanEase',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'LoanEase',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LoanEase - Financial Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@loanease', // Replace with your actual Twitter handle
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
