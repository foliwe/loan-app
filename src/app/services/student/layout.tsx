import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Loans | Invest in Your Education',
  description: 'Finance your education with our student-friendly loans. Low interest rates, flexible repayment terms, and quick approval process designed for students.',
  openGraph: {
    title: 'Student Loans | Invest in Your Education',
    description: 'Finance your education with our student-friendly loans. Low interest rates, flexible repayment terms, and quick approval process designed for students.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LoanEase Student Loans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Loans | Invest in Your Education',
    description: 'Finance your education with our student-friendly loans. Low interest rates, flexible repayment terms, and quick approval process designed for students.',
    images: ['/images/og-image.jpg'],
  },
}

export default function StudentLoanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
