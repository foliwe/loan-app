'use client';
import { useState } from 'react';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'next/navigation';

type ApplicationStep = 'loan-amount' | 'loan-type' | 'name' | 'contact' | 'marital-status' | 'birth-date';

interface LoanApplication {
  loan_amount: number;
  loan_type: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  birth_month: string;
  birth_day: string;
  birth_year: string;
  marital_status: string;
}

interface ValidationErrors {
  loan_amount?: string;
  loan_type?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  birth_month?: string;
  birth_day?: string;
  birth_year?: string;
  marital_status?: string;
}

export default function LoanApplication() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<ApplicationStep>('loan-amount');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [application, setApplication] = useState<LoanApplication>({
    loan_amount: 5000,
    loan_type: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    birth_month: '',
    birth_day: '',
    birth_year: '',
    marital_status: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateStep = (step: ApplicationStep): boolean => {
    const newErrors: ValidationErrors = {};

    switch (step) {
      case 'loan-amount':
        if (application.loan_amount < 1000) {
          newErrors.loan_amount = 'Minimum loan amount is £1,000';
        } else if (application.loan_amount > 1000000) {
          newErrors.loan_amount = 'Maximum loan amount is £1,000,000';
        }
        break;

      case 'loan-type':
        if (!application.loan_type) {
          newErrors.loan_type = 'Please select a loan type';
        }
        break;

      case 'name':
        if (!application.first_name.trim()) {
          newErrors.first_name = 'First name is required';
        } else if (!/^[a-zA-Z\s-']+$/.test(application.first_name)) {
          newErrors.first_name = 'Please enter a valid first name';
        }
        if (!application.last_name.trim()) {
          newErrors.last_name = 'Last name is required';
        } else if (!/^[a-zA-Z\s-']+$/.test(application.last_name)) {
          newErrors.last_name = 'Please enter a valid last name';
        }
        break;

      case 'marital-status':
        if (!application.marital_status) {
          newErrors.marital_status = 'Please select your marital status';
        }
        break;

      case 'contact':
        if (!application.email) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(application.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (!application.phone_number) {
          newErrors.phone_number = 'Phone number is required';
        } else if (!/^[\d\s+()-]{10,}$/.test(application.phone_number)) {
          newErrors.phone_number = 'Please enter a valid phone number';
        }
        break;

      case 'birth-date':
        if (!application.birth_month) {
          newErrors.birth_month = 'Month is required';
        }
        if (!application.birth_day) {
          newErrors.birth_day = 'Day is required';
        } else {
          const day = parseInt(application.birth_day);
          if (day < 1 || day > 31) {
            newErrors.birth_day = 'Please enter a valid day';
          }
        }
        if (!application.birth_year) {
          newErrors.birth_year = 'Year is required';
        } else {
          const year = parseInt(application.birth_year);
          const minYear = 1900;
          const maxYear = new Date().getFullYear() - 18;
          if (year < minYear || year > maxYear) {
            newErrors.birth_year = `Year must be between ${minYear} and ${maxYear}`;
          }
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplication(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save to Supabase
      const { error: supabaseError } = await supabase
        .from('loan_applications')
        .insert([
          {
            loan_amount: application.loan_amount,
            loan_type: application.loan_type,
            first_name: application.first_name,
            middle_name: application.middle_name,
            last_name: application.last_name,
            email: application.email,
            phone_number: application.phone_number,
            marital_status: application.marital_status,
            birth_month: application.birth_month,
            birth_day: application.birth_day,
            birth_year: application.birth_year,
            status: 'pending'
          }
        ]);

      if (supabaseError) {
        throw supabaseError;
      }

      // Send email notification
      const emailResponse = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${application.first_name} ${application.last_name}`,
          email: application.email,
          phone: application.phone_number,
          loanType: application.loan_type,
          loanAmount: application.loan_amount,
          message: `New loan application received:
            \nAmount: £${application.loan_amount}
            \nType: ${application.loan_type}
            \nMarital Status: ${application.marital_status}
            \nDate of Birth: ${application.birth_month}/${application.birth_day}/${application.birth_year}`
        }),
      });

      if (!emailResponse.ok) {
        const emailData = await emailResponse.json();
        throw new Error(emailData.details || 'Failed to send email');
      }

      // Redirect to success page
      router.push('/application-success');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      const nextIndex = ['loan-amount', 'loan-type', 'name', 'contact', 'marital-status', 'birth-date'].indexOf(currentStep) + 1;
      if (nextIndex < ['loan-amount', 'loan-type', 'name', 'contact', 'marital-status', 'birth-date'].length) {
        setCurrentStep(['loan-amount', 'loan-type', 'name', 'contact', 'marital-status', 'birth-date'][nextIndex] as ApplicationStep);
      }
    }
  };

  const prevStep = () => {
    const prevIndex = ['loan-amount', 'loan-type', 'name', 'contact', 'marital-status', 'birth-date'].indexOf(currentStep) - 1;
    if (prevIndex >= 0) {
      setCurrentStep(['loan-amount', 'loan-type', 'name', 'contact', 'marital-status', 'birth-date'][prevIndex] as ApplicationStep);
    }
  };

  const renderLoanAmount = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">How much would you like to borrow?</h2>
      <div>
        <input
          type="number"
          name="loan_amount"
          value={application.loan_amount}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 text-xl border rounded-md focus:ring-2 focus:ring-blue-500 ${
            errors.loan_amount ? 'border-red-500' : ''
          }`}
          required
          min="1000"
          max="1000000"
          placeholder="Enter amount in £"
        />
        {errors.loan_amount && (
          <p className="mt-1 text-red-500 ">{errors.loan_amount}</p>
        )}
      </div>
    </div>
  );

  const renderLoanType = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">What type of loan are you looking for?</h2>
      <div>
        <select
          name="loan_type"
          value={application.loan_type}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 text-xl border rounded-md focus:ring-2 focus:ring-blue-500 ${
            errors.loan_type ? 'border-red-500' : ''
          }`}
          required
        >
          <option value="">Select Loan Type</option>
          <option value="personal">Personal Loan</option>
          <option value="business">Business Loan</option>
          <option value="student">Student Loan</option>
          <option value="agricultural">Agricultural Loan</option>
        </select>
        {errors.loan_type && (
          <p className="mt-1 text-red-500 ">{errors.loan_type}</p>
        )}
      </div>
    </div>
  );

  const renderName = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">What is your legal name?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block font-medium mb-1">Legal First Name</label>
          <input
            type="text"
            name="first_name"
            value={application.first_name}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
              errors.first_name ? 'border-red-500' : ''
            }`}
            required
          />
          {errors.first_name && (
            <p className="mt-1 text-red-500 ">{errors.first_name}</p>
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Middle Name (Optional)</label>
          <input
            type="text"
            name="middle_name"
            value={application.middle_name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Legal Last Name</label>
          <input
            type="text"
            name="last_name"
            value={application.last_name}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
              errors.last_name ? 'border-red-500' : ''
            }`}
            required
          />
          {errors.last_name && (
            <p className="mt-1 text-red-500 ">{errors.last_name}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderMaritalStatus = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">What is your marital status?</h2>
      <div>
        <select
          name="marital_status"
          value={application.marital_status}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 text-xl border rounded-md focus:ring-2 focus:ring-blue-500 ${
            errors.marital_status ? 'border-red-500' : ''
          }`}
          required
        >
          <option value="">Select Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
          <option value="separated">Separated</option>
        </select>
        {errors.marital_status && (
          <p className="mt-1 text-red-500 ">{errors.marital_status}</p>
        )}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">How can we contact you?</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={application.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : ''
            }`}
            required
          />
          {errors.email && (
            <p className="mt-1 text-red-500 ">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone_number"
            value={application.phone_number}
            onChange={handleInputChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
              errors.phone_number ? 'border-red-500' : ''
            }`}
            required
          />
          {errors.phone_number && (
            <p className="mt-1 text-red-500 ">{errors.phone_number}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderBirthDate = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">What is your date of birth?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium mb-1">Month</label>
            <select
              name="birth_month"
              value={application.birth_month}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                errors.birth_month ? 'border-red-500' : ''
              }`}
              required
            >
              <option value="">Select Month</option>
              {months.map((month, index) => (
                <option key={month} value={String(index + 1).padStart(2, '0')}>
                  {month}
                </option>
              ))}
            </select>
            {errors.birth_month && (
              <p className="mt-1 text-red-500 ">{errors.birth_month}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Day</label>
            <input
              type="number"
              name="birth_day"
              value={application.birth_day}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                errors.birth_day ? 'border-red-500' : ''
              }`}
              required
              min="1"
              max="31"
            />
            {errors.birth_day && (
              <p className="mt-1 text-red-500 ">{errors.birth_day}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Year</label>
            <input
              type="number"
              name="birth_year"
              value={application.birth_year}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                errors.birth_year ? 'border-red-500' : ''
              }`}
              required
              min="1900"
              max={new Date().getFullYear() - 18}
            />
            {errors.birth_year && (
              <p className="mt-1 text-red-500 ">{errors.birth_year}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'loan-amount':
        return renderLoanAmount();
      case 'loan-type':
        return renderLoanType();
      case 'name':
        return renderName();
      case 'contact':
        return renderContact();
      case 'marital-status':
        return renderMaritalStatus();
      case 'birth-date':
        return renderBirthDate();
      default:
        return null;
    }
  };

  const steps = ['loan-amount', 'loan-type', 'name', 'contact', 'marital-status', 'birth-date'];
  const currentStepIndex = steps.indexOf(currentStep);

  return (
    <>
      <div className="fixed top-[72px] left-0 right-0 bg-white z-10">
        <div className="w-full h-1 bg-gray-200">
          <div
            style={{ width: `${(steps.indexOf(currentStep)) / (steps.length - 1) * 100}%` }}
            className="h-full bg-blue-500 py-1.5 transition-all duration-500"
          ></div>
        </div>
      </div>
      <div className="min-h-screen py-32 relative">
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSubmit}>
            {renderCurrentStep()}
            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-2 font-heading  font-semibold  underline flex items-center gap-2 ${
                  currentStepIndex === 0 ? 'invisible' : ''
                }`}
              > 
              <span className="material-symbols-outlined">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

                </span>
                Back
              </button>
              <button
                type={currentStepIndex === steps.length - 1 ? 'submit' : 'button'}
                onClick={currentStepIndex === steps.length - 1 ? undefined : nextStep}
                disabled={isSubmitting}
                className="px-6  btn-primary"
              >
                {currentStepIndex === steps.length - 1 ? (
                  isSubmitting ? 'Submitting...' : 'Submit Application'
                ) : (
                  'Next'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
