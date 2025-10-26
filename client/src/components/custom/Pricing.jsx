import React from "react";
import { PRICING } from "../../constant/data";

const Pricing = () => (
  <section
    id="pricing"
    className="py-20 px-5 bg-white text-center"
    data-aos="fade-up"
  >
    <h2 className="text-4xl md:text-5xl font-poppins font-semibold mb-4 tracking-tight drop-shadow-sm">
      Pricing Plans
    </h2>
    <div className="w-20 h-1 bg-[#2a9451] mx-auto mb-12 rounded-full"></div>

    <div className="flex flex-wrap justify-center gap-8">
      {PRICING.map((plan) => (
        <div
          key={plan.title}
          className="relative bg-gray-50 p-8 rounded-3xl shadow-xl w-full sm:w-80 md:w-72 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
        >
          {/* Optional Most Popular Badge */}
          {plan.title.includes("6 days") && (
            <span className="absolute top-4 right-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              Most Popular
            </span>
          )}

          <h3 className="text-2xl font-semibold text-[#1d794c] mb-3">
            {plan.title}
          </h3>
          <p className="text-3xl font-extrabold text-[#1d794c] my-4">
            {plan.price}
          </p>
          <ul className="text-left mt-4 space-y-2 text-gray-700">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#1d794c]">✔</span> {f}
              </li>
            ))}
          </ul>
          <a href="#contact">
            <button className="mt-6 cursor-pointer w-full bg-[#1d794c] text-white py-3 rounded-xl hover:bg-[#166c41] font-semibold transition-all duration-300">
              Join Now
            </button>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
