import React from "react";

const PaymentSummarySection = ({ student, formatDate }) => {
  const totalFees =
    (student.costumeFees || 0) +
    (student.admissionFees || 0) +
    (student.fees || 0);

  return (
    <div className="w-full mt-4 md:mt-6">
      {/* Payment Summary */}
      <div className="flex flex-col items-end pr-2 md:pr-6 mb-4">
        <p className="text-gray-800 text-sm md:text-base">
          Total Fees:{" "}
          <span className="text-green-700 font-semibold text-lg md:text-xl">
            ₹{totalFees.toLocaleString()}
          </span>
        </p>

        {student.paymentStatus !== "Paid" && student.dueDate && (
          <p className="text-gray-600 text-xs italic mt-1">
            *Payment due by {formatDate(student.dueDate)}
          </p>
        )}
      </div>

      {/* Signatures Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 px-4 md:px-12 mt-6">
        {/* Student Signature */}
        <div className="flex flex-col items-center w-full sm:w-1/2">
          <div className="h-8 border-b border-gray-400 w-32"></div>
          <p className="mt-1 font-semibold text-gray-700 text-xs md:text-sm">
            Student Signature
          </p>
        </div>

        {/* Authorized Signatory */}
        <div className="flex flex-col items-center w-full sm:w-1/2">
          <div className="h-8 border-b border-gray-400 w-32"></div>
          <p className="mt-1 font-semibold text-gray-700 text-xs md:text-sm">
            Authorized Signatory
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummarySection;
