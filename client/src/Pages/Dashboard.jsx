import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBox from "../components/dashboard/SearchBox";
import StudentTable from "../components/dashboard/StudentTable";
import Pagination from "../components/dashboard/Pagination";
import LoadingSpinner from "../components/dashboard/LoadingSpinner";

const Dashboard = () => {
  const navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("admin") || "null");
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  useEffect(() => {
    if (!admin) navigate("/admin/login");
  }, [admin, navigate]);

  useEffect(() => {
    const getStudentData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/student");
        setStudents(response.data.allStudent);
        setFilteredStudents(response.data.allStudent);
      } catch (error) {
        console.error("Error fetching students:", error.message);
      } finally {
        setLoading(false);
      }
    };
    getStudentData();
  }, []);

  // Filter students on search
  useEffect(() => {
    const filtered = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.danceStyle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.dancePackage.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
    setCurrentPage(1);
  }, [searchTerm, students]);

  // Pagination logic
  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6f4ec] to-[#cdebdc] text-[#1d794c]">
      <main className="p-8 max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold mb-4">Joined Students</h1>

        <SearchBox value={searchTerm} onChange={setSearchTerm} />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <StudentTable students={currentStudents} navigate={navigate} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
