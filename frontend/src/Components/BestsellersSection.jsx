// src/Components/BestsellersSection.jsx
import React, { useEffect, useRef, useState } from "react";
import bestsellers from "../data/bestsellersData";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/scrollbarHide.css";

const BestsellersSection = () => {
  const containerRef = useRef(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  // Duplicate items for seamless infinite loop
  const itemsToShow = 5;
  const duplicatedProducts = [...bestsellers, ...bestsellers.slice(0, itemsToShow)];

  useEffect(() => {
    let scrollTimer;
    let interval;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (!isUserScrolling && containerRef.current) {
          containerRef.current.scrollBy({
            left: containerRef.current.offsetWidth / itemsToShow,
            behavior: "smooth",
          });

          // Reset to start for infinite effect
          if (
            containerRef.current.scrollLeft >=
            (bestsellers.length) * (containerRef.current.offsetWidth / itemsToShow)
          ) {
            setTimeout(() => {
              containerRef.current.scrollLeft = 0;
            }, 100);
          }
        }
      }, 1000);
    };

    startAutoScroll();

    // Detect user scroll
    const handleUserScroll = () => {
      setIsUserScrolling(true);
      clearInterval(interval);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsUserScrolling(false);
        startAutoScroll();
      }, 3000);
    };

    const refEl = containerRef.current;
    refEl.addEventListener("scroll", handleUserScroll, { passive: true });

    return () => {
      clearInterval(interval);
      clearTimeout(scrollTimer);
      refEl.removeEventListener("scroll", handleUserScroll);
    };
  }, [isUserScrolling]);

  return (
    <section className="px-4 md:px-10 py-12 bg-[#fefaf6] relative">
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

      {/* Product Carousel */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{
          gap: "20px",
          scrollBehavior: "smooth",
        }}
      >
        {duplicatedProducts.map((product, index) => (
          <motion.div
            key={index}
            className="snap-start flex-shrink-0"
            style={{
              minWidth: `calc((100% - ${4 * 20}px) / ${itemsToShow})`, // 5 cards with gap
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestsellersSection;













