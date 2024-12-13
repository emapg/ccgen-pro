export interface CardNetwork {
  name: string;
  pattern: RegExp;
  lengths: number[];
  prefix: string[];
}

export interface GeneratorOptions {
  bin: string;
  quantity: number;
  network: string;
  includeExpiry: boolean;
  includeCvv: boolean;
}

export interface GeneratedCard {
  number: string;
  expiry: string;
  cvv: string;
  network: string;
}