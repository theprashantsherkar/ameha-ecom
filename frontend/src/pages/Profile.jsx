import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5dc]">
      <div className="bg-white p-8 shadow-md rounded-md text-center">
        <h1 className="text-2xl font-semibold text-[#8B4513]">Welcome</h1>
        <p className="text-gray-600 mt-2">{user?.email}</p>
        <button
          onClick={() => {
            logout();
            navigate('/login');
          }}
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
