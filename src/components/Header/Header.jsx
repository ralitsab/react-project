
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBasketShopping} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

export default function Header() {
    return (
      <header className={`${styles.header} justify-between items-center p-4 bg-white shadow-md pl-20 pr-20`}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Left Section (Shop, Learn, Subscribe) */}
        <div className="flex space-x-6 mb-4 md:mb-0 md:mb-0">
          <a href="#shop" className="text-gray-700 font-semibold hover:text-gray-900">Shop</a>
          <a href="#learn" className="text-gray-700 font-semibold hover:text-gray-900">Learn</a>
          <a href="#subscribe" className="text-gray-700 font-semibold hover:text-gray-900">Subscribe</a>
        </div>
    
        {/* Center Section (Logo) */}
        <div className="flex justify-center items-center">
          <img src='./public/brand/logo.webp' alt="Logo" className="h-12" /> {/* Adjust the logo size as needed */}
        </div>
    
        {/* Right Section (Account, Basket) */}
        <div className="flex space-x-6">
          <a href="#account" className="text-gray-700 font-semibold hover:text-gray-900 flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" style={{ height: '20px', width: '20px'}} />
          </a>
          <a href="#basket" className="text-gray-700 font-semibold hover:text-gray-900 flex items-center" >
            <FontAwesomeIcon icon={faBasketShopping} className="mr-2" style={{ height: '20px', width: '20px'}} />
          </a>
        </div>
      </div>
    </header>
    
  );
  
}