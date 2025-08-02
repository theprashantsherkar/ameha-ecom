import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, clearFavourites } = useContext(ShopContext);

  if (!cart || cart.length === 0) {
    return (
      <div className="p-8 text-center text-gray-600">
        <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
        <Link to="/products" className="text-[#8B4513] hover:underline">
          Browse Products
        </Link>
      </div>
    );
  }

  const handleClearAll = () => {
    clearCart();
    clearFavourites();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#4b2e1e]">Your Cart</h2>
        <button
          onClick={handleClearAll}
          className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
        >
          Remove All
        </button>
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">₹{item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;




