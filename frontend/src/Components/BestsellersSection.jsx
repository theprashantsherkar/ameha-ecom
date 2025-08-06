// src/Components/BestsellersSection.jsx
import React from "react";
import bestsellers from "../data/bestsellersData";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BestsellersSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="px-4 md:px-10 py-12 bg-[#fefaf6] relative">
      {/* View All at Top Right */}
      <div className="absolute right-6 top-6 md:right-10">
        <Link
          to="/bestsellers"
          className="text-sm md:text-base font-medium text-pink-600 hover:underline"
        >
          View All →
        </Link>
      </div>

      {/* Centered Heading */}
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
          Bestsellers
        </h2>
      </div>

      {/* Slide-in Product Cards */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex space-x-5 overflow-x-auto scrollbar-hide pb-2"
      >
        {bestsellers.map((product) => (
          <motion.div
            key={product.id}
            className="min-w-[240px] md:min-w-[270px] flex-shrink-0"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BestsellersSection;





