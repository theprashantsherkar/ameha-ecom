import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

// Custom hook for easy access
export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  // Load from localStorage or fallback
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'EN');
  const [currency, setCurrency] = useState(() => localStorage.getItem('currency') || 'INR');

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('currency', currency);
  }, [currency]);

  // Helper to get currency symbol
  const getCurrencySymbol = () => {
    switch (currency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'INR':
      default:
        return '₹';
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        getCurrencySymbol,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
