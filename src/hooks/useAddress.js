import { useState, useEffect } from "react";
import { useAuthProvider } from "../context/authProvider";
import {
  setUserShippingAddress,
  getUserShippingAddress,
  deleteShippingAddress
} from "../services/addressSerivce";

export const useAddress = () => {
  const { currentUser } = useAuthProvider();
  const [userAddress, setUserAddress] = useState({});


  const fetchUserAddresses = async () => {
    const address = await getUserShippingAddress(currentUser.uid);
    setUserAddress(address);
  };

  useEffect(() => {
    fetchUserAddresses();
  }, []);


  const addNewAddress = async (address) => {
    await setUserShippingAddress(currentUser.uid, address);
    fetchUserAddresses();
  };



  
const removeAddress = async() => {
    await deleteShippingAddress(currentUser.uid);
    setUserAddress(null)
    fetchUserAddresses();
  }


  return {
    addNewAddress,
    fetchUserAddresses,
    userAddress,
    removeAddress,
  };
};
