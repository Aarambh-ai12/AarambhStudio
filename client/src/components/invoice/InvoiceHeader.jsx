import React from "react";
import Images from "../../assets/images";

const InvoiceHeader = ({ contact }) => (
  <div className="text-center border-b pb-2 mb-6">
    <img
      src={Images.Logo}
      alt="Aarambh Studio Logo"
      className="h-24 w-24 mx-auto mb-3"
    />
    <h1 className="text-3xl font-bold text-green-700 uppercase">
      Aarambh Dance Studio
    </h1>
    <p className="text-gray-600 italic">“Fit and Flow”</p>
    <div className="text-sm text-gray-600">
      <p>{contact.location}</p>
      <p>
        📞 {contact.phone} · ✉️ {contact.email}
      </p>
    </div>
  </div>
);

export default InvoiceHeader;
