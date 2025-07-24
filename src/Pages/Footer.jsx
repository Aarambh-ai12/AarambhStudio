import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold">Aarambh Studio</h3>
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#about" className="hover:text-pink-500 transition">
            About
          </a>
          <a href="#instructors" className="hover:text-pink-500 transition">
            Instructors
          </a>
          <a href="#contact" className="hover:text-pink-500 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
