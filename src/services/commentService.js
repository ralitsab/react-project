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
  const commentsRef = collection(db, 'products', productId, 'comments');
  const q = query(commentsRef);
  const querySnapshot = await getDocs(q);
  const comments = [];
  querySnapshot.forEach((doc) => {
    comments.push({ id: doc.id, ...doc.data() });
  });
  return comments;
};

export const addComment = async (productId, userId, firstname, surname, commentText) => {
  try {
    await addDoc(collection(db, `products/${productId}/comments`), {
      userId,
      firstname,
      surname,
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
