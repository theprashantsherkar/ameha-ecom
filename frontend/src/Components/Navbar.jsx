import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  const lastScrollY = useRef(0);
  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const { user, logout } = useAuth();
  const { cart, favourites } = useContext(ShopContext);
  const navigate = useNavigate();

  // Detect scroll direction to hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDirection(currentY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-transform duration-500 bg-[#fefae0] shadow-md px-6 py-4 ${
        scrollDirection === 'down' ? '-top-20' : 'top-0'
      } hover:top-0`}
    >
      <div className="flex items-center justify-between relative z-50">
        {/* Hamburger / Close Icon */}
        <button
          className="group relative w-5 h-4 flex flex-col justify-between items-center z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block h-[2px] w-full bg-[#8B4513] rounded transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          ></span>
          <span
            className={`block h-[2px] w-full bg-[#8B4513] rounded transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-[2px] w-full bg-[#8B4513] rounded transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          ></span>
        </button>

        {/* Brand Logo */}
        <Link
          to="/"
          className="text-3xl font-serif absolute left-1/2 transform -translate-x-1/2 text-[#8B4513]"
        >
          AMEHA
        </Link>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Link to="/favourites" className="relative">
            <FaHeart className="text-xl hover:text-[#8B4513]" />
            {favourites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-[10px] w-5 h-5 flex items-center justify-center">
                {favourites.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl hover:text-[#8B4513]" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-[10px] w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          <div className="relative" ref={profileRef}>
            <button onClick={() => setProfileOpen((prev) => !prev)}>
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
      </div>

      {/* Fullscreen Dropdown Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-screen bg-[#fefae0] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          menuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {[
          { to: '/', label: 'Home' },
          { to: '/products', label: 'Shop' },
          { to: '/bestsellers', label: 'Bestsellers' },
          { to: '/newarrivals', label: 'New Arrivals' },
          { to: '/contact', label: 'Contact' },
          { to: '/orders', label: 'Orders' },
        ].map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            onClick={() => setMenuOpen(false)}
            className="text-4xl md:text-5xl font-semibold text-[#8B4513] mb-6 hover:scale-110 transform transition-all duration-300 tracking-wide"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;











