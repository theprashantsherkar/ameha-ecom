import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
                if (existing) return prev; // avoid duplicates
                return [...prev, product];
            }
        );
    };
    const removeFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
        };
        return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>                {children}
        </CartContext.Provider>
        );
    };
export const useCart = () => useContext(CartContext);
