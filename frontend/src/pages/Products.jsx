// src/pages/Products.jsx
import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { useShop } from '../Context/ShopContext';

const dummyProducts = [
    { id: 1, name: 'Floral Kurti', price: 999, category: 'Kurti', image: 'https://via.placeholder.com/200x250?text=Floral+Kurti' },
    { id: 2, name: 'Anarkali Dress', price: 1499, category: 'Dress', image: 'https://via.placeholder.com/200x250?text=Anarkali+Dress' },
    { id: 3, name: 'Pastel Saree', price: 1799, category: 'Saree', image: 'https://via.placeholder.com/200x250?text=Pastel+Saree' },
    { id: 4, name: 'Indigo Palazzo Set', price: 1299, category: 'Kurti', image: 'https://via.placeholder.com/200x250?text=Palazzo+Set' },
];
const Products = () => {
const [sortOption, setSortOption] = useState('');
const [selectedCategory, setSelectedCategory] = useState('All')
const {
    addToCart,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
    isInCart
} = useShop();
const categories = ['All', 'Kurti', 'Saree', 'Dress'];
const filteredProducts = dummyProducts
.filter(product =>
    selectedCategory === 'All' ? true : product.category === selectedCategory
    )
    .sort((a, b) => {
        if (sortOption === 'priceLowHigh') return a.price - b.price;
        if (sortOption === 'priceHighLow') return b.price - a.price;
        if (sortOption === 'nameAZ') return a.name.localeCompare(b.name);
        if (sortOption === 'nameZA') return b.name.localeCompare(a.name);
        return 0;
    });
    return (
    <div className="p-6 min-h-screen bg-[#fefaf1]">
        <h2 className="text-3xl font-bold mb-6 text-[#8B4513]">Shop Our Collection</h2>
        {/* Filter and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
                <label className="font-semibold mr-2 text-[#8B4513]">Category:</label>
                <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 px-3 py-1 rounded-md"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                        )
                        )
                        }
                        </select>
                        </div>
                        <div>
                            <label className="font-semibold mr-2 text-[#8B4513]">Sort By:</label>
                            <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="border border-gray-300 px-3 py-1 rounded-md"
                            >
                                <option value="">Default</option>
                                <option value="priceLowHigh">Price: Low to High</option>
                                <option value="priceHighLow">Price: High to Low</option>
                                <option value="nameAZ">Name: A to Z</option>
                                <option value="nameZA">Name: Z to A</option>
                                </select>
                                </div>
                                </div>
                                {/* Product Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    {filteredProducts.map((product) => (
                                    <div
                                    key={product.id}
                                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                                    >
                                        <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-60 object-cover"
                                        />
                                        <div className="p-4 flex flex-col gap-2">
                                            <h3 className="text-lg font-semibold text-[#8B4513]">{product.name}</h3>
                                            <p className="text-sm text-gray-700">₹{product.price}</p>
                                        <div className="flex justify-between items-center mt-2">
                                            <button
                                            onClick={() => addToCart(product)}
                                            disabled={isInCart(product.id)}
                                            className={`text-sm px-3 py-1 rounded ${
                                                isInCart(product.id)
                                                ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
                                                : 'bg-[#8B4513] text-white hover:bg-[#6b3410]'
                                            }`}
                                            >
                                                {isInCart(product.id) ? 'Added' : 'Add to Cart'}
                                            </button>
                                            <button
                                            onClick={() =>
                                                isFavourite(product.id)
                                                ? removeFromFavourites(product.id)
                                                : addToFavourites(product)
                                            }
                                            className="text-[#8B4513] hover:text-red-500 text-xl"
                                            >
                                            {isFavourite(product.id) ? <FaHeart /> : <FaRegHeart />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    };
export default Products;




