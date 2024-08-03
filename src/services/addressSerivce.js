import {
  doc,
  setDoc,
  getDoc,
  deleteDoc
} from "firebase/firestore";
import { db } from "../firebase.config";




export const getUserShippingAddress = async (userId) => {
  try {
    const addressRef = doc(db, "users", userId, "shippingAddresses", "singleAddress");
    
    const docSnapshot = await getDoc(addressRef);

    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};

export const setUserShippingAddress = async (userId, address)  => {
  try {
    const addressRef = doc(db, "users", userId, "shippingAddresses", "singleAddress");
    await setDoc(addressRef, address, { merge: true });
  } catch (error) {
    throw error;
  }
  }
  
  export const deleteShippingAddress = async (userId) => {
    try {
      const addressRef = doc(db, "users", userId, "shippingAddresses", "singleAddress");
      await deleteDoc(addressRef);
    } catch (error) {
      throw error;
    }
  }  