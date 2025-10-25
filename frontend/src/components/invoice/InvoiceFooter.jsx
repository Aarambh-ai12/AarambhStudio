import React from "react";

const InvoiceFooter = () => (
  <>
    <div className="flex justify-between items-start mt-12 w-full">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold text-green-700">
            @aarambh_dance_studio
          </p>
          <p className="text-xs text-gray-500">Follow us on Instagram</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold text-green-700">+91 4444-8855</p>
          <p className="text-xs text-gray-500">Contact us on WhatsApp</p>
        </div>
      </div>

      <div className="flex gap-16">
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

    <p className="text-center text-gray-600 italic text-sm mt-12">
      “Thank you for joining Aarambh Dance Studio. We’re excited to see you move
      to the rhythm of your dreams!”
    </p>
  </>
);

export default InvoiceFooter;
