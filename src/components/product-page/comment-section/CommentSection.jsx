import CommentForm from "./comment-form/CommentForm";
import styles from "./comment-section.module.css";
import CommentsList from "./comments-list/CommentsList";
import { useAuthProvider } from "../../../context/authProvider";
import { useState } from "react";
import Modal from "../../modal/Modal";
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useComments } from "../../../hooks/useComments";
import { useParams } from "react-router-dom";


const CommentSection = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { currentUser } = useAuthProvider();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialValues = { comment: "", heading: "" }
  const { comments, addNewComment, deleteComment, error} = useComments(productId)

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
    try {
      addNewComment(values.heading, values.comment)
      setIsModalOpen(false)
    }catch {
      setError('Failed to add comments. Please try again later.');
    }
  });
  
  const handleDelete = async (commentId) => {
    try {
      await deleteComment(commentId);
    } catch (error) {
      setError('Failed to Delete')
    }
  };




  return (
    <div className={styles.commentSection}>
      <h3 className="text-mainGreen text-center font-bold mb-2 font-display text-4xl font-black md:text-6xl">
        Customer reviews
      </h3>
      <button
        onClick={handleOpenModal}
        className={`border-solid rounded-full block m-auto mt-8 mb-8 font-bold text-lg text-center bg-mainGreen text-white pt-5 pb-5 pl-10 pr-10 transition ease-in-out delay-150 hover:bg-hoverDarkGreen duration-300 ${styles.addReviewButton}`}
      >
        Write a review
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <CommentForm
            submitHandler={submitHandler}
            values={values}
            error={error}
            changeHandler={changeHandler}
          />
        </Modal>
      )}
      {comments.length > 0 ? (
        <CommentsList
          currentUser={currentUser}
          comments={comments}
          handleDelete={handleDelete}
        />
      ) : (
        <div className="flex justify-center items-center pb-20 pt-20">
        <h1 className="antialiased m-0 p-0 font-black font-display text-3xl md:text-3xl text-mainGreen text-center">
          No customer reviews
        </h1>
      </div>
      )}
    </div>
  );
};

export default CommentSection;
