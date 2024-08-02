import CommentForm from "./comment-form/CommentForm";
import styles from "./comment-section.module.css";
import CommentsList from "./comments-list/CommentsList";
import { useAuthProvider } from "../../../context/authProvider";
import { useState } from "react";
import Modal from "../../modal/Modal";
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useComments } from "../../../hooks/useComments"

const CommentSection = ({ productId }) => {
  const navigate = useNavigate();
  const { currentUser,  } = useAuthProvider();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialValues = { comment: "", heading: "" };
  const { comments, addNewComment } = useComments(productId)

  const handleOpenModal = () => {
    if (currentUser) {
      setIsModalOpen(true);
    } else {
      navigate("/login");
    }
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { values, submitHandler, changeHandler } =  useForm(initialValues, (values) => {
    addNewComment(values.heading, values.comment)
    setIsModalOpen(false)
  });

  return (
    <div className={styles.commentSection}>
      <h3 className="text-[#14433D] text-center font-bold mb-2 font-display text-4xl font-black md:text-6xl">
        Customer reviews
      </h3>
      <button
        onClick={handleOpenModal}
        className={`border-solid rounded-full block m-auto mt-8 mb-8 font-bold text-lg text-center bg-[#14433D] text-white pt-5 pb-5 pl-10 pr-10 transition ease-in-out delay-150 hover:bg-[#14433D] hover:text-white duration-300 ${styles.addReviewButton}`}
      >
        Write a review
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <CommentForm
            submitHandler={submitHandler}
            values={values}
            changeHandler={changeHandler}
          />
        </Modal>
      )}
      {comments ? (
        <CommentsList
          currentUser={currentUser}
          comments={comments}
          productId={productId}
        />
      ) : (
        <h1>No customer reviews yet</h1>
      )}
    </div>
  );
};

export default CommentSection;
