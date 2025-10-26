import React from "react";
import { SCHEDULE } from "../../constant/data";

const Schedule = () => (
  <section id="schedule" className="py-20 px-5 bg-gray-50" data-aos="fade-up">
    <h2 className="text-4xl md:text-5xl font-poppins mb-12 text-center text-[#1d794c]">
      Class Schedule
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full max-w-5xl mx-auto border border-gray-200 shadow-lg rounded-xl bg-white">
        <thead className="bg-[#1d794c] text-white uppercase tracking-wider text-sm md:text-base">
          <tr>
            <th className="p-4">Day</th>
            <th className="p-4">Dance</th>
            <th className="p-4">Yoga</th>
            <th className="p-4">Zumba</th>
          </tr>
        </thead>
        <tbody className="text-center text-gray-700 text-sm md:text-base">
          {SCHEDULE.map((item) => (
            <tr
              key={item.day}
              className="border-t border-gray-200 hover:bg-[#e6f4ea] transition-all duration-300"
            >
              <td className="p-4 font-medium">{item.day}</td>
              <td className="p-4">{item.dance}</td>
              <td className="p-4">{item.yoga}</td>
              <td className="p-4">{item.zumba}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default Schedule;
