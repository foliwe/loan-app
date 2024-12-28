import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Loans | Flexible Financing Solutions',
  description: 'Get personal loans with competitive rates and flexible terms. Quick approval process, minimal documentation, and tailored repayment plans to suit your needs.',
  openGraph: {
    title: 'Personal Loans | Flexible Financing Solutions',
    description: 'Get personal loans with competitive rates and flexible terms. Quick approval process, minimal documentation, and tailored repayment plans to suit your needs.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LoanEase Personal Loans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loans | Flexible Financing Solutions',
    description: 'Get personal loans with competitive rates and flexible terms. Quick approval process, minimal documentation, and tailored repayment plans to suit your needs.',
    images: ['/images/og-image.jpg'],
  },
}

export default function PersonalLoanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
