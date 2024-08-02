import CommentListItem from "./comment-list-item/CommentListItem";
import styles from "../comment-section.module.css";
import { useComments } from "../../../../hooks/useComments";

export default function CommentsList({ productId , currentUser}) {
  const { comments } = useComments(productId)
  return (
    <div className={` ${styles.comment_list} md:pl-40 md:pr-40 pb-20`}>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} productId={productId} currentUser={currentUser}/>
      ))}
    </div>
  );
}