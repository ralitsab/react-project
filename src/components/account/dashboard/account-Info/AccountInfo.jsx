import { useAuthProvider } from "../../../../context/authProvider";
import ProfileTab from "./profile-tab/ProfileTab";
import { logoutUser } from "../../../../services/authService";
import { useState } from "react";


export default function AccountInfo() {
  const [activeTab, setActiveTab] = useState('profile');


  
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      logoutUser();
      navigate("/");
    } catch (error) {
    }
  };



  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return <ProfileTab />;
      case 'orderHistory':
        return  'order'
      case 'logout':
        return 
      default:
        return handleLogout;
    }
  };


  return (
    <div className="p-10 flex flex-col shadow-md">
    <div className="tabs rounded-xl bg-mainGreen text-white">
      <div className="buttons flex gap-2 flex-wrap rounded pt-3 pl-2">
        <button
          className={`dashboard elem py-3 rounded-md px-10 transition-colors duration-300 
            ${activeTab === 'profile' ? 'bg-lightGreen text-mainGreen' : 'bg-darkGreen'} 
            ${activeTab === 'profile' ? 'hover:bg-hoverLightGreen' : 'hover:bg-hoverDarkGreen'} 
            ${activeTab === 'profile' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          My Profile
        </button>
        <button
          className={`dashboard elem py-3 rounded-md px-10 transition-colors duration-300 
            ${activeTab === 'orderHistory' ? 'bg-lightGreen text-mainGreen' : 'bg-darkGreen'} 
            ${activeTab === 'orderHistory' ? 'hover:bg-hoverLightGreen' : 'hover:bg-hoverDarkGreen'} 
            ${activeTab === 'orderHistory' ? 'font-bold' : ''}`}
          onClick={() => setActiveTab('orderHistory')}
        >
          Order History
        </button>
        <button
          className={`dashboard elem py-3 rounded-md px-10 transition-colors duration-300 
            ${activeTab === 'logout' ? 'bg-lightGreen text-mainGreen' : 'bg-darkGreen'} 
            ${activeTab === 'logout' ? 'hover:bg-hoverLightGreen' : 'hover:bg-hoverDarkGreen'} 
            ${activeTab === 'logout' ? 'font-bold' : ''}`}
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  
    <div className="content rounded-b-2lg bg-lightGreen p-5 lg:px-15 lg:py-10">
      {renderContent()}
    </div>
  </div>
  
  );
}
