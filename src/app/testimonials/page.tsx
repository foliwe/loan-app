export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "LoanEase helped me secure the funding I needed to expand my business. The process was smooth and their team was incredibly supportive throughout.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "First-time Homebuyer",
      content: "Thanks to LoanEase, I was able to get my first mortgage with a great rate. Their loan calculator made it easy to understand my monthly payments.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Freelancer",
      content: "As a freelancer, getting a loan can be challenging. LoanEase understood my situation and provided a personal loan that fit my needs perfectly.",
      rating: 4
    },
    {
      name: "David Thompson",
      role: "Restaurant Owner",
      content: "The business loan from LoanEase helped me renovate my restaurant during tough times. Their flexible repayment terms made all the difference.",
      rating: 5
    },
    {
      name: "Lisa Wong",
      role: "Real Estate Investor",
      content: "I've used LoanEase for multiple investment properties. Their professional team and competitive rates keep me coming back.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Student",
      content: "The personal loan I got from LoanEase helped me cover unexpected expenses. The application process was straightforward and quick.",
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-600">Hear What Our Clients Say About Us</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-lg">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Recommend Us</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Satisfied Clients?</h2>
          <p className="text-gray-600 mb-8">
            Apply now and experience our award-winning service for yourself.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Apply for a Loan
          </a>
        </div>
      </div>
    </div>
  );
}
