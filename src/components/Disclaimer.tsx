import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
      <div className="flex items-center">
        <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
        <p className="text-sm text-yellow-700">
          <strong>Important:</strong> This tool is for testing and educational purposes only.
          Generated card numbers are valid for format verification but cannot be used for real transactions.
          Misuse of this tool for fraudulent purposes is strictly prohibited and illegal.
        </p>
      </div>
    </div>
  );
};