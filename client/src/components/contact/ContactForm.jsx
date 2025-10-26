import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    danceStyle: "",
    timeSlot: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/register/add-register`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("🎉 Thank you for registering!");
      setUserData({
        name: "",
        email: "",
        phone: "",
        age: "",
        danceStyle: "",
        timeSlot: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("❌ Error submitting form. Please try again.");
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl space-y-6 w-full border border-gray-200 transition-all duration-300 hover:shadow-2xl flex flex-col justify-center items-center"
        data-aos="fade-left"
      >
        <h3 className="text-2xl font-semibold text-center text-[#1d794c] mb-6">
          Register for Dance Class
        </h3>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] transition duration-200 bg-white/90"
            required
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] transition duration-200 bg-white/90"
            required
          />
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] transition duration-200 bg-white/90"
            required
          />
          <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] transition duration-200 bg-white/90"
            required
          />
        </div>

        <select
          name="danceStyle"
          value={userData.danceStyle}
          onChange={handleChange}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] transition duration-200 bg-white/90"
        >
          <option value="">Preferred Dance Style</option>
          <option value="Bollywood">Bollywood</option>
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="Contemporary">Contemporary</option>
          <option value="Zumba">Zumba</option>
          <option value="Fusion">Fusion</option>
        </select>

        <select
          name="timeSlot"
          value={userData.timeSlot}
          onChange={handleChange}
          required
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] transition duration-200 bg-white/90"
        >
          <option value="">Preferred Time Slot</option>
          <option value="Morning">Morning (7 AM – 9 AM)</option>
          <option value="Afternoon">Afternoon (12 PM – 2 PM)</option>
          <option value="Evening">Evening (6 PM – 8 PM)</option>
        </select>

        <textarea
          name="message"
          value={userData.message}
          onChange={handleChange}
          placeholder="Any Message or Special Request"
          rows="4"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] transition duration-200 bg-white/90"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#1d794c] to-[#2a9451] text-white py-3 rounded-lg font-semibold hover:opacity-90 hover:shadow-md transition-all duration-300"
        >
          Submit Registration
        </button>
      </form>

      {/* ✅ ToastContainer placed once, outside the form */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default ContactForm;
