import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import allProducts from '../data/allProducts';
import { ShopContext } from '../context/ShopContext';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));
  const related = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const {
    addToCart,
    isInCart,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  } = useContext(ShopContext);

  const inCart = isInCart(product.id);
  const favourite = isFavourite(product.id);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      {/* Top Section: Image + Details */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-md shadow"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold text-[#4B2E1E]">{product.name}</h1>
          <p className="text-xl font-semibold text-[#8B4513]">₹{product.price}</p>

          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            <span className="text-sm text-gray-600 ml-2">(120 reviews)</span>
          </div>

          <p className="text-gray-700">{product.description}</p>
          <p><strong>Fabric:</strong> {product.fabric}</p>

          {/* Size Buttons */}
          <div>
            <p className="font-medium mb-1">Select Size:</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded border text-sm ${
                    selectedSize === size
                      ? 'bg-[#8B4513] text-white'
                      : 'bg-white text-[#4B2E1E] border-[#8B4513]'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="mr-2 font-medium">Quantity:</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-400 p-1 rounded"
            >
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          {/* Cart & Wishlist */}
          <div className="flex items-center gap-4 mt-4">
            <button
              disabled={!selectedSize || inCart}
              onClick={() =>
                addToCart({ ...product, selectedSize, quantity })
              }
              className={`px-6 py-2 rounded text-white font-semibold transition ${
                !selectedSize || inCart
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-[#8B4513] hover:bg-[#6b3410]'
              }`}
            >
              {inCart ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <button
              onClick={() =>
                favourite
                  ? removeFromFavourites(product.id)
                  : addToFavourites(product)
              }
              className="text-2xl text-[#8B4513]"
            >
              {favourite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3 text-[#4B2E1E]">Product Details</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>100% premium cotton material</li>
          <li>Lightweight and breathable for daily use</li>
          <li>Gentle machine wash recommended</li>
          <li>Free shipping on orders above ₹999</li>
        </ul>
      </div>

      {/* Customer Reviews */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3 text-[#4B2E1E]">Customer Reviews</h2>
        <div className="bg-gray-100 p-4 rounded mb-2">
          <p><strong>Megha R:</strong> Loved the color and comfort. Fast delivery too!</p>
          <p className="text-sm text-gray-500">★ ★ ★ ★ ★ – 3 days ago</p>
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Divya S:</strong> Looks exactly like the pictures. Would buy again.</p>
          <p className="text-sm text-gray-500">★ ★ ★ ★ ★ – 1 week ago</p>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-[#4B2E1E]">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;





