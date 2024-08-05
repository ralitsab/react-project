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
import { comment } from "postcss";

export const getComments = async (productId) => {
  const commentsRef = collection(db, "products", productId, "comments");
  const q = query(commentsRef);
  const querySnapshot = await getDocs(q);
  const comments = [];
  querySnapshot.forEach((doc) => {
    comments.push({ id: doc.id, ...doc.data() });
  });
  return comments;
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
  } catch (err) {
    throw err;
  }
};

export const updateComment = async (productId, commentId, updatedComment) => {
  try {
    const commentDoc = doc(db, `products/${productId}/comments`, commentId);
    await updateDoc(commentDoc, {
      comment: updatedComment,
      updatedAt: new Date(),
    });
  } catch (error) {}
};


export const deleteUserComment = async (productId, commentId, uid) => {
  try {
    const commentDoc = doc(db, `products/${productId}/comments`, commentId);
    const commentSnap = await getDoc(commentDoc);
    const commentAuthorId = commentSnap.data().userId

    if (commentSnap.exists() && commentAuthorId === uid) {
      await deleteDoc(commentDoc);
    } else {
      throw new Error("You can only delete your own comments.");
    }
  } catch (error) {
    throw error;
  }
};
