import {
  doc,
  addDoc,
  query,
  deleteDoc,
  updateDoc,
  getDocs,
  getDoc,
  collection,
} from "firebase/firestore";
import { db } from "../firebase.config";

export const getComments = async (productId) => {
  try {
    const commentsRef = collection(db, "products", productId, "comments");
    const q = query(commentsRef);
    const querySnapshot = await getDocs(q);
    const comments = [];
    querySnapshot.forEach((doc) => {
      comments.push({ id: doc.id, ...doc.data() });
    });
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw new Error("Failed to fetch comments. Please try again later.");
  }
};

export const addComment = async (
  productId,
  userId,
  firstname,
  surname,
  commentText,
  heading
) => {
  try {
    await addDoc(collection(db, `products/${productId}/comments`), {
      userId,
      firstname,
      surname,
      heading,
      commentText,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    throw new Error("Failed to add comment. Please try again later.");
  }
};

export const updateComment = async (productId, commentId, updatedComment) => {
  try {
    const commentDoc = doc(db, `products/${productId}/comments`, commentId);
    await updateDoc(commentDoc, {
      comment: updatedComment,
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error("Error updating comment:", error);
    throw new Error("Failed to update comment. Please try again later.");
  }
};


export const deleteUserComment = async (productId, commentId, uid) => {
  try {
    const commentDoc = doc(db, `products/${productId}/comments`, commentId);
    const commentSnap = await getDoc(commentDoc);

    if (!commentSnap.exists()) {
      throw new Error("Comment does not exist.");
    }

    const commentAuthorId = commentSnap.data().userId;

    if (commentAuthorId === uid) {
      await deleteDoc(commentDoc);
    } else {
      throw new Error("You can only delete your own comments.");
    }
  } catch (error) {
    console.error("Error deleting comment:", error);
    throw new Error(error.message || "Failed to delete comment. Please try again later.");
  }
};