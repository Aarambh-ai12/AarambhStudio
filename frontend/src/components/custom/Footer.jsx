import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-r from-[#166534] to-[#22c55e] text-white pt-10 pb-6 px-6">
    <div className="max-w-6xl mx-auto text-center space-y-4">
      {/* Social Icons */}

      {/* Divider & Text */}
      <div className="border-t border-white/20 pt-4 space-y-1">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Aarambh Fit & Flow. All Rights Reserved.
        </p>
        <p className="text-xs italic opacity-80">
          Made with ❤️ by Aarambh Studio
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
