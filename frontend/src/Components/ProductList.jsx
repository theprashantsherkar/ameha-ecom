// src/components/ProductList.jsx
import React, { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";
import FilterBar from "./FilterBar";

const ProductList = ({ products }) => {
  const [filters, setFilters] = useState({ category: "", price: "" });
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(4); // Default for desktop

  useEffect(() => {
    setAnimate(true);

    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      // Set items per row based on breakpoints
      if (width < 640) setItemsPerRow(1); // Mobile
      else if (width < 768) setItemsPerRow(2); // Small tablets
      else if (width < 1024) setItemsPerRow(3); // Tablets
      else setItemsPerRow(4); // Desktop
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, [products]);

  const filteredProducts = products
    .filter((p) => (filters.category ? p.category === filters.category : true))
    .sort((a, b) =>
      filters.price === "low"
        ? a.price - b.price
        : filters.price === "high"
        ? b.price - a.price
        : 0
    );

  return (
    <div>
      <FilterBar filters={filters} setFilters={setFilters} />

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product, index) => {
            const rowIndex = Math.floor(index / itemsPerRow);

            // Uniform animation for all cards
            const initialClass = isMobile
              ? "opacity-0 translate-y-8 scale-95"
              : "opacity-0 translate-y-8 scale-95";

            return (
              <div
                key={product.id}
                className={`transform transition-all duration-[800ms] ease-out
                  ${animate ? "opacity-100 translate-y-0 scale-100" : initialClass}
                `}
                style={{
                  transitionDelay: `${rowIndex * 300}ms`, // Row-by-row stagger
                }}
              >
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;



