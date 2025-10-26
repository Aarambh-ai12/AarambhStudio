import React from "react";

const InvoiceFooter = () => (
  <div className="mt-12 w-full">
    {/* Contact & Signature Section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8 md:gap-0">
      
      {/* Contact Info */}
      <div className="flex flex-col md:flex-row md:space-x-16 gap-6 md:gap-0 items-center md:items-start">
        <div className="flex flex-col items-center md:items-start space-y-1">
          <p className="text-sm font-semibold text-green-700">@aarambh_dance_studio</p>
          <p className="text-xs text-gray-500">Follow us on Instagram</p>
        </div>
        <div className="flex flex-col items-center md:items-start space-y-1">
          <p className="text-sm font-semibold text-green-700">+91 4444-8855</p>
          <p className="text-xs text-gray-500">Contact us on WhatsApp</p>
        </div>
      </div>

      {/* Signatures */}
      <div className="flex flex-col sm:flex-row gap-6 md:gap-16 w-full md:w-auto justify-center">
        <div className="text-center">
          <div className="h-10 border-b border-gray-400 w-40 mx-auto"></div>
          <p className="mt-2 text-sm font-medium">Student Signature</p>
        </div>
        <div className="text-center">
          <div className="h-10 border-b border-gray-400 w-40 mx-auto"></div>
          <p className="mt-2 text-sm font-medium">Authorized Signatory</p>
        </div>
      </div>
    </div>

    {/* Footer Note */}
    <p className="text-center text-gray-600 italic text-sm mt-12 px-4 md:px-0">
      “Thank you for joining Aarambh Dance Studio. We’re excited to see you move
      to the rhythm of your dreams!”
    </p>
  </div>
);

export default InvoiceFooter;
