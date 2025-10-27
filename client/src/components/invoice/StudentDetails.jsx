import React from "react";

const StudentDetails = ({ student }) => (
  <div className="border border-gray-200 rounded-xl mb-6 w-full shadow-sm bg-white/80 backdrop-blur-sm">
    {/* Header */}
    <div className="bg-gradient-to-r from-green-700 to-green-600 text-white px-5 py-2.5 rounded-t-xl">
      <h3 className="font-semibold text-base md:text-lg tracking-wide">
        Student Details
      </h3>
    </div>

    {/* Details Section */}
    <div className="px-5 md:px-6 py-3 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 text-xs md:text-sm text-gray-700 leading-snug">
      <div>
        <span className="font-semibold text-gray-800">Name: </span>
        <span className="text-gray-600">{student.name}</span>
      </div>

      <div>
        <span className="font-semibold text-gray-800">Email: </span>
        <span className="text-gray-600">{student.email}</span>
      </div>

      <div>
        <span className="font-semibold text-gray-800">Phone: </span>
        <span className="text-gray-600">{student.phone}</span>
      </div>

      <div>
        <span className="font-semibold text-gray-800">Address: </span>
        <span className="text-gray-600">{student.address || "N/A"}</span>
      </div>
    </div>
  </div>
);

export default StudentDetails;
