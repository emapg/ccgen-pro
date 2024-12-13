import React from 'react';
import { Hash, Calendar, Shield, Download } from 'lucide-react';

export const HowToUse: React.FC = () => {
  const steps = [
    {
      icon: <Hash className="h-6 w-6 text-blue-600" />,
      title: 'Enter BIN',
      description: 'Input the first 6-8 digits of the card number (BIN)'
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: 'Select Options',
      description: 'Choose quantity and whether to include expiry date and CVV'
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Generate Cards',
      description: 'Click generate to create valid card numbers based on your input'
    },
    {
      icon: <Download className="h-6 w-6 text-blue-600" />,
      title: 'Export Results',
      description: 'Copy individual cards or export all results in TXT/CSV format'
    }
  ];

  return (
    <section id="how-to-use" className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How to Use</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Follow these simple steps to generate test credit card numbers
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white dark:bg-gray-800 text-lg font-medium text-gray-900 dark:text-white">
                Steps
              </span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white text-center">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};