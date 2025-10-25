import React from "react";

const StudentTable = ({ students, navigate }) => {
  return (
    <div className="overflow-x-auto bg-white/80 backdrop-blur-xl rounded-xl shadow-md border border-gray-200">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-[#1d794c] text-white">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Dance Style</th>
            <th className="px-4 py-3">Package</th>
            <th className="px-4 py-3">Fees</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student._id} className="border-t">
                <td className="px-4 py-3">{student.name}</td>
                <td className="px-4 py-3">{student.danceStyle}</td>
                <td className="px-4 py-3">{student.dancePackage}</td>
                <td className="px-4 py-3">₹{student.fees}</td>
                <td className="px-4 py-3">{student.paymentStatus}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => navigate(`/invoice/${student._id}`)}
                    className="bg-[#2a9451] text-white px-3 py-1 rounded-lg hover:opacity-90 transition"
                  >
                    Print Receipt
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
