import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

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
        "http://localhost:5000/api/register/add-register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Message Send Successfully");
    } catch (error) {
      toast.error("Error submitting form");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUserData({ ...userData, [e.target.name]: value });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl space-y-6 w-full border border-gray-200 transition-all duration-300 hover:shadow-2xl flex flex-col justify-center items-center"
        data-aos="fade-left"
      >
        <h3 className="text-2xl font-semibold text-center text-[#1d794c] mb-6">
          Register for Dance Class
        </h3>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] focus:border-[#2a9451] transition duration-200 bg-white/90"
            required
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            placeholder="Email Address"
            onChange={(e) => handleChange(e)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] focus:border-[#2a9451] transition duration-200 bg-white/90"
            required
          />
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={(e) => handleChange(e)}
            placeholder="Phone Number"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] focus:border-[#2a9451] transition duration-200 bg-white/90"
            required
          />
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={userData.age}
            onChange={(e) => handleChange(e)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] focus:border-[#2a9451] transition duration-200 bg-white/90"
            required
          />
        </div>

        <select
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] focus:border-[#2a9451] transition duration-200 bg-white/90"
          required
          name="danceStyle"
          value={userData.danceStyle}
          onChange={(e) => handleChange(e)}
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
          onChange={(e) => handleChange(e)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] focus:border-[#2a9451] transition duration-200 bg-white/90"
          required
        >
          <option value="">Preferred Time Slot</option>
          <option value="Morning">Morning (7 AM – 9 AM)</option>
          <option value="Afternoon">Afternoon (12 PM – 2 PM)</option>
          <option value="Evening">Evening (6 PM – 8 PM)</option>
        </select>

        <textarea
          placeholder="Any Message or Special Request"
          name="message"
          value={userData.message}
          onChange={(e) => handleChange(e)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2a9451] focus:border-[#2a9451] transition duration-200 bg-white/90"
          rows="4"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-linear-to-r from-[#1d794c] to-[#2a9451] text-white py-3 rounded-lg font-semibold hover:opacity-90 hover:shadow-md transition-all duration-300"
        >
          Submit Registration
        </button>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </form>
    </>
  );
};

export default ContactForm;
