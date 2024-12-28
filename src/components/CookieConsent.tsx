'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowConsent(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setShowConsent(false);
  };

  const handleClose = () => {
    // Set to essential cookies by default when closing
    localStorage.setItem('cookieConsent', 'essential');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className=" px-4 mx-auto py-5 relative">
        <div className="flex items-center gap-8">

          {/* Close button */}
         

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 w-full">
            <div className="text-gray-600 flex-grow">
              <p className="text-xs">
                We use pixels and other technologies to improve your browsing experience and to analyze performance and traffic on our site. We may share this information with our marketing partners. If we detect an opt-out preference signal, we will not use your information for these purposes. If you do not make a selection, you agree to our use of these technologies.Privacy Policy{' '}
                <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                  cookie policy
                </Link>.
              </p>
            </div>

            <div className="flex gap-2 justify-end shrink-0">
              <button
                onClick={acceptEssential}
                className="btn btn-primary py-2 text-xs"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="btn btn-primary py-2 text-xs"
              >
                Accept All
              </button>
            </div>
          </div>

          <button 
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            aria-label="Close cookie consent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
}
