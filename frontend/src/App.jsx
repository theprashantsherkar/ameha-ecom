// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Navbar from './Components/Navbar'
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Orders from './pages/Orders';
import Favourites from './pages/Favourites';
import Profile from './pages/Profile';
import Bestsellers from './pages/Bestsellers';
import NewArrivals from './pages/NewArrivals';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';


import { CartProvider } from './context/CartContext';
import { FavouritesProvider } from './context/FavouritesContext';


function App() {
  return (
      <CartProvider>
        <FavouritesProvider>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/bestsellers" element={<Bestsellers />} />
              <Route path="/newarrivals" element={<NewArrivals />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Routes>
          </div>
        </FavouritesProvider>
      </CartProvider>
  );
}

export default App;



