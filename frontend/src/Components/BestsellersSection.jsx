// src/Components/BestsellersSection.jsx
import React, { useEffect, useRef, useState } from "react";
import bestsellers from "../data/bestsellersData";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/scrollbarHide.css"; // We'll add custom scrollbar-hide CSS here

const BestsellersSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [startIndex, setStartIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef(null);

  const visibleCards = 5;
  const totalProducts = bestsellers.length;

  // Auto slide logic
  useEffect(() => {
    if (!inView || paused) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalProducts);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, [inView, paused, totalProducts]);

  // Calculate products to show (looping)
  const productsToShow = Array.from({ length: visibleCards }, (_, i) =>
    bestsellers[(startIndex + i) % totalProducts]
  );

  return (
    <section
      ref={ref}
      className="px-4 md:px-10 py-12 bg-[#fefaf6] relative"
    >
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

      {/* Scrollable & Auto-rotating Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence initial={false}>
          {productsToShow.map((product) => (
            <motion.div
              key={product.id}
              className="flex-shrink-0"
              style={{
                minWidth: "calc(100% / 5 - 1rem)", // 5 cards visible with gap
                scrollSnapAlign: "start",
              }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BestsellersSection;











