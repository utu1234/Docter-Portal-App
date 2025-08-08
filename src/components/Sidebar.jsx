import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  CalendarIcon,
  UserGroupIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Cog6ToothIcon,
  ClockIcon,
  CreditCardIcon,
  UserCircleIcon
} from '@heroicons/react/24/solid';  

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: HomeIcon, color: '#2563EB' },          
  { name: 'Appointments', path: '/appointments', icon: CalendarIcon, color: '#16A34A' }, 
  { name: 'Patients', path: '/patients', icon: UserGroupIcon, color: '#7C3AED' },       
  { name: 'Consultation History', path: '/consultation-history', icon: ClockIcon, color: '#CA8A04' }, 
  { name: 'Chat', path: '/chat', icon: ChatBubbleOvalLeftEllipsisIcon, color: '#DB2777' }, 
  { name: 'Schedule', path: '/schedule', icon: CalendarIcon, color: '#14B8A6' },        
  { name: 'Earnings', path: '/earnings', icon: CreditCardIcon, color: '#4F46E5' },      
  { name: 'Profile', path: '/profile', icon: UserCircleIcon, color: '#DC2626' },        
  { name: 'Settings', path: '/settings', icon: Cog6ToothIcon, color: '#4B5563' },       
];

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6 shadow-lg sticky top-0">
      <h2 className="text-3xl font-extrabold text-blue-700 mb-10 tracking-wide select-none">
        Dr. Panel
      </h2>
      <nav className="space-y-4">
        {navItems.map(({ name, path, icon: Icon, color }) => (
          <NavLink
            to={path}
            key={name}
            className={({ isActive }) =>
              `group flex items-center space-x-4 px-4 py-3 rounded-lg transition duration-300 ease-in-out cursor-pointer
               ${
                 isActive
                   ? 'bg-blue-300 text-blue-900 font-bold shadow-lg'
                   : 'hover:bg-blue-200 hover:text-blue-900'
               }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className="h-6 w-6 transition-colors duration-300 ease-in-out"
                  style={{ fill: color, opacity: isActive ? 1 : 0.7 }}
                />
                <span className={`text-lg ${isActive ? 'font-semibold text-blue-900' : 'text-gray-700'}`}>
                  {name}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
