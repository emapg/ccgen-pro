import React, { useState, useEffect } from 'react';
import { Copy, Download, RefreshCw, Settings, AlertCircle } from 'lucide-react';
import { GeneratorOptions, GeneratedCard } from '../types';
import { generateCard } from '../utils/generator';
import { detectCardNetwork, cardNetworks } from '../utils/cardValidation';
import { Disclaimer } from './Disclaimer';
import { OutputArea } from './OutputArea';

export const Generator: React.FC = () => {
  const [options, setOptions] = useState<GeneratorOptions>({
    bin: '',
    quantity: 1,
    network: 'visa',
    includeExpiry: true,
    includeCvv: true,
  });
  const [cards, setCards] = useState<GeneratedCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [outputFormat, setOutputFormat] = useState<'default' | 'plain' | 'json' | 'sql'>('default');
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    if (options.bin) {
      const detectedNetwork = detectCardNetwork(options.bin);
      if (detectedNetwork && detectedNetwork !== options.network) {
        setOptions(prev => ({ ...prev, network: detectedNetwork }));
      }
    }
  }, [options.bin]);

  const handleBinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 8);
    setOptions(prev => ({ ...prev, bin: value }));
    setError('');
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(100, Math.max(1, parseInt(e.target.value) || 1));
    setOptions(prev => ({ ...prev, quantity: value }));
  };

  const validateInput = (): boolean => {
    if (options.bin.length < 6) {
      setError('BIN must be at least 6 digits');
      return false;
    }
    
    const network = detectCardNetwork(options.bin);
    if (!network) {
      setError('Invalid BIN number');
      return false;
    }
    
    return true;
  };

  const handleGenerate = async () => {
    if (!validateInput()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const generatedCards: GeneratedCard[] = [];
      for (let i = 0; i < options.quantity; i++) {
        generatedCards.push(generateCard(options));
      }
      setCards(generatedCards);
    } catch (err) {
      setError('Error generating cards. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    const content = outputFormat === 'json' 
      ? JSON.stringify(cards, null, 2)
      : cards.map(card => `${card.number},${card.expiry},${card.cvv},${card.network}`).join('\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ccgen-export-${new Date().toISOString().slice(0, 10)}.${outputFormat === 'json' ? 'json' : 'txt'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Disclaimer />
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              BIN (First 6-8 digits)
            </label>
            <input
              type="text"
              value={options.bin}
              onChange={handleBinChange}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter BIN..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Quantity (1-100)
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={options.quantity}
              onChange={handleQuantityChange}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={options.includeExpiry}
              onChange={e => setOptions(prev => ({ ...prev, includeExpiry: e.target.checked }))}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Include Expiry</span>
          </label>

          <label className="flex items-center">
            <input
              type="checkbox"
              checked={options.includeCvv}
              onChange={e => setOptions(prev => ({ ...prev, includeCvv: e.target.checked }))}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Include CVV</span>
          </label>
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-200 rounded-md flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1"
          >
            <Settings className="h-4 w-4" />
            Advanced Options
          </button>
          
          {showAdvanced && (
            <select
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value as any)}
              className="text-sm border rounded-md px-2 py-1 dark:bg-gray-700 dark:border-gray-600"
            >
              <option value="default">Default Format</option>
              <option value="plain">Plain Text</option>
              <option value="json">JSON</option>
              <option value="sql">SQL Insert</option>
            </select>
          )}
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="btn btn-primary flex items-center gap-2"
          >
            {loading ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            Generate
          </button>

          {cards.length > 0 && (
            <button
              onClick={handleExport}
              className="btn btn-secondary flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export
            </button>
          )}
        </div>
      </div>

      {cards.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <OutputArea cards={cards} format={outputFormat} />
        </div>
      )}
    </div>
  );
};