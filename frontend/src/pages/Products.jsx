// src/pages/Products.jsx
import React from 'react';
import ProductList from '../Components/ProductList';
import products from '../data/productsData'; // or wherever your data is

const Products = () => (
  <div className="p-6 max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold text-[#4b2e1e] mb-4">All Products</h2>
    <ProductList products={products} />
  </div>
);

export default Products;



