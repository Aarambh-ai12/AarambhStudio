import React, { useRef, useState } from "react";

const InstructorCard = ({ instructorCard }) => {
  const cardRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const instructor = instructorCard[currentIndex];
  const handleNext = () => {
    if (currentIndex < instructorCard.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(instructorCard.length - 1);
    }
  };

  return (
    <div
      className=" w-full mx-auto text-center p-4 rounded-lg  md:flex gap-2"
      ref={cardRef}
    >
      <div className="md:w-[40%] md:ml-40">
        <img
          src={instructor.image}
          alt={instructor.name}
          className="ml-15 md:ml-0 w-52 md:w-72 object-cover rounded-md"
        />
      </div>
      <div className="md:w-[50%] flex flex-col justify-center ">
        <div className="mb-2 text-white text-7xl font-semibold">
          {instructor.name}
        </div>
        <div className=" text-3xl text-white">{instructor.bio}</div>

        <div className="flex justify-around mt-3 md:mt-30">
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Next
          </button>

          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-gray-800 rounded hover:bg-green-900"
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
