// src/components/TopCategories.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  { name: "Kurtis", image: "/images/kurtis.jpg" },
  { name: "Salwar Suits", image: "/images/salwar.jpg" },
  { name: "Co-ord Sets", image: "/images/co-ordsets.jpg" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const TopCategories = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#fffaf0] to-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Shop by Category
        </h2>
        <p className="text-lg text-gray-600">
          Discover your style with handpicked collections
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-2">
        {categories.map((cat, index) => (
          <Link
            to={`/products?category=${encodeURIComponent(cat.name)}`}
            key={index}
            className="block"
          >
            <motion.div
              className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-xl bg-white"
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center transition-all group-hover:bg-opacity-60">
                <h3 className="text-white text-3xl font-bold drop-shadow-lg group-hover:scale-105 transition-transform">
                  {cat.name}
                </h3>
              </div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-pink-400 rounded-3xl transition-all"></div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;


