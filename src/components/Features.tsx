import React from 'react';
import { Shield, CreditCard, Download, RefreshCw, Lock, Globe } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: 'Multiple Card Networks',
      description: 'Support for all major credit card networks including Visa, Mastercard, Amex, and Discover'
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-blue-600" />,
      title: 'Bulk Generation',
      description: 'Generate up to 100 valid card numbers at once with customizable options'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Secure Generation',
      description: 'Client-side generation ensures your data never leaves your browser'
    },
    {
      icon: <Download className="h-8 w-8 text-blue-600" />,
      title: 'Export Options',
      description: 'Export generated cards in multiple formats including TXT and CSV'
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: 'BIN Validation',
      description: 'Automatic BIN validation and card network detection'
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Global Format Support',
      description: 'Support for international card formats and standards'
    }
  ];

  return (
    <section id="features" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Features</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need for credit card testing and development
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute top-6 right-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};