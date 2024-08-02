import styles from './modal.module.css';

const Modal = ({ isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <div className={`modal_overlay ${styles.modal_overlay}`} >
      <div className={`modal_content ${styles.modal_content}`}>
      <button className={`modal_close absolute top-2 right-2 text-gray-500 hover:text-gray-700 ${styles.modal_close}`} onClick={onClose}>
          &times;
        </button>
   
        {children}
      </div>
    </div>
  );
};

export default Modal;
