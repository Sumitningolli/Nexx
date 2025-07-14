import React from "react";

const MileStone = ({ title, description, lastItem }) => {
  return (
    <div className="flex w-full items-center">
      {/* Circle Section */}
      <div className="relative flex flex-col items-center justify-center h-32">
        <div className="z-20 bg-gradient-to-b from-pink-500 to-indigo-500 h-4 w-4 rounded-full flex-shrink-0 relative"></div>
        <div
          className="bg-gradient-to-b from-pink-500 to-indigo-500 h-5 w-5 rounded-full flex-shrink-0 absolute z-10 blur"
        ></div>
        
        {/* Connecting line for non-last items */}
        {/* {!lastItem && (
          <div className="z-0 absolute top-2 w-1 bg-gray-400 flex-grow h-full"></div>
        )} */}
      </div>

      {/* Text Section */}
      <div className="ml-10">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MileStone;
