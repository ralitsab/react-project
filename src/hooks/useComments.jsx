import { useEffect, useState } from "react";
import { addComment, getComments, deleteUserComment } from "../services/commentService";
import { useAuthProvider } from "../context/authProvider"


export const useComments = (initialProductId) => {
  const [productId, setProductId] = useState(initialProductId);
  const [error, setError] = useState(null); 
  const [comments, setComments] = useState([]);
  const { currentUser, userProfile } = useAuthProvider();


  const fetchComments = async () => {
    try {
      const comments = await getComments(productId);
      setComments(comments);
    } catch (error) {
      setError('Failed to fetch comments. Please try again later.');
    }
  };
  
  useEffect(() => {
    fetchComments();
  }, [productId]);


  const addNewComment = async (heading, comment) => {
    try {
     await addComment(
      productId,
      currentUser.uid,
      userProfile.firstName,
      userProfile.surname,
      comment,
      heading
    );
    fetchComments(err);
  }catch {
    setError('Failed to add comments. Please try again later.');
  }
  };

  const deleteComment = async (commentId) => {
    try {
      await deleteUserComment(productId, commentId, currentUser.uid);
      fetchComments();
    } catch (error) {
      setError('Failed to delete comment. Please try again later.');
    }
  };
  return {
    comments,
    deleteComment,
    fetchComments,
    addNewComment,
    error
  };
};
