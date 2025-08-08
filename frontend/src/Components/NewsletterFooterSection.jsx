import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { GlobeAltIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';

const NewsletterFooterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="bg-[#f5f0eb] text-black px-6 md:px-16 pt-10 pb-4">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-300 pb-10">
        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-sm uppercase">Newsletter</h3>
          <div className="relative max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="px-4 py-3 w-full sm:w-[320px] border-b border-gray-400 focus:outline-none bg-transparent"
            />
            <button
              onClick={handleSubscribe}
              className="absolute right-2 top-1/2 -translate-y-1/2 transition-transform duration-300 hover:translate-x-1"
            >
              <IoIosArrowRoundForward className="w-6 h-6" />
            </button>
          </div>
          {subscribed && (
            <p className="text-green-600 text-sm pt-2">✔️ Subscribed to AmehaFashion</p>
          )}
          <div className="flex gap-4 pt-2">
            <FaFacebookF className="cursor-pointer hover:text-gray-700" />
            <FaInstagram className="cursor-pointer hover:text-gray-700" />
          </div>
        </div>

        {/* Main menu */}
        <div>
          <h3 className="font-bold text-sm uppercase mb-4">Main menu</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Shop</Link></li>
            <li><Link to="/bestsellers" className="hover:underline">Best Sellers</Link></li>
            <li><Link to="/orders" className="hover:underline">Request a Return / Exchange</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-sm uppercase mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/refund-policy" className="hover:underline">Refund Policy</Link></li>
            <li><Link to="/shipping-policy" className="hover:underline">Shipping Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/exchange-policy" className="hover:underline">Return or Exchange Request Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row items-center justify-between text-xs pt-4">
        {/* Left - Copyright */}
        <div className="w-full md:w-1/3 text-left mb-2 md:mb-0">
          <p>© 2025 AmehaFashion.</p>
        </div>

        {/* Center - EN & INR */}
        <div className="w-full md:w-1/3 flex justify-center mb-2 md:mb-0 gap-4">
          <div className="flex items-center gap-1 border px-2 py-1 text-sm rounded">
            <GlobeAltIcon className="w-4 h-4" />
            <span>EN</span>
          </div>
          <div className="flex items-center gap-1 border px-2 py-1 text-sm rounded">
            <img
              src="https://flagcdn.com/w40/in.png"
              alt="IN Flag"
              className="w-4 h-4 object-cover"
            />
            <CurrencyRupeeIcon className="w-4 h-4" />
            <span>INR</span>
          </div>
        </div>

        {/* Right - Empty or future content */}
        <div className="w-full md:w-1/3"></div>
      </div>
    </div>
  );
};

export default NewsletterFooterSection;




