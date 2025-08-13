// src/components/AnnouncementBar.jsx
import React, { useEffect, useState } from "react";

const messages = [
  "🎉 Buy 3 Get 1 Free!",
  "💸 Get 10% Off On Your First Order",
  "🚚 Free Shipping On Orders Above ₹999",
  "🔥 New Arrivals Dropping This Week!",
];

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#8B4513] text-white text-sm md:text-base py-2 overflow-hidden z-50 relative">
      <div className="flex justify-center items-center h-full">
        <p
          key={current}
          className="animate-fadeSlide font-medium tracking-wide"
        >
          {messages[current]}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
