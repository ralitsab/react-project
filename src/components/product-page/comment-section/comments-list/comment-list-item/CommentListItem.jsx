import { useState } from "react";

import styles from "../../comment-section.module.css";
import { useParams } from "react-router-dom";

export default function CommentListItem({ comment, handleDelete}) {
  const { firstname, surname, createdAt, commentText, heading } = comment;
  const formattedDate = createdAt
    ? new Date(createdAt.seconds * 1000).toLocaleDateString()
    : "";

  const deleteComment = () => {
    handleDelete(comment.id)
  }

  return (
    <div className={`p-6 ${styles.comment_item}`}>
    <div className="flex flex-col md:flex-row md:items-start mb-2">
   
      <div className="user flex flex-col space-y-2 md:mr-20 sm:mb-5">
        <span className="text-lg font-black font-display text-mainGreen">{`${firstname} ${surname}`}</span>
      </div>
    
      <div className="flex flex-col md:flex-row md:items-start flex-1 space-y-2 md:space-y-0 md:space-x-4">
        <div className="content flex flex-col text-mainGreen flex-1">
          <span className="text-2xl font-bold pb-2">{heading}</span>
          <p className="mt-1">{commentText}</p>
        </div>
       
        <div className="flex flex-col items-end space-y-1 md:items-start md:ml-4">
          <button
            onClick={deleteComment}
            className="hover:text-mainGreen text-xl focus:outline-none transition ease-in-out delay-150"
          >
            &times;
          </button>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>
      </div>
    </div>
  </div>
  
  );
}
