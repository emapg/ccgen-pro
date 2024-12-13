import { CardNetwork } from '../types';

export const cardNetworks: Record<string, CardNetwork> = {
  visa: {
    name: 'Visa',
    pattern: /^4/,
    lengths: [16],
    prefix: ['4'],
  },
  mastercard: {
    name: 'Mastercard',
    pattern: /^5[1-5]/,
    lengths: [16],
    prefix: ['51', '52', '53', '54', '55'],
  },
  amex: {
    name: 'American Express',
    pattern: /^3[47]/,
    lengths: [15],
    prefix: ['34', '37'],
  },
  discover: {
    name: 'Discover',
    pattern: /^6(?:011|5)/,
    lengths: [16],
    prefix: ['6011', '65'],
  },
};

export const luhnCheck = (num: string): boolean => {
  let sum = 0;
  let isEven = false;
  
  for (let i = num.length - 1; i >= 0; i--) {
    let digit = parseInt(num[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

export const detectCardNetwork = (bin: string): string | null => {
  for (const [network, details] of Object.entries(cardNetworks)) {
    if (details.pattern.test(bin)) {
      return network;
    }
  }
  return null;
};