import React from "react";

const About = () => (
  <section
    id="about"
    className="relative py-24 px-6 bg-gradient-to-b from-white via-white to-gray-50 text-[#1d794c] text-center overflow-hidden"
    data-aos="fade-up"
  >
    {/* Decorative background shape (subtle) */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#2a9451_0%,_transparent_70%)] pointer-events-none"></div>

    <div className="relative z-10 max-w-4xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-poppins font-semibold mb-4 tracking-tight drop-shadow-sm">
        About Us
      </h2> 

      {/* Accent underline */}
      <div className="w-20 h-1 bg-[#2a9451] mx-auto mb-8 rounded-full"></div>

      {/* Paragraph */}
      <p className="text-lg md:text-xl leading-relaxed font-light text-gray-700">
        <span className="text-[#1d794c] font-medium">Aarambh Fit & Flow</span>{" "}
        is your space to move, express, and thrive through
        <span className="font-medium text-[#1d794c]"> Dance</span>,
        <span className="font-medium text-[#1d794c]"> Yoga</span>, and
        <span className="font-medium text-[#1d794c]"> Zumba</span> in Diva East,
        Mumbai.
        <br className="hidden md:block" />
        Our mission is to bring <span className="font-semibold">joy</span>,{" "}
        <span className="font-semibold">wellness</span>, and{" "}
        <span className="font-semibold">community</span> into your life—one
        movement at a time.
      </p>
    </div>
  </section>
);

export default About;
