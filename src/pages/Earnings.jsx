import React from "react";

const Earnings = () => {
  const totalEarnings = 50000;
  const thisMonth = 18000;
  const last6Months = [
    { month: "March", amount: 8000 },
    { month: "April", amount: 7500 },
    { month: "May", amount: 9000 },
    { month: "June", amount: 7000 },
    { month: "July", amount: 8500 },
    { month: "August", amount: 18000 },
  ];
  const totalAppointments = 120;
  const appointmentsThisMonth = 30;
  const avgEarningsPerAppointment = (totalEarnings / totalAppointments).toFixed(2);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800">Earnings Overview</h2>

      <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-50 rounded-lg p-4 shadow">
            <p className="text-sm text-gray-600">Total Earnings</p>
            <p className="text-2xl font-semibold text-blue-700">₹{totalEarnings}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 shadow">
            <p className="text-sm text-gray-600">This Month</p>
            <p className="text-2xl font-semibold text-green-700">₹{thisMonth}</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 shadow">
            <p className="text-sm text-gray-600">Avg Earnings / Appointment</p>
            <p className="text-2xl font-semibold text-yellow-700">₹{avgEarningsPerAppointment}</p>
          </div>
        </div>

        <div className="flex justify-around text-gray-700 font-medium">
          <p><span className="font-bold">{totalAppointments}</span> Total Appointments</p>
          <p><span className="font-bold">{appointmentsThisMonth}</span> This Month's Appointments</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-1">Earnings in Last 6 Months</h3>
          <ul className="space-y-2 max-w-md mx-auto">
            {last6Months.map(({ month, amount }) => (
              <li
                key={month}
                className="flex justify-between bg-gray-50 rounded p-3 shadow-sm hover:bg-gray-100 transition cursor-default"
              >
                <span className="font-medium">{month}</span>
                <span className="font-semibold text-blue-700">₹{amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
