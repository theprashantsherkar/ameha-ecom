import React from 'react';

const ExchangePolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-[#4B2E1E]">
      <h1 className="text-2xl font-bold mb-6">Return & Exchange Policy</h1>

      <p className="mb-4">
        We accept return or exchange requests within 7 days of delivery for unused items with tags intact.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Conditions</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Item must be unused and in original condition.</li>
        <li>Tags must be attached.</li>
        <li>Exchange requests are subject to stock availability.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How to Request</h2>
      <p className="mb-4">
        Visit the <strong>My Orders</strong> page, select the item, and click on <strong>Return / Exchange</strong>. You may be asked for a reason.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Refund Timeline</h2>
      <p>
        Refunds (if applicable) will be processed within 7-10 business days after approval.
      </p>
    </div>
  );
};

export default ExchangePolicy;

