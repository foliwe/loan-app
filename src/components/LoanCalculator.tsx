'use client';
import { useState, useEffect } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);

  // Calculate interest rate based on loan term
  const calculateInterestRate = (term: number) => {
    // Base rate of 5%
    const baseRate = 5;
    // Add 0.5% for every year
    const termInYears = term / 12;
    return baseRate + (termInYears * 0.5);
  };

  const calculateLoan = () => {
    const rate = calculateInterestRate(loanTerm);
    setInterestRate(rate);
    
    // Monthly interest rate
    const monthlyRate = rate / 100 / 12;
    
    // Calculate monthly payment using loan amortization formula
    const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                   (Math.pow(1 + monthlyRate, loanTerm) - 1);
    
    setMonthlyPayment(payment);
    setTotalPayment(payment * loanTerm);
  };

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, loanTerm]);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="space-y-6">
        <div>
          <label className="block  font-medium text-gray-700 mb-2">
            Loan Amount: ${loanAmount.toLocaleString()}
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between  text-gray-600 mt-1">
            <span>$1,000</span>
            <span>$100,000</span>
          </div>
        </div>

        <div>
          <label className="block  font-medium text-gray-700 mb-2">
            Loan Term: {loanTerm} months
          </label>
          <input
            type="range"
            min="6"
            max="60"
            step="6"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between  text-gray-600 mt-1">
            <span>6 months</span>
            <span>60 months</span>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className=" text-gray-600">Monthly Payment</p>
              <p className="text-xl font-bold text-blue-600">
                ${monthlyPayment.toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <p className=" text-gray-600">Total Payment</p>
              <p className="text-xl font-bold text-blue-600">
                ${totalPayment.toFixed(2)}
              </p>
            </div>
            <div className="text-center">
              <p className=" text-gray-600">Interest Rate</p>
              <p className="text-xl font-bold text-blue-600">
                {interestRate.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
