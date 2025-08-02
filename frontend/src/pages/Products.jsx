import React from 'react';
import ProductCard from '../Components/ProductCard';
import productsData from '../data/productsData'; // ✅ correct path to data

const Products = () => {
  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;


