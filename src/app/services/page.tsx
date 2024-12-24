import Link from 'next/link';

const LoanCard = ({ title, features, id }: { title: string; features: string[]; id: string }) => (
  <div id={id} className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="bg-blue-600 p-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="p-6">
      <ul className="space-y-3 text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
      <Link 
        href="/contact"
        className="mt-6 block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Apply Now
      </Link>
    </div>
  </div>
);

export default function Services() {
  const loanTypes = [
    {
      id: "personal",
      title: "Personal Loans",
      features: [
        "Flexible repayment terms",
        "Competitive interest rates from 5.99%",
        "Quick approval process",
        "No collateral required",
        "Loan amount up to $50,000"
      ]
    },
    {
      id: "business",
      title: "Business Loans",
      features: [
        "Working capital financing",
        "Equipment and inventory funding",
        "Business expansion loans",
        "Flexible payment schedules",
        "Amounts up to $500,000"
      ]
    },
    {
      id: "student",
      title: "Student Loans",
      features: [
        "Low interest rates for students",
        "Deferred payment options",
        "No repayment during study period",
        "Cover tuition and living expenses",
        "Special rates for good academic performance"
      ]
    },
    {
      id: "agricultural",
      title: "Agricultural Loans",
      features: [
        "Seasonal repayment schedules",
        "Equipment financing",
        "Crop and livestock funding",
        "Land purchase options",
        "Weather-related flexibility"
      ]
    },
    {
      id: "medical",
      title: "Medical Loans",
      features: [
        "Cover emergency medical expenses",
        "Elective procedure financing",
        "Quick approval for urgent care",
        "Flexible repayment terms",
        "Coverage for family medical needs"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive Loan Solutions for Every Need</p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {loanTypes.map((loan) => (
            <LoanCard
              key={loan.id}
              id={loan.id}
              title={loan.title}
              features={loan.features}
            />
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Loan Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Apply Online</h3>
              <p className="text-gray-600">Fill out our simple online application form</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Document Submission</h3>
              <p className="text-gray-600">Upload required documents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Verification</h3>
              <p className="text-gray-600">Quick verification process</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold mb-2">Loan Disbursement</h3>
              <p className="text-gray-600">Get your loan amount quickly</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-6">
            Our team is ready to help you choose the right loan for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
