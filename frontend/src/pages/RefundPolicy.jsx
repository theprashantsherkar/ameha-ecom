import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-[#4B2E1E]">
      <h1 className="text-2xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-4">
        We want you to be satisfied with your purchase. If you're not happy, we're here to help.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Eligibility for Refund</h2>
      <p className="mb-4">
        To be eligible, items must be returned within 7 days of delivery in their original condition with tags.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Refund Process</h2>
      <p className="mb-4">
        Once your return is received and inspected, we will notify you. Refunds are processed to your original payment method within 7 business days.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Non-Refundable Items</h2>
      <p>
        Customized or final-sale items are not eligible for refund.
      </p>
    </div>
  );
};

export default RefundPolicy;

