import React from "react";
import { CLASSES } from "../../constant/data";

const Classes = () => (
  <section
    id="classes"
    className="py-24 px-6 bg-linear-to-b from-white via-white to-gray-50"
    data-aos="fade-up"
  >
    <div className="max-w-7xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-[#1d794c] mb-6 tracking-tight">
        Our Classes
      </h2>
      <div className="w-20 h-1 bg-[#2a9451] mx-auto mb-12 rounded-full"></div>

      {/* Class Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {CLASSES.map((item) => (
          <div
            key={item.title}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-transparent hover:border-[#2a9451]/20"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-56">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-[#1d794c] mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                {item.details.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Classes;
