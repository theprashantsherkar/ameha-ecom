import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000); // faster cycle
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-[1800px] overflow-hidden">
      {/* Slideshow Images */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-100 ease-linear ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } animate-zoom`}
        />
      ))}

      {/* Text content */}
      <div className="absolute bottom-10 left-10 text-left z-10 bg-black/40 p-6 rounded-lg">
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white font-bold mb-4">
          Where Elegance Meets Tradition
        </h2>
        <Link
          to="/products"
          className="px-4 py-2 bg-[#6B4226] text-white text-sm hover:bg-[#8B5E3C] transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Zoom animation style */}
      <style>
        {`
          @keyframes zoomEffect {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-zoom {
            animation: zoomEffect 2s linear infinite alternate;
          }
        `}
      </style>
    </section>
  );
}









