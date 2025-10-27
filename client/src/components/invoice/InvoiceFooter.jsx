import React from "react";
import { CONTACT_INFO, SOCIAL_MEDIA } from "../../constant/data";

const InvoiceFooter = () => (
  <div className="mt-4 w-full px-4 md:px-12 print:px-0 text-gray-600 text-xs md:text-sm">

    {/* Divider */}
    <hr className="border-gray-300 my-4" />

    {/* Studio Details */}
    <div className="text-center space-y-0.5 leading-tight">
      <p>
        Aarambh Dance Studio | Krrish Arya Heights, Shop No.5, Diva (E), Thane
      </p>
      <p>
        Website:{" "}
        <span className="font-semibold">{SOCIAL_MEDIA.website}</span> | Email:{" "}
        <span className="font-semibold">{CONTACT_INFO.email}</span>
      </p>
    </div>

    {/* Footer Note */}
    <p className="text-center italic mt-2 max-w-xl mx-auto leading-snug">
      “Thank you for joining Aarambh Dance Studio. We’re excited to see you move
      to the rhythm of your dreams!”
    </p>
  </div>
);

export default InvoiceFooter;
