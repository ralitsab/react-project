import MainBanner from "./banners/MainBanner";

import { useAuth } from '../../context/authProvider';
import { useContext } from "react";
import autoprefixer from "autoprefixer";

export default function Home() {
  const { currentUser} = useAuth()
  console.log(currentUser)

  return (
    <div>
      <MainBanner />
      {currentUser && <p>Welcome, {currentUser.email}</p>}
    </div>
  );
}