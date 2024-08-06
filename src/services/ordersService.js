import {
    
    addDoc,
 
    collection,
  } from "firebase/firestore";
  import { db } from "../firebase.config";
  
  export const addOrder = async (
    products,
    userId ) => {
    try {
      await addDoc(collection(db, `users/${userId}/orders`), {
        userId,
        products,
        createdAt: new Date(),
      });
    } catch (err) {
      throw err;
    }
  };
  