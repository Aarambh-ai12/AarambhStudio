import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setAdmin } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/login`,
        credentials
      );
      setAdmin(response.data.email);
      localStorage.setItem("admin", JSON.stringify(response.data.email));

      setIsLoggedIn(true);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1d794c] to-[#2a9451] px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6 border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-center text-[#1d794c]">
          Admin Login
        </h2>

        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full p-4 border border-gray-300 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#2a9451] focus:border-[#2a9451] transition duration-200"
        />

        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full p-4 border border-gray-300 rounded-lg bg-white/90 focus:outline-none focus:ring-2 focus:ring-[#2a9451] focus:border-[#2a9451] transition duration-200"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#1d794c] to-[#2a9451] text-white py-3 rounded-lg font-semibold hover:opacity-90 hover:shadow-md transition duration-300"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default AdminLogin;
