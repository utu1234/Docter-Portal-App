import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div className="mb-8 border-b-4 border-blue-500 pb-3">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-wide drop-shadow-sm">
        {title}
      </h2>
      <div className="w-24 h-1 bg-blue-400 rounded mt-1"></div>
    </div>
  );
};

export default PageHeader;
