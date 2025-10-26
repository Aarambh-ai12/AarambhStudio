import React from "react";

const StudentDetails = ({ student }) => (
  <div className="border border-gray-300 rounded-lg mb-8 w-full">
    {/* Header */}
    <div className="bg-green-700 text-white px-4 py-2 rounded-t-lg">
      <h3 className="font-semibold text-lg md:text-xl">Student Details</h3>
    </div>

    {/* Details */}
    <div className="px-4 md:px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base text-gray-700">
      <p>
        <span className="font-semibold">Name:</span> {student.name}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {student.email}
      </p>
      <p>
        <span className="font-semibold">Phone:</span> {student.phone}
      </p>
      <p>
        <span className="font-semibold">Address:</span> {student.address || "N/A"}
      </p>
    </div>
  </div>
);

export default StudentDetails;
