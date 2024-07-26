import { db } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

export const registerUser = async (email, password, additionalData) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      ...additionalData,
    });
    return user;
  } catch (error) {
    console.log("error");
  }
};

export const loginUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// Logout user
export const logoutUser = async () => {
  setLoading(true);
  setError(null);
  try {
    await signOut(auth);
    setUser(null);
    setLoading(false);
  } catch (error) {
    setError(error.message);
    setLoading(false);
    throw error;
  }
};
