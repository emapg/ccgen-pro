import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO: React.FC = () => {
  return (
    <Helmet>
      <title>CCGen Pro - Professional Credit Card Number Generator</title>
      <meta name="description" content="Generate valid test credit card numbers for development and testing purposes. Supports multiple card networks, bulk generation, and various export formats." />
      <meta name="keywords" content="credit card generator, test credit cards, card number generator, development tools, testing tools" />
      
      {/* Open Graph / Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="CCGen Pro - Credit Card Generator" />
      <meta property="og:description" content="Professional credit card number generator for developers and testers." />
      <meta property="og:url" content="https://ccgen-pro.netlify.app" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="CCGen Pro" />
      <link rel="canonical" href="https://ccgen-pro.netlify.app" />
    </Helmet>
  );
};