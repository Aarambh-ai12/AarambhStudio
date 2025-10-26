import React from "react";

const StudentSelect = ({ label, name, value, options, onChange }) => (
  <div>
    <label className="block mb-2 font-semibold text-gray-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
    >
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
  </div>
);

export default StudentSelect;
