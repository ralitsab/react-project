import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { getUserProfile } from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          const profileData = await getUserProfile(user.uid);
          setUserProfile(profileData);
        } catch (error) {
          console.error("Error fetching user profile: ", error);
        }
      } else {
        setCurrentUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ userProfile, currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
