import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[80vh] bg-top bg-cover"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Overlay for slight transparency */}
      <div className="absolute inset-100 bg-[#f5f5dc]/60 flex items-center justify-center"></div>

      {/* Text content */}
      <div className="absolute bottom-10 left-10 text-left z-10">
        <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[white] font-bold mb-4">
          Elegance Meets Tradition
        </h2>
        <button className="px-6 py-2 bg-[#6B4226] text-white rounded-full text-sm hover:bg-[#8B5E3C] transition">
          Shop Now
        </button>
        <Link
        to="/products"
        className="mt-4 inline-block bg-[#6B4226] text-white py-2 px-4 rounded-md text-sm"
        >
        Shop Now
        </Link>

      </div>
    </section>
  );
}
