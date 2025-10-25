import React from "react";

const PaymentSummary = ({ student, formatDate }) => (
  <div className="text-right mb-10 pr-2">
    <p className="font-medium text-gray-700">
      Total Fees:{" "}
      <span className="text-green-700 font-semibold text-lg">
        ₹{student.fees.toLocaleString()}
      </span>
    </p>
    {student.paymentStatus !== "Paid" && (
      <p className="text-xs text-gray-600 italic mt-1">
        *Payment due by {formatDate(student.dueDate)}
      </p>
    )}
  </div>
);

export default PaymentSummary;
