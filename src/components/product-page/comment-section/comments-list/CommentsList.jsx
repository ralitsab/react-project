import CommentListItem from "./comment-list-item/CommentListItem";
import styles from "../comment-section.module.css";
import { useParams } from "react-router-dom";
import { useAuthProvider } from "../../../../context/authProvider";
export default function CommentsList({comments, handleDelete}) {
  const { productId } = useParams();
  const { currentUser } = useAuthProvider();

  return (
    <div className={` ${styles.comment_list} md:pl-40 md:pr-40 pb-20`}>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment}  handleDelete={handleDelete}/>
      ))}
    </div>
  );
}