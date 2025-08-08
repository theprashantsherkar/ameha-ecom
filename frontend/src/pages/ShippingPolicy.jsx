import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-[#4B2E1E]">
      <h1 className="text-2xl font-bold mb-6">Shipping Policy</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Processing Time</h2>
      <p className="mb-4">
        Orders are processed within 1-3 business days. You will receive tracking details once shipped.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Shipping Charges</h2>
      <p className="mb-4">
        We offer free shipping on orders above ₹4999. Standard shipping charges apply for orders below that threshold.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Estimated Delivery</h2>
      <p className="mb-4">
        Delivery typically takes 3-7 business days based on your location.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">International Shipping</h2>
      <p>
        Currently, we only ship within India. International orders are not supported at this time.
      </p>
    </div>
  );
};

export default ShippingPolicy;
