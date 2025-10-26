import React from "react";

const StudentInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) => (
  <div>
    <label className="block mb-2 font-semibold text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
    />
  </div>
);

export default StudentInput;
