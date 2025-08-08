import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import dashboardIcon from '../assets/icons/dashboard.png'; 

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setStats({
        patients: 120,
        appointmentsToday: 14,
        earnings: 25000,
        upcomingAppointments: [
          { id: 1, patient: "Ravi Kumar", date: "2025-08-10", time: "10:00 AM" },
          { id: 2, patient: "Anita Sharma", date: "2025-08-10", time: "11:00 AM" },
          { id: 3, patient: "Vikram Singh", date: "2025-08-11", time: "09:30 AM" },
        ],
        recentPatients: [
          { id: 1, name: "Vikram Singh", lastVisitDate: "2025-08-05" },
          { id: 2, name: "Neha Verma", lastVisitDate: "2025-08-04" },
          { id: 3, name: "Rahul Rai", lastVisitDate: "2025-08-03" },
        ],
        alerts: [
          "New lab results available for patient Rohan Mehta",
          "Appointment cancellation from Anita Sharma",
          "Reminder: Update your profile info",
        ],
      });
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      <h1 className="flex items-center text-3xl font-extrabold mb-6 text-gray-800 border-b pb-2">
        <img
          src={dashboardIcon}
          alt="Dashboard Icon"
          className="h-8 w-8 mr-3"
        />
        Dashboard Overview
      </h1>

      {/* Stats summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300 cursor-pointer">
          <span className="text-5xl mb-2">🧑‍⚕️</span>
          <h3 className="text-xl font-semibold">Total Patients</h3>
          <p className="text-3xl font-bold">{stats.patients}</p>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300 cursor-pointer">
          <span className="text-5xl mb-2">📅</span>
          <h3 className="text-xl font-semibold">Appointments Today</h3>
          <p className="text-3xl font-bold">{stats.appointmentsToday}</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300 cursor-pointer">
          <span className="text-5xl mb-2">💰</span>
          <h3 className="text-xl font-semibold">Earnings</h3>
          <p className="text-3xl font-bold">₹{stats.earnings}</p>
        </div>
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">Upcoming Appointments</h2>
        <ul className="divide-y divide-gray-200">
          {stats.upcomingAppointments.map(({ id, patient, date, time }) => (
            <li
              key={id}
              className="py-3 flex justify-between items-center hover:bg-gray-50 rounded px-2 cursor-pointer transition"
            >
              <span className="font-medium text-gray-800">{patient}</span>
              <span className="text-gray-600">{date} at {time}</span>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-gray-700">Recent Patients</h2>
        <ul className="divide-y divide-gray-200">
          {stats.recentPatients.map(({ id, name, lastVisitDate }) => (
            <li
              key={id}
              className="py-3 flex justify-between items-center hover:bg-gray-50 rounded px-2 cursor-pointer transition"
            >
              <span className="font-medium text-gray-800">{name}</span>
              <span className="text-gray-600">Last Visit: {lastVisitDate}</span>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="bg-red-50 border border-red-400 text-red-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 border-b border-red-400 pb-2">⚠️ Alerts</h2>
        <ul className="list-disc list-inside space-y-2">
          {stats.alerts.map((alert, index) => (
            <li key={index} className="text-red-700 font-semibold">
              {alert}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
