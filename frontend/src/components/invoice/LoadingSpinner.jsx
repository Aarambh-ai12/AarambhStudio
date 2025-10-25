import React from "react";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <div className="h-12 w-12 border-t-4 border-green-600 border-opacity-50 rounded-full animate-spin"></div>
  </div>
);

export default LoadingSpinner;
