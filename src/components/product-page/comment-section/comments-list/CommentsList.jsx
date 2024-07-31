import CommentListItem from "./comment-list-item/CommentListItem";
import styles from "../comment-section.module.css";

export default function CommentsList({ comments, productId , currentUser}) {
  return (
    <div className={` ${styles.comment_list} md:pl-40 md:pr-40 pb-20`}>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} productId={productId} currentUser={currentUser}/>
      ))}
    </div>
  );
}