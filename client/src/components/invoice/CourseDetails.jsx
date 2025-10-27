import React from "react";

const CourseDetails = ({ student, formatDate }) => (
  <div className="overflow-x-auto w-full rounded-xl mb-6">
    <table className="min-w-full border border-gray-300 text-xs md:text-sm leading-tight">
      <thead className="bg-green-700 text-white">
        <tr>
          <th className="px-4 py-2 text-left">Dance Style</th>
          <th className="px-4 py-2 text-left">Package</th>
          <th className="px-4 py-2 text-center">Start Date</th>
          <th className="px-4 py-2 text-center">End Date</th>
          <th className="px-4 py-2 text-center">Costume Fees (₹)</th>
          <th className="px-4 py-2 text-center">Admission Fees (₹)</th>
          <th className="px-4 py-2 text-right">Fees (₹)</th>
          <th className="px-4 py-2 text-center">Mode</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-t hover:bg-gray-50">
          <td className="px-4 py-1.5 font-semibold">{student.danceStyle}</td>
          <td className="px-4 py-1.5 font-semibold text-center">{student.dancePackage}</td>
          <td className="px-4 py-1.5 text-center">
            {formatDate(student.startDate)}
          </td>
          <td className="px-4 py-1.5 text-center">
            {formatDate(student.endDate)}
          </td>
          <td className="px-4 py-1.5 text-center font-semibold text-green-700">
            ₹{Number(student?.costumeFees || 0).toLocaleString()}
          </td>
          <td className="px-4 py-1.5 text-center font-semibold text-green-700">
            ₹{Number(student?.admissionFees || 0).toLocaleString()}
          </td>
          <td className="px-4 py-1.5 text-right font-semibold text-green-700">
            ₹{Number(student?.fees || 0).toLocaleString()}
          </td>
          <td className="px-4 py-1.5 text-center">
            {student.paymentMode?.toUpperCase()}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CourseDetails;
