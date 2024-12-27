const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LOAN & ASSET FINANCE</h3>
            <p className="text-gray-300">
              Providing comprehensive loan and asset financing solutions.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              <p>Company number: 06836424</p>
              <p>Registered office address:</p>
              <p>32 Purcells Avenue,</p>
              <p>Edgware, Middlesex,</p>
              <p>HA8 8DZ</p>
            </div>
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
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/personal" className="text-gray-300 hover:text-white">Personal Loans</a></li>
              <li><a href="/services/business" className="text-gray-300 hover:text-white">Business Loans</a></li>
              <li><a href="/services/student" className="text-gray-300 hover:text-white">Student Loans</a></li>
              <li><a href="/services/agricultural" className="text-gray-300 hover:text-white">Agricultural Loans</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:info@loanassetfinance.co.uk" className="hover:text-white">
                  info@loanassetfinance.co.uk
                </a>
              </li>
              <li>
                <a href="tel:+442081234567" className="hover:text-white">
                  020 8123 4567
                </a>
              </li>
              <li className="text-sm">
                32 Purcells Avenue<br />
                Edgware, Middlesex<br />
                HA8 8DZ
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300"> {new Date().getFullYear()} LOAN & ASSET FINANCE. Company No. 06836424. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
