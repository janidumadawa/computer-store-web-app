import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:1000/admin/login", {
        username,
        password,
      });

      // Handle successful login
      setError(""); // Clear any previous errors
      const token = response.data.token;
      localStorage.setItem("authToken", token);

      alert("Login successful!");
      navigate("/adminDashboard"); // Redirect to the admin dashboard
    } catch (err) {
      setError(err.response?.data?.message || "Error logging in.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 to-black">
      {/* Top Header */}
      <header className="w-full py-6 bg-gray-800 text-white text-center fixed top-0 left-0 z-10">
        <h1 className="text-4xl font-bold">Janidu Computers</h1>
        <h2 className="text-lg mt-2">Admin Login - Access Your Dashboard</h2>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center pt-60 pr-20">
        {" "}
        {/* Increased padding from pt-24 to pt-32 */}
        {/* Left Side: Register Prompt */}
        <div className="w-1/2 p-12 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-white mb-6">
            Don't have an account? Register as an Admin
          </h1>
          {/* Use Link to navigate to the AdminRegister page */}
          <Link
            to="/registerAdmin"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Register
          </Link>
        </div>
        {/* Right Side: Login Form */}
        <div className="w-1/2 p-20 bg-gray-800 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8">Admin Login</h2>
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
                className="w-full px-4 py-3 bg-gray-700 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your username"
                required
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
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm font-medium text-center">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Login
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

export default AdminLogin;
