import React, { createContext, useContext, useState, useEffect } from 'react';

export const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Persist favourites
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToCart = (product) => {
    setCart((prev) =>
      prev.find((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const addToFavourites = (product) => {
    setFavourites((prev) =>
      prev.find((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((item) => item.id !== id));
  };

  const isInCart = (id) => cart.some((item) => item.id === id);
  const isFavourite = (id) => favourites.some((item) => item.id === id);

  return (
    <ShopContext.Provider
      value={{
        cart,
        favourites,
        addToCart,
        removeFromCart,
        addToFavourites,
        removeFromFavourites,
        isInCart,
        isFavourite,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

