
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-xl">🥭</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">AmroBilas</h1>
              <p className="text-xs text-gray-600">The Luxury of Mangoes</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
              Shop
            </Link>
            <Link to="/varieties" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
              Mango Varieties
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
              About Us
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-yellow-500 transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-yellow-500 transition-colors duration-300">
              <User size={20} />
            </button>
            <button className="relative text-gray-700 hover:text-yellow-500 transition-colors duration-300">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-yellow-500 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
                Shop
              </Link>
              <Link to="/varieties" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
                Mango Varieties
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
                About Us
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-yellow-500 transition-colors duration-300 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
