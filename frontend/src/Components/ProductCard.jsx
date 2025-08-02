import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';

const ProductCard = ({ product }) => {
  const {
    addToCart,
    isInCart,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  } = useContext(ShopContext);

  const inCart = isInCart(product.id);
  const favourite = isFavourite(product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Clickable image/title */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>

      <div className="p-4 flex flex-col gap-2 flex-grow justify-between">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-[#4b2e1e]">{product.name}</h3>
          <p className="text-sm text-gray-600">₹{product.price}</p>
        </Link>

        {/* Bottom bar with Add to Cart and Favourite */}
        <div className="flex items-center justify-between mt-3">
          {/* Add to Cart button (left) */}
          <button
            onClick={() => addToCart(product)}
            disabled={inCart}
            className={`text-sm px-3 py-1 rounded ${
              inCart
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-[#8B4513] text-white hover:bg-[#6b3410]'
            }`}
          >
            {inCart ? 'Added' : 'Add to Cart'}
          </button>

          {/* Favourite icon (right) */}
          <button
            onClick={() =>
              favourite
                ? removeFromFavourites(product.id)
                : addToFavourites(product)
            }
            className="text-[#8B4513] hover:text-red-500 text-xl"
            aria-label={favourite ? 'Remove from favourites' : 'Add to favourites'}
          >
            {favourite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

