
import { useState } from "react";

import styles from "../../comment-section.module.css";
import { useComments } from "../../../../../hooks/useComments";



export default function CommentListItem({ comment, productId, currentUser}) {
    const { firstname, surname, createdAt, commentText, heading } = comment;
    const formattedDate = createdAt ? new Date(createdAt.seconds * 1000).toLocaleDateString() : "";
    const { deleteComment } = useComments(productId)
    
    const [error, setError] = useState()

    const handleDelete = async () => {
      try {
        await deleteComment(comment.id);  
      } catch (error) {
        setError('You can only delete your comment.');
      }
    };
  
    return (
        <div className={`p-6  ${styles.comment_item}`}>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div className="user flex flex-col space-y-2 md:mr-4">
              <span className="text-lg font-bold text-gray-800">{`${firstname} ${surname}`}</span>
          </div>
            <div className="content flex flex-col mb-2 md:mb-0">
              <span className="text-xl font-bold text-[#14433D]">{heading}</span>
              <p className="text-gray-700">{commentText}</p>
            </div>
            <div className="flex flex-col items-end space-y-1">
 
              <button
                onClick={handleDelete}
                className="text-red-500 hover:text-red-700 focus:outline-none transition ease-in-out delay-150"
              >
                &times;
              </button>
              <span className="text-sm text-gray-500">{formattedDate}</span>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    )
  }
  