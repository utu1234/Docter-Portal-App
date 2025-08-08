import React, { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Settings</h2>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <p className="text-gray-700 text-lg">
          Update your preferences and account settings below.
        </p>

        
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-800">Email Notifications</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
          </label>
        </div>

        
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-800">Dark Mode</span>
          <label className="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all duration-300"></div>
            <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
          </label>
        </div>

        
        <div>
          <label className="block mb-2 font-semibold text-gray-800" htmlFor="language">
            Preferred Language
          </label>
          <select
            id="language"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Punjabi</option>
            <option>Gujarati</option>
          </select>
        </div>

        
        <button
          onClick={() => alert("Settings saved!")}
          className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
