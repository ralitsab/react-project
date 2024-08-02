import { useEffect, useState, useCallback } from "react";
import { addComment, getComments, deleteUserComment } from "../services/commentService";
import { useAuthProvider } from "../context/authProvider";

export const useComments = (initialProductId) => {
  const [productId, setProductId] = useState(initialProductId);
  const [comments, setComments] = useState([]);
  const { currentUser, userProfile } = useAuthProvider();

  const fetchComments = useCallback(async () => {
    const comments = await getComments(productId);
    setComments(comments);
  }, [productId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const addNewComment = async (heading, comment) => {
    await addComment(
      productId,
      currentUser.uid,
      userProfile.firstName,
      userProfile.surname,
      comment,
      heading
    );
    fetchComments();
  };

  const deleteComment = async (commentId) => {
    try {
      await deleteUserComment(productId, commentId, currentUser.uid);
      fetchComments();
    } catch (error) {
      throw error;
    }
  };

  const updateProductId = (newProductId) => {
    setProductId(newProductId);
  };

  return {
    comments,
    deleteComment,
    fetchComments,
    addNewComment,
    updateProductId,
  };
};
