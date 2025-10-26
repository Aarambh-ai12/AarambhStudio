import React from "react";

const InvoiceInfo = ({ student, formatDate }) => (
  <div className="flex justify-between mb-6 text-sm">
    <div>
      <p className="font-medium text-gray-700">
        Invoice No:{" "}
        <span className="text-green-700 font-semibold">
          {student.invoiceNumber}
        </span>
      </p>
      <p className="text-gray-600">
        Date of Issue: {formatDate(student.createdAt)}
      </p>
    </div>
    <div className="text-right">
      <p className="font-medium text-gray-700">Payment Status:</p>
      <p
        className={`inline-block px-3 py-1 mt-1 text-sm font-semibold rounded-full text-white ${
          student.paymentStatus === "Paid" ? "bg-green-600" : "bg-red-500"
        }`}
      >
        {student.paymentStatus}
      </p>
    </div>
  </div>
);

export default InvoiceInfo;
