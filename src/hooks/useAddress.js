import { useState, useEffect } from "react";
import { useAuthProvider } from "../context/authProvider";
import {
  setUserShippingAddress,
  getUserShippingAddress,
  deleteShippingAddress,
} from "../services/addressSerivce";

export const useAddress = () => {
  const { currentUser } = useAuthProvider();
  const [userAddress, setUserAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserAddress = async () => {
    setLoading(true);
    if (currentUser && currentUser.uid) {
      try {
        const address = await getUserShippingAddress(currentUser.uid);
        setUserAddress(address);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch user address:", error);
        setUserAddress("");
        setError(error.message);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserAddress();
  }, [currentUser]);

  const addNewAddress = async (address) => {
    if (currentUser && currentUser.uid) {
      try {
        await setUserShippingAddress(currentUser.uid, address);
        fetchUserAddress();
      } catch (error) {
        console.error("Failed to add new address:", error);
        setError(error.message);
      }
    }
  };

  const removeAddress = async () => {
    if (currentUser && currentUser.uid) {
      try {
        await deleteShippingAddress(currentUser.uid);
        setUserAddress(null);
      } catch (error) {
        console.error("Failed to remove address:", error);
        setError(error.message);
      }
    }
  };

  return {
    addNewAddress,
    fetchUserAddress,
    userAddress,
    removeAddress,
    loading,
    error,
  };
};
