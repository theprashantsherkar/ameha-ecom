import React from 'react';
import ProductCard from '../Components/ProductCard';
import newArrivalsData from '../data/newArrivalsData'; // ✅ Correct import path

const NewArrivals = () => {
  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {newArrivalsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default NewArrivals;


