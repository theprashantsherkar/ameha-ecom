// src/pages/NewArrivals.jsx
import React from 'react';

const newArrivals = [
  {
    id: 1,
    name: 'Pastel Anarkali Dress',
    image: '/images/anarkali1.jpg',
    price: '₹1,899',
  },
  {
    id: 2,
    name: 'Festive Lehenga Set',
    image: '/images/lehenga2.jpg',
    price: '₹2,999',
  },
  {
    id: 3,
    name: 'Indigo Handblock Kurta',
    image: '/images/kurta3.jpg',
    price: '₹1,349',
  },
];

const NewArrivals = () => {
  return (
    <div className="py-10 px-6 bg-[#fffaf4] min-h-screen">
      <h2 className="text-3xl font-semibold text-center text-[#8B4513] mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newArrivals.map((item) => (
          <div key={item.id} className="bg-white shadow rounded overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-[#4b2e1e]">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price}</p>
              <button className="mt-2 px-4 py-1 bg-[#8B4513] text-white rounded hover:bg-[#a5673e] transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
