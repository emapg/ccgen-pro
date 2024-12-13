import React, { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';
import { GeneratedCard } from '../types';

interface OutputAreaProps {
  cards: GeneratedCard[];
  format: 'default' | 'plain' | 'json' | 'sql';
}

export const OutputArea: React.FC<OutputAreaProps> = ({ cards, format }) => {
  const [copied, setCopied] = useState(false);

  const formatOutput = (): string => {
    switch (format) {
      case 'plain':
        return cards.map(card => `${card.number}|${card.expiry}|${card.cvv}`).join('\n');
      
      case 'json':
        return JSON.stringify(cards, null, 2);
      
      case 'sql':
        return cards.map(card => 
          `INSERT INTO test_cards (card_number, expiry, cvv, network) VALUES ('${card.number}', '${card.expiry}', '${card.cvv}', '${card.network}');`
        ).join('\n');
      
      default:
        return cards.map(card => 
          `Card: ${card.number}\nExpiry: ${card.expiry}\nCVV: ${card.cvv}\nNetwork: ${card.network}\n`
        ).join('\n');
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(formatOutput());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <div className="flex justify-between items-center p-3 border-b dark:border-gray-700">
        <span className="text-sm font-medium">Generated Output</span>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <textarea
        value={formatOutput()}
        readOnly
        className="w-full h-64 p-4 bg-transparent border-0 focus:ring-0 font-mono text-sm"
      />
    </div>
  );
};