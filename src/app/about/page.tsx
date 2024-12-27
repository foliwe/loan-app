export default function About() {
  return (
    <div className="min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold  mb-4">About LoanEase</h1>
          <p className="text-xl ">Your Trusted Partner in Financial Solutions</p>
        </div>

        {/* Mission Section */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold  mb-4">Our Mission</h2>
          <p className=" leading-relaxed ">
            At LoanEase, we believe in making financial solutions accessible to everyone. Our mission is to provide 
            transparent, fair, and easy-to-understand loan services that help our clients achieve their financial goals.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold  mb-3">Transparency</h3>
            <p className="text-l">
              We believe in complete transparency in all our dealings, with no hidden fees or charges.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold  mb-3">Integrity</h3>
            <p className="">
              We maintain the highest standards of integrity in all our business practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold  mb-3">Innovation</h3>
            <p className="">
              We continuously innovate to provide the best financial solutions to our clients.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold  mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="">CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="">COO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold">Mike Johnson</h3>
              <p className="">CTO</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-lg">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$100M+</div>
              <div className="text-lg">Loans Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
