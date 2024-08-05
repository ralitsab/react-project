import { useAuthProvider } from "../../../../../context/authProvider";
import AddressForm from "./AddressForm";
import { useState } from "react";
import { useAddress } from "../../../../../hooks/useAddress";
export default function ProfileTab() {
  const [isEditMode, setIsEditMode] = useState(false);
  const { userProfile } = useAuthProvider();
  const {userAddress, removeAddress} = useAddress()
  
  const handleEditClick =()=> {
    setIsEditMode(true);

}

  const deleteUserAddress = () => {
    removeAddress()
  }

  return (
    <div className="profile tab flex flex-col lg:flex-row gap-6 p-6">
    <div className="account-details flex-1">
      <h2 className="text-2xl font-semibold mb-4 text-mainGreen">Account Details</h2>
      <div className="profile-card p-6 rounded-2xl bg-[#C9DFDA] shadow-lg">
        <div className="mb-4">
          <p className="text-lg font-bold mb-1 text-mainGreen">Email</p>
          <p className="text-base">{userProfile.email}</p>
        </div>
    
      </div>
    </div>
    <div className="shipping-address flex-1">
      <h2 className="text-2xl font-semibold mb-4 text-mainGreen">Shipping Address</h2>
       {userAddress  && !isEditMode ? (
        
          <div className="mb-4 bg-[#C9DFDA] shadow-lg rounded-2xl p-6">
            <p className="text-lg font-bold mb-1 text-mainGreen">Address Line 1</p>
            <p className="text-base">{userAddress.address}</p>
            <div className="mb-4">
              <p className="text-lg font-bold mb-1 text-mainGreen">City</p>
              <p className="text-base">{userAddress.city}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-bold mb-1 text-mainGreen">Country</p>
              <p className="text-base">{userAddress.country}</p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-bold mb-1 text-mainGreen">Postal Code</p>
              <p className="text-base">{userAddress.postalCode}</p>
            </div>

            <div className="flex justify-center space-x-4">
            <button onClick={handleEditClick}
              className=" flex-1 submit-button border-solid rounded-full font-bold text-lg text-center bg-mainGreen text-white py-2 px-10 mb-8 transition ease-in-out delay-150 hover:bg-[#12332A] hover:text-white duration-300"
              
            >
              Edit
            </button>
            <button
            onClick={deleteUserAddress}
              className=" flex-1 submit-button border-solid rounded-full font-bold text-lg text-center bg-mainGreen text-white py-2 px-10 mb-8 transition ease-in-out delay-150 hover:bg-[#12332A] hover:text-white duration-300"
            >
            Delete
            </button>
          </div>
          </div>
      ) : ( 
        <AddressForm  setIsEditMode={setIsEditMode} isEditMode={isEditMode}/>
      )}
    </div>
  </div>
  );
}
