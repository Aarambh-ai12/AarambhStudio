import React, { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Inquiry Data", path: "/register" },
    { label: "Add Student", path: "/add-student" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#1d794c] sticky top-0 z-50 shadow-md font-poppins">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <div
          onClick={() => handleNavigation("/dashboard")}
          className="text-white text-2xl font-bold cursor-pointer tracking-wide hover:text-gray-200 transition duration-300"
        >
          Aarambh Fit & Flow
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="text-white font-semibold hover:text-gray-200 transition duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={logOut}
            className="bg-white text-[#1d794c] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Logout
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Right-to-Left Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1d794c] shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-20 space-y-4 px-6">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className="text-white font-semibold text-left hover:text-gray-200 transition duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              logOut();
              setIsOpen(false);
            }}
            className="mt-4 bg-white text-[#1d794c] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default AdminNavbar;
