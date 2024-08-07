import {
  addDoc,
  collection,
  getDocs,
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
  
 export const fetchOrders = async (userId) => {
    try {
      const ordersRef = collection(db, `users/${userId}/orders`);
      const querySnapshot = await getDocs(ordersRef);
  
      const orders = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      return orders;
    } catch (err) {
      throw err;
    }
  };
  