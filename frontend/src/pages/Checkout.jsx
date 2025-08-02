import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const {
    cart,
    clearCart,
    address,
    setAddress,
    placeOrder,
  } = useShop();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [newAddress, setNewAddress] = useState('');
  const [useSaved, setUseSaved] = useState(!!address);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  const handlePayment = () => {
    const finalAddress = useSaved ? address : newAddress;
    if (!finalAddress) {
      alert('Please enter or select an address.');
      return;
    }

    if (paymentMethod === 'cod') {
      placeOrder(cart, paymentMethod, finalAddress, total);
      alert('Order placed with Cash on Delivery.');
      navigate('/order-confirmation');
    } else {
      const options = {
        key: 'rzp_test_YourTestKeyHere', // replace with your test key
        amount: total * 100,
        currency: 'INR',
        name: 'Your Store',
        description: 'Order Payment',
        handler: function () {
          placeOrder(cart, paymentMethod, finalAddress, total);
          navigate('/order-confirmation');
        },
        prefill: {
          name: 'Test User',
          email: 'test@example.com',
        },
        theme: {
          color: '#8B4513',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    }

    setAddress(finalAddress);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-[#f5f5f0] rounded-md space-y-6">
      <h2 className="text-2xl font-bold text-[#4b2e1e]">Checkout</h2>

      <div className="space-y-2">
        <label className="font-semibold">Delivery Address</label>
        {address && (
          <div>
            <input
              type="radio"
              name="address"
              checked={useSaved}
              onChange={() => setUseSaved(true)}
            />{' '}
            Use Saved Address: <span className="text-sm text-gray-700">{address}</span>
          </div>
        )}
        <div>
          <input
            type="radio"
            name="address"
            checked={!useSaved}
            onChange={() => setUseSaved(false)}
          />{' '}
          Enter New Address:
        </div>
        {!useSaved && (
          <textarea
            className="w-full border p-2 rounded"
            rows="3"
            placeholder="Enter full address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        )}
      </div>

      <div className="space-y-4 border-t pt-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between">
            <p>{item.name}</p>
            <p>₹{item.price}</p>
          </div>
        ))}
        <div className="flex justify-between text-sm text-gray-600">
          <p>Subtotal</p>
          <p>₹{subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <p>CGST (9%)</p>
          <p>₹{(gst / 2).toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <p>SGST (9%)</p>
          <p>₹{(gst / 2).toFixed(2)}</p>
        </div>
        <div className="flex justify-between font-bold text-[#4b2e1e]">
          <p>Total</p>
          <p>₹{total.toFixed(2)}</p>
        </div>
      </div>

      <div className="space-y-2">
        <label className="font-semibold">Payment Method</label>
        <select
          className="w-full border rounded p-2"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="razorpay">Pay with Razorpay</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </div>

      <button
        onClick={handlePayment}
        className="w-full py-2 bg-[#8B4513] text-white rounded hover:bg-[#6b3410]"
      >
        {paymentMethod === 'cod' ? 'Place Order' : 'Pay Now'}
      </button>
    </div>
  );
};

export default Checkout;






