import React from "react";

const Patients = () => {
  const patients = [
    "Aman Jain",
    "Ritika Mehra",
    "Saurabh Singh",
    "Rahul Jain",
    "Riya Sharma",
    "Vijay Sinha",
    "Vaishali Rai",
    "Vikash Singh",
    "Aman Kumar",
  ];

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Patients List</h2>
      <ul className="space-y-3">
        {patients.map((p, i) => (
          <li
            key={i}
            className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
          >
            
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-semibold text-lg">
              {p
                .split(" ")
                .map((name) => name[0])
                .join("")
                .toUpperCase()}
            </div>
            <span className="text-gray-800 font-medium">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;

