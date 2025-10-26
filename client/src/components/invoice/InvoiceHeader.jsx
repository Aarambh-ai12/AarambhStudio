import React from "react";
import Images from "../../assets/images";

const InvoiceHeader = ({ contact }) => (
  <div className="text-center border-b border-gray-300 pb-6 mb-5 print:border-b-2">
    {/* Logo */}
    <img
      src={Images.Logo}
      alt="Aarambh Studio Logo"
      className="h-24 w-24 mx-auto mb-4"
    />

    {/* Studio Name */}
    <h1 className="text-4xl font-extrabold text-green-700 uppercase tracking-wide">
      Aarambh Dance Studio
    </h1>

    {/* Tagline */}
    <p className="text-gray-600 italic text-lg mt-1">“Fit and Flow”</p>

    {/* Contact Info */}
    <div className="mt-1 flex flex-col md:flex-col justify-center items-center gap-1 text-gray-600 text-sm">
      {contact.location && <span>{contact.location}</span>}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center">
        <span>📞 {contact.phone}</span>
      <span>✉️ {contact.email}</span>
      </div>
    </div>
  </div>
);

export default InvoiceHeader;
