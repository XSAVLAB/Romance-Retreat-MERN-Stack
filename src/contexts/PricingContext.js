import React, { createContext, useContext, useState, useEffect } from 'react';

const PricingContext = createContext();

// Default prices for each service - moved outside component to avoid dependency issues
const defaultPrices = {
  'romanticDinners': '15,000',
  'weddingProposals': '25,000',
  'valentinesDinners': '12,000',
  'birthdayCelebrations': '18,000',
  'anniversaryCelebrations': '20,000',
  'dinnerDate': '10,000',
  'yachtDinner': '35,000',
  'coupleMassage': '8,000',
  'customizedMoments': '22,000'
};

export const usePricing = () => {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error('usePricing must be used within a PricingProvider');
  }
  return context;
};

export const PricingProvider = ({ children }) => {
  const [prices, setPrices] = useState(defaultPrices);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load prices from localStorage on component mount
  useEffect(() => {
    const savedPrices = localStorage.getItem('romanceRetreatPrices');
    console.log('Loading prices from localStorage:', savedPrices);
    if (savedPrices) {
      try {
        const parsedPrices = JSON.parse(savedPrices);
        console.log('Parsed prices:', parsedPrices);
        setPrices({ ...defaultPrices, ...parsedPrices });
      } catch (error) {
        console.error('Error parsing saved prices:', error);
        setPrices(defaultPrices);
      }
    } else {
      console.log('No saved prices found, using defaults');
    }
    setIsInitialized(true);
  }, []);

  // Save prices to localStorage whenever prices change (but not on initial load)
  useEffect(() => {
    if (isInitialized) {
      console.log('Saving prices to localStorage:', prices);
      localStorage.setItem('romanceRetreatPrices', JSON.stringify(prices));
    }
  }, [prices, isInitialized]);

  const updatePrice = (serviceKey, newPrice) => {
    console.log(`PricingContext: Updating ${serviceKey} to ${newPrice}`);
    setPrices(prev => {
      const updated = {
        ...prev,
        [serviceKey]: newPrice
      };
      console.log('Updated prices object:', updated);
      return updated;
    });
  };

  const getPrice = (serviceKey) => {
    return prices[serviceKey] || '0';
  };

  const resetPrices = () => {
    setPrices(defaultPrices);
  };

  const value = {
    prices,
    updatePrice,
    getPrice,
    resetPrices,
    serviceKeys: Object.keys(defaultPrices)
  };

  return (
    <PricingContext.Provider value={value}>
      {children}
    </PricingContext.Provider>
  );
};