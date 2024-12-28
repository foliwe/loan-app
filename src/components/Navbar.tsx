'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (loansDropdownOpen) {
        setLoansDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [loansDropdownOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {
      href: '/services',
      label: 'Loans',
      dropdown: [
        { href: '/services/personal', label: 'Personal Loans' },
        { href: '/services/business', label: 'Business Loans' },
        { href: '/services/student', label: 'Student Loans' },
        { href: '/services/agricultural', label: 'Agricultural Loans' },
      ]
    },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLoansDropdownOpen(!loansDropdownOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="relative w-44 h-12">
              <Image
                src={scrolled || !isHomePage ? "/images/Logonew.png" : "/images/logoinvertnew.png"}
                alt="LoanEase Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <div key={link.href} className="relative">
                  {link.dropdown ? (
                    <div onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={handleDropdownClick}
                        className={`relative px-4 py-2 rounded-md font-heading font-semibold transition-all duration-300 inline-flex items-center ${
                          scrolled || !isHomePage
                            ? 'text-gray-600 hover:text-blue-600'
                            : 'text-white hover:text-white'
                        }`}
                      >
                        {link.label}
                        <svg
                          className={`ml-2 h-4 w-4 transition-transform ${
                            loansDropdownOpen ? 'rotate-180' : ''
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {loansDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                          <div className="py-1" role="menu">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-2 ${
                                  pathname === item.href
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                }`}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 rounded-md font-heading font-semibold transition-all duration-300 ${
                        scrolled || !isHomePage
                          ? 'text-gray-600 hover:text-blue-600'
                          : 'text-white hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled || !isHomePage ? 'text-gray-600' : 'text-white'
              } hover:text-blue-600 focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <div key={link.href}>
              {link.dropdown ? (
                <div>
                  <button
                    onClick={() => setLoansDropdownOpen(!loansDropdownOpen)}
                    className="w-full text-left px-3 py-2  font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  >
                    <span className="flex justify-between items-center">
                      {link.label}
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform ${
                          loansDropdownOpen ? 'rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  {loansDropdownOpen && (
                    <div className="pl-4 py-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-3 py-2  font-medium ${
                            pathname === item.href
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          onClick={() => {
                            setLoansDropdownOpen(false);
                            setIsOpen(false);
                          }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`block px-3 py-2  font-medium ${
                    pathname === link.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
