import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import { CONTACT_INFO } from "../constant/data";
import InvoiceHeader from "../components/invoice/InvoiceHeader";
import InvoiceTitle from "../components/invoice/InvoiceTitle";
import InvoiceInfo from "../components/invoice/InvoiceInfo";
import StudentDetails from "../components/invoice/StudentDetails";
import CourseDetails from "../components/invoice/CourseDetails";
import PaymentSummary from "../components/invoice/PaymentSummary";
import InvoiceFooter from "../components/invoice/InvoiceFooter";
import ActionButtons from "../components/invoice/ActionsButtons";
import LoadingSpinner from "../components/invoice/LoadingSpinner";

const InvoicePage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const invoiceRef = useRef();

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  // ✅ Fetch Student Data
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/student/${id}`);
        setStudent(res.data.student);
      } catch (err) {
        console.error("Error fetching student:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [id]);

  // ✅ Print
  const handlePrint = () => {
    const printFrame = document.createElement("iframe");
    printFrame.style.position = "absolute";
    printFrame.style.width = "0";
    printFrame.style.height = "0";
    printFrame.style.border = "none";
    document.body.appendChild(printFrame);

    const doc = printFrame.contentWindow.document;
    const styleLinks = Array.from(
      document.querySelectorAll("link[rel='stylesheet'], style")
    )
      .map((link) => link.outerHTML)
      .join("\n");

    doc.open();
    doc.write(`
      <html>
        <head>
          <title>Print Invoice</title>
          ${styleLinks}
          <style>
            @page { size: A4; margin: 5mm; }
            body { background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          </style>
        </head>
        <body>${invoiceRef.current.outerHTML}</body>
      </html>
    `);
    doc.close();

    printFrame.onload = () => {
      printFrame.contentWindow.focus();
      printFrame.contentWindow.print();
      setTimeout(() => document.body.removeChild(printFrame), 1000);
    };
  };

  if (loading) return <LoadingSpinner />;
  if (!student)
    return (
      <div className="text-center text-gray-600 mt-20">
        No student found for ID: {id}
      </div>
    );

  return (
    <div className="flex flex-col items-center bg-gray-100 py-10 px-4 print:bg-white">
      <div
        ref={invoiceRef}
        className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-2xl border border-gray-300 rounded-xl p-10 text-gray-800 print:border-none print:shadow-none"
      >
        <InvoiceHeader contact={CONTACT_INFO} />
        <InvoiceTitle />
        <InvoiceInfo student={student} formatDate={formatDate} />
        <StudentDetails student={student} />
        <CourseDetails student={student} formatDate={formatDate} />
        <PaymentSummary student={student} formatDate={formatDate} />
        <InvoiceFooter />
      </div>

      <ActionButtons handlePrint={handlePrint} />
    </div>
  );
};

export default InvoicePage;
