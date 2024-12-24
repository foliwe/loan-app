import LoanCalculator from '@/components/LoanCalculator';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-blue-900">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Financial Future Starts Here with us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Get the funding you need with competitive rates and flexible terms tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 text-center"
              >
                Explore Loans
              </Link>
              <Link
                href="#calculator"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 text-center"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LoanEase?
            </h2>
            <p className="text-xl text-gray-600">
              We make borrowing simple, transparent, and tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quick Approval</h3>
              <p className="text-gray-600">Get your loan approved within 24 hours with our streamlined process</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Best Rates</h3>
              <p className="text-gray-600">Competitive interest rates starting from just 5.99% per annum</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
              <p className="text-gray-600">Dedicated loan advisors to guide you through every step</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find the Right Loan for You
            </h2>
            <p className="text-xl text-gray-600">
              Explore our range of loan options designed to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personal Loans",
                description: "Quick personal loans for your immediate needs",
                color: "bg-blue-600"
              },
              {
                title: "Business Loans",
                description: "Fuel your business growth with flexible financing",
                color: "bg-green-600"
              },
              {
                title: "Student Loans",
                description: "Invest in your education with affordable rates",
                color: "bg-purple-600"
              }
            ].map((loan, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
                <div className={`${loan.color} p-8`}>
                  <h3 className="text-2xl font-semibold text-white mb-2">{loan.title}</h3>
                  <p className="text-white/80">{loan.description}</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Loan
            </h2>
            <p className="text-xl text-gray-600">
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
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
