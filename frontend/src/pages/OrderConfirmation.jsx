import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Order Placed Successfully!</h2>
      <p className="mb-6">A confirmation email has been sent. Thank you for shopping with us.</p>
      <button
        className="px-4 py-2 bg-[#8B4513] text-white rounded hover:bg-[#6b3410]"
        onClick={() => navigate('/products')}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderConfirmation;


