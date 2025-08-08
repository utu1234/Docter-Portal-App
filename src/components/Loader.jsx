import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-blue-600 font-semibold text-lg animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
