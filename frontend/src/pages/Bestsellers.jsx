import React from 'react';
import ProductCard from '../Components/ProductCard'; // make sure 'components' is lowercase
import bestsellersData from '../data/bestsellersData'; // ✅ correct path to data file

const Bestsellers = () => {
  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {bestsellersData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Bestsellers;
