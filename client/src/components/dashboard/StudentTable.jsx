import React from "react";

const StudentTable = ({ students, navigate }) => {
  return (
    <div className="overflow-x-auto bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-gray-200">
      <table className="min-w-full text-left border-collapse">
        {/* Table Header */}
        <thead className="bg-[#1d794c] text-white">
          <tr>
            {["Sr. No", "Name", "Dance Style", "Package", "Total Fees (₹)", "Status", "Actions"].map((header, i) => (
              <th
                key={i}
                className="px-5 py-3 text-sm font-semibold uppercase tracking-wide border-b border-green-600"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => {
              const totalFees =
                (student.fees || 0) +
                (student.costumeFees || 0) +
                (student.admissionFees || 0);

              return (
                <tr
                  key={student._id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-5 py-3 text-gray-700 font-medium">{index + 1}</td>
                  <td className="px-5 py-3 font-semibold text-gray-800">{student.name}</td>
                  <td className="px-5 py-3 text-gray-700">{student.danceStyle}</td>
                  <td className="px-5 py-3 text-gray-700">{student.dancePackage}</td>
                  <td className="px-5 py-3 font-semibold text-green-700">
                    ₹{totalFees.toLocaleString()}
                  </td>
                  <td
                    className={`px-5 py-3 font-medium capitalize ${
                      student.paymentStatus === "Paid"
                        ? "text-green-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {student.paymentStatus}
                  </td>
                  <td className="px-5 py-3">
                    <button
                      onClick={() => navigate(`/invoice/${student._id}`)}
                      className="bg-[#2a9451] text-white px-4 py-1.5 rounded-lg hover:bg-[#237c45] transition-all duration-200 shadow-sm text-sm"
                    >
                      Print Receipt
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan="7"
                className="px-4 py-6 text-center text-gray-500 italic"
              >
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
