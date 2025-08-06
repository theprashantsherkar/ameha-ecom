// src/components/TopCategories.jsx
import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Kurtis', image: '/images/kurtis.jpg' },
  { name: 'Salwar Suits', image: '/images/salwar.jpg' },
  { name: 'Sarees', image: '/images/sarees.jpg' },
];

const TopCategories = () => {
  return (
    <section className="py-14 px-4 bg-gradient-to-b from-[#fffaf0] to-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Shop by Category</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-2xl font-semibold tracking-wide">{cat.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;

