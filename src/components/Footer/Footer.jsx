// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-[#14433D] text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
          </div>
          {/* Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <a href="#" className="block text-gray-400 hover:text-white">Home</a>
            <a href="#" className="block text-gray-400 hover:text-white">About Us</a>
            <a href="#" className="block text-gray-400 hover:text-white">Products</a>
            <a href="#" className="block text-gray-400 hover:text-white">Contact</a>
          </div>
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-400">123 Street Name, City, Country</p>
            <p className="text-gray-400">Email: contact@example.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Text Section */}
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <p>Designed by Your Name</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;