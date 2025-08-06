// src/pages/Products.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../Components/ProductList";
import products from "../data/productsData";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const query = useQuery();
  const selectedCategory = query.get("category");

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : products;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#4b2e1e] mb-4">
        {selectedCategory ? `${selectedCategory} Collection` : "All Products"}
      </h2>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p className="text-gray-600 text-lg">No products found in this category.</p>
      )}
    </div>
  );
};

export default Products;




