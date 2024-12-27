import Link from 'next/link';

const LoanCard = ({ title, features, id }: { title: string; features: string[]; id: string }) => (
  <div id={id} className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="bg-blue-600 p-4">
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="p-6">
      <ul className="space-y-3 ">
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
      description: "Flexible financing solutions for your personal needs",
      link: "/services/personal",
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
      description: "Grow your business with our flexible financing options",
      link: "/services/business",
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
      description: "Invest in your education with affordable rates",
      link: "/services/student",
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
      description: "Supporting farmers with flexible financing solutions",
      link: "/services/agricultural",
      features: [
        "Seasonal payment schedules",
        "Competitive interest rates",
        "Equipment financing options",
        "Land purchase loans",
        "Crop and livestock funding"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Loan Services</h1>
          <p className="text-xl text-gray-600">Discover the perfect financing solution for your needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loanTypes.map((loan) => (
            <div key={loan.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{loan.title}</h2>
                <p className="text-gray-600 mb-6">{loan.description}</p>
                <ul className="space-y-3 mb-8">
                  {loan.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <Link
                    href={loan.link}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More →
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
