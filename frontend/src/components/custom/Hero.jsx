import React from "react";
import Images from "../../assets/images";

const Hero = () => (
  <section
    className="relative h-screen flex items-center  justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${Images.BG1})` }}
  >
    {/* Overlay with linear */}
    <div
      id="hero"
      className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60"
      aria-hidden="true"
    ></div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 text-white max-w-3xl md:max-w-4xl">
      <h1
        className="text-[2.5rem] md:text-[5rem] font-poppins font-bold 
        text-[#2a9451] drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)] 
        leading-tight tracking-wide animate-fadeInDown"
      >
        Aarambh Fit & Flow
      </h1>

      <p
        className="text-base md:text-xl mt-4 font-light text-gray-100 animate-fadeInUp
        drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
      >
        Where Movement Begins –{" "}
        <span className="font-medium text-white">Dance</span> |{" "}
        <span className="font-medium text-white">Yoga</span> |{" "}
        <span className="font-medium text-white">Zumba</span>
      </p>

      <a
        href="#contact"
        className="mt-8 inline-block bg-[#2a9451] hover:bg-[#1d794c] 
        text-white font-semibold tracking-wide py-3 px-10 rounded-full 
        shadow-lg hover:shadow-xl transition duration-300 ease-in-out animate-fadeInUp focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Register Now
      </a>
    </div>

    {/* Subtle Scroll Indicator */}
    <div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm animate-bounce"
      aria-hidden="true"
    >
      ↓ Scroll to explore
    </div>
  </section>
);

export default Hero;
