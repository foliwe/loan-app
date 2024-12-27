'use client';
import { useRouter } from 'next/navigation';

export default function ApplicationSuccess() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Application Submitted Successfully!
          </h2>

          <p className="text-gray-600 mb-8">
            Thank you for submitting your loan application. Our team will review your
            application and contact you shortly via email with further instructions.
          </p>

          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              Application Reference: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>

            <button
              onClick={() => router.push('/')}
              className=" items-center btn btn-primary py-2"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
