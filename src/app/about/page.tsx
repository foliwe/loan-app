import { Metadata } from 'next'
import Image from 'next/image'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About LoanEase | Your Trusted Financial Partner',
  description: 'Learn about LoanEase - your trusted partner in financial solutions. With over a decade of experience, we provide transparent loan services and personalized financial guidance.',
  keywords: ['about loanease', 'loan company history', 'financial services company', 'trusted loan provider', 'transparent lending', 'financial solutions partner'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About LoanEase | Your Trusted Financial Partner',
    description: 'Learn about LoanEase - your trusted partner in financial solutions. With over a decade of experience, we provide transparent loan services and personalized financial guidance.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LoanEase',
    images: [
      {
        url: '/images/about-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'LoanEase - Financial Solutions',
      },
    ],
  }
}

export default function About() {
  return (
    <>
      <Script id="schema-about" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LoanEase",
            "url": "https://loanease.com",
            "logo": "https://loanease.com/images/logo.png",
            "description": "Your trusted partner in financial solutions. We provide transparent loan services and personalized financial guidance.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.linkedin.com/company/loanease",
              "https://twitter.com/loanease",
              "https://www.facebook.com/loanease"
            ]
          }
        `}
      </Script>

      <main className="min-h-screen py-32">
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About LoanEase</h1>
            <p className="text-xl text-gray-600">Empowering Your Financial Journey with Trust and Innovation</p>
          </header>

          <section className="bg-blue-50 rounded-lg p-8 mb-12" aria-label="Mission Statement">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="leading-relaxed text-gray-700">
                At LoanEase, our mission is to make financial solutions accessible, transparent, and tailored to your needs. We are committed to helping you achieve your financial goals with ease and confidence. Whether it's a personal loan or a business expansion, we stand by you every step of the way.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" aria-label="Company Values">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Image
                  src="/images/transparency-icon.svg"
                  alt="Transparency Icon"
                  width={48}
                  height={48}
                  className="mx-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Transparency</h3>
              <p className="text-gray-600 text-center">
                We believe in complete transparency. Our terms are clear, and our processes are straightforward, ensuring you know exactly what to expect.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Image
                  src="/images/innovation-icon.svg"
                  alt="Innovation Icon"
                  width={48}
                  height={48}
                  className="mx-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">
                Our innovative solutions are designed to simplify your financial journey, utilizing the latest technology to bring you the best loan options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Image
                  src="/images/trust-icon.svg"
                  alt="Trust Icon"
                  width={48}
                  height={48}
                  className="mx-auto"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Trust</h3>
              <p className="text-gray-600 text-center">
                Trust is the cornerstone of our relationship with you. We prioritize your financial well-being with integrity and reliability.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg p-8" aria-label="Company Stats">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-600">10k+</p>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">$500M+</p>
                <p className="text-gray-600">Loans Facilitated</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">98%</p>
                <p className="text-gray-600">Customer Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">24/7</p>
                <p className="text-gray-600">Support Availability</p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}
