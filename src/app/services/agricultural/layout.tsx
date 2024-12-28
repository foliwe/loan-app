import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agricultural Loans | Support for Farmers',
  description: 'Specialized agricultural loans to support farmers and agribusinesses. Get financing for equipment, land purchase, crop production, and more with flexible terms.',
  openGraph: {
    title: 'Agricultural Loans | Support for Farmers',
    description: 'Specialized agricultural loans to support farmers and agribusinesses. Get financing for equipment, land purchase, crop production, and more with flexible terms.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LoanEase Agricultural Loans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agricultural Loans | Support for Farmers',
    description: 'Specialized agricultural loans to support farmers and agribusinesses. Get financing for equipment, land purchase, crop production, and more with flexible terms.',
    images: ['/images/og-image.jpg'],
  },
}

export default function AgriculturalLoanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
