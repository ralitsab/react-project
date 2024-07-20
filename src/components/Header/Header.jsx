import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className={`${styles.header} justify-between header items-center p-4 shadow-md pl-20 pr-20`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0 md:mb-0 flex-1">
          <Link
            to="/products/grape-1"
            className={`${styles.nav_link} nav_link hover:text-gray-900`}
          >
            Shop
          </Link>
          <a
            href="#learn"
            className={`${styles.nav_link} nav_link hover:text-gray-900`}
          >
            Learn
          </a>
          <a
            href="#subscribe"
            className={`${styles.nav_link} nav_link hover:text-gray-900`}
          >
            Subscribe
          </a>
        </div>
        <Link to="/">
          <div className="flex justify-center items-center flex-1">
            <img src="../public/brand/logo.webp" alt="Logo" className="h-12" />
          </div>
        </Link>
        <div className="flex space-x-6 flex-1 justify-end">
          <a
            href="#account"
            className="text-gray-700 font-semibold hover:text-gray-900 flex items-center"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="mr-2"
              style={{ height: "20px", width: "20px" }}
            />
          </a>
          <a
            href="#basket"
            className="text-gray-700 font-semibold hover:text-gray-900 flex items-center"
          >
            <FontAwesomeIcon
              icon={faBasketShopping}
              className="mr-2"
              style={{ height: "20px", width: "20px" }}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
