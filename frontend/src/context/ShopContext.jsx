import React, { createContext, useContext, useState, useEffect } from 'react';

export const ShopContext = createContext();
export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  // Initial state from localStorage
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [favourites, setFavourites] = useState(() => JSON.parse(localStorage.getItem('favourites')) || []);
  const [address, setAddress] = useState(() => localStorage.getItem('address') || '');
  const [orderHistory, setOrderHistory] = useState(() => JSON.parse(localStorage.getItem('orderHistory')) || []);
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'EN');
  const [currency, setCurrency] = useState(() => localStorage.getItem('currency') || 'INR');

  // Save to localStorage on change
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('favourites', JSON.stringify(favourites)), [favourites]);
  useEffect(() => localStorage.setItem('address', address), [address]);
  useEffect(() => localStorage.setItem('orderHistory', JSON.stringify(orderHistory)), [orderHistory]);
  useEffect(() => localStorage.setItem('language', language), [language]);
  useEffect(() => localStorage.setItem('currency', currency), [currency]);

  // Get currency symbol
  const getCurrencySymbol = () => {
    switch (currency) {
      case 'USD': return '$';
      case 'EUR': return '€';
      case 'INR':
      default: return '₹';
    }
  };

  // Cart functions
  const addToCart = (product) => {
    setCart((prev) => (prev.find((item) => item.id === product.id) ? prev : [...prev, product]));
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.some((item) => item.id === id);

  // Favourites functions
  const addToFavourites = (product) => {
    setFavourites((prev) => (prev.find((item) => item.id === product.id) ? prev : [...prev, product]));
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((item) => item.id !== id));
  };

  const clearFavourites = () => setFavourites([]);

  const isFavourite = (id) => favourites.some((item) => item.id === id);

  // Order Management
  const placeOrder = (items, paymentMethod, deliveryAddress, totalAmount) => {
    const order = {
      id: Date.now(),
      items,
      paymentMethod,
      address: deliveryAddress,
      totalAmount,
      date: new Date().toLocaleString(),
      status: 'Placed',
    };
    setOrderHistory((prev) => [order, ...prev]);
    clearCart();
  };

  const cancelOrder = (orderId) => {
    setOrderHistory((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: 'Cancelled' } : order
      )
    );
  };

  const requestReturn = (orderId, reason) => {
    setOrderHistory((prev) =>
      prev.map((order) =>
        order.id === orderId && order.status === 'Delivered'
          ? { ...order, status: 'Return Requested', returnReason: reason }
          : order
      )
    );
  };

  const markAsDelivered = (orderId) => {
    setOrderHistory((prev) =>
      prev.map((order) =>
        order.id === orderId && order.status === 'Placed'
          ? { ...order, status: 'Delivered' }
          : order
      )
    );
  };

  return (
    <ShopContext.Provider
      value={{
        // Cart
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,

        // Favourites
        favourites,
        addToFavourites,
        removeFromFavourites,
        clearFavourites,
        isFavourite,

        // Address
        address,
        setAddress,

        // Orders
        orderHistory,
        placeOrder,
        cancelOrder,
        requestReturn,
        markAsDelivered,

        // Language & Currency
        language,
        setLanguage,
        currency,
        setCurrency,
        getCurrencySymbol,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};


