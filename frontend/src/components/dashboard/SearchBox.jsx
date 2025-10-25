import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name, dance style or package..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] focus:border-[#2a9451] transition"
      />
    </div>
  );
};

export default SearchBox;
