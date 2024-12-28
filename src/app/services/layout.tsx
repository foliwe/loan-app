import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Loan Services | LoanEase',
  description: 'Explore our comprehensive range of loan services including personal, business, student, and agricultural loans. Find the perfect financial solution for your needs.',
  openGraph: {
    title: 'Our Loan Services | LoanEase',
    description: 'Explore our comprehensive range of loan services including personal, business, student, and agricultural loans. Find the perfect financial solution for your needs.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LoanEase Financial Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Loan Services | LoanEase',
    description: 'Explore our comprehensive range of loan services including personal, business, student, and agricultural loans. Find the perfect financial solution for your needs.',
    images: ['/images/og-image.jpg'],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
