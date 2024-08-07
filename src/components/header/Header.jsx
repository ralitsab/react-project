import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBasketShopping,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthProvider } from "../../context/authProvider";
import { useCart } from "../../context/cartProvider";
import SearchForm from "./search/SearchForm";
import LogoutModal from "./logout/LogoutModal";

export default function Header() {
  const { currentUser } = useAuthProvider();
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`${styles.header} flex justify-between items-center p-4 shadow-md pl-20 pr-20`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex space-x-6 mb-4 md:mb-0 flex-1 items-center">
          <Link
            to="/products/grape-1"
            className={`${styles.nav_link} p-10 border-solid bg-mainGreen rounded-full border-2 font-bold text-lg text-center text-white pt-2 pb-2 transition ease-in-out delay-150 hover:bg-mainGreen hover:text-white duration-300`}
          >
            Shop
          </Link>
          <a
            href="#learn"
            className={`${styles.nav_link} hover:text-gray-900 text-mainGreen`}
          >
            Learn
          </a>
          <a
            href="#subscribe"
            className={`${styles.nav_link} hover:text-gray-900 text-mainGreen`}
          >
            Subscribe
          </a>
        </div>
        <Link to="/" className="flex justify-center items-center flex-1">
          <img src="../public/brand/logo.webp" alt="Logo" className="h-12" />
        </Link>
        <div className="flex space-x-6 flex-1 justify-end items-center">
          <div className="relative text-gray-600">
            <SearchForm />
          </div>

          <Link to="/account">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-2 text-mainGreen"
              style={{ height: "20px", width: "20px" }}
            />
          </Link>

          {currentUser && (
            <>
              <button onClick={handleOpen} className="flex items-center">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="mr-2 text-mainGreen"
                  style={{ height: "20px", width: "20px" }}
                />
              </button>
            </>
          )}

          <LogoutModal isOpen={isOpen} onClose={handleClose} />
          <Link
            to="/cart"
            className="relative text-gray-700 font-semibold flex items-center"
          >
            <FontAwesomeIcon
              icon={faBasketShopping}
              className="mr-2 text-mainGreen"
              style={{ height: "20px", width: "20px" }}
            />
            {cart.length > 0 && (
              <span
                className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-hoverDarkGreen rounded-full"
                style={{ transform: "translate(50%, -50%)" }}
              >
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
