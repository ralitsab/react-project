import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className={`${styles.header} justify-between header items-center p-4 shadow-md pl-20 pr-20`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-6 mb-4 md:mb-0 md:mb-0 flex-1 items-center">
          <Link
            to="/products/grape-1"
            className={`${styles.nav_link} nav_link p-10 border-solid bg-[#14433D] rounded-full border-2 font-bold text-lg text-center text-white pt-2 pb-2 transition ease-in-out delay-150 hover:bg-[#14433D] hover:text-white duration-300`}
          >
            Shop
          </Link>
          <a
            href="#learn"
            className={`${styles.nav_link} nav_link hover:text-gray-900 text-[#14433D]`}
          >
            Learn
          </a>
          <a
            href="#subscribe"
            className={`${styles.nav_link} nav_link hover:text-gray-900 text-[#14433D] `}
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
          <Link to="/account">
          <a
            href="#account"
            className="text-gray-700 font-semibold flex items-center"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="mr-2 text-[#14433D]"
              style={{ height: "20px", width: "20px" }}
            />
          </a>
          </Link>
          <a
            href="#basket"
            className="text-gray-700 font-semibold flex items-center"
          >
            <FontAwesomeIcon
              icon={faBasketShopping}
              className="mr-2 text-[#14433D]"
              style={{ height: "20px", width: "20px" }}
            /> 
          </a>
        </div>
      </div>
    </header>
  );
}
