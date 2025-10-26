import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/section/Navbar";
import StudentForm from "./Pages/StudentForm";
import Dashboard from "./Pages/Dashboard";
import InvoicePage from "./Pages/InvoicePage";
import Home from "./Pages/Home";
import Header from "./components/section/Header";
import Footer from "./components/section/Footer";
import AdminLogin from "./Pages/AdminLogin";
import AdminNavbar from "./components/admin/AdminNavbar";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import InquiryData from "./Pages/InquiryData";

function App() {
  // Track login status in state
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Header />
      {/* Show Navbar based on login */}
      {isLoggedIn ? <AdminNavbar /> : <Navbar />}

      <div className="">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AdminLogin />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-student"
            element={
              <ProtectedRoute>
                <StudentForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <InquiryData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/invoice/:id"
            element={
              <ProtectedRoute>
                <InvoicePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
