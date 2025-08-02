import React from 'react';
import ProductListWithFilters from '../Components/ProductList';
import newArrivalsData from '../data/newArrivalsData'; // your sample data

const NewArrivals = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-[#4b2e1e] mb-6">New Arrivals</h2>
      <ProductListWithFilters products={newArrivalsData} />
    </div>
  );
};

export default NewArrivals;



