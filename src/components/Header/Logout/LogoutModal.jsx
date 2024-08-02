import React from 'react';
import styles from './logoutModal.module.css';

const LogoutModal = ({ isOpen, onClose, handleLogout }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal_overlay ${styles.modal_overlay}`}>
      <div className={`modal_content ${styles.modal_content}`}>
        <button
          className={`modal_close absolute top-2 right-2 text-gray-500 hover:text-gray-700 ${styles.modal_close}`}
          onClick={onClose}
        >
          &times;
        </button>
        <div className="content p-4 flex flex-col">
          <h2 className="m-0 p-0 font-display text-5xl md:text-2xl text-[#14433D] text-center font-bold pb-10">Are you sure you want to logout?</h2>
          <div className="flex justify-center space-x-4">
            <button
              className="submit-button border-solid rounded-full font-bold text-lg text-center bg-[#14433D] text-white py-2 px-10 mb-8 transition ease-in-out delay-150 hover:bg-[#12332A] hover:text-white duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              className="submit-button border-solid rounded-full font-bold text-lg text-center bg-[#14433D] text-white py-2 px-10 mb-8 transition ease-in-out delay-150 hover:bg-[#12332A] hover:text-white duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
