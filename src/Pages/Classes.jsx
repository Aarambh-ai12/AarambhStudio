import React from "react";
import ClassesCard from "../components/ClassesCard";
import { CLASSES } from "../constants/constant";

const Classes = () => {
  return (
    <div className="w-full bg-gradient-to-tl py-2  from-green-900 to-black flex flex-col items-center justify-center">
      <h2 className="text-5xl font-black">Classes</h2>
      <ClassesCard classes={CLASSES} />
    </div>
  );
};

export default Classes;
