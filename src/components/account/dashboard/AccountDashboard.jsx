import React from 'react';
;
import { useAuth } from '../../../context/authProvider';

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Account Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AccountInfo currentUser={currentUser} />
          <Addresses />
        </div>
      </div>
    </div>
  );
}