import React from "react";
import InquiryRow from "./InquiryRow";

const InquiryTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-green-600">
          <tr>
            {[
              "#",
              "Name",
              "Email",
              "Phone",
              "Dance Style",
              "Time Slot",
              "Registered On",
            ].map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data.map((student, index) => (
            <InquiryRow
              key={student._id || index}
              student={student}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InquiryTable;
