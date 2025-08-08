import React from "react";

const Schedule = () => {
  const slots = [
    { time: "10:00 AM", status: "Booked" },
    { time: "11:00 AM", status: "Available" },
    { time: "12:00 PM", status: "Booked" },
    { time: "01:00 PM", status: "Booked" },
    { time: "02:00 PM", status: "Available" },
    { time: "03:00 PM", status: "Available" },
    { time: "04:00 PM", status: "Booked" },
    { time: "05:00 PM", status: "Booked" },
  ];

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Today's Schedule</h2>
      <ul className="space-y-4">
        {slots.map((slot, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
          >
            <span className="font-semibold text-gray-800">{slot.time}</span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                slot.status === "Booked"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {slot.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
