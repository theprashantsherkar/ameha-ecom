// src/pages/Cart.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(ShopContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 min-h-screen bg-[#fefaf1]">
      <h2 className="text-3xl font-bold text-[#8B4513] mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold text-[#8B4513]">{item.name}</h3>
                  <p className="text-gray-700">₹{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-8 text-right text-lg font-semibold text-[#8B4513]">
          Total: ₹{totalPrice}
        </div>
      )}
    </div>
  );
};

export default Cart;

