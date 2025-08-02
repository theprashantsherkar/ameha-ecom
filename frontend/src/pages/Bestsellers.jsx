import React from 'react';
import ProductListWithFilters from '../Components/ProductList';
import bestsellersData from '../data/bestsellersData'; // your sample data

const Bestsellers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-[#4b2e1e] mb-6">Bestsellers</h2>
      <ProductListWithFilters products={bestsellersData} />
    </div>
  );
};

export default Bestsellers;

