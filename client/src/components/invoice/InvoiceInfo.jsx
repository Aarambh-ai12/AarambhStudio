import React from "react";

const InvoiceInfo = ({ student, formatDate }) => (
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 text-sm md:text-base">
    {/* Invoice Details */}
    <div className="mb-3 md:mb-0">
      <p className="font-medium text-gray-700">
        Invoice No:{" "}
        <span className="text-green-700 font-semibold">{student.invoiceNumber}</span>
      </p>
      <p className="text-gray-600">Date of Issue: {formatDate(student.createdAt)}</p>
    </div>

    {/* Payment Status */}
    <div className="text-left md:text-right">
      <p className="font-medium text-gray-700">Payment Status:</p>
      <span
        className={`inline-block px-4 py-1 mt-1 text-sm md:text-base font-semibold rounded-full text-white ${
          student.paymentStatus === "Paid" ? "bg-green-600" : "bg-red-500"
        }`}
      >
        {student.paymentStatus}
      </span>
    </div>
  </div>
);

export default InvoiceInfo;
