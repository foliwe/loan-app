import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | LoanEase',
  description: 'Get in touch with LoanEase. Our team is here to answer your questions and help you find the right financial solution for your needs.',
  openGraph: {
    title: 'Contact Us | LoanEase',
    description: 'Get in touch with LoanEase. Our team is here to answer your questions and help you find the right financial solution for your needs.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact LoanEase - Financial Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | LoanEase',
    description: 'Get in touch with LoanEase. Our team is here to answer your questions and help you find the right financial solution for your needs.',
    images: ['/images/og-image.jpg'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
