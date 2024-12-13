import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Generator } from './components/Generator';
import { Features } from './components/Features';
import { HowToUse } from './components/HowToUse';
import { About } from './components/About';
import { SEO } from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navigation />
        
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Generator />
            <Features />
            <HowToUse />
            <About />
          </div>
        </main>

        <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} CCGen Pro. For testing purposes only.
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;