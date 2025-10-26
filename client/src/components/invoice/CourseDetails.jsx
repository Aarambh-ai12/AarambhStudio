import React from "react";

const CourseDetails = ({ student, formatDate }) => (
  <div className="overflow-x-auto w-full">
    <table className="min-w-full border border-gray-300 mb-8 text-sm">
      <thead className="bg-green-700 text-white">
        <tr>
          <th className="p-3 text-left">Dance Style</th>
          <th className="p-3 text-left">Package</th>
          <th className="p-3 text-center">Start Date</th>
          <th className="p-3 text-center">End Date</th>
          <th className="p-3 text-right">Fees (₹)</th>
          <th className="p-3 text-center">Mode</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="p-3">{student.danceStyle}</td>
          <td className="p-3">{student.dancePackage}</td>
          <td className="p-3 text-center">{formatDate(student.startDate)}</td>
          <td className="p-3 text-center">{formatDate(student.endDate)}</td>
          <td className="p-3 text-right font-bold text-green-700">
            ₹{student.fees.toLocaleString()}
          </td>
          <td className="p-3 text-center">{student.paymentMode}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CourseDetails;
