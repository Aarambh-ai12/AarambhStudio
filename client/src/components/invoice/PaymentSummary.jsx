import React from "react";

const PaymentSummary = ({ student, formatDate }) => (
  <div className="flex flex-col items-end mb-5 pr-2 md:pr-6">
    {/* Total Fees */}
    <p className="text-gray-700 text-base md:text-lg">
      Total Fees:{" "}
      <span className="text-green-700 font-semibold text-lg md:text-xl">
        ₹{student.fees.toLocaleString()}
      </span>
    </p>

    {/* Due Date Note */}
    {student.paymentStatus !== "Paid" && (
      <p className="text-gray-600 text-sm italic mt-1 md:mt-2">
        *Payment due by {formatDate(student.dueDate)}
      </p>
    )}
  </div>
);

export default PaymentSummary;
