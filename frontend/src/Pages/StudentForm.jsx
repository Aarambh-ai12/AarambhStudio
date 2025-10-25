import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import StudentInput from "../components/studentForm/StudentInput";
import StudentSelect from "../components/studentForm/StudentSelect";
import StudentTextarea from "../components/studentForm/StudentTextarea";
import StudentStatus from "../components/studentForm/StudentStatus";

const StudentForm = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    invoiceNumber: "",
    danceStyle: "",
    dancePackage: "",
    fees: "",
    paymentMode: "cash",
    paymentStatus: "pending",
    startDate: "",
    endDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post("http://localhost:5000/api/student/add", student);
      toast.success("Student added successfully!");
      setSuccess("Student registered successfully!");
      setStudent({
        name: "",
        email: "",
        phone: "",
        address: "",
        invoiceNumber: "",
        danceStyle: "",
        dancePackage: "",
        fees: "",
        paymentMode: "cash",
        paymentStatus: "pending",
        startDate: "",
        endDate: "",
      });
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err) {
      const message = err.response?.data?.message || "Something went wrong.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-10 bg-white shadow-2xl rounded-3xl my-12">
      <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
        Add Student
      </h2>

      <StudentStatus success={success} error={error} />

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <StudentInput
          label="Name *"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
        <StudentInput
          label="Email *"
          name="email"
          type="email"
          value={student.email}
          onChange={handleChange}
          required
        />
        <StudentInput
          label="Phone *"
          name="phone"
          type="tel"
          value={student.phone}
          onChange={handleChange}
          required
        />
        <StudentInput
          label="Dance Style *"
          name="danceStyle"
          value={student.danceStyle}
          onChange={handleChange}
          required
        />
        <StudentInput
          label="Dance Package *"
          name="dancePackage"
          value={student.dancePackage}
          onChange={handleChange}
          required
        />
        <StudentInput
          label="Fees *"
          name="fees"
          type="number"
          value={student.fees}
          onChange={handleChange}
          required
        />
        <StudentSelect
          label="Payment Mode"
          name="paymentMode"
          value={student.paymentMode}
          options={["cash", "card", "upi", "online"]}
          onChange={handleChange}
        />
        <StudentSelect
          label="Payment Status"
          name="paymentStatus"
          value={student.paymentStatus}
          options={["pending", "Paid"]}
          onChange={handleChange}
        />
        <StudentInput
          label="Start Date"
          name="startDate"
          type="date"
          value={student.startDate}
          onChange={handleChange}
        />
        <StudentInput
          label="End Date"
          name="endDate"
          type="date"
          value={student.endDate}
          onChange={handleChange}
        />
        <StudentTextarea
          label="Address"
          name="address"
          value={student.address}
          onChange={handleChange}
        />

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-700 text-white px-12 py-3 rounded-xl font-semibold hover:bg-green-800 transition duration-300 shadow-lg"
          >
            {loading ? "Submitting..." : "Add Student"}
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default StudentForm;
