import React from 'react';
import { BellIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import doctorAvatar from '../assets/avatars/doctor-avatar.jpeg'; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate('/login');
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center space-x-3">
        
        <img
          src={doctorAvatar}
          alt="Doctor Avatar"
          className="h-10 w-10 rounded-full object-cover border-2 border-blue-600"
        />
        <h1 className="text-2xl font-bold text-blue-700 tracking-wide select-none">DOCTOR PORTAL</h1>
      </div>

      <div className="flex items-center space-x-5">
        <button
          aria-label="Notifications"
          className="relative p-2 rounded-full hover:bg-blue-100 transition"
        >
          <BellIcon className="h-6 w-6 text-blue-600" />
          
          <span className="absolute top-1 right-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
        </button>

        <button
          aria-label="Profile"
          className="p-2 rounded-full hover:bg-blue-100 transition"
        >
          <UserCircleIcon className="h-8 w-8 text-blue-600" />
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center space-x-1 text-red-600 font-semibold hover:text-red-800 transition"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

