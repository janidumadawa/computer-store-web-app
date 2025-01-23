import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!username || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:1000/admin/register",
        {
          username,
          password,
          confirmPassword,
        }
      );

      // Handle successful registration
      setError(""); // Clear any previous errors
      alert("Admin registered successfully!");
      navigate("/adminLogin"); // Redirect to login page
    } catch (err) {
      setError(err.response?.data?.message || "Error registering admin.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 to-black">
      {/* Top Header */}
      <header className="bg-gray-800 p-6">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl font-extrabold">Janidu Computers</h1>
          <h2 className="text-xl mt-2">
            Welcome to the Admin Registration Portal
          </h2>
        </div>
      </header>

      <div className="flex flex-1 items-center justify-center pr-20">
        {/* Left Side: Login Prompt */}
        <div className="w-1/2 p-12 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white mb-6">
            If you have an account, please login
          </h1>
          {/* Use Link to navigate to the AdminLogin page */}
          <Link
            to="/adminLogin"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
        </div>

        {/* Right Side: Register Admin Form */}
        <div className="w-1/2 p-12 bg-gray-800 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8">Register Admin</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your username"
                required
                style={{ color: "#ffffff", backgroundColor: "#2D3748" }}
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your password"
                required
                style={{ color: "#ffffff", backgroundColor: "#2D3748" }}
              />
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Confirm your password"
                required
                style={{ color: "#ffffff", backgroundColor: "#2D3748" }}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm font-medium text-center">
                {error}
              </div>
            )}

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          {/* Home Link */}
          <div className="flex justify-center mt-6">
            <Link
              to="/"
              className="text-white text-lg font-semibold hover:underline transition duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
