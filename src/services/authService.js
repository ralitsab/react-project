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
    console.error("Error registering user:", error);
  }
};

// Log in a user
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
    console.error("Error logging in user:", error);
    throw new Error("The credentials provided are invalid.");
  }
};

// Log out the current user
export const logoutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out user:", error);
    throw new Error("An unexpected error occurred during logout.");
  }
};

export const getUserProfile = async (userId) => {
  try {
    const userProfileDoc = doc(db, "users", userId);
    const userProfileSnap = await getDoc(userProfileDoc);

    if (userProfileSnap.exists()) {
      return userProfileSnap.data();
    } else {
      console.warn("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw new Error("An unexpected error occurred while fetching user profile.");
  }
};
