
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🥭</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">AmroBilas</h3>
                <p className="text-sm text-gray-400">The Luxury of Mangoes</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Bringing you the finest Bangladeshi mangoes from farm to your doorstep with love and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">WhatsApp</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-yellow-400 transition-colors">Shop</Link></li>
              <li><Link to="/varieties" className="text-gray-400 hover:text-yellow-400 transition-colors">Mango Varieties</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-yellow-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/delivery" className="text-gray-400 hover:text-yellow-400 transition-colors">Delivery Info</Link></li>
              <li><Link to="/track" className="text-gray-400 hover:text-yellow-400 transition-colors">Track Order</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-yellow-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-yellow-400 transition-colors">Returns</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>📞 +880 1234-567890</p>
              <p>✉️ hello@amrobilas.com</p>
              <p>📍 Rajshahi, Bangladesh</p>
              <p>🕒 9 AM - 8 PM (Daily)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AmroBilas. All rights reserved. Made with ❤️ for mango lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
