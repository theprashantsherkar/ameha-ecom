import React, { createContext, useContext, useState, useEffect } from 'react';

export const ShopContext = createContext();
export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [favourites, setFavourites] = useState(() => JSON.parse(localStorage.getItem('favourites')) || []);
  const [address, setAddress] = useState(() => localStorage.getItem('address') || '');
  const [orderHistory, setOrderHistory] = useState(() => JSON.parse(localStorage.getItem('orderHistory')) || []);

  // Sync with localStorage
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('favourites', JSON.stringify(favourites)), [favourites]);
  useEffect(() => localStorage.setItem('address', address), [address]);
  useEffect(() => localStorage.setItem('orderHistory', JSON.stringify(orderHistory)), [orderHistory]);

  // Cart Functions
  const addToCart = (product) => {
    setCart((prev) => (prev.find((item) => item.id === product.id) ? prev : [...prev, product]));
  };
  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  // Favourites Functions
  const addToFavourites = (product) => {
    setFavourites((prev) => (prev.find((item) => item.id === product.id) ? prev : [...prev, product]));
  };
  const removeFromFavourites = (id) => setFavourites((prev) => prev.filter((item) => item.id !== id));
  const clearFavourites = () => setFavourites([]);
  const isInCart = (id) => cart.some((item) => item.id === id);
  const isFavourite = (id) => favourites.some((item) => item.id === id);

  // Place Order
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

  // Cancel Order (can be done anytime for now)
  const cancelOrder = (orderId) => {
    setOrderHistory((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: 'Cancelled' } : order
      )
    );
  };

  // Request Return (only if Delivered)
  const requestReturn = (orderId, reason) => {
    setOrderHistory((prev) =>
      prev.map((order) =>
        order.id === orderId && order.status === 'Delivered'
          ? { ...order, status: 'Return Requested', returnReason: reason }
          : order
      )
    );
  };

  // Optional: Mock delivery function to mark an order as delivered (for testing return button)
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
        cart,
        favourites,
        addToCart,
        removeFromCart,
        clearCart,
        addToFavourites,
        removeFromFavourites,
        clearFavourites,
        isInCart,
        isFavourite,
        address,
        setAddress,
        placeOrder,
        orderHistory,
        cancelOrder,
        requestReturn,
        markAsDelivered, // optional, for testing
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

