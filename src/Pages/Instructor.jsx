import React from "react";
import InstructorCard from "../components/InstructorCard";
import { INSTRUCTORS } from "../constants/constant";

const Instructor = () => {
  return (
    <div id="instructors" className="h-[25%]  bg-gradient-to-t from-green-900 to-black py-10">
      <h1 className="text-center text-6xl font-bold my-10">Instructor</h1>
      <InstructorCard instructorCard={INSTRUCTORS} />
    </div>
  );
};

export default Instructor;
