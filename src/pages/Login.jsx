import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() !== "" && password.trim() !== "") {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Please enter Email and Password");

    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-2xl max-w-md w-full"
      >
        <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800 tracking-wide">
          Doctor Portal Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 active:bg-blue-900 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

