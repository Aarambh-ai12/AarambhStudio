import React from "react";

const InquiryRow = ({ student, index }) => {
  return (
    <tr
      className={
        index % 2 === 0
          ? "bg-gray-50 hover:bg-gray-100 transition duration-150"
          : "bg-white hover:bg-gray-100 transition duration-150"
      }
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index + 1}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {student.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-700 font-medium">
        {student.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {student.phone}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {student.danceStyle}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
        {student.timeSlot}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(student.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </td>
    </tr>
  );
};

export default InquiryRow;
