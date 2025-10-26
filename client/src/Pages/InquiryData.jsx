import axios from "axios";
import React, { useEffect, useState } from "react";
import InquiryLoader from "../components/inquiry/InquiryLoader";
import InquiryEmpty from "../components/inquiry/InquiryEmpty";
import InquiryTable from "../components/inquiry/InquiryTable";

const InquiryData = () => {
  const [registerData, setRegisterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegisterData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/register/getallregister`
        );
        setRegisterData(
          Array.isArray(response.data.allRegister)
            ? response.data.allRegister
            : []
        );
      } catch (err) {
        console.error("Error fetching registered students:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRegisterData();
  }, []);

  if (loading) return <InquiryLoader />;
  if (registerData.length === 0) return <InquiryEmpty />;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b-2 border-green-500 pb-2">
          Inquiry Page 🎓
        </h1>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Total Registered: {registerData.length}
            </h2>
          </div>

          <InquiryTable data={registerData} />

          <div className="p-4 sm:p-6 text-sm text-gray-500 border-t border-gray-200">
            End of student registration list.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryData;
