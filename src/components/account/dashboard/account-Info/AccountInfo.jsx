// import { useAuth } from '../../../context/useAuthProvider';

export default function AccountInfo({ currentUser, userProfile }) {


  
  return (
    <div className=" p-10 flex flex-col shadow-md">
      <div className="tabs bg-[#14433D] text-white flex-wrap rounded-t-2lg p-2 pb-0 lg:flex">
        <button className="dashboard elem py-3 px-10">My profile</button>
        <button className="dashboard elem py-3 px-10">Order History</button>
        <button className="dashboard elem py-3 px-10">Log out</button>
      </div>

      <div className="content rounded-b-2lg bg-[#D3E8E3] p-5 lg:px-15 lg:py-10"></div>
    </div>
  );
}
