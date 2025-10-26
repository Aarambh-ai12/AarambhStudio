import React from "react";
import { TESTIMONIALS } from "../../constant/data";

const Testimonials = () => (
  <section
    id="testimonials"
    className="py-20 px-5 bg-gray-50"
    data-aos="fade-up"
  >
    <h2 className="text-4xl text-center md:text-5xl font-poppins font-semibold text-[#1d794c] mb-6 tracking-tight">
      What Our Members Say
    </h2>
    <div className="w-20 h-1 bg-[#2a9451] mx-auto mb-12 rounded-full"></div>

    <div className="flex flex-wrap justify-center gap-8">
      {TESTIMONIALS.map((t) => (
        <div
          key={t.name}
          className="bg-white p-8 rounded-2xl shadow-lg w-80 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-gray-700 italic text-base md:text-lg leading-relaxed">
            “{t.text}”
          </p>
          <h4 className="mt-6 font-semibold text-[#1d794c] text-lg md:text-xl">
            — {t.name}
          </h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
