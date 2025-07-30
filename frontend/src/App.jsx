// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import ReturnExchange from './pages/ReturnExchange';
import Orders from './pages/Orders';
import Favourites from './pages/Favourites';
import Profile from './pages/Profile';

import Login from './pages/Login';

import { CartProvider } from './context/CartContext';
import { FavouritesProvider } from './context/FavouritesContext';

function App() {
  return (
    <Router>
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
              <Route path="/returnexchange" element={<ReturnExchange />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </FavouritesProvider>
      </CartProvider>
    </Router>
  );
}

export default App;



