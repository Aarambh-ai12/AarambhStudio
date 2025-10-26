import React from "react";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#1d794c] border-opacity-50"></div>
  </div>
);

export default LoadingSpinner;
