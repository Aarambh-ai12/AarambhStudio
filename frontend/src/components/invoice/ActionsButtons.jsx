import React from "react";

const ActionButtons = ({ handlePrint }) => (
  <div className="flex gap-6 mt-10 print:hidden">
    <button
      onClick={handlePrint}
      className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition font-semibold shadow-md"
    >
      🖨️ Print Invoice
    </button>
  </div>
);

export default ActionButtons;
