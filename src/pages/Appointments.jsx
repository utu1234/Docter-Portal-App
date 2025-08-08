import React from "react";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";

const Appointments = () => {
  const appointments = [
    { name: "Rahul Verma", time: "10:00 AM", date: "Aug 7" },
    { name: "Sneha Sharma", time: "11:30 AM", date: "Aug 7" },
    { name: "Vikash Sinha", time: "12:00 PM", date: "Aug 7" },
    { name: "Vipul Sharma", time: "01:30 PM", date: "Aug 7" },
    { name: "Ajay Rai", time: "10:30 AM", date: "Aug 8" },
    { name: "Vinay Singh", time: "11:30 AM", date: "Aug 8" },
    { name: "Riya Varma", time: "12:30 PM", date: "Aug 8" },
    { name: "Vikki Sachdeva", time: "01:30 PM", date: "Aug 9" },
    { name: "Nidhi Chopra", time: "02:30 PM", date: "Aug 9" },
  ];

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Appointments</h2>
      <ul className="space-y-4">
        {appointments.map((a, i) => (
          <li
            key={i}
            className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition-shadow cursor-pointer flex items-center justify-between"
          >
            <span className="font-medium text-gray-900">{a.name}</span>
            <div className="flex space-x-4 text-gray-600 text-sm">
              <div className="flex items-center space-x-1">
                <CalendarIcon className="h-5 w-5 text-blue-500" />
                <span>{a.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ClockIcon className="h-5 w-5 text-blue-500" />
                <span>{a.time}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
