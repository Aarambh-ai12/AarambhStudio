import React from "react";

const StudentDetails = ({ student }) => (
  <div className="border border-gray-300 rounded-lg mb-8">
    <div className="bg-green-700 text-white px-4 py-2 rounded-t-lg">
      <h3 className="font-semibold text-lg">Student Details</h3>
    </div>
    <div className="px-6 py-4 space-y-1 text-sm">
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Email:</strong> {student.email}
      </p>
      <p>
        <strong>Phone:</strong> {student.phone}
      </p>
      <p>
        <strong>Address:</strong> {student.address}
      </p>
    </div>
  </div>
);

export default StudentDetails;
