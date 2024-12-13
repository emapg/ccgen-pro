import { GeneratorOptions, GeneratedCard } from '../types';
import { cardNetworks, luhnCheck } from './cardValidation';

const generateRandomDigits = (length: number): string => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
};

const generateExpiry = (): string => {
  const now = new Date();
  const month = Math.floor(Math.random() * 12) + 1;
  const year = now.getFullYear() + Math.floor(Math.random() * 5) + 1;
  return `${month.toString().padStart(2, '0')}/${year.toString().slice(-2)}`;
};

const generateCVV = (isAmex: boolean): string => {
  return generateRandomDigits(isAmex ? 4 : 3);
};

export const generateCard = (options: GeneratorOptions): GeneratedCard => {
  const { bin, network } = options;
  const networkDetails = cardNetworks[network];
  const length = networkDetails.lengths[0];
  
  let cardNumber: string;
  do {
    const remainingLength = length - bin.length;
    cardNumber = bin + generateRandomDigits(remainingLength);
  } while (!luhnCheck(cardNumber));

  return {
    number: cardNumber,
    expiry: options.includeExpiry ? generateExpiry() : '',
    cvv: options.includeCvv ? generateCVV(network === 'amex') : '',
    network,
  };
};