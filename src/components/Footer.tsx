const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LoanEase</h3>
            <p className="text-gray-300">
              Making loans accessible and affordable for everyone.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Loans plan</h4>
            <ul className="space-y-2">
              <li><a href="/services#personal" className="text-gray-300 hover:text-white">Personal Loans</a></li>
              <li><a href="/services#business" className="text-gray-300 hover:text-white">Business Loans</a></li>
              <li><a href="/services#student" className="text-gray-300 hover:text-white">Student Loans</a></li>
              <li><a href="/services#agricultural" className="text-gray-300 hover:text-white">Agricultural Loans</a></li>
              <li><a href="/services#medical" className="text-gray-300 hover:text-white">Medical Loans</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@loanease.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Finance Street</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300"> {new Date().getFullYear()} LoanEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
