import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const Orders = () => {
  const { orderHistory, cancelOrder, requestReturn } = useShop();
  const [activeTab, setActiveTab] = useState('your-orders');
  const [returnReason, setReturnReason] = useState('');
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleReturnSubmit = (e) => {
    e.preventDefault();
    if (selectedOrderId && returnReason.trim()) {
      requestReturn(selectedOrderId, returnReason.trim());
      setReturnReason('');
      setSelectedOrderId(null);
      alert('Return requested successfully.');
    }
  };

  const tabs = ['your-orders', 'returns', 'cancel', 'track', 'faq'];

  return (
    <div className="bg-[#fdfbf4] min-h-screen p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#4b2e1e] mb-6 text-center">Your Orders</h2>

        {/* Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center border-b border-gray-300 pb-4">
  {['your-orders', 'returns', 'cancel', 'track', 'faq'].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`capitalize text-lg sm:text-xl font-semibold tracking-wide transition-all duration-200 ease-in-out pb-2
        ${
          activeTab === tab
            ? 'border-b-4 border-[#8B4513] text-[#8B4513]'
            : 'text-gray-600 hover:text-[#8B4513] hover:scale-105'
        }`}
    >
      {tab.replace('-', ' ')}
    </button>
  ))}
</div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'your-orders' && (
            <div>
              {orderHistory.length === 0 ? (
                <p className="text-center text-gray-500">You haven't placed any orders yet.</p>
              ) : (
                orderHistory.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded shadow-md p-5 border border-gray-200"
                  >
                    <div className="flex justify-between flex-col md:flex-row">
                      <div className="space-y-1">
                        <p><span className="font-semibold">Order ID:</span> {order.id}</p>
                        <p><span className="font-semibold">Placed on:</span> {order.date}</p>
                        <p><span className="font-semibold">Status:</span> <span className={`text-${order.status === 'Cancelled' ? 'red' : order.status === 'Delivered' ? 'green' : 'blue'}-600`}>{order.status}</span></p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'cancel' && (
            <div>
              {orderHistory.filter((o) => o.status === 'Placed').length === 0 ? (
                <p className="text-center text-gray-500">No cancellable orders available.</p>
              ) : (
                orderHistory
                  .filter((order) => order.status === 'Placed')
                  .map((order) => (
                    <div
                      key={order.id}
                      className="bg-white rounded shadow-md p-5 border border-gray-200 flex justify-between items-center"
                    >
                      <div>
                        <p className="font-semibold">Order ID: {order.id}</p>
                        <p className="text-sm text-gray-600">Placed on: {order.date}</p>
                      </div>
                      <button
                        onClick={() => {
                          cancelOrder(order.id);
                          alert('Order cancelled.');
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                      >
                        Cancel Order
                      </button>
                    </div>
                  ))
              )}
            </div>
          )}

          {activeTab === 'returns' && (
            <div>
              {orderHistory.filter((o) => o.status === 'Delivered').length === 0 ? (
                <p className="text-center text-gray-500">
                  No returnable orders. Returns are available only after delivery.
                </p>
              ) : (
                orderHistory
                  .filter((order) => order.status === 'Delivered')
                  .map((order) => (
                    <div key={order.id} className="bg-white rounded shadow-md p-5 border">
                      <p className="font-semibold mb-2">Order ID: {order.id}</p>
                      <form
                        onSubmit={(e) => {
                          setSelectedOrderId(order.id);
                          handleReturnSubmit(e);
                        }}
                        className="flex flex-col md:flex-row gap-3"
                      >
                        <input
                          type="text"
                          placeholder="Reason for return"
                          className="border p-2 rounded w-full md:w-2/3"
                          value={selectedOrderId === order.id ? returnReason : ''}
                          onChange={(e) => {
                            setSelectedOrderId(order.id);
                            setReturnReason(e.target.value);
                          }}
                          required
                        />
                        <button
                          type="submit"
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
                        >
                          Request Return
                        </button>
                      </form>
                    </div>
                  ))
              )}
            </div>
          )}

          {activeTab === 'track' && (
            <div>
              {orderHistory.length === 0 ? (
                <p className="text-center text-gray-500">No orders to track.</p>
              ) : (
                orderHistory.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded shadow-md p-5 border border-gray-200"
                  >
                    <p className="font-semibold">Order ID: {order.id}</p>
                    <p>Status: <span className="text-blue-600">{order.status}</span></p>
                    <p className="text-sm text-gray-600">
                      Expected delivery: 5–7 working days from order date.
                    </p>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="bg-white rounded shadow-md p-5 border text-sm text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold text-[#4b2e1e]">FAQs & Help</h3>
              <p><strong>How do I cancel my order?</strong><br />Go to the "Cancel" tab and cancel orders within the allowed window.</p>
              <p><strong>How to return an item?</strong><br />Go to the "Returns" tab after your order is delivered and submit a return request with a reason.</p>
              <p><strong>Can I track my order?</strong><br />Yes! Use the "Track" tab to view status and expected delivery.</p>
              <p><strong>Need more help?</strong><br />Contact support@example.com or call 1800-123-4567.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;



