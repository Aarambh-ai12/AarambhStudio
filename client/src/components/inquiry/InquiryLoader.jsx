import React from "react";

const InquiryLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="h-16 w-16 border-4 border-t-4 border-green-600 border-opacity-70 rounded-full animate-spin"></div>
      <p className="ml-4 text-lg text-gray-700">Loading student data...</p>
    </div>
  );
};

export default InquiryLoader;
