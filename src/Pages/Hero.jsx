import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tagline",
      {
        y: 100,
      },
      {
        y: 0,
        duration: 1,
      }
    );
  });
  return (
    <div className="text-white flex flex-col items-center justify-center h-[20%] md:h-[25%]">
      <h6 className="tagline text-6xl md:text-9xl font-black">
        <span className="text-green-800">A</span>arambh
      </h6>
      <h4 className="tagline text-3xl md:text-6xl font-bold bg-white text-black">
        <span className="text-green-800">F</span>it and{" "}
        <span className="text-green-800">F</span>low
      </h4>
    </div>
  );
};

export default Hero;
