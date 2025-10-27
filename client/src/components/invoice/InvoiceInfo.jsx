import React from "react";

const InvoiceInfo = ({ student, formatDate }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 bg-white/70 backdrop-blur-md border border-gray-200 rounded-lg p-4 shadow-sm">
    {/* Invoice Details */}
    <div className="space-y-1">
      <p className="text-gray-700 font-semibold text-base md:text-lg">
        Invoice No:{" "}
        <span className="text-green-700 font-bold tracking-wide">
          {student.invoiceNumber}
        </span>
      </p>
      <p className="text-gray-600 text-sm md:text-base">
        Date of Issue:{" "}
        <span className="font-medium text-gray-700">
          {formatDate(student.createdAt)}
        </span>
      </p>
    </div>

    {/* Payment Status */}
    <div className="mt-3 md:mt-0 text-left md:text-right">
      <p className="font-semibold text-gray-700 mb-1">Payment Status</p>
      <span
        className={`inline-block px-4 py-1.5 rounded-full font-semibold text-sm md:text-base tracking-wide shadow-sm ${
          student.paymentStatus === "Paid"
            ? "bg-green-600 text-white"
            : "bg-red-500 text-white"
        }`}
      >
        {student.paymentStatus}
      </span>
    </div>
  </div>
);

export default InvoiceInfo;
