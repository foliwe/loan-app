import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Loans | Grow Your Business',
  description: 'Fuel your business growth with our flexible business loans. Get competitive rates, quick approvals, and customized financing solutions for businesses of all sizes.',
  openGraph: {
    title: 'Business Loans | Grow Your Business',
    description: 'Fuel your business growth with our flexible business loans. Get competitive rates, quick approvals, and customized financing solutions for businesses of all sizes.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LoanEase Business Loans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Loans | Grow Your Business',
    description: 'Fuel your business growth with our flexible business loans. Get competitive rates, quick approvals, and customized financing solutions for businesses of all sizes.',
    images: ['/images/og-image.jpg'],
  },
}

export default function BusinessLoanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
