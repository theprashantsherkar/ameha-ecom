// src/components/ProductList.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';

const ProductList = ({ products }) => {
  const [filters, setFilters] = useState({ category: '', price: '' });

  const filteredProducts = products
    .filter((p) => (filters.category ? p.category === filters.category : true))
    .sort((a, b) =>
      filters.price === 'low' ? a.price - b.price :
      filters.price === 'high' ? b.price - a.price : 0
    );

  return (
    <div>
      <FilterBar filters={filters} setFilters={setFilters} />

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
