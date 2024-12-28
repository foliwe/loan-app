import LoanCalculator from '@/components/LoanCalculator';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LoanEase | Smart Financial Solutions Made Simple',
  description: 'Get the funding you need with competitive rates and flexible terms. LoanEase offers personal and business loans with quick approvals and transparent terms.',
  openGraph: {
    title: 'LoanEase | Smart Financial Solutions Made Simple',
    description: 'Get the funding you need with competitive rates and flexible terms. LoanEase offers personal and business loans with quick approvals and transparent terms.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LoanEase - Financial Solutions Made Simple',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LoanEase | Smart Financial Solutions Made Simple',
    description: 'Get the funding you need with competitive rates and flexible terms. LoanEase offers personal and business loans with quick approvals and transparent terms.',
    images: ['/images/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/piggy-bank.jpg')`,
                filter: 'brightness(0.9)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-sky-600/30"></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Financial Future Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Get the funding you need with competitive rates and flexible terms tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/services"
                className="inline-block  bg-blue-600 font-heading text-white px-8 py-4 rounded-full  font-semibold hover:bg-blue-700 transition duration-300 text-center"
              >
                Explore Loans
              </Link>
              <Link
                href="#calculator"
                className="inline-block  bg-white font-heading text-blue-600 px-8 py-4 rounded-full  font-semibold hover:bg-gray-100 transition duration-300 text-center"
              >
                Calculate Payments
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Why Choose LoanEase?
            </h2>
            <p className="text-xl ">
              We make borrowing simple, transparent, and tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
              <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
            </svg>

              </div>
              <h3 className="text-xl font-semibold mb-4">Quick Approval</h3>
              <p className="text-lg">Get your loan approved within 24 hours with our streamlined process</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
              </svg>

              </div>
              <h3 className="text-xl font-semibold mb-4">Best Rates</h3>
              <p className="text-lg">Competitive interest rates starting from just 5.99% per annum</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>

              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-lg">Dedicated loan advisors to guide you through every step</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Preview */}
      <section className="py-20 bg-sky-100 ">
          
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Find the Right Loan for You
            </h2>
            <p className="text-xl ">
              Explore our range of loan options designed to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[/* eslint-disable @typescript-eslint/no-unused-vars */
              {
                title: "Personal Loans",
                description: "Quick personal loans for your immediate needs",
                color: "white"
              },
              {
                title: "Business Loans",
                description: "Fuel your business growth with flexible financing",
                color: "white"
              },
              {
                title: "Student Loans",
                description: "Invest in your education with affordable rates",
                color: "white "
              }
            ].map((loan, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
                <div className={`${loan.color} p-8`}>
                  <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
                  </svg>

                  </div>
                  <h3 className="text-2xl font-semibold  text-sky-950 mb-2">{loan.title}</h3>
                  <p className="">{loan.description}</p>
                </div>
                <div className="p-6">
                  <Link
                    href={`/services#${loan.title.toLowerCase().replace(" ", "-")}`}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn More 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))/* eslint-enable @typescript-eslint/no-unused-vars */}
          </div>
        </div>
      </section>

      <section className=" bg-white">
        <div className=" mx-auto px-4 sm:px-6 lg:px-1">
          

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="flex flex-col gap-20 items-center py-20">

              <div className="text-center max-w-md font-heading text-3xl font-bold">
              Personal loans through Loan & Asset Finance are quick and easy
              </div>

              <div className="text-center max-w-md">
                <div className="w-10 h-10 mx-auto mb-2 font-bold  text-2xl font-heading text-white bg-cyan-600 rounded-full flex items-center justify-center">
                  1
                </div>
                <h3 className="text-xl font-semibold  font-heading mb-2">Apply online</h3>
                <p className="text-lg">It takes less than 5 minutes to fill out our online application form¹</p>
              </div>

              <div className="text-center max-w-md">
                <div className="w-10 h-10 mx-auto mb-2 font-bold  text-2xl font-heading text-white bg-cyan-600 rounded-full flex items-center justify-center">
                  2
                </div>
                <h3 className="text-xl font-semibold  font-heading mb-2">Get approved</h3>
                <p className="text-lg">Most borrowers are instantly approved with no paperwork required.³</p>
              </div>

              <div className="text-center max-w-md">
                <div className="w-10 h-10 mx-auto mb-2 font-bold  text-2xl font-heading text-white bg-cyan-600 rounded-full flex items-center justify-center">
                  3
                </div>
                <h3 className="text-xl font-semibold  font-heading mb-2">Get funds</h3>
                <p className="text-lg">Once approved, you could get funds sent in 24 hours or less.⁴</p>
              </div>

            </div>

           

            <div className="text-center bg-cover bg-center"  style={{
                backgroundImage: `url('/images/loanStepsHero.jpg')`,
                filter: 'brightness(0.9)'
              }}>
            </div>

           

          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold  mb-4">
              Calculate Your Loan
            </h2>
            <p className="text-xl ">
              Get an estimate of your monthly payments and total cost
            </p>
          </div>
          <LoanCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the perfect loan solution
          </p>
          <Link
            href="/apply"
            className="inline-block bg-white font-heading text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
