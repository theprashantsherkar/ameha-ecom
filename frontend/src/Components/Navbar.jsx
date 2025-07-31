import React, { useState, useRef, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaBars, FaUser } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const { user, logout } = useAuth();
  const { cart, favourites } = useContext(ShopContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login'); // Ensures navigation happens after logout
  };

  return (
    <nav className="relative bg-[#f5f5dc] border-b shadow-md flex items-center justify-between px-6 py-5">
      {/* Left: Dropdown menu button */}
      <div className="relative">
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <FaBars />
        </button>

        {/* Dropdown Menu */}
        <div
          ref={menuRef}
          className={`absolute top-14 left-0 bg-white border rounded-md shadow-lg z-50 transform origin-top transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col p-4 gap-2 text-sm">
            <Link to="/" className="hover:text-[#8B4513]">Home</Link>
            <Link to="/products" className="hover:text-[#8B4513]">Shop</Link>
            <Link to="/bestsellers" className="hover:text-[#8B4513]">Bestsellers</Link>
            <Link to="/newarrivals" className="hover:text-[#8B4513]">New Arrivals</Link>
            <Link to="/contact" className="hover:text-[#8B4513]">Contact</Link>
            <Link to="/returnexchange" className="hover:text-[#8B4513]">Return & Exchange</Link>
            <Link to="/orders" className="hover:text-[#8B4513]">Your Orders</Link>
          </ul>
        </div>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-3xl md:text-4xl font-serif text-[#8B4513]">AMEHA</h1>
        <p className="text-sm text-[#8B4513] -mt-1">by Khoobsurat</p>
      </div>

      {/* Right: Search, Favourites, Cart, Profile/Login */}
      <div className="flex items-center gap-4 relative">
        {/* Search */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-400 px-3 py-1 rounded-md text-sm transition-all duration-300 focus:w-52 w-32 focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
          />
        </div>

        {/* Favourites with badge */}
        <Link to="/favourites" className="relative">
          <FaHeart className="text-xl hover:text-[#8B4513]" />
          {favourites.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-[10px] w-5 h-5 flex items-center justify-center">
              {favourites.length}
            </span>
          )}
        </Link>

        {/* Cart with badge */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-xl hover:text-[#8B4513]" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-[10px] w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>

        {/* Profile or Login */}
        <div className="relative" ref={profileRef}>
          <button onClick={() => setProfileOpen(prev => !prev)}>
            <FaUser className="text-xl hover:text-[#8B4513]" />
          </button>

          <div
            className={`absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-50 transform origin-top transition-all duration-300 ease-in-out ${
              profileOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
            }`}
          >
            {user ? (
              <ul className="flex flex-col p-2 text-sm">
                <Link to="/profile" className="hover:bg-gray-100 p-2 rounded">Profile</Link>
                <Link to="/orders" className="hover:bg-gray-100 p-2 rounded">Your Orders</Link>
                <button
                  onClick={handleLogout}
                  className="text-left hover:bg-gray-100 p-2 rounded text-red-600"
                >
                  Logout
                </button>
              </ul>
            ) : (
              <ul className="flex flex-col p-2 text-sm">
                <Link to="/login" className="hover:bg-gray-100 p-2 rounded">Login</Link>
                <Link to="/signup" className="hover:bg-gray-100 p-2 rounded">Sign Up</Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






