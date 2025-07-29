import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    const handler = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative">
      {/* Left: Dropdown */}
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          <FaBars />
        </button>

        <div
          className={`absolute top-12 left-0 bg-white border rounded-md shadow-lg z-50 transition-all duration-300 ease-in-out origin-top transform ${
            menuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col p-4 gap-2 min-w-[180px]">
            <Link to="/" className="hover:text-brown-600">Home</Link>
            <Link to="/products" className="hover:text-brown-600">Shop</Link>
            <Link to="/bestsellers" className="hover:text-brown-600">Bestsellers</Link>
            <Link to="/contact" className="hover:text-brown-600">Contact</Link>
            <Link to="/returnexchange" className="hover:text-brown-600">Return & Exchange</Link>
            <Link to="/orders" className="hover:text-brown-600">Your Orders</Link>
          </ul>
        </div>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-4xl font-serif text-[#8B4513]">AMEHA</h1>
        <p className="text-sm text-[#8B4513]">by Khoobsurat</p>
      </div>

      {/* Right: Search, Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border px-6 py-2 pr-10 rounded-md w-72"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <Link to="/favourites" className="text-xl hover:text-brown-600">
          <FaHeart />
        </Link>
        <Link to="/cart" className="text-xl hover:text-brown-600">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;



