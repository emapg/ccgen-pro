import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About CCGen Pro</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            A professional credit card number generator for testing and development
          </p>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Purpose & Usage</h3>
            </div>
            
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                CCGen Pro is a professional-grade credit card number generator designed specifically for developers,
                QA testers, and security researchers. Our tool generates mathematically valid credit card numbers
                that pass basic validation algorithms but cannot be used for actual transactions.
              </p>

              <div className="mt-6 bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-100">Legal Disclaimer</h3>
                    <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-200">
                      <p>
                        This tool is provided for legitimate testing and development purposes only. Any attempt to use
                        generated numbers for fraudulent transactions is strictly prohibited and illegal. Users are
                        responsible for ensuring compliance with all applicable laws and regulations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mt-6 text-gray-900 dark:text-white">Legitimate Use Cases:</h4>
              <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
                <li>Testing e-commerce payment systems</li>
                <li>Validating credit card input forms</li>
                <li>Development of payment processing software</li>
                <li>QA testing of financial applications</li>
                <li>Educational purposes and learning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};