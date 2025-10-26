import React from "react";
import { CONTACT_INFO, SOCIAL_MEDIA } from "../../constant/data";

const InvoiceFooter = () => (
  <div className="mt-5 w-full px-4 md:px-16 print:px-0">
    {/* Signatures Section */}
    <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-8">
      {/* Student Signature */}
      <div className="flex flex-col items-center w-full sm:w-1/2">
        <div className="h-10 border-b border-gray-400 w-40 mx-auto"></div>
        <p className="mt-2 text-sm md:text-base font-semibold text-gray-700">
          Student Signature
        </p>
      </div>

      {/* Authorized Signatory */}
      <div className="flex flex-col items-center w-full sm:w-1/2">
        <div className="h-10 border-b border-gray-400 w-40 mx-auto"></div>
        <p className="mt-2 text-sm md:text-base font-semibold text-gray-700">
          Authorized Signatory
        </p>
      </div>
    </div>

    {/* Divider */}
    <hr className="border-gray-300 my-6" />

    {/* Studio Details */}
    <div className="text-center text-gray-600 text-xs md:text-sm space-y-1">
      <p>
        Aarambh Dance Studio | Krrish Arya Heights, Shop No.5, Diva (E), Thane
      </p>
      <p>
  Website: <span className="font-semibold">{SOCIAL_MEDIA.website}</span> | 
  Email: <span className="font-semibold">{CONTACT_INFO.email}</span>
</p>
    </div>

    {/* Footer Note */}
    <p className="text-center text-gray-600 italic text-xs md:text-sm mt-4 max-w-2xl mx-auto">
      “Thank you for joining Aarambh Dance Studio. We’re excited to see you move
      to the rhythm of your dreams!”
    </p>
  </div>
);

export default InvoiceFooter;
