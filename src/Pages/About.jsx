import React from "react";
import { ABOUT_CONTENT } from "../constants/constant";
import { logo } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    gsap.to("#spinnerlogo", {
      ease: "elastic",
      delay: 1,
      duration: 2,
      rotateY: 360,
    });
  });
  return (
    <div
      id="about"
      className="w-full bg-black flex flex-col md:flex-row md:items-center py-10 justify-between p-2 items-start"
    >
      <h1 className="text-5xl text-green-900 font-bold underline md:no-underline">
        {ABOUT_CONTENT.heading}
      </h1>
      <div className="h-32 w-px bg-gray-300 mx-4 hidden md:block"></div>
      <div className="md:w-[60%] flex  flex-col items-center justify-center">
        <img
          id="spinnerlogo"
          src={logo}
          alt=""
          width={200}
          className="hidden md:block"
        />
        <h3 className=" text-2xl text-justify">{ABOUT_CONTENT.description}</h3>
      </div>
    </div>
  );
};

export default About;
