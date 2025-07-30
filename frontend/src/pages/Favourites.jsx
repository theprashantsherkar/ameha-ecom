// src/pages/Favourites.jsx
import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { FaHeart } from 'react-icons/fa';

const Favourites = () => {
const { favourites, removeFromFavourites, addToCart, isInCart } = useContext(ShopContext);
    return (
        <div className="p-6 min-h-screen bg-[#fefaf1]">
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">Your Favourites</h2>
            {favourites.length === 0 ? (
                <p className="text-gray-600">You have no favourites yet.</p>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {favourites.map((item) => (
            <div
            key={item.id}
            className="bg-white shadow rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
            <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-[#8B4513]">{item.name}</h3>
            <p className="text-sm text-gray-700">₹{item.price}</p>
            <div className="flex justify-between items-center mt-2">
                <button
                    onClick={() => addToCart(item)}
                    className={`text-sm px-3 py-1 rounded ${
                    isInCart(item.id)
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-[#8B4513] text-white hover:bg-[#6b3410]'
                    }`}
                    disabled={isInCart(item.id)}
                    >
                    {isInCart(item.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                    <button
                    className="text-red-500 text-xl"
                    onClick={() => removeFromFavourites(item.id)}
                    >
                    <FaHeart />
                </button>
                </div>
            </div>
        </div>
        ))}
    </div>
    )}
</div>
);
};

export default Favourites;

