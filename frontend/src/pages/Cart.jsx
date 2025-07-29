// src/pages/Cart.jsx
import React from 'react';

const Cart = () => {
return (
    <div className="min-h-screen bg-[#f5f5dc] p-6">
    <h1 className="text-3xl font-bold text-[#6B4226] mb-4">Your Cart</h1>
    <p className="text-[#6B4226] text-lg">
        You have no items in your cart yet. Start shopping to add some!
    </p>
      {/* Later add cart items and checkout logic */}
    </div>
);
};

export default Cart;
