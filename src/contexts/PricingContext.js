import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

const PricingContext = createContext();

// Default prices for each service
const defaultPrices = {
  romanticDinners: '15,000',
  weddingProposals: '25,000',
  valentinesDinners: '12,000',
  birthdayCelebrations: '18,000',
  anniversaryCelebrations: '20,000',
  dinnerDate: '10,000',
  yachtDinner: '35,000',
  coupleMassage: '8,000',
  customizedMoments: '22,000',
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

  // Load prices from Firestore and listen for real-time updates
  useEffect(() => {
    const pricesDocRef = doc(db, 'config', 'prices');
    const unsubscribe = onSnapshot(pricesDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setPrices({ ...defaultPrices, ...data });
      } else {
        setPrices(defaultPrices);
      }
    });
    return () => unsubscribe();
  }, []);

  // Update price in Firestore with error handling
  const updatePrice = async (serviceKey, newPrice) => {
    const pricesDocRef = doc(db, 'config', 'prices');
    const updated = {
      ...prices,
      [serviceKey]: newPrice,
    };
    try {
      await setDoc(pricesDocRef, updated);
  // console.log('Firestore price update successful:', updated);
      setPrices(updated); // local update for instant feedback
    } catch (error) {
      console.error('Firestore price update failed:', error);
      alert('Failed to update price: ' + error.message);
    }
  };

  // Update all prices in Firestore at once
  const updateAllPrices = async (newPrices) => {
    const pricesDocRef = doc(db, 'config', 'prices');
    try {
      await setDoc(pricesDocRef, newPrices);
  // console.log('Firestore all prices update successful:', newPrices);
      setPrices(newPrices);
    } catch (error) {
      console.error('Firestore all prices update failed:', error);
      alert('Failed to update all prices: ' + error.message);
    }
  };

  const getPrice = (serviceKey) => {
    return prices[serviceKey] || '0';
  };

  const resetPrices = async () => {
    const pricesDocRef = doc(db, 'config', 'prices');
    try {
      await setDoc(pricesDocRef, defaultPrices);
      setPrices(defaultPrices);
  // console.log('Firestore prices reset to defaults');
    } catch (error) {
      console.error('Firestore price reset failed:', error);
      alert('Failed to reset prices: ' + error.message);
    }
  };

  const value = {
    prices,
    updatePrice,
    updateAllPrices,
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