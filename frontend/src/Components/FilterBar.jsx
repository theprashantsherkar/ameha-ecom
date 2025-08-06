// src/components/FilterBar.jsx
import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  return (
    <div className="flex gap-4 mb-4 flex-wrap items-center">
      <select
        value={filters.category}
        onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
        className="border px-3 py-1 rounded"
      >
        <option value="">All Categories</option>
        <option value="Kurti">Kurti</option>
        <option value="Salwar Suit">Salwar Suit</option>
        <option value="Co-ordsets">Co-ordsets</option>
        {/* Add more categories if needed */}
      </select>

      <select
        value={filters.price}
        onChange={(e) => setFilters((prev) => ({ ...prev, price: e.target.value }))}
        className="border px-3 py-1 rounded"
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
