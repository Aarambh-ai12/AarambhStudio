import React from "react";

const StudentTextarea = ({ label, name, value, onChange }) => (
  <div className="md:col-span-2">
    <label className="block mb-2 font-semibold text-gray-700">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
    />
  </div>
);

export default StudentTextarea;
