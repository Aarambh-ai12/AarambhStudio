import React from "react";

const StudentStatus = ({ success, error }) => (
  <>
    {success && (
      <p className="bg-green-100 text-green-700 p-3 rounded-md mb-6 border border-green-200 text-center">
        {success}
      </p>
    )}
    {error && (
      <p className="bg-red-100 text-red-700 p-3 rounded-md mb-6 border border-red-200 text-center">
        {error}
      </p>
    )}
  </>
);

export default StudentStatus;
