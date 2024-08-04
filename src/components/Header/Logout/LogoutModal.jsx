import React from 'react';
import styles from './logoutModal.module.css';
import { logoutUser } from '../../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LogoutModal = ({ isOpen, onClose }) => {

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  if (!isOpen) return null;
  

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      logoutUser();
      onClose();
      navigate("/");
    } catch (error) {
      setError('Logout failed. Please try again.');
    }
  };


  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <button
          className={styles.modal_close}
          onClick={onClose}
        >
          &times;
        </button>
        <div className="content p-4 flex flex-col">
          <h2 className="m-0 p-0 font-display text-xl md:text-2xl text-mainGreen text-center font-bold pb-10">
            Are you sure you want to logout?
          </h2>
          <div className="flex justify-center space-x-4">
            <button
              className="submit-button border-solid rounded-full font-bold text-lg text-center bg-mainGreen text-white py-2 px-10 mb-8 transition ease-in-out delay-150 hover:bg-[#12332A] hover:text-white duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="submit-button border-solid rounded-full font-bold text-lg text-center bg-mainGreen text-white py-2 px-10 mb-8 transition ease-in-out delay-150 hover:bg-[#12332A] hover:text-white duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
        {error && <div className="text-red-500 mt-2">{error}</div>}

      </div>
    </div>
  );
};

export default LogoutModal;
