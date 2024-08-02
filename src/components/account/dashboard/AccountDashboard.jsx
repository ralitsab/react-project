import React from 'react';
import AccountInfo from './account-Info/AccountInfo';
import { useAuthProvider } from '../../../context/authProvider';
import styles from "../account.module.css";
import Loader from '../../loader/Loader';

export default function AccountDashboard() {
  const { userProfile, loading } = useAuthProvider();

  return (
    <div className={`${styles.container__account} container__account`}>
      {loading && <Loader></Loader>}
    <div className=" p-8 space-y-6 max-w-2xl m-auto pb-20">
      <h2 className="antialiased m-0 p-0 font-display text-5xl md:text-6xl text-[#14433D] text-center font-bold">
    My Account
      </h2>
      <p className='text-[#14433D] text-center font-bold text-xl'>{`Welcome back, ${userProfile.firstName}`}</p>
    </div>

    <AccountInfo></AccountInfo>
  </div>

  );
}