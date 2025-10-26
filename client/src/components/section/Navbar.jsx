import React, { useState } from "react";
import { NAV_LINKS } from "../../constant/data";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Right-to-left sidebar
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLogin = () => {
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <nav className="bg-[#1d794c] sticky top-0 z-50 font-poppins shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="text-white text-2xl font-bold cursor-pointer tracking-wide hover:text-gray-200 transition duration-300"
        >
          Aarambh Fit & Flow
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.id} className="relative group">
                <button className="text-white text-base hover:text-gray-200 transition duration-300 font-semibold">
                  {link.label}
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                  {link.dropdown.map((sub, idx) => (
                    <a
                      key={idx}
                      href={`#${sub.id}`}
                      className="block px-4 py-2 hover:bg-green-100 font-bold"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-white text-base hover:text-gray-200 transition duration-300 font-bold"
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={handleLogin}
            className="bg-white text-[#1d794c] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Admin Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Right-to-Left Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1d794c] shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col mt-20 space-y-4 px-6">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div key={link.id} className="space-y-2">
                <span className="text-white font-semibold">{link.label}</span>
                <div className="pl-4 flex flex-col space-y-1">
                  {link.dropdown.map((sub, idx) => (
                    <a
                      key={idx}
                      href={`#${sub.id}`}
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:text-gray-200 transition duration-300"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="text-white font-semibold hover:text-gray-200 transition duration-300"
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={handleLogin}
            className="mt-4 bg-white text-[#1d794c] font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Admin Login
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

export default Navbar;
